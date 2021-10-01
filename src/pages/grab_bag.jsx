import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import StackPlayground from "../components/stack_playground";

const GrabBag = (props) => {
  return (
    <Container maxWidth={false}>
      <StackPlayground />
      <Box
        sx={{
          width: 300,
          height: 300,
          bgcolor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
      <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
        <Button>Save</Button>
      </Box>
      <Box sx={{ bgcolor: '#cfe8fc', height: '50vh' }} />
    </Container>
  );
};

export default GrabBag;
