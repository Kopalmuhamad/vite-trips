import React from "react";
import "./NavMobileMenuList.scss";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const NavMobileMenuList = () => {
  const slideToTop = {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  };

  return (
    <AnimatePresence>
      <motion.nav
        initial="initial"
        animate="animate"
        exit="exit"
        variants={slideToTop}
        className="mobile-menu-list-container"
      >
        <ul className="mobile-menu-list-wrapper">
          <li className="mobile-menu-list-item">
            <Link to={"/"} className="mobile-menu-link">
              Home
            </Link>
          </li>
          <li className="mobile-menu-list-item">
            <Link to={"/aboutUs"} className="mobile-menu-link">
              About Us
            </Link>
          </li>
          <li className="mobile-menu-list-item">
            <Link to={"#testimoni"} className="mobile-menu-link">
              Testimoni
            </Link>
          </li>
          <li className="mobile-menu-list-item">
            <Link to={"#contact"} className="mobile-menu-link">
              Contact
            </Link>
          </li>
        </ul>
      </motion.nav>
    </AnimatePresence>
  );
};

export default NavMobileMenuList;
