import { useContext } from "react";
import { ShowBackModalContext } from "../../../../context/showBackModalContext";
import { SelectOptionContext } from "../../../../context/selectOptionContext";

const Option1 = () => {
  const { showBackModal } = useContext(ShowBackModalContext);
  const { handleChange, backModalRef } = useContext(SelectOptionContext);

  const handleClick = (event) => {
    showBackModal(event);
    handleChange(event, "bamboo");
    backModalRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <article className="option-article">
      <div className="option-heading-div">
        <h3 className="option-heading-1">Bamboo Stand</h3>
        <h3 className="option-heading-2">Pledge $25 or more</h3>
      </div>
      <p className="option-paragraph">
        You get an ergonomic stand made of natural bamboo. You've helped us
        launch our promotional campaign, and you’ll be added to a special Backer
        member list.
      </p>
      <div className="option-span-div">
        <span className="span-big option-span-1">101 </span>
        <span className="span-small option-span-2">left</span>
      </div>
      <button onClick={handleClick}>Select Reward</button>
    </article>
  );
};

export default Option1;
