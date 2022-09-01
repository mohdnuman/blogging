import React, { Component } from "react";
import Container from "@mui/material/Container";
import MenuItem from "./MenuItem";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

class Poems extends Component {
  render() {
    return (
      <Container
        maxWidth="md"
        sx={{
          paddingTop: "4vh",
          paddingBottom: "4vh",
        }}
      >
        <h3>POEMS</h3>
        <a href="/poem1" className="black-color-a">
        <h1 id="poems-heading">A Couplet On Muhammad</h1>
        <p>
          Muhammad (God's peace and blessings be upon him). The Last Messenger
          Of God In Christian And Hindu Scriptures.He will be mentioned in every
          scripture sent by Me, God said; By whom the last of Mankind well be
          led.
        </p>
        <p className="author-and-time">BY EXPOSING DAJJAL | SEP 01, 2022</p>
        </a>
        <div className="poems-menu">
          <MenuItem />
          <MenuItem />
        </div>
        <p align="right" className="showmore">
          <a className="black-color-a" href="/poems">
            <span className="showmore-text">Show more</span>
            <ArrowForwardIcon />
          </a>
        </p>
      </Container>
    );
  }
}

export default Poems;
