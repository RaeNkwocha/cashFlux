import React from "react";
import demo from "./image/details-1.png";
import "./demo.css";
import SecondGrid from "./SecondGrid";
import Downloadbtn from "../Downloadbtn";
const Demo = () => {
  return (
    <>
      <div className="first-demo-flex">
        <div style={{ display: "grid", placeItems: "center" }}>
          <img src={demo} style={{ width: "70%" }} alt="" />
        </div>
        <div className="first-demo-body">
          <div>
            <h3>About CashFlux SafeToken</h3>
          </div>
          <div style={{ marginTop: "25px" }}>
            <p>
              This is the most incredible way to pay online as it will generate
              a token with 17 digits that changes every 1 minute. This is by far
              the best and secured way to pay online, the reason being it is
              only the mobile device that generated the 12 digits token that
              knows its original value as it has been hashed before sent to the
              server.
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
