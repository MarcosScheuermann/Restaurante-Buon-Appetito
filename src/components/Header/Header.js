import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";



const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/" className=""><img
          alt=""
          src="/img/Logo_BuonAppetito.jpg"
          width="100"
          height="100"
          className="d-inline-block align-top"
        />Buon Appetito</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">Página principal</Nav.Link>
      <Nav.Link href="/Login">Login</Nav.Link>
      <NavDropdown title="Mas" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/Productos">Menú</NavDropdown.Item>
        <NavDropdown.Item href="#">Promociones</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/#">Otros</NavDropdown.Item>
              </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="/Admin">Administrador</Nav.Link>
      <Nav.Link href="/Nosotros">Nosotros</Nav.Link>
      <Nav.Link href="/Contacto">Contacto</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Header;
