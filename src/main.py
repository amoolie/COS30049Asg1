from fastapi import FastAPI, UploadFile, File, HTTPException, Form
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


UPLOAD_DIR = Path() / 'user_upload'
RESULT_FILE = Path() / 'user_result'
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
RESULT_FILE.mkdir(parents=True, exist_ok=True)
app = FastAPI()

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
email VARCHAR(255),
pass VARCHAR(255)
)
""")
db.commit()

sql = "INSERT INTO Users (email, pass) VALUES (%s, %s)"
val = ("test@test.com", "pass")
cursor.execute(sql, val)

cursor.execute("SELECT * FROM Users")
results = cursor.fetchall()
for row in results:
    print(row)

#  Creating all the necessary tables

try:
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS usr_history (
    fileID INT AUTO_INCREMENT PRIMARY KEY,
    file_name VARCHAR(255) NOT NULL,
    file_date DATE NOT NULL,
    result_summary Varchar(255)
    )
    """)

    # Create Vulnerabilities table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS Vulnerabilities (
    vulnerability_id INT AUTO_INCREMENT PRIMARY KEY,
    vulnerability_name VARCHAR(255) NOT NULL,
    impact ENUM('High', 'Medium', 'Low') NOT NULL,
    description TEXT
    )
    """)
    # Create Reports table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS Reports (
    report_id INT AUTO_INCREMENT PRIMARY KEY,
    contract_name VARCHAR(255) NOT NULL,
    audit_date DATE NOT NULL
    )
    """)
    # Create ReportVulnerabilities table (junction table)
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS ReportVulnerabilities (
    report_vulnerability_id INT AUTO_INCREMENT PRIMARY KEY,
    report_id INT,
    vulnerability_id INT,
    FOREIGN KEY (report_id) REFERENCES Reports(report_id),
    FOREIGN KEY (vulnerability_id) REFERENCES Vulnerabilities(vulnerability_id)
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


@app.get("/history/")
async def get_history():
    try:
        connection = mysql.connector.connect(**db_config)

        cursor = connection.cursor()

        query = "SELECT * FROM history"

        cursor.execute(query)

        result = cursor.fetchall()

        history = [dict(zip(cursor.column_names, row)) for
                   row in result]

        cursor.close()
        connection.close()

        return history

    except mysql.connector.Error as err:
        return {"error": f"Error: {err}"}


@app.post("/upload")
async def upload_file(file: UploadFile = Form(...)):

    try:
        data = await file.read()
        print("saved")
        save_to = UPLOAD_DIR / file.filename
        result = RESULT_FILE
        print("saved to", save_to)
        with open(save_to, 'wb') as f:
            f.write(data)

        try:
            command = 'slither ' + \
                str(save_to) + ' --checklist> ' + str(result) + '/result.md'
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

        with open(str(result) + '/result.md', 'r',  encoding='utf-8') as file:
            contents = file.read()

        # pattern = r'(Summary\n.*?)(?=^##)'
        # match = re.findall(pattern, contents, re.DOTALL | re.MULTILINE)

        print(match)
    except:
        trace_str = traceback.format_exc()
        print("An unexpected error occurred:", trace_str)
        raise HTTPException(
            status_code=500, detail=f"An error occurred: ")


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
