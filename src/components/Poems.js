import React, { Component } from "react";
import Container from "@mui/material/Container";
import MenuItem from "./MenuItem";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
        <h1 id="poems-heading">Poetry</h1>
        <p>
          Poetry is a glass shattering drink too hot to be contained. It is a
          technique, that sets words to glass shattering music. In the words of
          T.S.E: Between emotion and imagination. I say, glass-shattering
          emotion That spills out in patterned rhymes Like dreams, omitted at
          other times Scattered,
        </p>
        <p className="author-and-time">BY EXPOSING DAJJAL | JUL 8, 2022</p>
        <div className="poems-menu">
          <MenuItem/>
          <MenuItem/>
        </div>
        <p align="right" className="showmore"><a className="black-color-a" href="/poems"><span className="showmore-text">Show more</span><ArrowForwardIcon /></a></p>
        
      </Container>
    );
  }
}

export default Poems;
