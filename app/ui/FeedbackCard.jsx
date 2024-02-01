import React from "react";

const FeedbackCard = ({ name, review, designation }) => {
  return (
    <div className="flex w-[218.667px] lg:w-[483.922px] xl:w-[483.92px] h-[182px] lg:h-[402.776px] xl:h-[402.78px] rounded-[27.112px] lg:rounded-[60px] bg-gradient-to-r from-ternaryPink to-primaryBlue relative">
      <span className="text-[57.839px] lg:text-[128px] font-normal text-[#000] pl-5 lg:pl-[60px]">
        &apos;
      </span>

      <div className="flex flex-col justify-center items-center pt-5 pl-[5px] pr-[20px] lg:pr-[76px]">
        <div className="">
          <p className="text-[9.037px] text-left lg:text-base xl:text-[15px] font-normal leading-[16.719px] lg:leading-[37px] text-[#000]">
            {review}
          </p>
        </div>
        <div className="w-full flex flex-col items-end text-left px-2 text-[#000] text-[7.23px] lg:text-[16px] font-extrabold leading-[9.941px] lg:leading-[22px]">
          <p>{name}</p>
          <p>{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
