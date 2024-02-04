import React from "react";

const AuthBtn = ({ title, className }) => {
  return (
    <button
      className={
        className +
        " text-center font-bold bg-primaryPink text-[#fff] text-[14px] lg:text-[18.219px] leading-[14.84px] lg:leading-[19.312px] w-[162px] lg:w-[210.821px] h-[42px] lg:h-[54.657px] rounded-[14px] lg:rounded-[18.2px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] lg:shadow-[0_5.205px_5.205px_0px_rgba(0,0,0,0.25)] xl:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
      }
    >
      {title}
    </button>
  );
};

export default AuthBtn;
