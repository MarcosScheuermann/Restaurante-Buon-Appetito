<<<<<<< HEAD
import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MyNavbar = styled(Navbar)`
  height: 40vh;
  background-color: var(--rust) !important;
  font-family: var(--rest-font) !important;
`;

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userLogged = JSON.parse(localStorage.getItem("user"));
    if (userLogged) {
      setUser(userLogged);
    } else {
    }
  }, []);

  return (
    <MyNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="rest-logo">
          Buon APPetito
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {user ? (
            <>
              <Nav className="me-auto">
                <Link to="/productos" className="nav-link">
                  Productos
                </Link>
                <Link to="/promociones" className="nav-link">
                  Promociones
                </Link>
              </Nav>
              <Nav className="ms-auto">
                <Nav>
                  <Link className="nav-link" to="/login">
                    Cerrar Cesion
                  </Link>
                </Nav>
              </Nav>
            </>
          ) : (
            <Nav className="ms-auto">
              <Nav.Link>
                <Link className="nav-link" to="/login">
                  Iniciar Cesion
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link" to="/register">
                  Registrarse
                </Link>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </MyNavbar>
=======
import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";



const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/" className="buon-logo"><img
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
        <NavDropdown.Item href="/Productos">Productos</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/Contacto">Contacto</NavDropdown.Item>
        <NavDropdown.Item href="/Admin">Administrador</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="/Nosotros">Nosotros</Nav.Link>
      <Nav.Link href="/Contacto">Contacto</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
>>>>>>> 6096d4b2be73d6fd377622dfd1f05630498e2728
  );
};

export default Header;
