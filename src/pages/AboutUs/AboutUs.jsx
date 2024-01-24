import React from "react";
import "./AboutUs.scss";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>About Us</h1>
      <p>
        This Page Still Develop. Please wait For Update, thank you for visiting
      </p>
      <Link to={"/"}>Back To Home</Link>
      <Link to={"https://linkedin.com/in/muhamad-kopal"}>
        Go to my Linked In
      </Link>
    </div>
  );
};

export default AboutUs;
