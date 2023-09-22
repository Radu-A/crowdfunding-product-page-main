import { useState } from "react";

const Option2 = () => {
  const [optionPledgeClass, setOptionPledgeClass] =
    useState("option-pledge-div");
  const [optionArticleClass, setOptionArticleClass] =
    useState("option-article");

  const handleFocus = () => {
    setOptionPledgeClass("option-pledge-div option-pledge-div-active");
    setOptionArticleClass("option-article option-article-active");
  };
  const handleBlur = () => {
    setOptionPledgeClass("option-pledge-div");
    setOptionArticleClass("option-article")
  };

  return (
    <article className={optionArticleClass}>
      <div className="option-heading-div">
        <input
          className="option-radio"
          type="radio"
          name="option"
          id="option-radio-2"
          onFocus={handleFocus}
          onBlur={handleBlur}
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
      <div className={optionPledgeClass}>
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
