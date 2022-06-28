import React from "react";
import Demo from "../components/Demo/Demo";
import Features from "../components/Features/Features";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Preview from "../components/Preview/Preview";
import Team from "../components/Team/Team";

const Home = () => {
  return (
    <>
      <div className="header-container">
        {" "}
        <Nav />
        <header>
          {" "}
          <Header />
        </header>
      </div>
      <section style={{ background: "#262431" }}>
        <Team />
      </section>
      <section style={{ background: "#2F2C3D" }}>
        <Features />
      </section>
      <section className="preview-video-holder">
        <Preview />
      </section>
      <section style={{ background: "#262431" }}>
        <Demo />
      </section>
    </>
  );
};

export default Home;
