import React from "react";
import { Typography, Box, TextField, Button } from "@mui/material";

const Contact = () => {
  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 2,
      }}
    >
      <Typography variant="h3" gutterBottom>
        Contact Me
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { marginBottom: 2 },
          "& .MuiButton-root": { marginTop: 2 },
        }}
      >
        <TextField label="Name" variant="outlined" fullWidth />
        <TextField label="Email" variant="outlined" fullWidth />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary">
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
