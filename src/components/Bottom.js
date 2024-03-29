import React, { Component } from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box } from "@mui/system";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import firebase from "../firebase";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  height: "40vh",
  bgcolor: "white",
  border: "1px solid grey",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

class Bottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      subscribed:false,
      email:""
    };
  }
  componentDidMount() {
    this.db = firebase.firestore().collection("users");
  }
  handleEmailChange=(e)=>{
    this.setState({
      email:e.target.value
    })
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

  handleSubscribe=()=>{
    this.db
        .add({
            email:this.state.email
        })
        .then((docRef)=>{
            // console.log(docRef);
            this.setState({
              subscribed:true
            })
            this.handleClose();
        })
        .catch((error)=>{
            console.log("error occured in adding the user to the firebase db",error);
        });
   
  }
  render() {
    return (
      <div className="bottom">
        <CssBaseline />
        <Box
          sx={{
            bgcolor: "black",
            color: "white",
            textAlign: "center",
            paddingTop: "4vh",
          }}
        >
          <h1 id="bottom-subscribe-heading">Subscribe to Exposing Dajjal</h1>
          <h2 id="bottom-subscribe-info">
            Sign up to receive updates every time something new is published.
          </h2>
          <button
            id="subscribe-button"
            onClick={this.handleOpen}
            className="sign-up-button"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
              className="icon"
              alt="mail-icon"
            />
            <span id="subscribe-button-text">Subscribe now</span>
          </button>

          <div className="small-screen-main-article">
          <input placeholder="Email" className="small-screen-email-input" onChange={this.handleEmailChange}/>
          {!this.state.subscribed&&<button className="small-screen-subscribe" onClick={this.handleSubscribe}>
            Subscribe
          </button>}
          {this.state.subscribed&&<button className="small-screen-subscribe" onClick={this.handleSubscribe} disabled>
            Subscribed ✔️
          </button>}
        </div>

          <p>
            <a href="https://www.instagram.com/exposingdajjal/?hl=en">
              <InstagramIcon />
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://www.youtube.com/channel/UCsqZAJZt0-nEOiI3kXZi5Ow">
              <YouTubeIcon />
            </a>
          </p>
          <Container
            maxWidth="md"
            sx={{
              borderBottom: "1px solid grey",
              borderTop: "1px solid grey",
              height: "7vh",
              marginTop: "5vh",
              paddingTop: "1vh",
            }}
          >
            <a href="/about" style={{ textDecoration: "none" }}>
              <span className="bottom-links">About</span>
            </a>
            <span
              className="bottom-links sign-up-button"
              onClick={this.handleOpen}
              style={{ paddingLeft: "2vw" }}
            >
              Sign up
            </span>
          </Container>
          <p className="author-and-time" id="bottom-copyright">
            Exposing Dajjal © 2022.{" "}
          </p>
        </Box>

        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h1 className="subscribe-modal-heading">
              Subscribe to Exposing Dajjal
            </h1>
            <span>
              <input placeholder="Email" className="subscribe-input" onChange={this.handleEmailChange}/>
              <button
                className="subscribe-button-modal"
                onClick={this.handleSubscribe}
              >
                Subscribe
              </button>
            </span>
          </Box>
        </Modal>

        
      </div>
    );
  }
}

export default Bottom;
