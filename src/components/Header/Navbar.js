import React, {useState} from "react";
import "./Navbar.css";
import {HiMenuAlt2 } from "react-icons/hi";
import {RiCloseFill } from "react-icons/ri";

const Navbar = ({ navbarLinks }) => {

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
        {navbarLinks.map((item) => {
          return (
            <li className="navbar_item" key={item.title}>
              <a className="navbar_link" href={item.url}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};


export default Navbar;