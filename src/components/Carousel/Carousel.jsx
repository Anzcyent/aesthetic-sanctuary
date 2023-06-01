import React from "react";
import "./Carousel.scss";
import Slider from "react-slick";

import { slideshow } from "../../api/dummy.json";
import Slide from "./Slide/Slide";
import Navbar from "../Navbar/Navbar";
import { useMediaQuery } from "react-responsive";

const Carousel = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500
  };

  return (
    <section className="carousel-section">
      {!isSmallScreen && <Navbar />}
      <Slider {...sliderSettings} className="slider">
        {slideshow.map((slide) => (
          <Slide
            key={slide.id}
            title={slide.title}
            description={slide.description}
            photo={slide.photo}
          />
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;
