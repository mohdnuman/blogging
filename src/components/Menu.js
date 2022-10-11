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
            <a href="/article11"><MenuItemTemplate image="./article11.jpg" title="Salāhuddīn & Mehmet II" date="BY EXPOSING DAJJAL | OCT 11, 2022"/></a>
            <a href="/article12"><MenuItemTemplate image="./article12.jpg" title="The crucifixion of Jesus( Nabi Isa alaihissalām)" date="BY EXPOSING DAJJAL | OCT 11, 2022"/></a>
            <a href="/article13"><MenuItemTemplate image="./article13.jpg" title="Russia-Ukraine Analysis- Part 1" date="BY EXPOSING DAJJAL | OCT 11, 2022"/></a>
            <a href="/article14"><MenuItemTemplate image="./article14.jpg" title="Ukraine, Russia & The Petrodollar" date="BY EXPOSING DAJJAL | OCT 11, 2022"/></a>
            <a href="/article9"><MenuItemTemplate image="./article9.jpg" title="Riba and the Modern Western civilization" date="BY EXPOSING DAJJAL | OCT 02, 2022"/></a>

            <a href="/poem1"><MenuItemTemplate title="A Couplet On Muhammad ﷺ" image="poem1.jpg" date="BY EXPOSING DAJJAL | SEP 01, 2022"/></a>

          </Container>
        );
    }
}

export default Menu;