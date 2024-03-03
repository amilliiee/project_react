import { Navbar, NavbarBrand } from "reactstrap";
import testLogo from './img/logo.png';

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand href="/">
                <img src={testLogo} />
            </NavbarBrand>
        </Navbar>
    )
}

export default Header;