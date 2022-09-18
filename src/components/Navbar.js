import React, { Component } from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Modal from "@mui/material/Modal";
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

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      email: "",
    };
  }
  componentDidMount() {
    this.db = firebase.firestore().collection("users");
  }
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
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

  handleSubscribe = () => {
    this.db
      .add({
        email: this.state.email,
      })
      .then((docRef) => {
        // console.log(docRef);
        this.setState({
          subscribed: true,
        });
        this.handleClose();
      })
      .catch((error) => {
        console.log(
          "error occured in adding the user to the firebase db",
          error
        );
      });
  };
  render() {
    return (
      <div>
        <CssBaseline />
        <Container
          maxWidth="xl"
          sx={{
            height: "15vh",
            borderBottom: "1px solid #e0e0e0",
            paddingTop: "4vh",
            overflow: "hidden",
          }}
          id="upper-nav"
        >
          <span id="navbar1-text">
            Eschatology, Research, Knowledge and Reminders.
          </span>
          <span id="navbar2-text">
            Eschatology, Research, Knowledge and Reminders.
          </span>
          <div style={{ display: "inline-block" }} align="center">
            <a href="/">
              <img src={"logo.jpg"} id="logo" alt="logo" />
            </a>
          </div>
          <button id="navbar-subscribe-button" onClick={this.handleOpen}>
            Subscribe
          </button>
        </Container>
        <CssBaseline />
        <Container
          maxWidth="xl"
          sx={{ height: "8vh", borderBottom: "1px solid #e0e0e0" }}
          id="lower-nav"
        >
          <span className="lower-nav-big-screen">
            <a href="/">
              <span>Home</span>
            </a>
            <a href="/articles">
              <span>Articles</span>
            </a>
            <a href="/poems">
              <span>Poems</span>
            </a>
            <a href="/gallery">
              <span>Gallery</span>
            </a>
          
            <a href="/contact">
              <span>Contact</span>
            </a>
          </span>

          <div className="short-screen-nav">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Home</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Page"
              >
                <a href="/" className="black-color-a">
                  <MenuItem>Home</MenuItem>
                </a>
                <a href="/articles" className="black-color-a">
                  <MenuItem>Articles</MenuItem>
                </a>
                <a href="/poems" className="black-color-a">
                  <MenuItem>Poems</MenuItem>
                </a>
                <a href="/gallery" className="black-color-a">
                  <MenuItem>Gallery</MenuItem>
                </a>

                <a href="/contact" className="black-color-a">
                  <MenuItem>Contact</MenuItem>
                </a>
              </Select>
            </FormControl>
          </div>
        </Container>

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
              <input
                placeholder="Email"
                className="subscribe-input"
                onChange={this.handleEmailChange}
              />
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

export default Navbar;
