import React, { Component } from "react";
import Container from "@mui/material/Container";

class Latest extends Component {
  render() {
    return (
      <a href="/article28" className="black-color-a">
        <Container
          maxWidth="md"
          sx={{
            paddingBottom: "4vh",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <h2 id="latest-heading">LATEST</h2>
          <h1 id="latest-category">
            Al Qadr (Divine Decree, Predestination, Fate)
          </h1>
          <p id="latest-para">
            Some Muslims really have a hard time understanding ’Qadr’ because
            they think it is contradicting the free will. They say if everything
            is pre-written and decreed then how can there be any choice! Well,
            such people have misunderstood what Qadr actually means.
          </p>
          <p className="author-and-time">BY EXPOSING DAJJAL | JAN 17, 2023</p>
        </Container>
      </a>
    );
  }
}

export default Latest;
