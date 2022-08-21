import React, { Component } from "react";
import Latest from "./Latest";
import Container from "@mui/material/Container";
import Menu from "./Menu";

class Home extends Component {
  render() {
    return (
        <Container
          maxWidth="md"
          sx={{
            paddingTop: "4vh",
          }}
        >
          <Latest />
          <Menu />
        </Container>
    );
  }
}

export default Home;
