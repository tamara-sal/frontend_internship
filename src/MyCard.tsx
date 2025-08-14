// src/MyCard.jsx
import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

export default function MyCard() {
  return (
    <Card sx={{ maxWidth: 120,maxHeight:120 ,margin: "100px auto", padding: 1 }}>
      <CardContent>
        <Typography variant="h5" component="div">
        1
        </Typography>
        
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          
        >
          Click Me
        </Button>
      </CardContent>
    </Card>
  );
}
