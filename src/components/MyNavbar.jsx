import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Component } from "react";


class MyNavbar extends Component {
    render() {
        return (
            <Navbar bg="transparent" expand="lg" >
              <Container className="mx-0">
                <Navbar.Brand href="#home"><img id="netflix-navbar-logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        )
    }
  
}

export default MyNavbar;



