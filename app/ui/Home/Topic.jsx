"use client";

import React from "react";
import TopicCard from "./TopicCard";
import { topics } from "../../constant/data";

const Topic = () => {
  return (
    <div className="mt-[77px] lg:mt-[163px] xl:mt-[110px] w-full">
      <div className="flex justify-center items-center">
        <p className="text-center text-[24.744px] lg:text-[40px] font-bold">
          Explore by Topic
        </p>
      </div>

      <div className="overflow-x-scroll px-5">
        <div className="flex w-fit mt-[36px] lg:mt-[61px] xl:mt-[48px] gap-[30.21px] lg:gap-[55px] xl:gap-[55px] py-4">
          {topics?.map((topic, index) => (
            <TopicCard
              href="/courses"
              key={index}
              title={topic.title}
              icon={topic.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topic;
