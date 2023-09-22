import { useContext } from "react";
import { SelectOptionContext } from "../../../../../context/selectOptionContext";

const Option1 = () => {
  const {
    handleChange,
    option,
    optionArticleClass,
    optionPledgeClass,
  } = useContext(SelectOptionContext);

  return (
    <article className={optionArticleClass.optionArticle1}>
      <div className="option-heading-div">
        <input
          className="option-radio"
          type="radio"
          name="option"
          id="option-radio-1"
          value="bamboo"
          checked={option === "bamboo"}
          onChange={handleChange}
        />
        <label htmlFor="option-radio-1" className="option-label">
          <h3 className="option-heading-1">Bamboo Stand</h3>
          <h3 className="option-heading-2">Pledge $25 or more</h3>
        </label>
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
      <div className={optionPledgeClass.optionPledge1}>
        <p>Enter you pledge</p>
        <form action="" className="option-pledge-form">
          <div className="input-div">
            <span>$</span>
            <input type="number" min="25" max="999" />
          </div>
          <button type="submit">Continue</button>
        </form>
      </div>
    </article>
  );
};

export default Option1;
