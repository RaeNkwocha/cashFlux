import React from "react";
import demo from "./image/details-1.png";
import "./demo.css";
import SecondGrid from "./SecondGrid";
import Downloadbtn from "../Downloadbtn";
const Demo = () => {
  return (
    <>
      <div className="first-demo-flex">
        <div>
          <img src={demo} alt="" />
        </div>
        <div style={{ color: "white" }}>
          <div>
            <h3>Start using CashFlux today and set your long term goals</h3>
          </div>
          <div style={{ marginTop: "25px" }}>
            <p>
              Ac ante ipsum primis in faucibus. Nam et porttitor ipsum. Morbi
              eros augue, blandit in varius gravida tempor a massa. Curabitur
              ante dolor euismod a arcu nec pellentque
            </p>
          </div>
          <div
            style={{ justifyContent: "start", marginTop: "25px" }}
            className="app-link-grid"
          >
            <Downloadbtn />
          </div>
        </div>
      </div>
      <SecondGrid />
    </>
  );
};

export default Demo;
