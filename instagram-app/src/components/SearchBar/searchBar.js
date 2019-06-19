import React, {Component} from 'react';
import {
    NavbarBrand, NavItem, NavLink, Nav, Navbar
} from 'reactstrap';
import './searchBar.css';
// import InstaImage from '';
// import InstaCam from '';

class SearchBar extends Component {
    render(){
        return (
            <Navbar className = "nav-wrapper">
                <NavbarBrand>
                    <div className = "logo-layout">
                        <div className = 'insta-cam-logo-wrapper'>
                            <img className = 'logo' />
                        </div>
                        <div className = "insta-logo-wrapper">
                            <img className = 'logo' />
                        </div>
                    </div>
                </NavbarBrand>
                <Nav>
                    <input className = "fancy-search" type = "text" placeholder = "search" />
                </Nav>
                <Nav>
                    <NavItem>
                        <NavLink href = "/">
                            Icon
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default SearchBar;