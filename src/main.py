from fastapi import FastAPI, UploadFile, Depends, HTTPException, Form
import mysql.connector
from subprocess import Popen, PIPE
import subprocess
import json
from fastapi.middleware.cors import CORSMiddleware
import os
import uuid
from pydantic import BaseModel
from pathlib import Path, WindowsPath
from secrets import token_hex
import traceback
import re
import random
from datetime import datetime

UPLOAD_DIR = Path() / 'user_upload'
RESULT_FILE = Path() / 'user_result'
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
RESULT_FILE.mkdir(parents=True, exist_ok=True)
USER_NAME = 1
app = FastAPI()


#  a Class that stores the FileID so it can be used in other functions to retrivee the file related data

class FileIDStore:
    def __init__(self):
        self.fileID = None

    def set(self, fileID: str):
        self.fileID = fileID

    def get(self) -> str:
        return self.fileID


fileID_store = FileIDStore()


def get_fileID_store() -> FileIDStore:
    return fileID_store


origins = ["*"]

# MySQL database connection configuration
db_config = {
    "host": "feenix-mariadb.swin.edu.au",
    "user": "s104361536",
    "port": "3306",
    "password": "1234Ji2609?",
    "database": "s104361536_db"
}

db = mysql.connector.connect(

    host="feenix-mariadb.swin.edu.au",
    user="s104361536",
    password="1234Ji2609?",
    database="s104361536_db"

)


cursor = db.cursor()
cursor.execute("""
CREATE TABLE IF NOT EXISTS Users (
user_id INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(255) unique,
pass VARCHAR(255)
)
""")
db.commit()


# sql = "INSERT INTO Users (email, pass) VALUES (%s, %s)"
# val = ("test@test.com", "pass")
# cursor.execute(sql, val)

cursor.execute("SELECT * FROM Users")
results = cursor.fetchall()
for row in results:
    print(row)

#  Creating all the necessary tables

