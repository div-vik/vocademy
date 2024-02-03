"use client";

import React from "react";
import TopicCard from "./TopicCard";
import { topics } from "./data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Topic = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="mt-[77px] lg:mt-[163px] xl:mt-[110px]">
      <div className="flex justify-center items-center">
        <p className="text-center text-[24.744px] lg:text-[40px] font-bold">
          Explore by Topic
        </p>
      </div>
      <div>
        <Slider {...settings}>
          {topics?.map((topic, index) => (
            <TopicCard key={index} title={topic.title} icon={topic.icon} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Topic;
