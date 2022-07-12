import React from "react";
import Main from "../components/F.AQs/components/Main";
import Footer from "../components/footer/Footer";
import Nav from "../components/Nav/Nav";

const Faq = () => {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <Main />
      <footer style={{ background: "whitesmoke" }}>
        <Footer />
      </footer>
    </>
  );
};

export default Faq;
