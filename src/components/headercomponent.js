import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return ( <
            >
            <
            Navbar dark >
            <
            div className = "container" >
            <
            NavbarBrand href = "/" > Ristorante Con Fusion < /NavbarBrand> < /
            div > <
            /Navbar> <
            Jumbotron >
            <
            div className = "container" >
            <
            div className = "row row-header" >
            <
            div className = "col-12 col-sm-5" >
            <
            h1 > Ristorante Con Fusion < /h1> <
            p > we take inspiration from the world 's best cuisines, and create a unique fusion experience. our lipsmacking creations will tickel your culinary senses!</p> < /
            div > <
            /div> < /
            div > <
            /Jumbotron> < / >
        );
    }
}
export default Header;