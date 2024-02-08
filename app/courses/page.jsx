import React from "react";
import CourseCard from "../ui/Courses/CourseCard";
import { courses } from "../constant/data";
import CourseDescription from "../ui/Courses/CourseDescription";

const Courses = () => {
  return (
    <div className="mb-[20.63px] lg:mb-[46.31px] xl:mb-[68px] px-[10px] lg:px-[48px] flex flex-col justify-center items-center">
      <div className="hidden xl:block text-[128px] font-bold text-center">
        <p>courses</p>
      </div>

      <div className="mt-[53.57px] lg:mt-[117.57px] xl:mt-[47px] gap-x-[13.28px] lg:gap-x-[22px] xl:gap-x-[16px] gap-y-[17px] lg:gap-y-[28.41px] xl:gap-y-[37.54px] grid grid-cols-3 xl:grid-cols-8 justify-center items-center">
        {courses.map((course) => (
          <CourseCard key={course.name} course={course} />
        ))}
      </div>

      <div className="mt-[22.42px] lg:mt-[118.41px] xl:mt-[103.6px] gap-y-[27.64px] lg:gap-y-[62.31px] xl:gap-y-[88px] flex flex-col justify-center items-center ">
        {courses.map((course) => (
          <CourseDescription key={course.name} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
