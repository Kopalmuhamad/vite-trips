import React, { useState } from "react";
// ! Import Styling
import "./Navbar.scss";

// ! Import Components
import Logo from "../../Elements/Logo/Logo";
import NavDesktopMenuList from "../../Elements/NavDesktopMenuList/NavDesktopMenuList";
import NavMobileMenuList from "../../Elements/NavMobileMenuList/NavMobileMenuList";
import NavToggleMenu from "../../Elements/ToggleMenu/ToggleMenu";
import NavToggleAuth from "../../Elements/ToggleAuth/ToggleAuth";
import NavMobileAuth from "../../Elements/NavMobileAuth/NavMobileAuth";
import Button from "../../Elements/Button/Button";

const Navbar = () => {
  // ToDo : State Navbar Menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // ToDo : State Profile
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // ToDo : Handle Navbar Menu
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsProfileOpen(false);
  };

  // ToDo : Handle Profile
  const handleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <main className="navbar-container">
          <Logo />
          <NavDesktopMenuList isMenuOpen={isMenuOpen} />
          <NavDesktopButtonAuth />
          {isMenuOpen && <NavMobileMenuList />}
          {isProfileOpen && <NavMobileAuth />}
          <NavToggleAuth onClick={handleProfile} />
          <NavToggleMenu isMenuOpen={isMenuOpen} onClick={handleMenu} />
        </main>
      </header>
    </>
  );
};

export default Navbar;

const NavDesktopButtonAuth = () => {
  return (
    <>
      <div className="nav-button-auth-wrapper">
        <Button href={"/"} variant="primary">
          Login
        </Button>
        <Button href={"/"}>Daftar</Button>
      </div>
    </>
  );
};
