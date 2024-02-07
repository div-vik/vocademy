import React from "react";
import { feedbacks } from "../../constant/data";
import FeedbackCard from "./FeedbackCard";

const Feedback = () => {
  return (
    <div className="mt-[58.67px] lg:mt-[114.51px] xl:mt-[83.51px]">
      <div className="flex justify-center items-center">
        <p className="text-center text-[24.744px] lg:text-[40px] font-bold">
          Here from our students
        </p>
      </div>

      <div className="mt-[31px] lg:mt-[83px] xl:mt-[62px] px-[10px] flex justify-center xl:justify-normal items-center overflow-hidden xl:overflow-x-scroll 2xl:overflow-hidden xl:px-[52px] gap-[45.26px] lg:gap-[100.16px]">
        {feedbacks.map((feedback, index) => (
          <div key={index}>
            <FeedbackCard
              name={feedback.name}
              review={feedback.review}
              designation={feedback.designation}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
