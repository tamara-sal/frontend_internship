import React from "react";
import { Typography, Container } from "@mui/material";
import NumberSelector from "./NumberSelector";

function App() {
  return (
    <Container
  sx={{
    textAlign: "center",
    marginTop: 5,
    backgroundColor: "black",
    color: "white",
    minHeight: "100vh"
  }}
>
  <Typography variant="h4" gutterBottom>
    Learn and Test Yourself
  </Typography>
  <NumberSelector />
</Container>
  );
}

export default App;
