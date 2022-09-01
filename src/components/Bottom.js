import React, { Component } from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box } from "@mui/system";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button"

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  height: "30vh",
  bgcolor: "white",
  border: "2px solid black",
  borderRadius:"10px",
  boxShadow: 24,
  p: 4,
};

class Bottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  handleOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    return (
      <div className="bottom">
        <CssBaseline />
        <Box sx={{
            bgcolor: "black",
            color: "white",
            textAlign: "center",
            paddingTop: "4vh",
          }}>
     
          <h1 id="bottom-subscribe-heading">Subscribe to Exposing Dajjal</h1>
          <h2 id="bottom-subscribe-info">
            Sign up to receive updates every time something new is published.
          </h2>
          <button id="subscribe-button" onClick={this.handleOpen} className="sign-up-button">
            <img
              src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
              className="icon"
              alt="mail-icon"
            />
            <span id="subscribe-button-text" >Subscribe now</span>
          </button>
          <p><a href="https://www.instagram.com/exposingdajjal/?hl=en"><InstagramIcon/></a>&nbsp;&nbsp;&nbsp;<a href="https://www.youtube.com/channel/UCsqZAJZt0-nEOiI3kXZi5Ow"><YouTubeIcon/></a></p>
          <Container  maxWidth="md" sx={{
           borderBottom:"1px solid grey",
           borderTop:"1px solid grey",
           height: "7vh",
           marginTop:"5vh",
           paddingTop:"1vh"
          }}>
            <span className="bottom-links">About</span>
            <span className="bottom-links sign-up-button" onClick={this.handleOpen} >Sign up</span>
          </Container>
          <p className="author-and-time" id="bottom-copyright">Exposing Dajjal © 2022. </p>
        </Box>

        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h1 className="subscribe-modal-heading">Subscribe to Exposing Dajjal</h1>
            <span>
              <input placeholder="Email" className="subscribe-input"/>
              <button className="subscribe-button-modal" onClick={this.handleClose}>Subscribe</button>
            </span>
          </Box>
        </Modal>
      </div>
    );
  }
}

export default Bottom;
