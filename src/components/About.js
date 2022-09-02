import React, { Component } from "react";
import { Container } from "@mui/system";

class About extends Component {
  render() {
    return (
        <Container
        maxWidth="md"
        sx={{
          marginBottom:"10vh"
        }}
      >
        <h1 className="playfair-heading">About This Site</h1>
        <p>
          This publication is intended to spread the knowledge of Islamic
          Eschatology [i.e., Study Of The End-Times] inspired by His Eminence,
          Sheikh Imran Nazar Hosein and serve as a reminder to the Fitnas
          [Trials, Tribulations, Deception and Corruption] around us.
        </p>
      </Container>
    );
  }
}

export default About;
