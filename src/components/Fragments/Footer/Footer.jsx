import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="social-media-wrapper">
            <Link
              to={"/https://www.instagram.com/kopalllmuhamad"}
              href="#"
              className="social-media-icon"
            >
              <i className="uil uil-instagram-alt"></i>
            </Link>
            <Link
              to={"/https://www.facebook.com/kopalmuhamad"}
              href="#"
              className="social-media-icon"
            >
              <i className="uil uil-facebook"></i>
            </Link>
            <Link
              to={"/https://wa.me/+62895620140500"}
              href="#"
              className="social-media-icon"
            >
              <i className="uil uil-whatsapp-alt"></i>
            </Link>
            <Link
              to={"/https://github.com/Kopalmuhamad"}
              href="#"
              className="social-media-icon"
            >
              <i className="uil uil-github"></i>
            </Link>
            <Link
              onClick={() => alert("callme on 0895620140500")}
              href="#"
              className="social-media-icon"
            >
              <i className="uil uil-phone"></i>
            </Link>
          </div>
          <ul className="footer-menu-list-wrapper">
            <li className="footer-menu-list-item">
              <Link to={"/"} href="" className="footer-menu-link">
                Home
              </Link>
            </li>
            <li className="footer-menu-list-item">
              <Link to={"/aboutUs"} href="" className="footer-menu-link">
                About Us
              </Link>
            </li>
            <li className="footer-menu-list-item">
              <Link to={"#testimoni"} href="" className="footer-menu-link">
                Testimoni
              </Link>
            </li>
            <li className="footer-menu-list-item">
              <Link to={"#contact"} href="" className="footer-menu-link">
                Contact
              </Link>
            </li>
          </ul>
          <div className="copyright-text">© Copyright Allright Reserved</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
