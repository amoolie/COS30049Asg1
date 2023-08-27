// Name: Jibin Gallistus Gnanadhas
// StudentID: 104361536

import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

export default function ContactForm() {
  document.body.className = "contact";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("your message has been sent");
  };

  return (
    <Box
      sx={{
        display: "flex",
        margin: "50px",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ maxWidth: 600, mx: "auto", p: 2, backgroundColor: "white" }}>
        <Typography variant="h4" align="center" mb={2}>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
}
