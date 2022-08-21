import React, { Component } from "react";
import Navbar from "./Navbar";
import Latest from "./Latest";
import Container from "@mui/material/Container";
import Bottom from "./Bottom";
import Menu from "./Menu";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container
          maxWidth="md"
          sx={{
            paddingTop: "4vh",
          }}
        >
          <Latest />
          <Menu />
        </Container>
        <Bottom/>
      </div>
    );
  }
}

export default Home;
