import React from "react";

const FeedbackCard = ({ name, review, designation }) => {
  return (
    <div className="w-[218.667px] h-[182px] rounded-[27.112px] bg-[#F91992] relative">
      <span className="text-[57.839px] font-normal text-[#000] pl-7">
        &apos;
      </span>

      <div className="absolute top-[27.11px] pl-[39.73px] pr-[34.34px]">
        <p className="text-[9.037px] text-left font-normal leading-[16.719px] text-[#000]">
          {review}
        </p>
      </div>
      <div className="absolute bottom-[11.98px] left-[133.26px] flex flex-col items-center text-center text-[#000] text-[7.23px] font-extrabold leading-[9.941px]">
        <p>{name}</p>
        <p>{designation}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
