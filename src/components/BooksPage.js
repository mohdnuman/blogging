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
              maxWidth="lg"
              sx={{
                paddingTop: "4vh",
                paddingBottom: "4vh",
                marginTop:"-10vh"
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  paddingBottom: "4vh",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <Grid container spacing={2}>
                  <Grid xs={5} sx={{ overflow: "hidden" }}>
                    <img
                      src={
                        "https://www.hasbullahshafi.com/content/images/size/w1200/2022/06/Solzhenitsyn-s-Table.jpeg"
                      }
                      className="page-main-banner"
                      alt="page-main-banner"
                    />
                  </Grid>
                  <Grid xs={5} sx={{ textAlign: "left" }}>
                    <h1 className="playfair-heading">Live From Space</h1>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries, but
                      also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s with
                      the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing software
                      like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <span className="author-and-time-card-3">
                      BY EXPOSING DAJJAL | JUL 8, 2022
                    </span>
                  </Grid>
                </Grid>
              </Box>
            <div align="center" className="page-bottom-menu">
              <MenuItem/>
            </div>
            </Container>
          </div>
        );
    }
}

export default BooksPage;