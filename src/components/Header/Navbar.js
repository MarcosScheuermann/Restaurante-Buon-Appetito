import React, {useState} from "react";
import "./Navbar.css";
import {HiMenuAlt2 } from "react-icons/hi";
import {RiCloseFill } from "react-icons/ri";
import {Link, useLocation} from "react-router-dom";




const Navbar = () => {

  const location = useLocation()
  console.log(location)

  const [menuClick, setMenuclick] = useState(false);

  const toggleMenu = () =>{
    setMenuclick(!menuClick);
  };

  
  

  return (

    <nav className="navbar">
        <span className="navbar_logo">Buon Appetito</span>

        {menuClick?(
          <HiMenuAlt2 size={25} className="navbar_menu" onClick={toggleMenu}/>
          ):(
          <RiCloseFill size={25} className="navbar_menu" onClick={toggleMenu}/>
        )}

      <ul className={menuClick ? "navbar_list" : "navbar_list navbar_list--active"}>
        
            {location.pathname=="/Login"?
            <>
            <li className="navbar_item" >
              <Link className="navbar_link" to="/AboutUs">Nosotros</Link>
            </li>
            <li className="navbar_item" >
              <Link className="navbar_link" to="#">Contacto</Link>
            </li>
            </>
            :
            <>
            <li className="navbar_item" >
              <Link className="navbar_link" to="/Login">Ingresar</Link>
            </li>
            <li className="navbar_item" >
              <Link className="navbar_link" to="/AboutUs">Nosotros</Link>
            </li>
            <li className="navbar_item" >
              <Link className="navbar_link" to="#">Contacto</Link>
            </li>
            </>
            }
           
          
       
      </ul>
    </nav>
  );
};


export default Navbar;