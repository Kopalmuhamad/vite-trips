import React from "react";
import "./ToggleAuth.scss";

const ToggleAuth = ({ onClick }) => {
  return <i className="uil uil-user toggle-auth" onClick={onClick}></i>;
};

export default ToggleAuth;
