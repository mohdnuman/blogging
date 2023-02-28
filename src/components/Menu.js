import React, { Component } from "react";
import Container from "@mui/material/Container";
import MenuItemTemplate from "./MenuItemTemplate";

class Menu extends Component {
  render() {
    return (
      <Container
        maxWidth="md"
        sx={{
          paddingTop: "4vh",
          paddingBottom: "4vh",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <a href="/article31">
          <MenuItemTemplate
            image="./article31.jpg"
            title="Muslims have abandoned the Qur'ān!"
            date="BY EXPOSING DAJJAL | FEB 29, 2023"
          />
        </a>
        <a href="/article28">
          <MenuItemTemplate
            image="./article28.jpg"
            title="Al Qadr
                  (Divine Decree, Predestination, Fate) "
            date="BY EXPOSING DAJJAL | JAN 17, 2023"
          />
        </a>
        <a href="/article29">
          <MenuItemTemplate
            image="./article29.jpg"
            title="Imām 'Alī (عليه السلام‎) said regarding the Qur'ān"
            date="BY EXPOSING DAJJAL | JAN 17, 2023"
          />
        </a>
        <a href="/article27">
          <MenuItemTemplate
            image="./article27.jpg"
            title="Ukraine, Russia and Pax Americana - The Battle Ground"
            date="BY EXPOSING DAJJAL | DEC 29, 2022"
          />
        </a>
        <a href="/article30">
          <MenuItemTemplate
            image="./article30.jpg"
            title="Marriage and The Modern World"
            date="BY EXPOSING DAJJAL | JAN 29, 2022"
          />
        </a>

        <a href="/poem1">
          <MenuItemTemplate
            title="A Couplet On Muhammad ﷺ"
            image="poem1.jpg"
            date="BY EXPOSING DAJJAL | SEP 01, 2022"
          />
        </a>
      </Container>
    );
  }
}

export default Menu;
