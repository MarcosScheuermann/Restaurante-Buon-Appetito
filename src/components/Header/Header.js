import "./Header.css";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { IoMdContacts } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { MdRestaurantMenu } from "react-icons/md";

const Header = () => {
  const user = false;

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="header">
      <Container>
        <div>
          <img
            alt=""
            src="/img/Logo_Buon_Appetito.png"
            className="d-inline-block align-top logo"
          />
        </div>

        < a href="/LandingPage" className="titulo">
          Buon Appetito
        </a>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {user ? (
              <Nav.Link href="/Login" className="headerLink">
                Login
                <FiLogIn size={30} style={{ marginLeft: "15px" }}/>
              </Nav.Link>
            ) : (
              <Nav.Link href="/Home" className="headerLink">
                Menú
                <MdRestaurantMenu size={30} style={{ marginLeft: "15px" }}/>
              </Nav.Link>
            )}
          </Nav>
          <Nav>
          <Nav.Link href="/Contact">
            Contacto
            <IoMdContacts size={30} style={{ marginLeft: "15px" }}/>
          </Nav.Link>
            <Nav.Link href="/Admin">
              Administrador
              <RiAdminFill size={30} style={{ marginLeft: "15px" }}/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

//size={30} style={{ marginLeft: "15px" }}

export default Header;

// import { useEffect, useState } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// NAVBAR MARCOS MAQUETA

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
