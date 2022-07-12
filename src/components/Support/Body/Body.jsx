import React from "react";
import mail from "./image/mail.png";
import ticket from "./image/ticket.png";
import "./body.css";
const Body = () => {
  return (
    <>
      <div className="support-grid-body-heading">
        <h2>So, How Can We Help You Today</h2>
      </div>
      <div className="support-grid-main-container">
        <div className="support-grid-body">
          <div className="support-grid-img-holder">
            <img src={mail} alt="" />
          </div>
          <div>
            <p>Want to contact us through our email?</p>
          </div>
          <div>
            <button>Send a message</button>
          </div>
        </div>
        <div className="support-grid-body-two">
          <div className="support-grid-img-holder">
            <img src={ticket} alt="" />
          </div>
          <div>
            <p>Want to contact us through our email?</p>
          </div>
          <div>
            <button>Start ticketing</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
