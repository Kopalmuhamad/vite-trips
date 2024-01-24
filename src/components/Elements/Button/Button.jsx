import React from "react";
import "./Button.scss";

const Button = ({ href, variant, children, classname }) => {
  return (
    <a
      href={href}
      className={`button ${variant ? "primary" : ""} ${classname}`}
    >
      {children}
    </a>
  );
};

export default Button;
