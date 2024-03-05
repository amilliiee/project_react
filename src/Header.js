import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import testLogo from './img/logo2.jpeg';

const Header = () => {
    return (
        <Navbar dark color='info' sticky='top' expand='md'>
            <Nav>
                <NavbarBrand>
                    Restaurant
                </NavbarBrand>
                <NavItem>
                    <NavLink active href="#">
                        Link
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        Another Link
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Header;