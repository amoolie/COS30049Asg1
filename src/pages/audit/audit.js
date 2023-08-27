// Name: Jibin Gallistus Gnanadhas
// StudentID: 104361536

// App.js contains the homepage of the website

import { Grid } from "@mui/material";
import ResponsiveAppBar from "../../components/header";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Homepage from "../home/home";
import { Routes, Route } from "react-router-dom";
import "./audit.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgb(255,255,255,0.7)"
      : "rgb(255,255,255,0.7)",
  ...theme.typography.body2,
  padding: theme.spacing(),
  textAlign: "center",
  color: theme.palette.text.secondary,
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

          {/* Grid 1 */}
          <Grid
            item
            xs={8}
            className="result-grids"
            sx={{ marginBottom: "10px" }}
          >
            <Grid className="result-grids-heading">
              <h4 className="vul high">High Severity Issues</h4>
              <h4>
                Status - <p className="fixed">Fixed</p>
              </h4>
            </Grid>
            <Grid>
              <h5>
                Exchange.sol: atomicMatch() function lacks imperative order
                parameters check before matching buyer and seller Line no:
                174-232
              </h5>

              <p>
                The atomicMatch() function doesn’t call the
                validateOrdersMatch() function throughout the function before
                matching a buyer to a seller. This leads to an unwanted scenario
                where some crucial parameters like tokenId, erc20 token
                addresses of both parties aren’t validated before the match,
                which seems to be an important validation step for any matching
                as per the current contract design.
              </p>
            </Grid>
          </Grid>

          {/* Grid 2 */}
          <Grid
            item
            xs={8}
            className="result-grids"
            sx={{ marginBottom: "10px" }}
          >
            <Grid className="result-grids-heading">
              <h4 className="vul medium">Medium severity issues</h4>
              <h4>
                Status - <p className="fixed">Fixed</p>
              </h4>
            </Grid>
            <Grid>
              <h5>
                Exchange.sol: validateOrdersMatch() should either be removed or
                modified Line no: 161-172
              </h5>

              <p>
                The validateOrdersMatch() function has been assigned internal
                visibility but never called throughout the contract. As per the
                current design of the contract, it seems this function was
                supposed to be called within the atomicMatch() function for
                further validations.
              </p>
            </Grid>
          </Grid>

          {/* Grid 3 */}
          <Grid
            item
            xs={8}
            className="result-grids"
            sx={{ marginBottom: "10px" }}
          >
            <Grid className="result-grids-heading">
              <h4 className="vul low">Low severity issues</h4>
              <h4>
                Status - <p className="fixed">Fixed</p>
              </h4>
            </Grid>
            <Grid>
              <h5>
                Exchange.sol: validateOrdersMatch() should either be removed or
                modified Line no: 161-172
              </h5>

              <p>
                The validateOrdersMatch() function has been assigned internal
                visibility but never called throughout the contract. As per the
                current design of the contract, it seems this function was
                supposed to be called within the atomicMatch() function for
                further validations.
              </p>
            </Grid>
          </Grid>

          <Grid item xs={8} className="filename">
            83245JSAHFLASHJDsalkaJAKSL.pdf
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Audit;
