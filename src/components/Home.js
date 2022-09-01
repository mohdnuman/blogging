import React, { Component } from "react";
import Latest from "./Latest";
import Container from "@mui/material/Container";
import Menu from "./Menu";
import Poems from "./Poems";
import Articles from "./Articles";
import BookNotes from "./BookNotes";

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
          <Poems/>
          <Articles/>
          {/* <BookNotes/> */}
        </Container>
    );
  }
}

export default Home;
