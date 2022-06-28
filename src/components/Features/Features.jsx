import React, { useState } from "react";
import "./features.css";
import FirstTab from "./components/FirstTab";
import SecondTab from "./components/SecondTab";
import ThirdTab from "./components/ThirdTab";
const Features = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div style={{ color: "white" }}>
      <div className="features-header">
        {" "}
        <div>
          <h1>FEATURES</h1>
        </div>
        <div className="features-para">
          <p>
            Morbi varius ante quis libero blandit auctor phasellus rhoncus
            varius nulla nec tristique. Vivamus quis placerat nisi. Duis
            suscipit feugiat neque eget bus
          </p>
        </div>
      </div>
      <div className="tab-list">
        <button
          style={{
            background: "none",
            color: "white",
            border: "none",
            outline: "none",
          }}
          onClick={() => toggleTab(1)}
        >
          <p>CONFIGURING</p>
        </button>
        <button
          onClick={() => toggleTab(2)}
          style={{
            background: "none",
            color: "white",
            border: "none",
            outline: "none",
          }}
        >
          <p>TRACKING</p>
        </button>
        <button
          onClick={() => toggleTab(3)}
          style={{
            background: "none",
            color: "white",
            border: "none",
            outline: "none",
          }}
        >
          {" "}
          <p>MONITORING</p>
        </button>
      </div>
      <div className="tabs-holder">
        {" "}
        <div className="tabs">
          <div className={toggleState === 3 ? "active-tabs-3" : null}></div>
          <div className={toggleState === 1 ? "active-tabs" : null}></div>
          <div className={toggleState === 2 ? "active-tabs-2" : null}></div>
        </div>
      </div>
      {toggleState === 1 ? <FirstTab /> : null}
      {toggleState === 2 ? <SecondTab /> : null}
      {toggleState === 3 ? <ThirdTab /> : null}
    </div>
  );
};

export default Features;
