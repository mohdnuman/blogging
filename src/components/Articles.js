import React, { Component } from "react";
import Container from "@mui/material/Container";
import MenuItemTemplate from "./MenuItemTemplate";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

class Articles extends Component {
  render() {
    return (
      <Container
        maxWidth="md"
        sx={{
          paddingTop: "4vh",
          paddingBottom: "4vh",
        }}
      >
        <h3>ARTICLES</h3>
        <a href="/article1" className="black-color-a">
        <Box display="inline-block">
          <div className="big-screen-main-article">
          <Card
            sx={{
              display: "flex",
              boxShadow: "none",
              marginRight: "3vw",
              marginBottom: "5vh",
            }}
            className="card"
          >
            <CardMedia
              component="img"
              sx={{ width: "30vw" }}
              image="./article1.jpg"
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h6">
                  <span id="article-main-title">
                    The Multipolar World Order
                  </span>
                </Typography>
                <Typography component="div" variant="h6">
                  <span id="article-main-body">
                    The oppressors will always be on the wrong side of history
                    and the oppressed will triumph over the oppressors
                    eventually, that is how the history will end with Truth
                    prevailing over all its rivals.
                  </span>
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <span className="article-main-author-and-time-card">
                    BY EXPOSING DAJJAL | AUG 30, 2022
                  </span>
                </Typography>
              </CardContent>
            </Box>
          </Card>
          </div>
          <div className="small-screen-main-article" >
          <div>
                <img
                  src={"./article1.jpg"}
                  className="page-main-banner-small"
                  alt="page-main-banner"
                />
              </div>
              <div>
                <h1 className="playfair-heading-sm">
                  The Multipolar World Order
                </h1>
                <p className="main-article-body">
                  The oppressors will always be on the wrong side of history and
                  the oppressed will triumph over the oppressors eventually
                </p>
                <span className="author-and-time-card-sm">
                  BY EXPOSING DAJJAL | AUG 30, 2022
                </span>
                </div>
          </div>
        </Box>
        </a>
        <div className="poems-menu">
        <a href="/article6"><MenuItemTemplate image="./article6.jpg" title="Have Gog and Magog been released?" date="BY EXPOSING DAJJAL | SEP 14, 2022"/></a>
        <a href="/article5"><MenuItemTemplate image="./article5.jpg" title="Israel’s attack on Iran – A Catalyst towards the Great War" date="BY EXPOSING DAJJAL | SEP 14, 2022"/></a>
        <a href="/article7"><MenuItemTemplate image="./article7.png" title="SURAH AL-KAHF: THE SURAH TO UNDERSTAND THE MODERN AGE" date="BY EXPOSING DAJJAL | SEP 17, 2022"/></a>
        
        </div>
        <p align="right" className="showmore">
          <a href="/articles" className="black-color-a"><span className="showmore-text">Show more</span></a>
          <ArrowForwardIcon />
        </p>
      </Container>
    );
  }
}

export default Articles;
