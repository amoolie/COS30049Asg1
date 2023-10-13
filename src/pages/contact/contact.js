/* 
Name: Jibin Gallistus Gnanadhas
StudentID: 104361536
Name: Amelie Li Xuan Teh 
StudentID: 104044361
Name: Akash Tabassum
StudentID: 103524286
*/
// a form where users could contact the business for enquires and help
import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

export default function ContactForm() {
  document.body.className = "contact";

  // hooks to store values such as name, email and message

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // function that handles what happenes when the user clicks submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // tells the user that thier response has been submitted
    alert("hey " + name + " your message has been sent");
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
      <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
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
