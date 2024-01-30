import React from "react";
import { feedbacks } from "./data";
import FeedbackCard from "../FeedbackCard";

const Feedback = () => {
  return (
    <div className="mt-[58.67px]">
      <div className="flex justify-center items-center">
        <p className="text-center text-[24.744px] font-bold">
          Here from our students
        </p>
      </div>

      <div className="mt-[31px] flex justify-center overflow-hidden gap-[45.26px]">
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
