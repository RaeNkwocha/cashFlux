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

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="76"
            height="76"
            fill="#00C9DB"
            class="bi bi-play-circle-fill"
            className="play-btn"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Preview;
