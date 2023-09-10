import { useMediaQuery } from "react-responsive";
import imageHeroMobile from "../../assets/image-hero-mobile.jpg";
import imageHeroDesktop from "../../assets/image-hero-desktop.jpg";
import NavbarDesktop from "./NavbarDesktop/NavbarDesktop";
import NavbarMobile from "./NavbarMobile/NavbarMobile";

const Header = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });

  return (
    <>
      {isDesktop ? (
        <header
          className="desktop-header"
          style={{
            backgroundImage: `url(${imageHeroDesktop})`,
          }}
        >
          <NavbarDesktop />
        </header>
      ) : (
        <header
          className="smartphone-header"
          style={{
            backgroundImage: `url(${imageHeroMobile})`,
          }}
        >
          <NavbarMobile />
        </header>
      )}
    </>
  );
};

export default Header;
