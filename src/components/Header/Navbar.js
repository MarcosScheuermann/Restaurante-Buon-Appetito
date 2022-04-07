import React from "react";
import "./Navbar.css";
import {HiMenuAlt2 } from "react-icons/hi";
import {RiCloseFill } from "react-icons/ri";

const Navbar = ({ navbarLinks }) => {
  return (
    <nav className="navbar">
        <span className="navbar_logo">BonAppetito</span>
      <ul className="navbar_list">
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