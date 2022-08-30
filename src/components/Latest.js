import React, { Component } from "react";
import Container from "@mui/material/Container";

class Latest extends Component {
  render() {
    return (
      <a href="/article1" className="black-color-a"> 
      <Container
        maxWidth="md"
        sx={{
          paddingBottom: "4vh",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <h2 id="latest-heading">LATEST</h2>
        <h1 id="latest-category">The MultiPolar World Order</h1>
        <p id="latest-para">
          The oppressors will always be on the wrong side of history and the
          oppressed will triumph over the oppressors eventually, that is how the
          history will end with Truth prevailing over all its rivals. There have
          been extraordinary events taking place in the world since January
          2020, starting with COVID-19, then a special military intervention by
          Russia in Ukraine and recently the visit of Nancy Pelosi to Taiwan.
          The question here is, is this all happening by accident or is there a
          big masterplan at work? And if it is a masterplan, then who is behind
          all this?
        </p>
        <p className="author-and-time">BY EXPOSING DAJJAL | AUG 30, 2022</p>
      </Container>
      </a>
    );
  }
}

export default Latest;
