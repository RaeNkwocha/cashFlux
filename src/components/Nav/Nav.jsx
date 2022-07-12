import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./nav.css";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const openNav = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="nav-container">
        <Container>
          <nav className="nav-bar">
            <h1 style={{ zIndex: "200" }}>CashFlux</h1>
            <ul className="nav-items">
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                <li>Home</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/F.A.Qs"
              >
                <li>F.A.Qs</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/support"
              >
                <li>Support</li>
              </Link>
            </ul>
            <div style={{ zIndex: "200" }} className="hamburger">
              <button onClick={openNav}>
                {open ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    fill="white"
                    class="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    fill="white"
                    class="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </nav>
        </Container>
        {open ? (
          <div className="mobile-nav">
            <ul>
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                <li>Home</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/F.A.Qs"
              >
                <li>F.A.Qs</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/support"
              >
                <li>Support</li>
              </Link>
            </ul>
          </div>
        ) : null}
      </div>
      {/* moblie nav */}
    </>
  );
};

export default Nav;
