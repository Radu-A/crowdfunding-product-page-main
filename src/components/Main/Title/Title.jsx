import { useMediaQuery } from "react-responsive";

import iconBookmark from "../../../assets/icon-bookmark.svg";
import iconBookmarkCyan from "../../../assets/icon-bookmark-cyan.svg";
import logoMastercraft from "../../../assets/logo-mastercraft.svg";
import { useContext, useState } from "react";
import { ShowBackModalContext } from "../../../context/showBackModalContext";

const Title = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });

  const { showBackModal } = useContext(ShowBackModalContext);

  const [bookmarkedButtonClass, setBookmarkedButtonClass] =
    useState("bookmark-button");

  const handleClick = (event) => {
    event.preventDefault();
    if (bookmarkedButtonClass === "bookmark-button") {
      setBookmarkedButtonClass("bookmark-button bookmark-button-active");
    } else {
      setBookmarkedButtonClass("bookmark-button");
    }
    console.log(bookmarkedButtonClass);
  };

  return (
    <section className="title-section">
      <img className="logo-mastercraft" src={logoMastercraft} alt="" />
      <h1>Mastercraft Bamboo Monitor Riser</h1>
      <p>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="title-button-div">
        <button className="back-button" onClick={showBackModal}>
          Back this project
        </button>
        {isDesktop ? (
          <button className={bookmarkedButtonClass} onClick={handleClick}>
            {bookmarkedButtonClass === "bookmark-button" ? (
              <img src={iconBookmark} alt="" />
            ) : (
              <img src={iconBookmarkCyan} alt="" />
            )}
            <span>Bookmark</span>
          </button>
        ) : (
          <button className={bookmarkedButtonClass} onClick={handleClick}>
            {bookmarkedButtonClass === "bookmark-button" ? (
              <img src={iconBookmark} alt="" />
            ) : (
              <img src={iconBookmarkCyan} alt="" />
            )}
          </button>
        )}
      </div>
    </section>
  );
};

export default Title;
