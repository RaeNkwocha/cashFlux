import React from "react";
import screenshot from "../components/image/screenshot-3.png";
import "../components/css/styles.css";
const SecondTab = () => {
  return (
    <div className="second-tab-grid-holder">
      <div className="second-tab-grid">
        <div className="second-tab-grid-img" style={{ height: "auto" }}>
          <img src={screenshot} alt="" />
        </div>
        <div>
          <div className="second-grid-text-holder">
            {" "}
            <h2>Track Result Based On Your</h2>
            <div>
              <p>
                Nullam non tincidunt dui, vitae aliquet magna. Aenean ut
                porttitor urna. Suspendisse luctus eu libero ac vulputate. Ut
                sollicitudin leo a nisi ornare, sit amet bibendum mi tristique.
              </p>
            </div>
          </div>
          <div className="inner-grid-second-grid">
            <div>
              <strong>Good Foundation</strong>
              <p>
                Nullam non tincidunt dui, vitae aliquet magna. Aenean ut portt
                urna suspendisse luctus
              </p>
            </div>
            <div>
              <strong>Good Foundation</strong>
              <p>
                Nullam non tincidunt dui, vitae aliquet magna. Aenean ut portt
                urna suspendisse luctus
              </p>
            </div>
          </div>
          <div className="inner-grid-second-grid">
            <div>
              <strong>Good Foundation</strong>
              <p>
                Nullam non tincidunt dui, vitae aliquet magna. Aenean ut portt
                urna suspendisse luctus
              </p>
            </div>
            <div>
              <strong>Good Foundation</strong>
              <p>
                Nullam non tincidunt dui, vitae aliquet magna. Aenean ut portt
                urna suspendisse luctus
              </p>
            </div>
          </div>
          <div className="inner-grid-second-grid">
            <div>
              <strong>Good Foundation</strong>
              <p>
                Nullam non tincidunt dui, vitae aliquet magna. Aenean ut portt
                urna suspendisse luctus
              </p>
            </div>
            <div>
              <strong>Good Foundation</strong>
              <p>
                Nullam non tincidunt dui, vitae aliquet magna. Aenean ut portt
                urna suspendisse luctus
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondTab;