try:
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS user_history (
    user_id INT,     
    fileID VARCHAR(255) PRIMARY KEY,
    file_name VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    result_summary varchar(2000),
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
    )
    """)

    # Create Vulnerabilities table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS Vulnerabilities (
    vulnerability_id INT AUTO_INCREMENT PRIMARY KEY,
    vulnerability_name varchar(2000) NOT NULL,
    impact ENUM('High', 'Medium', 'Low') NOT NULL,
    description TEXT
    )
    """)

    # Create ReportVulnerabilities table (junction table)
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS ReportVulnerabilities (
    report_vulnerability_id INT AUTO_INCREMENT PRIMARY KEY,
    fileID VARCHAR(255) NOT NULL,
    vulnerability_id INT,
    FOREIGN KEY (fileID ) REFERENCES user_history(fileID) ON DELETE CASCADE ,
    FOREIGN KEY (vulnerability_id) REFERENCES Vulnerabilities(vulnerability_id) ON DELETE CASCADE,
    UNIQUE(fileID , vulnerability_id)
                   )
    """)
except mysql.connector.Error as err:
    print("Something went wrong: {}".format(err))

# Commit the transaction
db.commit()
cursor.close()
# Close the connection
db.close()


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/get_user_name/{user_id}")
async def get_user_name(user_id: int):
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor(dictionary=True)
        cursor.execute(
            f"SELECT user_id FROM Users WHERE user_id = %s", (USER_NAME))
        user = cursor.fetchone()
        cursor.close()
        connection.close()

    except mysql.connector.Error as err:
        print(f"Database error: {err}")
        return {"error": f"Error: {err}"}
    except Exception as e:
        print(f"General error: {e}")
        return {"error": f"Error: {e}"}


@app.get("/history/")
async def get_history():

    print("username", USER_NAME)
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()

        cursor.execute(
            "SELECT * FROM user_history where user_id = %s", (USER_NAME,))
        result = cursor.fetchall()
        history = [dict(zip(cursor.column_names, row)) for
                   row in result]

        cursor.close()
        connection.close()
        return history
    except mysql.connector.Error as err:
        return {"error": f"Error: {err}"}


@app.get("/audit/")
async def get_audit(fileID_store: FileIDStore = Depends(get_fileID_store)):

    try:

        print("called")
        fileID = fileID_store.get()

        print(fileID)
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()

        sql = "SELECT v.vulnerability_name, v.impact, v.description FROM Vulnerabilities v JOIN ReportVulnerabilities rv ON v.vulnerability_id = rv.vulnerability_id JOIN user_history uh ON rv.fileid = uh.fileID WHERE uh.user_ID = %s AND uh.fileID = %s"
        cursor.execute(sql, (USER_NAME, fileID))
        result = cursor.fetchall()
        audit = [dict(zip(cursor.column_names, row)) for
                 row in result]
        print(audit)

        cursor.close()
        connection.close()
        return audit
    except mysql.connector.Error as err:
        return {"error": f"Error: {err}"}


@app.post("/upload")
async def upload_file(file: UploadFile = Form(...)):
    try:
        data = await file.read()
        print("saved")
        save_to = UPLOAD_DIR / file.filename
        result = RESULT_FILE
        name_file = file.filename
        print("saved to", save_to)
        with open(save_to, 'wb') as f:
            f.write(data)

        try:
            command = 'slither ' + \
                str(save_to) + ' --checklist> ' + str(result) + \
                '/' + file.filename + '_result.md'
            print(command)
            # List of commands to run
            commands = [
                'solc-select install 0.8.4',
                'solc-select use 0.8.4',
                command
            ]

            print("commands :", commands)
            print("Current working directory:", os.getcwd())

            for cmd in commands:
                run_slither(cmd)
        except subprocess.CalledProcessError as e:
            print("Error occurred when running command:", e.cmd)
            print("Error occurred when running Slither:")
            raise HTTPException(
                status_code=500, detail="Error running Slither tool")

        with open(str(result) + '/' + file.filename + '_result.md', 'r',  encoding='utf-8') as file:
            contents = file.read()

        pattern = r'Summary\n(.*?)(?=^##)'
        match = re.findall(pattern, contents, re.DOTALL | re.MULTILINE)

        temp_str = ""
        for ele in match:
            temp_str += ele
        try:
            connection = mysql.connector.connect(**db_config)
            cursor = connection.cursor()
            fileid = generate_unique_fileID(cursor)
            fileID_store.set(fileid)
            current_date = datetime.now().date()
            sql = ("INSERT INTO user_history (user_id, fileID, file_name, date, result_summary) "
                   "VALUES (%s, %s, %s, %s, %s)")

            cursor.execute(
                sql, (USER_NAME, fileid, name_file, current_date, temp_str))

            connection.commit()

        except mysql.connector.Error as err:
            connection.rollback()

        pattern = r"^(?P<vulnerability_name>##\s*.*?)\nImpact:\s*(?P<impact>.+?)\nConfidence:\s*(?P<confidence>.+?)\n\s+- \[ \] ID-\d+\n(?P<description>.+?)\n"

        matches = re.findall(pattern, contents, re.MULTILINE | re.DOTALL)

        try:
            if matches:

                for match in matches:
                    vulnerability_name, impact, confidence, description = match
                    vulnerability_name = vulnerability_name.replace(
                        "##", "").strip()

                    vul_id = generate_unique_VulID(cursor)
                    sql = ("INSERT INTO Vulnerabilities (vulnerability_id, vulnerability_name, impact, description) "
                           "VALUES (%s, %s, %s, %s)")

                    cursor.execute(
                        sql, (vul_id, vulnerability_name, impact, description))

                    # print("Vulnerability Name:", vulnerability_name)
                    # print("Impact:", impact)
                    # print("Confidence:", confidence)
                    # print("Description:", description)
                    # print('-'*40)

                    sql = (
                        "INSERT INTO ReportVulnerabilities (vulnerability_id, fileID) VALUES (%s, %s)")

                    cursor.execute(sql, (vul_id, fileid,))
                    connection.commit()

            else:
                print("No match found.")

        except mysql.connector.Error as err:
            connection.rollback()
            print(f"Error: {err}")
        print(temp_str)

    except:
        trace_str = traceback.format_exc()
        connection.rollback()
        print("An unexpected error occurred:", trace_str)
        raise HTTPException(
            status_code=500, detail=f"An error occurred: ")

    finally:
        cursor.close()
        connection.close()


def run_slither(command):
    try:
        print("Current working directory:", os.getcwd())
        result = subprocess.run(
            command, text=True, capture_output=True, check=True, shell=True)
        # print(result.stdout)
    except subprocess.CalledProcessError as e:
        print(f"Command '{command}' failed with error:\n", e)

    except Exception as e:
        print("An error occurred:", e)


def generate_unique_fileID(cursor):
    while True:
        # This will generate a random number between 1 and 1000000. Adjust as necessary.
        fileID = random.randint(1, 1000000)

        cursor.execute(
            "SELECT fileID FROM user_history WHERE fileID = %s", (fileID,))
        result = cursor.fetchone()

        if not result:
            return fileID


def generate_unique_VulID(cursor):
    while True:
        # This will generate a random number between 1 and 1000000. Adjust as necessary.
        vulnerability_id = random.randint(1, 1000000)

        cursor.execute(
            "SELECT vulnerability_id FROM Vulnerabilities WHERE vulnerability_id = %s", (vulnerability_id,))
        result = cursor.fetchone()

        if not result:
            return vulnerability_id
