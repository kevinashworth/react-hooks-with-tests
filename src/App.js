import * as React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import GrabBag from "./pages/grab_bag";
import Layout from "./components/page_with_layout";
import Page from "./pages/index";
import TestUseDebounce from "./pages/test_use_debounce";

const theme = createTheme({
  palette: {
    primary: { main: "#F7931E" },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Switch>
            <Route path="/">
              <Page />
            </Route>
            <Route path="/grab-bag">
              <GrabBag />
            </Route>
            <Route path="/test-use-debounce">
              <TestUseDebounce />
            </Route>
          </Switch>
        </Layout>
        {/* <Page> */}
        {/* <nav>
            <ul>
              <li>
                <Link to="/">Index (Page)</Link>
              </li>
              <li>
                <Link to="/grab-bag">Grab Bag</Link>
              </li>
              <li>
                <Link to="/layout">Layout</Link>
              </li>
              <li>
                <Link to="/test-use-debounce">Test useDebounce</Link>
              </li>
            </ul>
          </nav> */}
        {/* </Page> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;
