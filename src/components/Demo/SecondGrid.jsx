import React from "react";
import Downloadbtn from "../Downloadbtn";
import demo from "./image/details-2.png";

const SecondGrid = () => {
  return (
    <div>
      {" "}
      <div className="first-demo-flex">
        <div className="first-demo-body">
          <div>
            <h3>About CashFlux GiftBox</h3>
          </div>
          <div style={{ marginTop: "25px" }}>
            <p>
              This is one of the medium available to pay a merchant with
              cashflux. It is a crypto secured 17 digits number generated for
              the purpose of gift or share with someone else, if you don’t want
              to transfer to auser’s wallet. i.e . to surprise a loved one wih
              gift without having to ask for their wallet ID and it is only
              valid for a maximum of 30 days and minimum of a day after which
              the funds will be returned to the user’s wallet untouched. The
              benefit of Giftbox is that a user do not have to worry about
              creating a wallet that is not of their currency because Giftbox
              will create a user’s wallet in their currency as a result of the
              phone number provided in creating a cashflux account.
            </p>
          </div>
          <div
            style={{ justifyContent: "start", marginTop: "25px" }}
            className="app-link-grid"
          >
            <Downloadbtn />
          </div>
        </div>
        <div style={{ display: "grid", placeItems: "center" }}>
          <img src={demo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SecondGrid;
