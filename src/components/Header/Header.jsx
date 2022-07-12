import React, { useCallback, useEffect, useState } from "react";
import smartphone from "./images/header-smartphones.png";
import "./header.css";
import Container from "react-bootstrap/esm/Container";
import Downloadbtn from "../Downloadbtn";

const Header = () => {
  const names = ["Marketers", "Merchants", "Stores"];
  const [newName, setnewName] = useState("");
  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);
  useEffect(() => {
    const intervalID = setInterval(shuffle, 2000);
    return () => clearInterval(intervalID);
  }, [shuffle]);
  return (
    <Container>
      <div className="header-grid-container">
        <div className="header-grid">
          <div>
            <div>
              {" "}
              <h2>
                MOBILE APP FOR{" "}
                <span style={{ color: "#4A92FE", textTransform: "uppercase" }}>
                  {newName}
                </span>{" "}
              </h2>
            </div>
            <div>
              <p>
                Cashflux is a digital wallet/payment service that provide secure
                payment option for customer and merchant with the use of
                Safetoken to complete a merchant initiated transaction.
              </p>
            </div>
            <div className="app-link-grid">
              <Downloadbtn />
            </div>
          </div>
          <div style={{ display: "grid", placeItems: "center" }}>
            <img src={smartphone} width="100%" alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
