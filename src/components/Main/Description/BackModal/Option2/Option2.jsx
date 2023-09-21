import React from "react";

const Option2 = () => {
  return (
    <article className="option-article">
      <div className="option-heading-div">
        {/* <a className="select-button">
          <div className="checked-div"> 
          </div>
        </a> */}
        <input
          className="option-radio"
          type="radio"
          name="option"
          id="option-radio-2"
        />
        <div className="option-heading-subdiv">
          <h3 className="option-heading-1">Black Edition Stand</h3>
          <h3 className="option-heading-2">Pledge $75 or more</h3>
        </div>
      </div>
      <p className="option-paragraph">
        You get a Black Special Edition computer stand and a personal thank you.
        You’ll be added to our Backer member list. Shipping is included.
      </p>
      <div className="option-span-div">
        <span className="span-big option-span-1">64</span>
        <span className="span-small option-span-2">left</span>
      </div>
    </article>
  );
};

export default Option2;
