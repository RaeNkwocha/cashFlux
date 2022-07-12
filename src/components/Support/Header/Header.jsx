import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <header className="support-header-grid">
        <div className="support-header-h1">
          <h1>Quality Services You Really Want</h1>
        </div>
        <div className="support-btn">
          <span>Need help?</span>
          <button>Contact us</button>
        </div>
      </header>
    </>
  );
};

export default Header;
