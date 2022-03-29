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
  );
};

export default Header;
