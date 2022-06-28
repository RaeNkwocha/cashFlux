import React from "react";
import screenshot from "../components/image/screenshot-5.png";

const ThirdTab = () => {
  return (
    <div className="third-tab-grid-holder">
      <div className="third-tab-grid">
        <div>
          <div className="inner-grid-third-grid">
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
          <div className="inner-grid-third-grid">
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
          <div className="inner-grid-third-grid">
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
          <div className="third-grid-text-holder">
            {" "}
            <h2>Monitoring Tools Evaluation</h2>
            <div>
              <p>
                Nullam non tincidunt dui, vitae aliquet magna. Aenean ut
                porttitor urna. Suspendisse luctus eu libero ac vulputate. Ut
                sollicitudin leo a nisi ornare, sit amet bibendu.
              </p>
            </div>
          </div>
        </div>
        <div className="third-tab-grid-img" style={{ height: "auto" }}>
          <img src={screenshot} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ThirdTab;
