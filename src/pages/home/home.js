// Name: Jibin Gallistus Gnanadhas
// StudentID: 104361536

//contains the homepage of the website

import "./home.css";
import { Grid } from "@mui/material";
import MyDropzone from "../../components/dropzone";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  // Checks if file is added and then shows the audit and doesn't otherwise

  const checkFileAdded = (event) => {
    event.preventDefault();
    if (window.localStorage.getItem("FileAdded") === "false") {
      alert("Please Choose a file to audit");
    } else {
      navigate("../Audit");
    }
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
          <Stack direction="row" spacing={2}>
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
                }}
              >
                Audit
              </Button>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default Homepage;
