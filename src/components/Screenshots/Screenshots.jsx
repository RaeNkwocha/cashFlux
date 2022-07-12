import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper";
import screenshot from "./image/screenshot-1.png";
import screenshotone from "./image/screenshot-2.png";
import screenshottwo from "./image/screenshot-3.png";
import screenshotthree from "./image/screenshot-4.png";
import screenshotfour from "./image/screenshot-5.png";
import screenshotfive from "./image/screenshot-6.png";
import screenshotsix from "./image/screenshot-7.png";
import screenshotseven from "./image/screenshot-8.png";
import screenshoteight from "./image/screenshot-9.png";
import screenshotnine from "./image/screenshot-10.png";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./scrn.css";
import { useEffect, useState } from "react";

const Screenshots = () => {
  const images = [
    {
      id: 1,
      image: screenshot,
    },
    {
      id: 2,
      image: screenshotone,
    },
    {
      id: 3,
      image: screenshottwo,
    },
    {
      id: 4,
      image: screenshotthree,
    },
    {
      id: 5,
      image: screenshotfour,
    },
    {
      id: 6,
      image: screenshotfive,
    },
    {
      id: 7,
      image: screenshotsix,
    },
    {
      id: 8,
      image: screenshotseven,
    },
    {
      id: 9,
      image: screenshoteight,
    },
    {
      id: 10,
      image: screenshotnine,
    },
  ];

  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      <div style={{ paddingTop: "30px" }}>
        <h2
          style={{ color: "white", textAlign: "center", fontWeight: "bolder" }}
        >
          Screenshots
        </h2>
        <div className="screenshot-border-bottom"></div>
      </div>

      <Swiper
        slidesPerView={isDesktop ? 5 : 3}
        spaceBetween={isDesktop ? 5 : 5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
        style={{ padding: "15px" }}
      >
        {images.map((image) => (
          <div>
            {" "}
            <SwiperSlide style={{ paddingBottom: "40px", paddingTop: "30px" }}>
              <img src={image.image} alt="" />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
};

export default Screenshots;
