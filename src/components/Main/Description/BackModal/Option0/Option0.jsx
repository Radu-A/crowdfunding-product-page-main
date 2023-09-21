import React from "react";

const Option0 = () => {
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
          id="option-radio-0"
        />
        <h3 className="option-heading-1">Pledge with no reward</h3>
      </div>
      <p className="option-paragraph">
        Choose to support us without a reward if you simply believe in our
        project. As a backer, you will be signed up to receive product updates
        via email.
      </p>
    </article>
  );
};

export default Option0;
