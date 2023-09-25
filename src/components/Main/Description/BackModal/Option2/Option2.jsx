import { useContext } from "react";
import { SelectOptionContext } from "../../../../../context/selectOptionContext";
import { ShowBackModalContext } from "../../../../../context/showBackModalContext";
import { ThanksModalContext } from "../../../../../context/thanksModalContext";

const Option2 = () => {
  const { showBackModal } = useContext(ShowBackModalContext);
  const {
    handleChange,
    option,
    optionArticleClass,
    optionPledgeClass,
    backModalRef,
  } = useContext(SelectOptionContext);
  const { showThanksModal } = useContext(ThanksModalContext);
  const handleClick = (event) => {
    showBackModal(event);
    showThanksModal(event);
    backModalRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <article className={optionArticleClass.optionArticle2}>
      <div className="option-heading-div">
        <input
          className="option-radio"
          type="radio"
          name="option"
          id="option-radio-2"
          value="black"
          checked={option === "black"}
          onChange={handleChange}
        />
        <label htmlFor="option-radio-2" className="option-label">
          <h3 className="option-heading-1">Black Edition Stand</h3>
          <h3 className="option-heading-2">Pledge $75 or more</h3>
        </label>
      </div>
      <p className="option-paragraph">
        You get a Black Special Edition computer stand and a personal thank you.
        You’ll be added to our Backer member list. Shipping is included.
      </p>
      <div className="option-span-div">
        <span className="span-big option-span-1">64</span>
        <span className="span-small option-span-2">left</span>
      </div>
      <div className={optionPledgeClass.optionPledge2}>
        <p>Enter you pledge</p>
        <form action="" className="option-pledge-form">
          <div className="input-div">
            <span>$</span>
            <input type="number" min="25" max="999" />
          </div>
          <button type="submit" onClick={handleClick}>
            Continue
          </button>
        </form>
      </div>
    </article>
  );
};

export default Option2;
