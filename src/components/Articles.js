import React, { Component } from "react";
import Container from "@mui/material/Container";
import MenuItem from "./MenuItem";
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
        <Box display="inline-block">
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
        </Box>
        <div className="poems-menu">
          <MenuItem />
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
