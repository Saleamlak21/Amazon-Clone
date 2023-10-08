import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImage from "../../../asset/banner/bannerImg";

function Banner() {
  return (
    <div className=" relative ">
      <div className=" hidden md:flex absolute w-full bg-gradient-to-t from-gray-50 to-transparent h-52 bottom-0 z-10" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img loading="lazy" src={bannerImage.one}></img>
        </div>
        <div>
          <img loading="lazy" src={bannerImage.two}></img>
        </div>
        <div>
          <img loading="lazy" src={bannerImage.three}></img>
        </div>
        <div>
          <img loading="lazy" src={bannerImage.four}></img>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
