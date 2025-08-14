// src/MyCard.jsx
import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

export default function MyCard() {
  return (
    <Card sx={{ maxWidth: 345, margin: "20px auto", padding: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Hello MUI
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a simple card component you can edit yourself.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          onClick={() => alert("Button clicked!")}
        >
          Click Me
        </Button>
      </CardContent>
    </Card>
  );
}
