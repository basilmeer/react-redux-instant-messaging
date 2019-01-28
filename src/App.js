import React, { Component } from "react";
import "./App.css";
import { Sidebar } from "./containers/Sidebar";
import { MessagesList } from "./containers/MessagesList";
import { AddMessage } from "./containers/AddMessage";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

// Set up the App component
class App extends Component {
  // Render a generic layout
  render() {
    return (
      <div>
        <AppBar position="static">
          <Typography variant="h6" color="inherit">
            Test
          </Typography>
        </AppBar>
        <Grid container spacing={24}>
          <Grid item sm={3}>
            <Button variant="contained">Test</Button>
            <Sidebar />
          </Grid>
          <Grid item sm={9}>
            <section id="main">
              <MessagesList />
              <AddMessage />
            </section>
          </Grid>
        </Grid>
      </div>
    );
  }
}

// Export the app
export default App;
