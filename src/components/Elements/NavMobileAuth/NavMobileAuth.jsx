import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./NavMobileAuth.scss";

import GoogleIcon from "../../../assets/icons/GoogleIcon";
import FacebookIcon from "../../../assets/icons/FacebookIcon";
import EmailIcon from "../../../assets/icons/EmailIcon";
import TelephoneIcon from "../../../assets/icons/TelephoneIcon";
import { Link } from "react-router-dom";

const NavMobileAuth = () => {
  const slideFromLeft = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={slideFromLeft}
          className="mobile-auth-container"
        >
          <div className="mobile-auth-wrapper">
            <h1 className="mobile-auth-title">
              Vite<span>.</span>Trip
            </h1>
            <ul className="mobile-auth-button-list-wrapper">
              <Link to={"/"} className="mobile-auth-button-item">
                <GoogleIcon />
                Lanjutkan Dengan Google
              </Link>
              <Link to={"/"} className="mobile-auth-button-item">
                <FacebookIcon /> Lanjutkan Dengan Facebook
              </Link>
              <Link to={"/"} className="mobile-auth-button-item">
                <EmailIcon />
                Lanjutkan Dengan Email
              </Link>
              <Link to={"/"} className="mobile-auth-button-item">
                <TelephoneIcon />
                Lanjutkan Dengan No. Telephone
              </Link>
            </ul>
            <div className="mobile-auth-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur repellat, blanditiis ipsum nemo fugiat placeat aliquid
              iusto error quibusdam odio!
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default NavMobileAuth;
