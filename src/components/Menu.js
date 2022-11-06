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
            <a href="/article17"><MenuItemTemplate image="./article17.jpg" title="Iqbal, Qur'an and The True Doctrine Of Islam" date="BY EXPOSING DAJJAL | NOV 07, 2022"/></a>
            <a href="/article18"><MenuItemTemplate image="./article18.jpg" title="Qur'ān The Absolute Truth" date="BY EXPOSING DAJJAL | NOV 07, 2022"/></a>
            <a href="/article19"><MenuItemTemplate image="./article19.jpg" title="Iqbal and Intellectual Bankruptcy of the Muslims" date="BY EXPOSING DAJJAL | NOV 07, 2022"/></a>
            <a href="/article21"><MenuItemTemplate image="./article21.jpg" title="Nūr/Light" date="BY EXPOSING DAJJAL | NOV 07, 2022"/></a>
            <a href="/article24"><MenuItemTemplate image="./article24.jpg" title="The bogus fatwa on social distancing while offering Salāh." date="BY EXPOSING DAJJAL | NOV 07, 2022"/></a>

            <a href="/poem1"><MenuItemTemplate title="A Couplet On Muhammad ﷺ" image="poem1.jpg" date="BY EXPOSING DAJJAL | SEP 01, 2022"/></a>

          </Container>
        );
    }
}

export default Menu;