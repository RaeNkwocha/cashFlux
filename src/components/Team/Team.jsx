import React from "react";
import { Carousel, Row } from "react-bootstrap";
import testimonial from "./images/testimonial-1.jpg";
import "./team.css";

const Team = () => {
  return (
    <div>
      <Carousel className="desktop-carousel" controls={false}>
        <Carousel.Item className="first-carousel" interval={1000}>
          <div className="team-carousel">
            <div className="first-team-carousel">
              <img
                className=""
                src={testimonial}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "100%",
                }}
                alt="First slide"
              />
              <span>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </span>
              <strong>Michael Piper - Developer</strong>
            </div>
            <div className="first-team-carousel">
              <img
                className=""
                src={testimonial}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "100%",
                }}
                alt="First slide"
              />
              <span>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </span>
              <strong>Agene Jackson - Project Manager</strong>
            </div>
            <div className="first-team-carousel">
              <img
                className=""
                src={testimonial}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "100%",
                }}
                alt="First slide"
              />
              <span>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </span>
              <strong>Omogbolahanmi Solomon - UI/UX designer</strong>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="first-carousel" interval={500}>
          <div className="team-carousel">
            <div className="first-team-carousel">
              <img
                className=""
                src={testimonial}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "100%",
                }}
                alt="First slide"
              />
              <span>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </span>
              <strong>Rae Nkwocha - Frontend Developer</strong>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* mobile view */}
      <div className="mobile-carousel">
        <Carousel controls={false}>
          {" "}
          <Carousel.Item className="first-carousel" interval={500}>
            <div className="team-carousel">
              <div className="first-team-carousel">
                <img
                  className=""
                  src={testimonial}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100%",
                  }}
                  alt="First slide"
                />
                <span>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </span>
                <strong>Michael Piper - Developer</strong>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="first-carousel" interval={500}>
            <div className="team-carousel">
              <div className="first-team-carousel">
                <img
                  className=""
                  src={testimonial}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100%",
                  }}
                  alt="First slide"
                />
                <span>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </span>
                <strong>Agene Jackson - Project Manager</strong>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="first-carousel" interval={500}>
            <div className="team-carousel">
              <div className="first-team-carousel">
                <img
                  className=""
                  src={testimonial}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100%",
                  }}
                  alt="First slide"
                />
                <span>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </span>
                <strong>Omogbolahanmi Solomon - UI/UX designer</strong>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="first-carousel" interval={500}>
            <div className="team-carousel">
              <div className="first-team-carousel">
                <img
                  className=""
                  src={testimonial}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "100%",
                  }}
                  alt="First slide"
                />
                <span>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </span>
                <strong>Rae Nkwocha - Frontend Developer</strong>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Team;
