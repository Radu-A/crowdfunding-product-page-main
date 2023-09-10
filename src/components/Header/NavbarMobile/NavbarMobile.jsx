import logo from "../../../assets/logo.svg";
import iconHamburger from "../../../assets/icon-hamburger.svg";
import iconClose from "../../../assets/icon-close-menu.svg";
import { useState } from "react";

const NavbarMobile = () => {
  const [navbarIcon, setNavbarIcon] = useState(iconHamburger);
  const [navbarClass, setNavbarClass] = useState("navbar-mobile");
  const [mobileMenuClass, setMobileMenuClass] = useState("menu-mobile");
  const [layerClass, setLayerClass] = useState("menu-layer");

  const openMobileMenu = () => {
    setLayerClass("menu-layer active")
    setNavbarClass("navbar-mobile navbar-mobile-fixed");
    setNavbarIcon(iconClose);
    setMobileMenuClass("menu-mobile active");
  };

  const closeMobileMenu = () => {
    setLayerClass("menu-layer")
    setNavbarClass("navbar-mobile");
    setNavbarIcon(iconHamburger);
    setMobileMenuClass("menu-mobile");
  };

  return (
    <nav className={navbarClass}>
      <img src={logo} alt="crowdfund logo" />
      {navbarIcon === iconHamburger ? (
        <img
          src={iconHamburger}
          alt="icon-hamburger"
          onClick={openMobileMenu}
        />
      ) : (
        <img src={iconClose} alt="icon-hamburger" onClick={closeMobileMenu} />
      )}
      <ul className={mobileMenuClass}>
        <li className="menu-item">
          <a className="menu-link" href="#">
            About
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="#">
            Discover
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link" href="#">
            Get Started
          </a>
        </li>
      </ul>
      <div className={layerClass}></div>
    </nav>
  );
};

export default NavbarMobile;
