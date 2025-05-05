import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  const ads = [
    { img: "/img/qc4.jpg", alt: "" },
    { img: "/img/qc1.jpg", alt: "" },
    { img: "/img/qc2.jpg", alt: "" },
    {
      img: "https://cdn1.fahasa.com/media/magentothem/banner7/Mainbanner_1503_840x320.png",
      alt: "",
    },
    {
      img: "https://cdn1.fahasa.com/media/magentothem/banner7/BlingboxT125_840X320_1.jpg",
      alt: "",
    },
    {
      img: "https://cdn1.fahasa.com/media/magentothem/banner7/hoisacht3_840x320_2.jpg",
      alt: "",
    },
  ];

  return (
    <div className="home-container">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="ad-slider"
      >
        {ads.map((ad, index) => (
          <SwiperSlide key={index}>
            <img src={ad.img} alt={ad.alt} className="ad-banner" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
