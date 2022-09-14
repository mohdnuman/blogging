import React, { Component } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import MenuItemTemplate from "./MenuItemTemplate";

class ArticlesPage extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={"articles.jpg"} className="page-banner" alt="page-banner" />
          <h1 className="page-heading" align="center">
            ARTICLES
          </h1>
        </div>

        
        <Container
          maxWidth="xl"
          sx={{
            paddingTop: "4vh",
            paddingBottom: "4vh",
            marginTop: "-10vh",
          }}
        ><div align="center">
          <a href="/article1" className="black-color-a">
          <Box
            sx={{
              flexGrow: 1,
              paddingBottom: "4vh",
              borderBottom: "1px solid #e0e0e0",
            }}
            className="main-article"
          >
            <div  className="big-screen-main-article">
            <Grid container spacing={1}>
              <Grid xs={7} sx={{ overflow: "hidden" }}>
                <img
                  src={"./article1.jpg"}
                  className="page-main-banner"
                  alt="page-main-banner"
                />
              </Grid>
              <Grid xs={3} sx={{ textAlign: "left" }}>
                <h1 className="playfair-heading">
                  The Multipolar World Order
                </h1>
                <p>
                  The oppressors will always be on the wrong side of history and
                  the oppressed will triumph over the oppressors eventually
                </p>
                <span className="author-and-time-card-3">
                  BY EXPOSING DAJJAL | AUG 30, 2022
                </span>
              </Grid>
            </Grid>
            </div>

            <div className="small-screen-main-article">
            
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
          </div>
          <div align="center" className="page-bottom-menu">
            <a href="/article2"><MenuItemTemplate image="./article2.jpg" title="The Syria Deception" date="BY EXPOSING DAJJAL | SEP 02, 2022"/></a>
            <a href="/article3"><MenuItemTemplate image="./article3.jpg" title="The Western Sunrise" date="BY EXPOSING DAJJAL | SEP 05, 2022"/></a>
            <a href="/article4"><MenuItemTemplate image="./article4.jpg" title="Aurangzeb and the colonial era-scholorship" date="BY EXPOSING DAJJAL | SEP 12, 2022"/></a>
            
          </div>
        </Container>
        
      </div>
    );
  }
}

export default ArticlesPage;
