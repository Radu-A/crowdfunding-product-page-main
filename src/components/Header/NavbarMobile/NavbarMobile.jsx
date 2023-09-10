import logo from "../../../assets/logo.svg";
import iconHamburger from "../../../assets/icon-hamburger.svg";

const NavbarMobile = () => {
  return (
    <nav className="navbar-mobile">
      <img src={logo} alt="" />
      <img src={iconHamburger} alt="" />
      <ul className="menu-mobile">
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
      <div className="menu-layer"></div>
    </nav>
  );
};

export default NavbarMobile;
