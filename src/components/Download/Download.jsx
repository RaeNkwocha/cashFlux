import React from "react";
import download from "./image/download.png";
import "./download.css";
import Downloadbtn from "../Downloadbtn";
const Download = () => {
  return (
    <>
      <div className="flex-download-bg">
        <div style={{ marginTop: "30px" }} className="first-item-download-flex">
          <div className="download-text-holder">
            {" "}
            <p>
              Download Leno today to see the benefits and enjoy the results
              faster than any other app out there
            </p>
          </div>
          <Downloadbtn />
        </div>
        <div
          style={{ display: "grid", placeItems: "center", marginTop: "70px" }}
        >
          <img src={download} width="90%" alt="" />
        </div>
      </div>
    </>
  );
};

export default Download;
