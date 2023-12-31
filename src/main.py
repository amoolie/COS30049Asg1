from fastapi import FastAPI, UploadFile, Depends, HTTPException, Form
import mysql.connector
from subprocess import Popen, PIPE
import subprocess
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
import uuid

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
    issue TEXT
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

# adding middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# getting user based on username
@app.get("/get_user_name/{user_id}")
async def get_user_name(user_id: int):
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor(dictionary=True)

        # getting user from user table
        cursor.execute(
            f"SELECT user_id FROM Users WHERE user_id = %s", (USER_NAME))
        user = cursor.fetchone()

    except mysql.connector.Error:
        return {"error": "Error querying the database."}
    except Exception as e:
        return {"error": f"Unexpected error: {e}"}
    finally:
        if cursor:
            cursor.close()
        if connection:
            connection.close()

# axios get history requests


@app.get("/history/")
async def get_history():

    # prints the username to console to test
    print("username", USER_NAME)

    connection = None
    cursor = None
    try:
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()

        # gets the history relating to the specific user
        cursor.execute(
            "SELECT * FROM user_history where user_id = %s", (USER_NAME,))
        result = cursor.fetchall()

        # creates a dictionary called history
        history = [dict(zip(cursor.column_names, row)) for
                   row in result]

        return history
    except mysql.connector.Error as err:
        return {"error": "There was a problem retrieving your history."}
    finally:

        if cursor:
            cursor.close()
        if connection:
            connection.close()


# get audit axios function
@app.get("/audit/{fileID}")
async def get_audit(fileID):

    try:

        print("called")

        print(fileID)
        connection = mysql.connector.connect(**db_config)
        cursor = connection.cursor()

        # join tables and get the details
        sql = """
        SELECT 
            v.vulnerability_name, 
            v.impact, 
            v.issue, 
            d.description, 
            d.recommendation
        FROM 
            Vulnerabilities v
        JOIN 
            ReportVulnerabilities rv ON v.vulnerability_id = rv.vulnerability_id
        JOIN 
            user_history uh ON rv.fileid = uh.fileID
        LEFT JOIN 
            description_recommendation_table d ON v.vulnerability_name = d.error_name
        WHERE 
            uh.user_ID = %s AND uh.fileID = %s
        """
        cursor.execute(sql, (USER_NAME, fileID))
        result = cursor.fetchall()
        audit = [dict(zip(cursor.column_names, row)) for row in result]

        print("Final audit list:")
        print(audit)

        return audit
    except mysql.connector.Error as err:
        return {"error": f"Error: {err}"}

    finally:
        cursor.close()
        connection.close()

# post url for upload


@app.post("/upload")
async def upload_file(file: UploadFile = Form(...)):
    try:
        # reading data
        data = await file.read()
        print("saved")

        # generating unique variable name
        uniqueFilenumber = uuid.uuid4()

        # getting filename
        uniqueFilename = file.filename.split(
            '.')[0] + str(uniqueFilenumber) + ".sol"

        # name and directory to save file to
        save_to = UPLOAD_DIR / str(uniqueFilenumber) / uniqueFilename
        (UPLOAD_DIR / str(uniqueFilenumber)).mkdir(parents=True, exist_ok=True)
        result = RESULT_FILE
        name_file = file.filename

        print("saved to", save_to)
        with open(save_to, 'wb') as f:
            f.write(data)
        try:
            command = 'slither ' + \
                str(save_to) + ' --checklist> ' + str(result) + \
                '/' + uniqueFilename + '_result.md'
            print(command)

            # list of commands to execute
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

        # read results from file and extract summary
        with open(str(result) + '/' + uniqueFilename + '_result.md', 'r',  encoding='utf-8') as file:
            contents = file.read()

        pattern = r'Summary\n(.*?)(?=^##)'
        match = re.findall(pattern, contents, re.DOTALL | re.MULTILINE)

        # creating a temporary string t ouse
        temp_str = ""
        for ele in match:
            temp_str += ele
        try:
            connection = mysql.connector.connect(**db_config)
            cursor = connection.cursor()
            fileid = generate_unique_fileID(cursor)
            fileID_store.set(fileid)
            current_date = datetime.now().date()

            # insert user history
            sql = ("INSERT INTO user_history (user_id, fileID, file_name, date, result_summary) "
                   "VALUES (%s, %s, %s, %s, %s)")

            cursor.execute(
                sql, (USER_NAME, fileid, uniqueFilename, current_date, temp_str))

            connection.commit()

        except mysql.connector.Error as err:
            connection.rollback()

        # regex to get vulnerability details
        pattern = r"^(?P<vulnerability_name>##\s*.*?)\nImpact:\s*(?P<impact>.+?)\nConfidence:\s*(?P<confidence>.+?)\n\s+- \[ \] ID-\d+\n(?P<description>.+?)\n"
        matches = re.findall(pattern, contents, re.MULTILINE | re.DOTALL)

        try:
            if matches:

                # iterating thru matches list

                for match in matches:
                    vulnerability_name, impact, confidence, issue = match
                    vulnerability_name = vulnerability_name.replace(
                        "##", "").strip()

                    vul_id = generate_unique_VulID(cursor)
                    sql = ("INSERT INTO Vulnerabilities (vulnerability_id, vulnerability_name, impact, issue) "
                           "VALUES (%s, %s, %s, %s)")

                    cursor.execute(
                        sql, (vul_id, vulnerability_name, impact, issue))

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

        return {"fileID": fileid}

    except:
        trace_str = traceback.format_exc()
        connection.rollback()
        print("An unexpected error occurred:", trace_str)
        raise HTTPException(
            status_code=500, detail=f"An error occurred: ")

    finally:
        cursor.close()
        connection.close()

# function to run command


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

# making unique filesIDs for database


def generate_unique_fileID(cursor):
    while True:
        # This will generate a random number between 1 and 1000000.
        fileID = random.randint(1, 1000000)

        cursor.execute(
            "SELECT fileID FROM user_history WHERE fileID = %s", (fileID,))
        result = cursor.fetchone()

        if not result:
            return fileID

#  making unique VulnerabilityIDs for database


def generate_unique_VulID(cursor):
    while True:
        # This will generate a random number between 1 and 1000000.
        vulnerability_id = random.randint(1, 1000000)

        cursor.execute(
            "SELECT vulnerability_id FROM Vulnerabilities WHERE vulnerability_id = %s", (vulnerability_id,))
        result = cursor.fetchone()

        if not result:
            return vulnerability_id
