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
        >
          <div align="center">
            <a href="/article1" className="black-color-a">
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
                        The oppressors will always be on the wrong side of
                        history and the oppressed will triumph over the
                        oppressors eventually
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
                      The oppressors will always be on the wrong side of history
                      and the oppressed will triumph over the oppressors
                      eventually
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
            <Container maxWidth="lg">
              <a href="/article4">
                <MenuItemTemplate
                  image="./article4.jpg"
                  title="Aurangzeb and the colonial era-scholorship"
                  date="BY EXPOSING DAJJAL | SEP 12, 2022"
                />
              </a>
              <a href="/article5">
                <MenuItemTemplate
                  image="./article5.jpg"
                  title="Israel’s attack on Iran – A Catalyst towards the Great War"
                  date="BY EXPOSING DAJJAL | SEP 14, 2022"
                />
              </a>
              <a href="/article3">
                <MenuItemTemplate
                  image="./article3.jpg"
                  title="The Western Sunrise"
                  date="BY EXPOSING DAJJAL | SEP 05, 2022"
                />
              </a>
              <a href="/article2">
                <MenuItemTemplate
                  image="./article2.jpg"
                  title="The Syria Deception"
                  date="BY EXPOSING DAJJAL | SEP 02, 2022"
                />
              </a>
              <a href="/article6">
                <MenuItemTemplate
                  image="./article6.jpg"
                  title="Have Gog and Magog been released?"
                  date="BY EXPOSING DAJJAL | SEP 14, 2022"
                />
              </a>
              <a href="/article7">
                <MenuItemTemplate
                  image="./article7.jpg"
                  title="SURAH AL-KAHF: THE SURAH TO UNDERSTAND THE MODERN AGE"
                  date="BY EXPOSING DAJJAL | SEP 17, 2022"
                />
              </a>
              <a href="/article8">
                <MenuItemTemplate
                  image="./article8.jpeg"
                  title="DE-DOLLARIZATION"
                  date="BY EXPOSING DAJJAL | OCT 02, 2022"
                />
              </a>
              <a href="/article9">
                <MenuItemTemplate
                  image="./article9.jpg"
                  title="Riba and the Modern Western civilization"
                  date="BY EXPOSING DAJJAL | OCT 02, 2022"
                />
              </a>
              <a href="/article11">
                <MenuItemTemplate
                  image="./article11.jpg"
                  title="Salāhuddīn & Mehmet II"
                  date="BY EXPOSING DAJJAL | OCT 11, 2022"
                />
              </a>
              <a href="/article12">
                <MenuItemTemplate
                  image="./article12.jpg"
                  title="The crucifixion of Jesus( Nabi Isa alaihissalām)"
                  date="BY EXPOSING DAJJAL | OCT 11, 2022"
                />
              </a>
              <a href="/article13">
                <MenuItemTemplate
                  image="./article13.jpg"
                  title="Russia-Ukraine Analysis- Part 1"
                  date="BY EXPOSING DAJJAL | OCT 11, 2022"
                />
              </a>
              <a href="/article14">
                <MenuItemTemplate
                  image="./article14.jpg"
                  title="Ukraine, Russia & The Petrodollar"
                  date="BY EXPOSING DAJJAL | OCT 11, 2022"
                />
              </a>
              <a href="/article15">
                <MenuItemTemplate
                  image="./article15.jpg"
                  title=" Was Aisha رضي الله عنها really '6 years old' when she got married to
                  Prophet Muhammad (ﷺ)?"
                  date="BY EXPOSING DAJJAL | NOV 06, 2022"
                />
              </a>
              <a href="/article16">
                <MenuItemTemplate
                  image="./article16.jpg"
                  title="Prophet Muhammad's ﷺ promise to the Christians"
                  date="BY EXPOSING DAJJAL | NOV 06, 2022"
                />
              </a>
              <a href="/article17">
                <MenuItemTemplate
                  image="./article17.jpg"
                  title="Iqbal, Qur'an and The True Doctrine Of Islam"
                  date="BY EXPOSING DAJJAL | NOV 06, 2022"
                />
              </a>
              <a href="/article18">
                <MenuItemTemplate
                  image="./article18.jpg"
                  title="Qur'ān The Absolute Truth"
                  date="BY EXPOSING DAJJAL | NOV 06, 2022"
                />
              </a>
              <a href="/article19">
                <MenuItemTemplate
                  image="./article19.jpg"
                  title="Iqbal and Intellectual Bankruptcy of the Muslims"
                  date="BY EXPOSING DAJJAL | NOV 06, 2022"
                />
              </a>
              <a href="/article20">
                <MenuItemTemplate
                  image="./article20.jpg"
                  title="Qur'ān & The Orthodox Christianity"
                  date="BY EXPOSING DAJJAL | NOV 06, 2022"
                />
              </a>
              <a href="/article21">
                <MenuItemTemplate
                  image="./article21.jpg"
                  title="Nūr/Light"
                  date="BY EXPOSING DAJJAL | NOV 06, 2022"
                />
              </a>
              <a href="/article22">
                <MenuItemTemplate
                  image="./article22.jpg"
                  title="The Crusades"
                  date="BY EXPOSING DAJJAL | NOV 06, 2022"
                />
              </a>
              <a href="/article23">
                <MenuItemTemplate
                  image="./article23.jpg"
                  title="RSS (Rashtriya Swayamsevak Sangh) & BJP (Bhartiya Janata Party)"
                  date="BY EXPOSING DAJJAL | NOV 06, 2022"
                />
              </a>
              <a href="/article24">
                <MenuItemTemplate
                  image="./article24.jpg"
                  title="The bogus fatwa on social distancing while offering Salāh."
                  date="BY EXPOSING DAJJAL | NOV 06, 2022"
                />
              </a>
              <a href="/article25">
                <MenuItemTemplate
                  image="./article25.jpg"
                  title="THE GREAT WAR"
                  date="BY EXPOSING DAJJAL | NOV 06, 2022"
                />
              </a>
              <a href="/article26">
                <MenuItemTemplate
                  image="./article26.jpg"
                  title="Tipu Sultan- A man most feared by the British"
                  date="BY EXPOSING DAJJAL | NOV 06, 2022"
                />
              </a>
              <a href="/article27">
                <MenuItemTemplate
                  image="./article27.jpg"
                  title="The Battle ground"
                  date="BY EXPOSING DAJJAL | DEC 29, 2022"
                />
              </a>
            </Container>
          </div>
        </Container>
      </div>
    );
  }
}

export default ArticlesPage;
