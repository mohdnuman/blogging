import React, { Component } from 'react';
import Container from "@mui/material/Container";
import MenuItem from './MenuItem';
import MenuItemTemplate from "./MenuItemTemplate";


class Menu extends Component {
    render() {
        return (
            <Container
            maxWidth="md"
            sx={{
                paddingTop:"4vh"
                ,paddingBottom:"4vh"
              ,borderBottom:"1px solid #e0e0e0"
            }}
          >
            <a href="/poem1"><MenuItemTemplate title="A Couplet On Muhammad ﷺ" image="poem1.jpg" date="BY EXPOSING DAJJAL | SEP 01, 2022"/></a>
            <a href="/article2"><MenuItemTemplate image="./article2.jpg" title="The Syria Deception" date="BY EXPOSING DAJJAL | SEP 02, 2022"/></a>
            <a href="/article3"><MenuItemTemplate image="./article3.jpg" title="The Western Sunrise" date="BY EXPOSING DAJJAL | SEP 05, 2022"/></a>


          </Container>
        );
    }
}

export default Menu;