import React, { Component } from "react";
import Container from "@mui/material/Container";

class Latest extends Component {
  render() {
    return (
      <Container
        maxWidth="md"
        sx={{
            paddingBottom:"4vh"
          ,borderBottom:"1px solid #e0e0e0"
        }}
      >
        <h2 id="latest-heading">LATEST</h2>
        <h1 id="latest-category">Poetry</h1>
        <p id="latest-para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p className="author-and-time">BY HASBULLAH SHAFI'IY JUL 8, 2022</p>
      </Container>
    );
  }
}

export default Latest;
