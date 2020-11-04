import React, { Fragment } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../redux/actions/auth';

function NavbarComp({ auth: { isAuthenticated, loading }, logout }) {

    const authLinks = (
        <Link to="" onClick={logout} className="nav-link">Logout</Link>
    );

    const guestLinks = (
        <Fragment>
            <Link to='/login' className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
        </Fragment>
    )
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {
                        !loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks} </Fragment>)
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

NavbarComp.prototype = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logout }
)(NavbarComp);
