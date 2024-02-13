"use client";

import React, { useState } from "react";
import TopicCard from "./TopicCard";
import { topics } from "../../constant/data";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Topic = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? topics.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === topics.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="mt-[77px] lg:mt-[163px] xl:mt-[110px] w-full">
      <div className="flex justify-center items-center">
        <p className="text-center text-[24.744px] lg:text-[40px] font-bold">
          Explore by Topic
        </p>
      </div>

      <div className="overflow-hidden px-2 lg:px-6 relative">
        <div className="hidden absolute top-1/2 xl:right-2 text-3xl lg:text-5xl flex justify-between items-center w-full">
          <div
            onClick={handlePrev}
            className="absolute top-1 lg:top-2 -left-1 lg:-left-2 xl:left-5 z-10 flex justify-center items-center cursor-pointer"
          >
            <BsFillArrowLeftCircleFill />
          </div>
          <div
            onClick={handleNext}
            className="absolute top-1 lg:top-2 right-3 lg:right-6 xl:right-1 z-10 flex justify-center items-center cursor-pointer"
          >
            <BsFillArrowRightCircleFill />
          </div>
        </div>

        <div className="overflow-hidden w-fit flex mt-[36px] lg:mt-[61px] xl:mt-[48px] py-4">
          <div className="animate-slide flex gap-[30.21px] lg:gap-[55px] xl:gap-[55px] mr-[30.21px] lg:mr-[55px] xl:mr-[55px]">
            {topics?.map((topic, index) => (
              <TopicCard
                key={index}
                href="/courses"
                title={topic.title}
                icon={topic.icon}
                isVisible={index === currentIndex}
              />
            ))}
          </div>

          <div className="animate-slide flex gap-[30.21px] lg:gap-[55px] xl:gap-[55px]">
            {topics?.map((topic, index) => (
              <TopicCard
                key={index}
                href="/courses"
                title={topic.title}
                icon={topic.icon}
                isVisible={index === currentIndex}
              />
            ))}
          </div>

          <div className="animate-slide flex gap-[30.21px] lg:gap-[55px] xl:gap-[55px]">
            {topics?.map((topic, index) => (
              <TopicCard
                key={index}
                href="/courses"
                title={topic.title}
                icon={topic.icon}
                isVisible={index === currentIndex}
              />
            ))}
          </div>
          {/* <div className="gap-[30.21px] lg:gap-[55px] xl:gap-[55px]">
            {coursesListFirst?.map((topic, index) => (
              <TopicCard
                key={index}
                href="/courses"
                title={topic.name}
                icon={topic.icon}
                isVisible={index === currentIndex}
              />
            ))}
          </div>
          <div className="gap-[30.21px] lg:gap-[55px] xl:gap-[55px]">
            {coursesListSecond?.map((topic, index) => (
              <TopicCard
                key={index}
                href="/courses"
                title={topic.title}
                icon={topic.icon}
                isVisible={index === currentIndex}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Topic;
