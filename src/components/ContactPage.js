import React, { Component } from "react";
import { Container } from "@mui/system";

class ContactPage extends Component {
  render() {
    return (
      <Container
        maxWidth="md"
        sx={{
          marginBottom:"10vh"
        }}
      >
        <div align="center">
          <h1 align="left" id="contact-heading">Contact</h1>
          <img src={"contact.jpg"} alt="scenery" id="contact-banner" />
          <p id="contact" >For enquiries email: <a href="mailto:wespreadtruth@gmail.com">wespreadtruth@gmail.com</a></p>
        </div>
      </Container>
    );
  }
}

export default ContactPage;
