import React from "react";
import "./NavDesktopMenuList.scss";
import { Link } from "react-router-dom";

const NavDesktopMenuList = () => {
  return (
    <nav className="desktop-menu-list-container">
      <ul className="desktop-menu-list-wrapper">
        <li className="desktop-menu-list-item">
          <Link to={"/"} className="desktop-menu-link">
            Home
          </Link>
        </li>
        <li className="desktop-menu-list-item">
          <Link to={"/aboutUs"} className="desktop-menu-link">
            About Us
          </Link>
        </li>
        <li className="desktop-menu-list-item">
          <Link to={"#testimoni"} className="desktop-menu-link">
            Testimoni
          </Link>
        </li>
        <li className="desktop-menu-list-item">
          <Link to={"#contact"} className="desktop-menu-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavDesktopMenuList;
