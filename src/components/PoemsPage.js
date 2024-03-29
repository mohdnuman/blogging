import React, { Component } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import MenuItemTemplate from "./MenuItemTemplate";


class PoemsPage extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={"poems.jpg"} className="page-banner" alt="page-banner" />
          <h1 className="page-heading" align="center">
            POEMS
          </h1>
        </div>

        <Container
          maxWidth="xl"
          sx={{
            paddingTop: "4vh",
            paddingBottom: "4vh",
            marginTop: "-10vh",
          }}
        >
          <div align="center">
            <a href="/poem1" className="black-color-a">
              <Box
                sx={{
                  flexGrow: 1,
                  paddingBottom: "4vh",
                  borderBottom: "1px solid #e0e0e0",
                }}
                className="main-article"
              >
                <div className="big-screen-main-article">
                  <Grid container spacing={1}>
                    <Grid xs={5} sx={{ overflow: "hidden" }}>
                      <img
                        src={"./poem1.jpg"}
                        className="page-main-banner"
                        alt="page-main-banner"
                      />
                    </Grid>
                    <Grid xs={5} sx={{ textAlign: "left" }}>
                      <h1 className="playfair-heading">
                        A Couplet On Muhammad ﷺ
                      </h1>
                      <p>
                        Muhammad (God's peace and blessings be upon him). The
                        Last Messenger Of God In Christian And Hindu Scriptures.
                        He will be mentioned in every scripture sent by Me, God
                        said; By whom the last of Mankind well be led.
                      </p>
                      <span className="author-and-time-card-3">
                        BY EXPOSING DAJJAL | SEP 01, 2022
                      </span>
                    </Grid>
                  </Grid>
                </div>

                <div className="small-screen-main-article">
                  <div>
                    <img
                      src={"./poem1.jpg"}
                      className="page-main-banner-small"
                      alt="page-main-banner"
                    />
                  </div>
                  <div>
                    <h1 className="playfair-heading-sm">
                      A Couplet On Muhammad ﷺ
                    </h1>
                    <p className="main-article-body">
                      Muhammad (God's peace and blessings be upon him). The Last
                      Messenger Of God In Christian And Hindu Scriptures. He
                      will be mentioned in every scripture sent by Me, God said;
                      By whom the last of Mankind well be led.
                    </p>
                    <span className="author-and-time-card-sm">
                      BY EXPOSING DAJJAL | SEP 01, 2022
                    </span>
                  </div>
                </div>
              </Box>
            </a>
          </div>
          <div align="center" className="page-bottom-menu">
            <Container maxWidth="lg">
              <a href="/poem2">
                <MenuItemTemplate
                  image="./poem2.jpg"
                  title="Spouse in the Qur’ān"
                  date="BY EXPOSING DAJJAL | MAR 4, 2023"
                />
              </a>
            </Container>
          </div>
        </Container>
      </div>
    );
  }
}

export default PoemsPage;
