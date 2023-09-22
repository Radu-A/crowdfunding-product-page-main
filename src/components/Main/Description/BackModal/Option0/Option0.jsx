import { useState } from "react";

const Option0 = () => {
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
          id="option-radio-0"
          onFocus={handleFocus}
          onBlur={handleBlur}
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

export default Option0;
