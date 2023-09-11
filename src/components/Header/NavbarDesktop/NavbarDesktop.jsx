import React from "react";
import logo from "../../../assets/logo.svg";

const NavbarDesktop = () => {
  return (
    <nav className="navbar-desktop">
      <a href="">
        <img src={logo} alt="crowdfund logo" />
      </a>
      <ul className="menu-desktop">
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
    </nav>
  );
};

export default NavbarDesktop;
