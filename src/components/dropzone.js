/* 
Name: Jibin Gallistus Gnanadhas
StudentID: 104361536
Name: Amelie Li Xuan Teh 
StudentID: 104044361
*/

//contains the dropzone where the user adds the file

import { useDropzone } from "react-dropzone";
import "./dropzone.css";
import icon from "../img/drag-and-drop.png";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function MyDropzone(props) {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState(null);
  const [fileAdded, setFileAdded] = useState(false);

  const handleFileChange = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setFilename(acceptedFiles[0].name);
      setFile(acceptedFiles[0]);
    }
  };

  const handleSubmit = async (acceptedFiles) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/upload",
        formData,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      if (response.status >= 200 && response.status < 300) {
        console.log(response.data);
        // Handle the response, maybe display the audit results
      } else {
        throw new Error("Server responded with a non-2xx status code");
      }
    } catch (error) {
      console.error(
        "Error uploading file:",
        error.response?.data || error.message
      );
    }
  };

  // Checks if file is added and then shows the audit and doesn't otherwise
  const checkFileAdded = (event) => {
    event.preventDefault();
    if (fileAdded === false) {
      alert("Please Choose a file to audit");
    } else {
      handleSubmit();
      // navigate("../Audit");
    }
  };

  // specifying the rules of the dropzone such as accepted file formats, max number of files and a check to see if the file was added
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/solidity": [".sol"],
    },
    maxFiles: 1,

    onDrop: (accepted, rejected) => {
      handleFileChange(accepted);
      if (accepted.length > 0) {
        setFileAdded(true);
      } else {
        setFileAdded(false);
      }
    },
  });

  // prints the files already uplaoded
  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="dropzone">
      <div {...getRootProps({ className: "inner-border" })}>
        <input {...getInputProps()} />
        <img src={icon} className="drag-icon" alt="Drag-drop icon" />
        <p>Drag 'n' drop a file here, or click to select files</p>
        <em>(Only *.sol will be accepted)</em>
        <aside>
          <p className="accepted-files">
            <strong>Accepted file: </strong> {acceptedFileItems}
          </p>
        </aside>
      </div>

      <Link onClick={checkFileAdded}>
        <Button
          variant="contained"
          sx={{
            fontSize: "large",
            display: "block",
            margin: "0 auto",
            backgroundColor: "#51737f",
            cursor: "pointer",
            padding: "16px 32px",
            border: "none",
            color: "aliceblue",
            textDecoration: "none",
            marginTop: "10px",
          }}
        >
          Audit
        </Button>
      </Link>
    </section>
  );
}
<MyDropzone />;

export default MyDropzone;
