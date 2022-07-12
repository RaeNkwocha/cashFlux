import React from "react";
import video from "./image/video-frame.jpg";
import "./preview.css";

const Preview = () => {
  return (
    <>
      <div className="preview-center">
        <div>
          <h2>Preview</h2>
        </div>
        <div className="preview-text-holder">
          <p>
            Cashflux allows anyone to pay in any way they prefer, including
            through credit cards, Safetoken, Giftbox, without sharing any vital
            information. To open an account with us, A user needs one's phone
            number to register because a user's phone number is the primary
            identifier of a user's wallet as Cashflux is a digital wallet that
            holds the ledger records or a user's credit and debit transactions.
            A user when signing up whith his/her phone number will receive an
            SMS with his/her verification code which is only valid for a minute
            and then the user create a wallet and fund the wallet and as well as
            recieve funds from other parties.
          </p>
        </div>
        <div className="preview-video-frame-holder">
          <img src={video} alt="" width="80%" />
        </div>
      </div>
    </>
  );
};

export default Preview;
