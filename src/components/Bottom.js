import React, { Component } from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

class Bottom extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Container
          maxWidth="xl"
          sx={{
            height: "70vh",
            bgcolor: "black",
            color: "white",
            textAlign: "center",
            paddingTop: "4vh",
          }}
        >
          <h1 id="bottom-subscribe-heading">Subscribe to Exposing Dajjal</h1>
          <h2 id="bottom-subscribe-info">
            Sign up to receive updates every time something new is published.
          </h2>
          <button id="subscribe-button">
            <img
              src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
              className="icon"
              alt="mail-icon"
            />
            <span id="subscribe-button-text">Subscribe now</span>
          </button>
          <Container  maxWidth="md" sx={{
           borderBottom:"1px solid grey",
           borderTop:"1px solid grey",
           height: "7vh",
           marginTop:"5vh",
           paddingTop:"1vh"
          }}>
            <span className="bottom-links">About</span>
            <span className="bottom-links">Sign up</span>
          </Container>
          <p className="author-and-time" id="bottom-copyright">Exposing Dajjal © 2022. </p>
        </Container>
      </div>
    );
  }
}

export default Bottom;
