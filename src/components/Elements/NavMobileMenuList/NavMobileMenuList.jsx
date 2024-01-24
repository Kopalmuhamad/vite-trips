import React from "react";
import "./NavMobileMenuList.scss";
import { motion, AnimatePresence } from "framer-motion";

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
            <a href="#" className="mobile-menu-link">
              Home
            </a>
          </li>
          <li className="mobile-menu-list-item">
            <a href="#" className="mobile-menu-link">
              About Us
            </a>
          </li>
          <li className="mobile-menu-list-item">
            <a href="#" className="mobile-menu-link">
              Testimoni
            </a>
          </li>
          <li className="mobile-menu-list-item">
            <a href="#" className="mobile-menu-link">
              Contact
            </a>
          </li>
        </ul>
      </motion.nav>
    </AnimatePresence>
  );
};

export default NavMobileMenuList;
