import React, { Component } from 'react';
import Container from "@mui/material/Container";
import MenuItem from './MenuItem';


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
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>


          </Container>
        );
    }
}

export default Menu;