/* 
Name: Jibin Gallistus Gnanadhas
StudentID: 104361536
Name: Amelie Li Xuan Teh 
StudentID: 104044361
*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Email } from "@mui/icons-material";

const defaultTheme = createTheme();

export default function SignIn() {
  document.body.className = "home login";
  // creating hooks to store email and pass and error messages
  const [usr_id, setUserID] = useState(0);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    //prevents the site from refreshing
    event.preventDefault();

    // the user credentials are hard-coded here due to it not being a core requirement
    if (email === "test@test.com" && pass === "pass") {
      setUserID(1);
      window.localStorage.setItem("user_id", 1);
      window.localStorage.setItem("isLoggedIn", true);
      console.log(Email);
      navigate("../Home", { replace: true });
    } else {
      alert("The username and password entered don't match");
    }
  };

  useEffect(() => {
    var link = "http://127.0.0.1:8000/get_user_name/" + usr_id;
    console.log(usr_id);
    const fetchUserName = async () => {
      try {
        const response = await axios.get(link); // replace 123 with the actual user_id
        setEmail(response.data.name);
      } catch (error) {
        console.error("Error fetching user's name:", error);
      }
    };

    fetchUserName();
  }, [usr_id]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
