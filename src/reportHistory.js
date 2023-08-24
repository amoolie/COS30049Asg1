import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import StickyHeadTable from "./components/table";

function History() {
  document.body.className = "History";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid className="audit-grid" container spacing={1}>
        <Grid item xs={8} sx={{ textAlign: "center" }}>
          <h1>Report</h1>
        </Grid>
      </Grid>

      <Grid xs={8} sx={{ margin: "50px" }}>
        <StickyHeadTable></StickyHeadTable>
      </Grid>
    </Box>
  );
}

export default History;
