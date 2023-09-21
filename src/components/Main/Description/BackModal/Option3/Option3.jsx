import React from "react";

const Option3 = () => {
  return (
    <article className="option-article option-article-3">
      <div className="option-heading-div">
        {/* <a className="select-button">
          <div className="checked-div"> 
          </div>
        </a> */}
        <input
          className="option-radio"
          type="radio"
          name="option"
          id="option-radio-3"
          disabled="true"
        />
        <div className="option-heading-subdiv">
          <h3 className="option-heading-1">Mahogany Special Edition</h3>
          <h3 className="option-heading-2">Pledge $200 or more</h3>
        </div>
      </div>
      <p className="option-paragraph">
        You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
        personal thank you. You’ll be added to our Backer member list. Shipping
        is included.
      </p>
      <div className="option-span-div">
        <span className="span-big option-span-1">0</span>
        <span className="span-small option-span-2">left</span>
      </div>
    </article>
  );
};

export default Option3;
