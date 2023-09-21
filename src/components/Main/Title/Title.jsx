import { useMediaQuery } from "react-responsive";

import iconBookmark from "../../../assets/icon-bookmark.svg";
import logoMastercraft from "../../../assets/logo-mastercraft.svg";
import { useContext } from "react";
import { ShowBackModalContext } from "../../../context/showBackModalContext";

const Title = () => {

  const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });

  const {showBackModal} = useContext(ShowBackModalContext);

  return (
    <section className="title-section">
      <img className="logo-mastercraft" src={logoMastercraft} alt="" />
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="title-button-div">
        <button className="back-button" onClick={showBackModal}>Back this project</button>
        {isDesktop ? (
          <button className="bookmark-button">
            <img src={iconBookmark} alt="" />
            <span>Bookmark</span>
          </button>
        ) : (
          <button className="bookmark-button">
            <img src={iconBookmark} alt="" />
          </button>
        )}
      </div>
    </section>
  );
};

export default Title;
