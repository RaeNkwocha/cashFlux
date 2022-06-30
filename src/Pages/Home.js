import React from "react";
import Demo from "../components/Demo/Demo";
import Download from "../components/Download/Download";
import Features from "../components/Features/Features";
import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Preview from "../components/Preview/Preview";
import Screenshots from "../components/Screenshots/Screenshots";
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
      <section style={{ background: "#2F2C3D" }}>
        <Screenshots />
      </section>
      <section className="download-background">
        <Download />
      </section>
      <footer style={{ background: "#262431" }}>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
