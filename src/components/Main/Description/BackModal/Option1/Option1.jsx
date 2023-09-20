import React from "react";

const Option1 = () => {
  return (
    <article className="option-article">
      <div className="option-heading-div">
        <a className="select-button">
          <div className="checked-div"> 
          </div>
        </a>
        <div className="option-heading-subdiv">
          <h3 className="option-heading-1">Bamboo Stand</h3>
          <h3 className="option-heading-2">Pledge $25 or more</h3>
        </div>
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
    </article>
  );
};

export default Option1;
