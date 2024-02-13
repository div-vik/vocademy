"use client";

import React, { Fragment, useEffect, useState } from "react";
import CourseCard from "../ui/Courses/CourseCard";
import { courses, coursesListFirst, coursesListSecond } from "../constant/data";
import CourseDescription from "../ui/Courses/CourseDescription";
import Modal from "../ui/Courses/Modal";

const Courses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [courseName, setCourseName] = useState(null);
  const handleOpen = (open) => {
    setIsOpen(open);
  };

  const handleCourseName = (name) => {
    setCourseName(name);
  };

  const filterCourse = courses.filter((course) =>
    course["name"].includes(courseName)
  );

  return (
    <Fragment>
      <div className="mb-[50.63px] lg:mb-[106.31px] xl:mb-[108px] 2xl:mb-[170px] px-[10px] lg:px-[48px] flex flex-col justify-center items-center">
        <div className="text-[56.624px] lg:text-[90.681px] xl:text-[128px] mt-[20px] font-bold text-center">
          <p>courses</p>
        </div>

        <div className="mt-[33.57px] lg:mt-[90.57px] xl:mt-[47px] xl:flex xl:flex-col justify-center items-center">
          <div className="xl:hidden">
            <div className="gap-x-[13.28px] lg:gap-x-[22px] xl:gap-x-[16px] gap-y-[17px] lg:gap-y-[28.41px] xl:gap-y-[37.54px] grid grid-cols-3">
              {courses.map((course, index) => (
                <CourseCard
                  key={index}
                  course={course}
                  handleOpen={handleOpen}
                  handleCourseName={handleCourseName}
                  isOpen={isOpen}
                />
              ))}
            </div>
          </div>

          <div className="hidden xl:flex flex-col justify-center items-center gap-y-[17px] lg:gap-y-[28.41px] xl:gap-y-[37.54px]">
            <div className="flex gap-x-[13.28px] lg:gap-x-[22px] xl:gap-x-[16px]">
              {coursesListFirst.map((course, index) => (
                <CourseCard
                  key={index}
                  course={course}
                  handleOpen={handleOpen}
                  handleCourseName={handleCourseName}
                  isOpen={isOpen}
                />
              ))}
            </div>

            <div className="flex gap-x-[13.28px] lg:gap-x-[22px] xl:gap-x-[16px]">
              {coursesListSecond.map((course, index) => (
                <CourseCard
                  key={index}
                  course={course}
                  handleOpen={handleOpen}
                  handleCourseName={handleCourseName}
                  isOpen={isOpen}
                />
              ))}
            </div>
          </div>
        </div>

        {/* <div className="mt-[22.42px] lg:mt-[118.41px] xl:mt-[103.6px] gap-y-[27.64px] lg:gap-y-[62.31px] xl:gap-y-[88px] hidden flex-col justify-center items-center ">
          {courses.map((course, index) => (
            <CourseDescription key={index} course={course} />
          ))}
        </div> */}
      </div>

      {isOpen && (
        <Modal handleOpen={handleOpen} isOpen={isOpen} course={filterCourse} />
      )}
    </Fragment>
  );
};

export default Courses;
