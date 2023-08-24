//contains the dropzone where the user adds the file

import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./dropzone.css";
import { Grid } from "@mui/material";
import icon from "../img/drag-and-drop.png";

function MyDropzone() {
  const onDrop = useCallback((acceptedFiles) => {}, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="dropzone">
      <div className="inner-border" {...getRootProps()}>
        <input {...getInputProps()} />

        <img src={icon} className="drag-icon"></img>
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop your smart contract, or click to browse</p>
        )}
        <p className="supports"> Supports: SOL, CPP, JSON </p>
      </div>
    </div>
  );
}

export default MyDropzone;
