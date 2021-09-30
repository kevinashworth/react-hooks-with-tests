import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Page from "./pages/index.jsx";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Page>
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
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
      </Page>
    </React.Fragment>
  );
}

export default App;
