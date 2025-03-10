import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router';

function Header(props: { darkLightMode: boolean, toggleDarkLightMode: () => void }) {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>Mai page</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} to="Home">Home</Nav.Link>
                        <NavDropdown title="Games" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="TicTacToe">Tic Tac Toe</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="Snake">Snake</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="Tetris">Tetris</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="AboutMe">About me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <Nav>
                    <Nav.Link onClick={props.toggleDarkLightMode}>
                        { props.darkLightMode ? 'Dark' : 'Light' }mode
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;