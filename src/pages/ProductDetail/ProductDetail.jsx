import React from "react";
import { Link } from "react-router-dom";

const ProductDetail = () => {
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
      <h1>Product Detail</h1>
      <p>
        This Page Still Develop. Please wait For Update, thank you for visiting
      </p>
      <Link to={"https://linkedin.com/in/muhamad-kopal"}></Link>
      <Link to={"/"}>Back To Home</Link>
    </div>
  );
};

export default ProductDetail;
