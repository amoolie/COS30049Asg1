/* 
Name: Jibin Gallistus Gnanadhas
StudentID: 104361536
Name: Amelie Li Xuan Teh 
StudentID: 104044361
*/
//contains the homepage of the website

import "./home.css";
import { Grid } from "@mui/material";
import MyDropzone from "../../components/dropzone";

import Stack from "@mui/material/Stack";

function Homepage() {
  document.body.className = "home";
  return (
    <div className="Home">
      <Grid container>
        <Grid
          xs={12}
          sx={{ fontSize: 24, display: "flex", justifyContent: "center" }}
        >
          <div className="homepage-content">
            <h2>
              Welcome to <p className="sol-ar-heading">Sol-ar</p>
            </h2>
            <p>
              select a file to identify potential vulnerabilities in your smart
              contract code. We use state of the art analysis tools to analyze
              the code and identify issues, and then providing you with
              vulnerability assessments
            </p>
          </div>
        </Grid>
        {/* Calls on the Dropzone component from a library called react-dropzone in dropzone.js */}
        <Grid
          item
          xs={12}
          sx={{ fontSize: 24, display: "flex", justifyContent: "center" }}
        >
          <MyDropzone></MyDropzone>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            fontSize: 24,
            display: "flex",
            justifyContent: "center",
            margin: "10px",
          }}
        >
          {/* checks if the file has been added using a value pair stored in the local storage */}
          <Stack direction="row" spacing={2}></Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default Homepage;
