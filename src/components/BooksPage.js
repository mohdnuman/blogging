import React, { Component } from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import MenuItem from "./MenuItem";

class BooksPage extends Component {
    render() {
        return (
            <div>
            <div>
              <img src={"books.jpg"} className="page-banner" alt="page-banner" />
              <h1 className="page-heading" align="center">
                BOOK NOTES
              </h1>
            </div>
    
            <Container
              maxWidth="xl"
              sx={{
                paddingTop: "4vh",
                paddingBottom: "4vh",
                marginTop:"-10vh"
              }}
            ><div align="center">
            <a href="/" className="black-color-a">
              <Box
                sx={{
                  flexGrow: 1,
                  paddingBottom: "4vh",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <Grid container spacing={1}>
                  <Grid xs={7} sx={{ overflow: "hidden" }}>
                    <img
                      src={
                        "https://www.hasbullahshafi.com/content/images/size/w1200/2022/06/Solzhenitsyn-s-Table.jpeg"
                      }
                      className="page-main-banner"
                      alt="page-main-banner"
                    />
                  </Grid>
                  <Grid xs={3} sx={{ textAlign: "left" }}>
                    <h1 className="playfair-heading">Live From Space</h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a type
                      specimen book. 
                    </p>
                    <span className="author-and-time-card-3">
                      BY EXPOSING DAJJAL | JUL 8, 2022
                    </span>
                  </Grid>
                </Grid>
              </Box>
              </a>
          </div>
            <div align="center" className="page-bottom-menu">
              <MenuItem/>
            </div>
            </Container>
          </div>
        );
    }
}

export default BooksPage;