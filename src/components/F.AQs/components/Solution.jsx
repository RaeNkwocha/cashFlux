import React from "react";

const Solution = ({ faq }) => {
  return (
    <div className="answers-para">
      <p>{faq.answer}</p>
    </div>
  );
};

export default Solution;
