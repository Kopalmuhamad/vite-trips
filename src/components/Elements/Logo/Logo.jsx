import React from "react";
// ! Import Styling
import "./Logo.scss";

// ! Import utils
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="nav-logo">
      Vite<span>.</span>Trip
    </Link>
  );
};

export default Logo;
