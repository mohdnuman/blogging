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
            <span id="navbar1-text">Study, Research, Knowledge and Reminders.</span>
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
            <a href="/articles"><span>Articles</span></a>
            <a href="/poems"><span>Poems</span></a>
            <a href="/booknotes"><span>Book Notes</span></a>
            <a href="/photos"><span>Photos</span></a>
            <a href="/videos"><span>Videos</span></a>
            <a href="/contact"><span>Contact</span></a>

        </Container>
      </div>
    );
  }
}

export default Navbar;
