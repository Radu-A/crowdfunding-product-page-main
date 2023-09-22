import { useState } from "react";

const Option0 = ({
  handleChange,
  option,
  optionArticle0Class,
  optionPledgeDiv0Class,
}) => {

  return (
    <article className={optionArticle0Class}>
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
        <label htmlFor="option-radio-0">
          <h3 className="option-heading-1">Pledge with no reward</h3>
        </label>
      </div>
      <p className="option-paragraph">
        Choose to support us without a reward if you simply believe in our
        project. As a backer, you will be signed up to receive product updates
        via email.
      </p>
      <div className={optionPledgeDiv0Class}>
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

export default Option0;
