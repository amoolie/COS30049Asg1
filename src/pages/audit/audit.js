/* 
Name: Jibin Gallistus Gnanadhas
StudentID: 104361536

*/

// App.js contains the homepage of the website
import React from "react";
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
  document.body.className = "Audit";

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
              <Grid className="date-time-grid" sx={{ color: "white" }}>
                <h5>24/08/2023 &nbsp;&nbsp;&nbsp;&nbsp;16:00</h5>
              </Grid>
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
                <h4 className="vul high">High Severity Issues</h4>
              </AccordionSummary>
              <AccordionDetails>
                <Item>
                  <Grid className="result-grids-heading">
                    <h4>
                      Status - <p className="fixed">Fixed</p>
                    </h4>
                  </Grid>
                  <Grid>
                    <h5>
                      Exchange.sol: atomicMatch() function lacks imperative
                      order parameters check before matching buyer and seller
                      Line no: 174-232
                    </h5>

                    <p>
                      The atomicMatch() function doesn’t call the
                      validateOrdersMatch() function throughout the function
                      before matching a buyer to a seller. This leads to an
                      unwanted scenario where some crucial parameters like
                      tokenId, erc20 token addresses of both parties aren’t
                      validated before the match, which seems to be an important
                      validation step for any matching as per the current
                      contract design.
                    </p>

                    <h5>
                      <strong>Recommendation</strong>
                    </h5>

                    <p>
                      Adequate validations before any imperative state changes
                      must be ensured in all functions.
                    </p>
                  </Grid>
                </Item>
              </AccordionDetails>
            </Accordion>
          </Grid>

          {/* Result box 2 */}
          <Grid xs={8} sx={{ marginBottom: "10px" }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <h4 className="vul medium">Medium Severity Issues</h4>
              </AccordionSummary>
              <AccordionDetails>
                <Item>
                  <Grid className="result-grids-heading">
                    <h4>
                      Status - <p className="fixed">Fixed</p>
                    </h4>
                  </Grid>
                  <Grid>
                    <h5>
                      Exchange.sol: validateOrdersMatch() should either be
                      removed or modified Line no: 161-172 2
                    </h5>

                    <p>
                      The validateOrdersMatch() function has been assigned
                      internal visibility but never called throughout the
                      contract. As per the current design of the contract, it
                      seems this function was supposed to be called within the
                      atomicMatch() function for further validations. However,
                      this internal call should not be implemented unless the
                      validateOrdersMatch is modified to either remove or
                      accurately update its last require statement, at Line 171.
                      This is because, at line 171, the require statement
                      ensures that the seller’s price should be exactly equal to
                      the buyer’s price value. However, considering the design
                      of the atomicMatch() function, the buyer’s price can
                      either be equal to or greater than the seller’s price
                    </p>

                    <h5>
                      <strong>Recommendation</strong>
                    </h5>

                    <p>
                      Considering the above-mentioned reasoning, the
                      validateOrdersMatch() function should either be removed
                      from the contract. In such case, the necessary require
                      statements can be directly included in the atomicMatch()
                      function without the need for any internal function call.
                      Otherwise, if the validateOrdersMatch() is supposed to be
                      a part of the contract, then its require statements must
                      be updated before it is called in any function.
                    </p>
                  </Grid>
                </Item>
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
                <h4 className="vul low">Low Severity Issues</h4>
              </AccordionSummary>
              <AccordionDetails>
                <Item>
                  <Grid className="result-grids-heading">
                    <h4>
                      Status - <p className="fixed">Fixed</p>
                    </h4>
                  </Grid>
                  <Grid>
                    <h5>
                      <strong>
                        Collection.sol: _mintBatch function should be optimized
                      </strong>
                    </h5>

                    <p>
                      The _mintBatch() function included 2 different loops of
                      equal length in its design. Using multiple loops in a
                      function, especially for larger iterations, can lead to
                      extremely high gas consumption.
                    </p>

                    <h5>
                      <strong>Recommendation</strong>
                    </h5>

                    <p>
                      It is recommended to optimize such functions to consume
                      lesser gas unless the current design is intended.
                    </p>
                  </Grid>
                </Item>
                <Item>
                  <Grid className="result-grids-heading">
                    <h4>
                      Status - <p className="fixed">Fixed</p>
                    </h4>
                  </Grid>
                  <Grid>
                    <h5>
                      <strong>
                        Collection.sol: Absence of adequate input validations
                      </strong>
                    </h5>

                    <p>
                      The setStartTime() and setEndTime() function modifies the
                      state of the startTime and endTime state variables
                      respectively. These state variables are crucial as they
                      are used as strict requirements in the buy() function.
                      However, it was found that these functions didn’t include
                      any input validation to ensure only accurate arguments are
                      passed in these functions.
                    </p>

                    <h5>
                      <strong>Recommendation</strong>
                    </h5>

                    <p>
                      Although the function has been assigned an only admin
                      modifier, it is still considered a better practice in
                      solidity to provide adequate input validations in
                      functions that update crucial state variables in the smart
                      contract.
                    </p>
                  </Grid>
                </Item>
              </AccordionDetails>
            </Accordion>
          </Grid>

          {/* displaying the file the user has selected */}
          <Grid item xs={8} className="filename">
            83245JSAHFLASHJDsalkaJAKSL.pdf
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Audit;
