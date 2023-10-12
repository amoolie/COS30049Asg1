/* 
Name: Jibin Gallistus Gnanadhas
StudentID: 104361536
Name: Amelie Li Xuan Teh 
StudentID: 104044361
*/

// App.js contains the homepage of the website
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./audit.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";

// stylying the audit info sections
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgb(238, 238, 238,0.7)",
  ...theme.typography.body2,
  padding: theme.spacing(),
  textAlign: "left",
  color: "black",
  marginBottom: "10px",
}));

function Audit() {
  const { fileID } = useParams();
  document.body.className = "Audit";

  // initializing arrays to store the records
  const [highIssues, setHighIssues] = useState([]);
  const [mediumIssues, setmediumIssues] = useState([]);
  const [lowIssues, setlowIssues] = useState([]);
  const [warnings, setWarnings] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/audit/${fileID}`)
      .then((response) => {
        const data = response.data;
        setHighIssues(data.filter((item) => item.impact === "High"));
        setmediumIssues(data.filter((item) => item.impact === "Medium"));
        setlowIssues(data.filter((item) => item.impact === "Low"));
        setWarnings(data.filter((item) => item.impact === ""));
      })
      .catch((error) => {
        console.error("there are errors:", error);
      });
  }, []);

  return (
    <div className="audit-body">
      <Box sx={{ flexGrow: 1 }}>
        <Grid className="audit-grid" container spacing={1}>
          <Grid item xs={8} sx={{ textAlign: "center" }}>
            <h1>Report</h1>
          </Grid>

          <Grid item xs={8}>
            <Grid className="result-grids-heading">
              <h2 className="vul">Vulnerabilities</h2>
            </Grid>
          </Grid>

          {/* Result box 1 */}
          <Grid xs={8} sx={{ marginBottom: "10px" }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <h2 className="vul high">
                  High Severity Issues ({highIssues.length})
                </h2>
              </AccordionSummary>
              <AccordionDetails>
                {highIssues.map((issue, index) => (
                  <Item key={index}>
                    <Grid>
                      <h2>{issue.vulnerability_name}</h2>
                      <p>{issue.issue}</p>
                      <h3>Description:</h3>
                      <p>{issue.description}</p>
                      <h3>Recommendation</h3>
                      <p>{issue.recommendation}</p>
                    </Grid>
                  </Item>
                ))}
              </AccordionDetails>
            </Accordion>
          </Grid>

          {/* Result box 2 */}
          <Grid xs={8} sx={{ marginBottom: "10px" }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <h2 className="vul medium">
                  Medium Severity Issues ({mediumIssues.length})
                </h2>
              </AccordionSummary>
              <AccordionDetails>
                {mediumIssues.map((issue, index) => (
                  <Item key={index}>
                    <Grid>
                      <h2>{issue.vulnerability_name}</h2>
                      <p>{issue.issue}</p>
                      <h3>Description:</h3>
                      <p>{issue.description}</p>
                      <h3>Recommendation</h3>
                      <p>{issue.recommendation}</p>
                    </Grid>
                  </Item>
                ))}
              </AccordionDetails>
            </Accordion>
          </Grid>

          {/* Result box 3 */}
          <Grid xs={8} sx={{ marginBottom: "10px" }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <h2 className="vul low">
                  Low Severity Issues ({lowIssues.length})
                </h2>
              </AccordionSummary>
              <AccordionDetails>
                {lowIssues.map((issue, index) => (
                  <Item key={index}>
                    <Grid>
                      <h2>{issue.vulnerability_name}</h2>
                      <p>{issue.issue}</p>
                      <h3>Description:</h3>
                      <p>{issue.description}</p>
                      <h3>Recommendation</h3>
                      <p>{issue.recommendation}</p>
                    </Grid>
                  </Item>
                ))}
              </AccordionDetails>
            </Accordion>
          </Grid>

          {/* Result box 4 */}
          <Grid xs={8} sx={{ marginBottom: "10px" }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <h2 className="vul warning">Warnings ({warnings.length})</h2>
              </AccordionSummary>
              <AccordionDetails>
                {warnings.map((issue, index) => (
                  <Item key={index}>
                    <Grid>
                      <h2>{issue.vulnerability_name}</h2>
                      <p>{issue.issue}</p>
                      <h3>Description:</h3>
                      <p>{issue.description}</p>
                      <h3>Recommendation</h3>
                      <p>{issue.recommendation}</p>
                    </Grid>
                  </Item>
                ))}
              </AccordionDetails>
            </Accordion>
          </Grid>

          {/* displaying the file the user has selected */}
        </Grid>
      </Box>
    </div>
  );
}

export default Audit;
