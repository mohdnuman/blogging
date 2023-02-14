import React, { Component } from "react";
import Latest from "./Latest";
import Container from "@mui/material/Container";
import Menu from "./Menu";
import Poems from "./Poems";
import Articles from "./Articles";
import BookNotes from "./BookNotes";

class Home extends Component {
  render() {
    return (
        <Container
          maxWidth="md"
          sx={{
            paddingTop: "4vh",
          }}
        >
          <Latest />
          <Menu />
          <Poems/>
          <Articles/>
          <Container
          maxWidth="md"
          >
              <script
                  async
                  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6322135215730772"
                  crossOrigin="anonymous"
                ></script>
                <ins
                  className="adsbygoogle"
                  style={{"display":"block"}}
                  data-ad-client="ca-pub-6322135215730772"
                  data-ad-slot="5435972548"
                  data-ad-format="auto"
                  data-full-width-responsive="true"
                ></ins>
                <script>
                  (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
          </Container>
          {/* <BookNotes/> */}
        </Container>
    );
  }
}

export default Home;
