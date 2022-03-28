import React from "react";
import "./Header.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    
      <Navbar collapseOnSelect expand="lg" variant="dark" className="header">
      <Container >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Página principal</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <NavDropdown title="Mas" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Productos">Menú</NavDropdown.Item>
              <NavDropdown.Item href="#">Promociones</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/#">Contacto</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/img/Logo_Buon_Appetito.png"
              width="100"
              height="100"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/Admin">Administrador</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    
  );
};

export default Header;
