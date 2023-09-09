import React from "react";

const Resume = () => {
  return (
    <section className="resume-section">
      <article className="resume-article resume-article-1">
        <span className="span-big resume-span">$89,914</span>
        <span className="span-small"> of $100,000 backed</span>
      </article>
      <div className="border"></div>
      <article className="resume-article resume-article-2">
        <span className="span-big resume-span">5,007</span>
        <span className="span-small">total backers</span>
      </article>
      <div className="border"></div>
      <article className="resume-article resume-article-3">
        <span className="span-big resume-span">56</span>
        <span className="span-small">days left</span>
      </article>
    </section>
  );
};

export default Resume;
