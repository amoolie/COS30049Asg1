/* 
Name: Jibin Gallistus Gnanadhas
StudentID: 104361536
Name: Amelie Li Xuan Teh 
StudentID: 104044361
*/

// App.js contains the routes of the website

import "./App.css";
import { Grid } from "@mui/material";
import ResponsiveAppBar from "./components/header";
import Box from "@mui/material/Box";
import Homepage from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import Audit from "./pages/audit/audit";
import ContactForm from "./pages/contact/contact";
import Pricing from "./pages/pricing/pricing";
import History from "./pages/history/reportHistory";
import SignIn from "./pages/login/login";

function App() {
  return (
    <div className="App">
      <Grid xs={12}>
        <Box
          sx={{
            marginTop: "54px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* calls on the responsive appbar created in the header.js table */}
          <ResponsiveAppBar></ResponsiveAppBar>
        </Box>
      </Grid>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="Home" element={<Homepage />} />
        <Route path="Contact Us" element={<ContactForm />} />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="History" element={<History />} />
        <Route path="Login" element={<SignIn />} />
        <Route path="Audit" element={<Audit />} />
        <Route path="/audit/:fileID" element={<Audit />} />
      </Routes>
    </div>
  );
}

export default App;
