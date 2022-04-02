
import React from "react";
import "./Header.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="header">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/LandinPage">Página principal</Nav.Link>
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


// NAVBAR MARCOS MAQUETA
// import { useEffect, useState } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// const MyNavbar = styled(Navbar)`
//   height: 40vh;
//   background-color: var(--rust) !important;
//   font-family: var(--rest-font) !important;
// `;

// const Header = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const userLogged = JSON.parse(localStorage.getItem("user"));
//     if (userLogged) {
//       setUser(userLogged);
//     } else {
//     }
//   }, []);

//   return (
//     <MyNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand href="#home" className="rest-logo">
//           Buon APPetito
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           {user ? (
//             <>
//               <Nav className="me-auto">
//                 <Link to="/productos" className="nav-link">
//                   Productos
//                 </Link>
//                 <Link to="/promociones" className="nav-link">
//                   Promociones
//                 </Link>
//               </Nav>
//               <Nav className="ms-auto">
//                 <Nav>
//                   <Link className="nav-link" to="/login">
//                     Cerrar Cesion
//                   </Link>
//                 </Nav>
//               </Nav>
//             </>
//           ) : (
//             <Nav className="ms-auto">
//               <Nav.Link>
//                 <Link className="nav-link" to="/login">
//                   Iniciar Cesion
//                 </Link>
//               </Nav.Link>
//               <Nav.Link>
//                 <Link className="nav-link" to="/register">
//                   Registrarse
//                 </Link>
//               </Nav.Link>
//             </Nav>
//           )}
//         </Navbar.Collapse>
//       </Container>
//     </MyNavbar>
//   );
// };

// export default Header;
// =======

//HEADER LUCAS


export default Header;
