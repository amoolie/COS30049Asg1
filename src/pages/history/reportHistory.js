/* 
Name: Jibin Gallistus Gnanadhas
StudentID: 104361536
Name: Amelie Li Xuan Teh 
StudentID: 104044361
*/
//Page that shows the previous reports of the user

import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import StickyHeadTable from "../../components/table";

function History() {
  // sets the body's class to History so the specific styles can be applied
  document.body.className = "History";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid className="audit-grid" container spacing={1}>
        <Grid item xs={8} sx={{ textAlign: "center" }}>
          <h1>History</h1>
        </Grid>
      </Grid>

      {/* Uses the material UI table from the file table.js */}
      <Grid xs={8} sx={{ display: "flex", justifyContent: "center" }}>
        <StickyHeadTable></StickyHeadTable>
      </Grid>
    </Box>
  );
}

export default History;
