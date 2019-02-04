import React, { Component } from "react";
import "./App.css";
import { Sidebar } from "./containers/Sidebar";
import { MessagesList } from "./containers/MessagesList";
import { AddMessage } from "./containers/AddMessage";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

// Set up the App component
class App extends Component {
  // Render a generic layout
  render() {
    return (
      <div>
        <AppBar position="static" className="appbar">
          <Typography variant="h6" color="inherit">
            React and Redux Chat
          </Typography>
        </AppBar>
        <Grid container spacing={5}>
          <Grid item sm={3} md={2}>
            <Sidebar />
          </Grid>
          <Grid item sm={9} md={10}>
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
