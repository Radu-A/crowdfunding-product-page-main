import { useMediaQuery } from "react-responsive";
import imageHeroMobile from "../../assets/image-hero-mobile.jpg";
import imageHeroDesktop from "../../assets/image-hero-desktop.jpg";

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
        ></header>
      ) : (
        <header
          className="smartphone-header"
          style={{
            backgroundImage: `url(${imageHeroMobile})`,
          }}
        ></header>
      )}
    </>
  );
};

export default Header;
