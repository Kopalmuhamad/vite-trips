import React from "react";
import "./ToggleMenu.scss";

const ToggleMenu = ({ isMenuOpen, onClick }) => {
  return (
    <div
      className={`toggle-container toggle-menu ${isMenuOpen}`}
      onClick={onClick}
    >
      <div className="toggle-line"></div>
      <div className="toggle-line"></div>
      <div className="toggle-line"></div>
    </div>
  );
};

export default ToggleMenu;
