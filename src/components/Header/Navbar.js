import React, {useState} from "react";
import "./Navbar.css";
import {HiMenuAlt2 } from "react-icons/hi";
import {RiCloseFill } from "react-icons/ri";
import {Link, useLocation} from "react-router-dom";
import {AiOutlineLogin} from "react-icons/ai";
import {MdOutlineSocialDistance, MdOutlineContactSupport} from "react-icons/md";




const Navbar = () => {

  const location = useLocation()
  console.log(location)

  const [menuClick, setMenuclick] = useState(false);

  const toggleMenu = () =>{
    setMenuclick(!menuClick);
  };

  
  

  return (

    <nav className="navbar">
        <a className="navbar_logo" href="/" >Buon Appetito</a>

        {menuClick?(
          <HiMenuAlt2 size={25} className="navbar_menu" onClick={toggleMenu}/>
          ):(
          <RiCloseFill size={25} className="navbar_menu" onClick={toggleMenu}/>
        )}

      <ul className={menuClick ? "navbar_list" : "navbar_list navbar_list--active"}>
        
            {location.pathname=="/Login"?
            <>
            <li className="navbar_item" >
              <Link className="navbar_link" to="/AboutUs"><MdOutlineSocialDistance className="m-2"/>Nosotros</Link>
            </li>
            <li className="navbar_item" >
              <Link className="navbar_link" to="#"><MdOutlineContactSupport className="m-2"/>Contacto</Link>
            </li>
            </>
            :
            <>
            <li className="navbar_item" >
              <Link className="navbar_link" to="/Login"><AiOutlineLogin className="m-2"/>Ingresar</Link>
            </li>
            <li className="navbar_item" >
              <Link className="navbar_link" to="/AboutUs"><MdOutlineSocialDistance className="m-2"/>Nosotros</Link>
            </li>
            <li className="navbar_item" >
              <Link className="navbar_link" to="#"><MdOutlineContactSupport className="m-2"/>Contacto</Link>
            </li>
            </>
            }
           
          
       
      </ul>
    </nav>
  );
};


export default Navbar;