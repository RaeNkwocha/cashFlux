import React, { useState } from "react";
import "./css/faq.css";
import Question from "./Question";
import { faqs } from "./questions/index";

const Main = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <div className="faq-header">
        <div>
          <h1>Frequently Asked Questions (FAQs)</h1>
        </div>
        <div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="search for a question"
          />
        </div>
      </div>
      <div className="faq">
        {faqs
          .filter((names) => names.questions.toLowerCase().includes(input))
          .map((faq) => (
            <div>
              <Question faq={faq} />
            </div>
          ))}{" "}
      </div>
    </>
  );
};

export default Main;
