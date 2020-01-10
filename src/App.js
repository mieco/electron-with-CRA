import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeComponent from './components/Home/home';

function App() {
  return (
    <Router>
      <Grid container>
        <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Photos
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12}>
          <Switch>
            <Route path="/">
              <HomeComponent />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
