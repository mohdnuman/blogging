import React, { Component } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from '@mui/material/Typography';

class MenuItem extends Component {
  render() {
    return (
        <Box display="inline-block">
        <Card sx={{ display: "flex", boxShadow:"none",marginRight:"3vw",marginBottom:"5vh"}} className="card">
        <CardMedia
            component="img"
            sx={{ width: 180 }}
            image="https://www.hasbullahshafi.com/content/images/size/w1200/2022/06/Solzhenitsyn-s-Table.jpeg"
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h6">
                <span className="item-title">Live From Space</span>
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
               <span className="author-and-time-card">BY EXPOSING DAJJAL | JUL 8, 2022</span>
              </Typography>
            </CardContent>
          </Box>
          
        </Card>
      </Box>
    );
  }
}

export default MenuItem;
