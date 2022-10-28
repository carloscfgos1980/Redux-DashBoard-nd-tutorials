import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBarComp = () => {
    return (
        <Navbar bg="dark" expand="sm" variant='dark'>
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

            </Container>
        </Navbar>
    );
}

export default NavBarComp;