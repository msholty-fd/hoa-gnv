import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/css/material-dashboard-react.css?v=1.2.0";

import indexRoutes from "./routes/index.jsx";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const hist = createBrowserHistory();
const theme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        overflow: "visible"
      }
    }
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return (
            <Route path={prop.path} component={prop.component} key={key} />
          );
        })}
      </Switch>
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);
