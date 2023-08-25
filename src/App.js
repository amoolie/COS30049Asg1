// App.js contains the homepage of the website

import "./App.css";
import { Grid } from "@mui/material";
import ResponsiveAppBar from "./components/header";
import Box from "@mui/material/Box";
import Homepage from "./home";
import { Routes, Route } from "react-router-dom";
import Audit from "./audit";
import ContactForm from "./contact";
import { useState } from "react";
import Pricing from "./pricing";
import History from "./reportHistory";
import SignIn from "./login";

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
          <ResponsiveAppBar></ResponsiveAppBar>
        </Box>
      </Grid>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="Home" element={<Homepage />} />
        <Route path="Contact%20Us" element={<ContactForm />} />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="History" element={<History />} />
        <Route path="Login" element={<SignIn />} />
        <Route path="Audit" element={<Audit />} />
      </Routes>
    </div>
  );
}

export default App;
