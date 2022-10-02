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
            <a href="/article8"><MenuItemTemplate image="./article8.jpeg" title="DE-DOLLARIZATION" date="BY EXPOSING DAJJAL | OCT 02, 2022"/></a>
            <a href="/article9"><MenuItemTemplate image="./article9.jpg" title="Riba and the Modern Western civilization" date="BY EXPOSING DAJJAL | OCT 02, 2022"/></a>

            <a href="/poem1"><MenuItemTemplate title="A Couplet On Muhammad ﷺ" image="poem1.jpg" date="BY EXPOSING DAJJAL | SEP 01, 2022"/></a>
            <a href="/article5"><MenuItemTemplate image="./article5.jpg" title="Israel’s attack on Iran – A Catalyst towards the Great War" date="BY EXPOSING DAJJAL | SEP 14, 2022"/></a>
            <a href="/article6"><MenuItemTemplate image="./article6.jpg" title="Have Gog and Magog been released?" date="BY EXPOSING DAJJAL | SEP 14, 2022"/></a>
            <a href="/article7"><MenuItemTemplate image="./article7.jpg" title="SURAH AL-KAHF: THE SURAH TO UNDERSTAND THE MODERN AGE" date="BY EXPOSING DAJJAL | SEP 18, 2022"/></a>


          </Container>
        );
    }
}

export default Menu;