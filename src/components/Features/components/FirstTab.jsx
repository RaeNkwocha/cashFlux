import React from "react";
import screenshot from "../images/screenshot-1.png";

const FirstTab = () => {
  return (
    <div className="first-tab-holder" style={{ color: "black" }}>
      <div className="first-tab">
        <div>
          <div className="inner-tab-grid">
            <div>
              <strong>Swift Transfers</strong>
              <p>With CashFlux you can make payments without any delay</p>
            </div>
          </div>
          <div className="inner-tab-grid">
            <div>
              <strong>Save Money</strong>
              <p>
                CashFlux helps you to save your money and gives interests in
                return
              </p>
            </div>
          </div>
          <div className="inner-tab-grid">
            <div>
              <strong>Pay utility bills</strong>
              <p>
                CashFlux allows you to pay and take care of all your utility
                bills
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={screenshot} width="100%" alt="" />
        </div>
        <div>
          <div className="inner-tab-grid">
            <div>
              <strong>Seamless transactions</strong>
              <p>With Cashflux, you will always have seamless transactions</p>
            </div>
          </div>
          <div className="inner-tab-grid">
            <div>
              <strong>Funds transfers</strong>
              <p>
                Cashflux allows you to transfer funds to any parts of the world.
              </p>
            </div>
          </div>
          <div className="inner-tab-grid">
            <div>
              <strong>Win gifts</strong>
              <p>With Cashflux, you stand a chance to win exciting prizes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstTab;
