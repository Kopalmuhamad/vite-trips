import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="social-media-wrapper">
            <a href="#" className="social-media-icon">
              <i className="uil uil-instagram-alt"></i>
            </a>
            <a href="#" className="social-media-icon">
              <i className="uil uil-facebook"></i>
            </a>
            <a href="#" className="social-media-icon">
              <i className="uil uil-whatsapp-alt"></i>
            </a>
            <a href="#" className="social-media-icon">
              <i className="uil uil-github"></i>
            </a>
            <a href="#" className="social-media-icon">
              <i className="uil uil-phone"></i>
            </a>
          </div>
          <ul className="footer-menu-list-wrapper">
            <li className="footer-menu-list-item">
              <a href="" className="footer-menu-link">
                Home
              </a>
            </li>
            <li className="footer-menu-list-item">
              <a href="" className="footer-menu-link">
                About Us
              </a>
            </li>
            <li className="footer-menu-list-item">
              <a href="" className="footer-menu-link">
                Testimoni
              </a>
            </li>
            <li className="footer-menu-list-item">
              <a href="" className="footer-menu-link">
                Contact
              </a>
            </li>
          </ul>
          <div className="copyright-text">© Copyright Allright Reserved</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
