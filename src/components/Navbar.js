import React, { Component } from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// const style = {
//   // Adding media query..
//   "@media (min-width: 600px)": {
//     display: "none"
//   },
// };
class Navbar extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Container
          maxWidth="xl"
          sx={{
            height: "15vh",
            borderBottom: "1px solid #e0e0e0",
            paddingTop: "4vh",
            overflow: "hidden",
          }}
          id="upper-nav"
        >
          <span id="navbar1-text">
            Eschatology, Research, Knowledge and Reminders.
          </span>
          <span id="navbar2-text">
            Eschatology, Research, Knowledge and Reminders.
          </span>
          <div id="navbar-logo" align="center">
            <img src={"logo.jpg"} id="logo" alt="logo" />
          </div>
          <button id="navbar-subscribe-button">Subscribe</button>
        </Container>
        <CssBaseline />
        <Container
          maxWidth="xl"
          sx={{ height: "8vh", borderBottom: "1px solid #e0e0e0" }}
          id="lower-nav"
        >
          <span className="lower-nav-big-screen">
            <a href="/">
              <span>Home</span>
            </a>
            <a href="/articles">
              <span>Articles</span>
            </a>
            <a href="/poems">
              <span>Poems</span>
            </a>
            <a href="/booknotes">
              <span>Book Notes</span>
            </a>
            <a href="/photos">
              <span>Photos</span>
            </a>
            <a href="/videos">
              <span>Videos</span>
            </a>
            <a href="/contact">
              <span>Contact</span>
            </a>
          </span>

<div className="short-screen-nav">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Home</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Page"
            >
              <a href="/" className="black-color-a">
                <MenuItem>Home</MenuItem>
              </a>
              <a href="/articles" className="black-color-a">
                <MenuItem>Articles</MenuItem>
              </a>
              <a href="/poems" className="black-color-a">
                <MenuItem>Poems</MenuItem>
              </a>
              <a href="/booknotes" className="black-color-a">
                <MenuItem>Book Notes</MenuItem>
              </a>
              <a href="/photos" className="black-color-a">
                <MenuItem>Photos</MenuItem>
              </a>
              <a href="/videos" className="black-color-a">
                <MenuItem>Videos</MenuItem>
              </a>
              <a href="/contact" className="black-color-a">
                <MenuItem>Contact</MenuItem>
              </a>
            </Select>
          </FormControl>
          </div>
        </Container>
      </div>
    );
  }
}

export default Navbar;
