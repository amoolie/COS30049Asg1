from fastapi import FastAPI, UploadFile, File, HTTPException, Form
import mysql.connector
from subprocess import Popen, PIPE
import json
from fastapi.middleware.cors import CORSMiddleware
import os
import uuid
from pydantic import BaseModel
from pathlib import Path
from secrets import token_hex


UPLOAD_DIR = Path() / 'uploads'
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
app = FastAPI()

origins = ["http://localhost:3000"]

# MySQL database connection configuration
db_config = {
    "host": "feenix-mariadb.swin.edu.au",
    "user": "s104361536",
    "port": "3306",
    "password": "1234Ji2609?",
    "database": "s104361536_db"
}


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
        print("saved to", save_to)
        with open(save_to, 'wb') as f:
            f.write(data)

        return {"filenames": file.filename}
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail="File not saved.")

#    # Use unique filenames
#     temp_file_path = f"temp_{uuid.uuid4()}_{file.filename}"
#     with open(temp_file_path, "wb") as buffer:
#         buffer.write(file.file.read())

#     process = Popen(['slither', temp_file_path, '--json', '-'],
#                     stdout=PIPE, stderr=PIPE)
#     stdout, stderr = process.communicate()

#     # Remove the temporary file
#     os.remove(temp_file_path)

#     if process.returncode != 0:
#         raise HTTPException(
#             status_code=500, detail=f"Slither execution failed with error: {stderr.decode()}")

#     try:
#         slither_result = json.loads(stdout)
#         vulnerabilities = [{
#             "vulnerability": detector['check'],
#             "description": detector['description'],
#             "recommendation": detector['recommendation']
#         } for detector in slither_result.get('detectors', [])]

#         return vulnerabilities
#     except json.JSONDecodeError:
#         raise HTTPException(
#             status_code=500, detail="Error parsing Slither output")
