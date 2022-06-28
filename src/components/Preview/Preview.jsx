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
            Donec ullamcorper at eros vestibulum porttitor. Aenean luctus nibh
            nec dapibus tempus ligula justo pretium ante at elementum mi massa
            at arcu interdum
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
