import React from "react";
import "./NavDesktopMenuList.scss";

const NavDesktopMenuList = () => {
  return (
    <nav className="desktop-menu-list-container">
      <ul className="desktop-menu-list-wrapper">
        <li className="desktop-menu-list-item">
          <a href="#" className="desktop-menu-link">
            Home
          </a>
        </li>
        <li className="desktop-menu-list-item">
          <a href="#" className="desktop-menu-link">
            About Us
          </a>
        </li>
        <li className="desktop-menu-list-item">
          <a href="#" className="desktop-menu-link">
            Testimoni
          </a>
        </li>
        <li className="desktop-menu-list-item">
          <a href="#" className="desktop-menu-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavDesktopMenuList;
