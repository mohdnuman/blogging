import React, { Component } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

class MenuItem extends Component {
  render() {
    return (
      <span>
        <span className="big-screen">
          <Box display="inline-block">
            {/* <div className="menu-item-template"> */}
            <Card
              sx={{
                display: "flex",
                boxShadow: "none",
                marginRight: "3vw",
                marginBottom: "5vh",
                width: "25vw",
              }}
              className="card"
            >
              <CardMedia
                component="img"
                sx={{ width: 150 }}
                image={this.props.image}
                alt={this.props.title}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h6">
                    <span className="item-title">{this.props.title}</span>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    <span className="author-and-time-card">
                      {this.props.date}
                    </span>
                  </Typography>
                </CardContent>
              </Box>
            </Card>
            {/* </div> */}
          </Box>
        </span>

        <span class="small-screen">
          <Box display="inline-block">
            {/* <div className="menu-item-template"> */}
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
                sx={{ width: 150 }}
                image={this.props.image}
                alt={this.props.title}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h6">
                    <span className="item-title">{this.props.title}</span>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    <span className="author-and-time-card">
                      {this.props.date}
                    </span>
                  </Typography>
                </CardContent>
              </Box>
            </Card>
            {/* </div> */}
          </Box>
        </span>
      </span>
    );
  }
}

export default MenuItem;
