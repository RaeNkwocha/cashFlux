import React from "react";
import "./features.css";
import FirstTab from "./components/FirstTab";

const Features = () => {
  return (
    <div>
      <div className="features-header" style={{ color: "black" }}>
        {" "}
        <div>
          <h1>FEATURES</h1>
        </div>
        <div className="features-para">
          <p>
            Cashflux is a digital wallet/payment service that provide secure
            payment option for customer and merchant with the use of Safetoken
            to complete a merchant initiated transaction.
          </p>
        </div>
      </div>

      {/* <div className="tabs-holder">
        {" "}
        <div className="tabs">
          <div className={toggleState === 3 ? "active-tabs-3" : null}></div>
          <div className={toggleState === 1 ? "active-tabs" : null}></div>
          <div className={toggleState === 2 ? "active-tabs-2" : null}></div>
        </div>
      </div> */}
      <FirstTab />
      {/* {toggleState === 2 ? <SecondTab /> : null}
      {toggleState === 3 ? <ThirdTab /> : null} */}
    </div>
  );
};

export default Features;
