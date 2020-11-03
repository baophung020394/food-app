import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NavbarComp() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to='/login' className="nav-link">Login</Link>
                    <Link to="/register" className="nav-link">Register</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComp
