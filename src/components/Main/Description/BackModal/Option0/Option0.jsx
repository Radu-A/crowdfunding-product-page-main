import { useContext } from "react";
import { SelectOptionContext } from "../../../../../context/selectOptionContext";
import { ThanksModalContext } from "../../../../../context/thanksModalContext";
import { ShowBackModalContext } from "../../../../../context/showBackModalContext";

const Option0 = () => {
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
    <article className={optionArticleClass.optionArticle0}>
      <div className="option-heading-div">
        <input
          className="option-radio"
          type="radio"
          name="option"
          id="option-radio-0"
          value="no-reward"
          checked={option === "no-reward"}
          onChange={handleChange}
        />
        <label htmlFor="option-radio-0" className="option-label">
          <h3 className="option-heading-1">Pledge with no reward</h3>
        </label>
      </div>
      <p className="option-paragraph">
        Choose to support us without a reward if you simply believe in our
        project. As a backer, you will be signed up to receive product updates
        via email.
      </p>
      <div className={optionPledgeClass.optionPledge0}>
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

export default Option0;
