import { useState } from "react";

const Option1 = () => {
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
    setOptionArticleClass("option-article");
  };
  return (
    <article className={optionArticleClass}>
      <div className="option-heading-div">
        {/* <a className="select-button">
          <div className="checked-div"> 
          </div>
        </a> */}
        <input
          className="option-radio"
          type="radio"
          name="option"
          id="option-radio-1"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <label htmlFor="option-radio-1" className="option-heading-subdiv">
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

export default Option1;
