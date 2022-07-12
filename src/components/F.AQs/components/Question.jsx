import React, { useState } from "react";
import "./css/faq.css";
import Solution from "./Solution";

const Question = ({ faq }) => {
  const [dropdown, setDropdown] = useState(false);

  const openDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <div className="answer-container">
      <div onClick={openDropdown} className="question-container">
        <strong>{faq.questions}</strong>
        {dropdown && (
          <div>
            <Solution faq={faq} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
