import { useState } from "react";

const Option2 = ({
  handleChange,
  option,
  optionArticle2Class,
  optionPledgeDiv2Class,
}) => {

  return (
    <article className={optionArticle2Class}>
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
      <div className={optionPledgeDiv2Class}>
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

export default Option2;
