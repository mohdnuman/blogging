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
          paddingBottom: "4vh"
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
              sx={{ width: 480 }}
              image="https://www.hasbullahshafi.com/content/images/size/w1200/2022/06/Solzhenitsyn-s-Table.jpeg"
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h6">
                  <span id="article-main-title">Live From Space</span>
                </Typography>
                <Typography component="div" variant="h6">
                  <span id="article-main-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </span>
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  <span className="article-main-author-and-time-card">
                    BY EXPOSING DAJJAL | JUL 8, 2022
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
          <span className="showmore-text">Show more</span>
          <ArrowForwardIcon />
        </p>
      </Container>
    );
  }
}

export default Articles;
