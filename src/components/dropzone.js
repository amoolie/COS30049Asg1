// Name: Jibin Gallistus Gnanadhas
// StudentID: 104361536

//contains the dropzone where the user adds the file

import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./dropzone.css";
import icon from "../img/drag-and-drop.png";

// function MyDropzone() {
//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     accept: {
//       "image/jpeg": [".jpeg", ".jpg"],
//       "application/solidity": [".sol"],
//       "text/x-c++src": [".cpp"],
//       "application/json": [".json"],
//     },
//   });

//   return (
//     <div className="dropzone">
//       <div className="inner-border" {...getRootProps()}>
//         <input {...getInputProps()} />

//         <img src={icon} className="drag-icon"></img>
//         {isDragActive ? (
//           <p>Drop the files here ...</p>
//         ) : (
//           <p>Drag 'n' drop your smart contract, or click to browse</p>
//         )}
//         <p className="supports"> Supports: SOL, CPP, JSON </p>
//       </div>
//     </div>
//   );
// }

// export default MyDropzone;

window.localStorage.setItem("FileAdded", false);

function MyDropzone(props) {
  const [itemSet, setItem] = useState("false");

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/solidity": [".sol"],
      "text/x-c++src": [".cpp"],
      "application/json": [".json"],
    },
    maxFiles: 1,
    onDrop: () => {
      window.localStorage.setItem("FileAdded", true);
      console.log(window.localStorage.getItem("FileAdded"));
    },
  });

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
        <em>(Only *.sol, *.json and *.cpp images will be accepted)</em>
        <aside>
          <p className="accepted-files">
            <strong>Accepted file: </strong> {acceptedFileItems}
          </p>
        </aside>
      </div>
    </section>
  );
}

<MyDropzone />;
export default MyDropzone;
