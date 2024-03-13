import { Nav, Navbar, NavbarBrand, NavItem, NavbarToggler, Collapse } from "reactstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import NucampLogo from "../img/logo.png"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <Navbar dark color='info' sticky='top' expand='md'>
            <NavbarBrand className="ms-5" href="/">
                <img src={NucampLogo} alt="nu-camp logo" className="float-start"/>
                <h1>Restaurant</h1>
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/">
                            Main Page
                        </NavLink>
                    </NavItem>
                
                    <NavItem>
                        <NavLink className="nav-link" to="/reservation">
                            Reservation Page
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className="nav-link" to="/search">
                            Search Page
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;