"use client";

import React from "react";
import { MdArrowDownward } from "react-icons/md";

const CourseCard = ({ course, handleOpen, isOpen, handleCourseName }) => {
  return (
    <div
      onClick={() => {
        handleOpen(!isOpen);
        handleCourseName(course.name);
      }}
      className="w-[127.933px] h-[158.917px] lg:w-[215px] lg:h-[267.594px] xl:w-[154.105px] xl:h-[191.427px] rounded-[24.1px] lg:rounded-[40.5px] xl:rounded-[29px] border-[2.49px] lg:border-[4.19px] xl:border-[3px] px-[8.66px] lg:px-[15.15px] xl:px-[10.84px] shadow-[0_3.321px_3.321px_0px_rgba(0,0,0,0.25)] lg:shadow-[0_5.592px_5.592px_0px_rgba(0,0,0,0.25)] xl:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] relative flex flex-col justify-center items-center border-primaryPink cursor-pointer"
    >
      {/* Arrow */}
      <div className="absolute top-[8px] lg:top-[13.46px] xl:top-[9.63px] px-[8.66px] lg:px-[15.15px] xl:px-[10.84px] w-full flex justify-end items-start">
        <div className="w-[32.316px] h-[32.316px] lg:w-[54.416px] lg:h-[54.416px] xl:w-[38.927px] xl:h-[38.297px] border-[2.49px] lg:border-[4.19px] xl:border-[3px] hover:bg-black hover:border-black hover:text-white ease-in-out duration-500 cursor-pointer flex justify-center items-center border-primaryPink rounded-full">
          <MdArrowDownward className="w-[20px] h-[20px] lg:w-[32px] lg:h-[32px] xl:w-[22px] xl:h-[22px] rotate-[225deg]" />
        </div>
      </div>

      {/* Course Name */}
      <div className="absolute top-[47.32px] lg:top-[79.68px] xl:top-[57px] leading-tight w-full flex flex-col justify-center items-center">
        <div className="w-fit h-[32px] lg:h-[54px] xl:h-[43px] text-[13.283px] lg:text-[22.366px] xl:text-[16px] text-center font-bold">
          <p>{course.name}</p>
        </div>

        {/* Short Course Description */}
        <div className="mt-[10.28px] lg:mt-[9.98px] xl:mt-[3px] w-[101.281px] h-[53.961px] lg:w-[152.37px] lg:h-[90.863px] xl:w-[109px] xl:h-[65px] text-[8.302px] lg:text-[13.979px] xl:text-[10px] font-[600] tracking-[0.415px] lg:tracking-[0.699px] xl:tracking-[0.5px] lowercase">
          <p>{course.description.slice(0, 82)}...</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
