import React from "react";
import TopicCard from "../TopicCard";
import { topics } from "./data";

const Topic = () => {
  return (
    <div className="mt-[77px] lg:mt-[163px] xl:mt-[110px]">
      <div className="flex justify-center items-center">
        <p className="text-center text-[24.744px] lg:text-[40px] font-bold">
          Explore by Topic
        </p>
      </div>

      <div className="mt-9 lg:mt-[61px] flex px-[10px] py-2 gap-[30.22px] lg:gap-[50px] overflow-x-scroll 2xl:overflow-hidden">
        {topics?.map((topic, index) => (
          <div key={index}>
            <TopicCard title={topic.title} icon={topic.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topic;
