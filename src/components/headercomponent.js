import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalBody, ModalHeader, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handlelogin = this.handlelogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }
    handlelogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.checked);
        event.preventDefault();
    }
    render() {
        return ( <
            >
            <
            Navbar dark expand = "md" >
            <
            div className = "container" >
            <
            NavbarToggler onClick = { this.toggleNav }
            /> <
            NavbarBrand className = "mr-auto"
            href = "/" >
            <
            img src = "assets/images/logo.png"
            height = "30"
            width = "41"
            alt = "Ristorante Con Fusion" / >
            <
            /NavbarBrand> <
            Collapse isOpen = { this.state.isNavOpen }
            navbar >

            <
            Nav navbar >
            <
            NavItem >
            <
            NavLink className = "nav-link"
            to = "/home" >
            <
            span className = "fa fa-home fa-lg" > < /span>Home < /
            NavLink > <
            /NavItem> <
            NavItem >
            <
            NavLink className = "nav-link"
            to = "/aboutus" >
            <
            span className = "fa fa-info fa-lg" > < /span>About us < /
            NavLink > <
            /NavItem> <
            NavItem >
            <
            NavLink className = "nav-link"
            to = "/menu" >
            <
            span className = "fa fa-list fa-lg" > < /span>Menu < /
            NavLink > <
            /NavItem> <
            NavItem >
            <
            NavLink className = "nav-link"
            to = "/contactus" >
            <
            span className = "fa fa-address-card fa-lg" > < /span>Contact us < /
            NavLink > <
            /NavItem> < /
            Nav >
            <
            Nav className = "ml-auto"
            navbar >
            <
            NavItem >
            <
            Button outline onClick = { this.toggleModal } >
            <
            span className = "fa fa-sign-in fa-lg" > < /span>Log in < /
            Button > <
            /NavItem> < /
            Nav > < /
            Collapse > < /
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
            /Jumbotron> <
            Modal isOpen = { this.state.isModalOpen }
            toggle = { this.toggleModal } >
            <
            ModalHeader toggle = { this.toggleModal } > Login < /ModalHeader> <
            ModalBody >
            <
            Form onSubmit = { this.handlelogin } >
            <
            FormGroup >
            <
            Label htmlFor = "username" > Username < /Label> <
            Input type = "text"
            name = "username"
            id = "username"
            innerRef = {
                (input) => this.username = input
            }
            /> < /
            FormGroup > <
            FormGroup >
            <
            Label htmlFor = "password" > Password < /Label> <
            Input type = "password"
            name = "password"
            id = "password"
            innerRef = {
                (input) => this.password = input
            }
            /> < /
            FormGroup > <
            FormGroup check >
            <
            Label check >
            <
            Input type = "checkbox"
            name = "remember"
            innerRef = {
                (input) => this.remember = input
            }
            / >
            Remember me <
            /Label> < /
            FormGroup > <
            FormGroup >
            <
            Button type = "submit"
            value = "submit"
            color = "primary" >
            Log In <
            /Button> < /
            FormGroup > <
            /Form> < /
            ModalBody > < /
            Modal > < / >
        );
    }
}
export default Header;