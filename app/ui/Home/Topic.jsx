import React from "react";
import TopicCard from "../TopicCard";
import { topics } from "./data";

const Topic = () => {
  return (
    <div className="mt-[77px]">
      <div className="flex justify-center items-center">
        <p className="text-center text-[24.744px] font-bold">
          Explore by Topic
        </p>
      </div>

      <div className="mt-9 flex justify-around gap-[30.22px] overflow-x-scroll">
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
