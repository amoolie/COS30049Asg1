//contains the homepage of the website

import "./home.css";
import { Grid } from "@mui/material";
import { useState } from "react";
import MyDropzone from "./components/dropzone";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

function Homepage() {
  const [disabled, setDisabled] = useState(true);
  const onClick = () => {
    setDisabled(false);
  };
  document.body.className = "home";
  return (
    <div className="Home">
      <Grid container>
        <Grid
          xs={12}
          sx={{ fontSize: 24, display: "flex", justifyContent: "center" }}
        >
          <div className="homepage-content">
            <h2> Welcome to Sol-ar</h2>
            <p>
              select a file to identify potential vulnerabilities in your smart
              contract code. We use state of the art analysis tools to analyze
              the code and identify issues, and then providing you with
              vulnerability assessments
            </p>
          </div>
        </Grid>

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
          <Stack direction="row" spacing={2}>
            <Link to={"/Audit"}>
              <Button variant="contained">Audit</Button>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default Homepage;
