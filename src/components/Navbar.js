import React, { Component } from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

class Navbar extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Container
          maxWidth="xl"
          sx={{ height: "15vh", borderBottom: "1px solid #e0e0e0", paddingTop: "4vh",overflow:"hidden"}}
          id="upper-nav"
        >
            <span id="navbar1-text">Thoughts,Stories, and ideas.</span>
            <span id="navbar-logo" ><img src={"logo.jpg"} id="logo" alt="logo"/></span>
            <button id="navbar-subscribe-button">Subscribe</button>
        </Container>
        <CssBaseline />
        <Container
          maxWidth="xl"
          sx={{ height: "8vh", borderBottom: "1px solid #e0e0e0" }}
          id="lower-nav"
        >
            <a href="/"><span>Home</span></a>
            <span>Articles</span>
            <span>Poems</span>
            <span>Book Notes</span>
            <span>Photos</span>
            <span>Videos</span>
            <a href="/contact"><span>Contact</span></a>

        </Container>
      </div>
    );
  }
}

export default Navbar;
