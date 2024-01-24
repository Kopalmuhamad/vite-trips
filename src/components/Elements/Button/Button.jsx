import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

const Button = ({ to, variant, children, classname }) => {
  return (
    <Link to={to} className={`button ${variant ? "primary" : ""} ${classname}`}>
      {children}
    </Link>
  );
};

export default Button;
