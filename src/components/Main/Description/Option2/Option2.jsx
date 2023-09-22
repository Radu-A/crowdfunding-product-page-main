import { useContext } from "react";
import { SelectOptionContext } from "../../../../context/selectOptionContext";
import { ShowBackModalContext } from "../../../../context/showBackModalContext";

const Option2 = () => {
  const { showBackModal } = useContext(ShowBackModalContext);
  const { handleChange, backModalRef } = useContext(SelectOptionContext);

  const handleClick = (event) => {
    showBackModal(event);
    handleChange(event, "black");
    backModalRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <article className="option-article">
      <div className="option-heading-div">
        <h3 className="option-heading-1">Black Edition Stand</h3>
        <h3 className="option-heading-2">Pledge $75 or more</h3>
      </div>
      <p className="option-paragraph">
        You get a Black Special Edition computer stand and a personal thank you.
        You’ll be added to our Backer member list. Shipping is included.
      </p>
      <div className="option-span-div">
        <span className="span-big option-span-1">64</span>
        <span className="span-small option-span-2">left</span>
      </div>
      <button onClick={handleClick}>Select Reward</button>
    </article>
  );
};

export default Option2;
