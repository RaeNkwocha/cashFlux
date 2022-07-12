import React from "react";
import Nav from "../components/Nav/Nav";
import Body from "../components/Support/Body/Body";
import Footer from "../components/footer/Footer";
import Header from "../components/Support/Header/Header";
const Support = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Body />
      <footer style={{ background: "whitesmoke" }}>
        <Footer />
      </footer>
    </div>
  );
};

export default Support;
