import React from "react";
import Button from "../Button";

const CourseDescription = ({ course }) => {
  const { group, oneToOne } = course.fees;

  return (
    <div className="w-fit rounded-[20.4px] lg:rounded-[46px] xl:rounded-[65px] border-[0.94px] lg:border-[2.12px] xl:border-[3px] px-[16.64px] lg:px-[37.53px] xl:px-[53px] pt-[25.44px] lg:pt-[57.35px] xl:pt-[81px] pb-[17.9px] lg:pb-[40.36px] xl:pb-[57px] border-primaryPink shadow-[0_1.256px_1.256px_0px_rgba(0,0,0,0.25)] lg:shadow-[0_2.832px_2.832px_0px_rgba(0,0,0,0.25)] xl:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center">
      {/* Course Name */}
      <div className="w-full text-center flex flex-col justify-center items-center">
        <p className="text-[12.561px] lg:text-[28.323px] xl:text-[40px] font-bold text-primaryPink">
          Name of the session: {course.name}
        </p>
        <p className="text-[7.537px] lg:text-[16.994px] xl:text-[24px] font-[600]">
          Total sessions: {course.totalSessions}
        </p>
      </div>

      <div className="mt-[21.77px] lg:mt-[49.39px] xl:mt-[69px] mb-[24.39px] lg:mb-[55.59px] xl:mb-[77px] text-[7.537px] lg:text-[16.994px] xl:text-[24px] gap-x-[38.31px] lg:gap-x-[86.39px] xl:gap-x-[122px] grid grid-cols-2">
        <div className="font-[600]">
          <p>Duration of each session: {course.sessionDuration}</p>
          <p>Batch Options: {course.batchOptions}, Group</p>
          <p>No. of Students in a group: {course.studentsInGroup}</p>
          <p>Age group: {course.ageGroup}</p>
        </div>

        <div className="font-[600] w-[171.771px] lg:w-[387.319px] xl:w-[547px]">
          <p>Study Materials: {course.studyMaterials}</p>
          <p>Certificate of Completion: {course.certificate}</p>
          <p>Timings and Date:</p>
          <p>
            Fee: Rs {group} for Group <br />
            Rs. {oneToOne} for 1:1
          </p>
        </div>
      </div>

      {/* Sessions */}
      <div className="grid grid-cols-2 mt-[13.92px] lg:mt-[15.4px] xl:mt-[21px] text-[7.537px] lg:text-[16.994px] xl:text-[24px] gap-x-[38.31px] gap-y-[22.73px] lg:gap-x-[86.39px] lg:gap-y-[43.22px] xl:gap-x-[122px] xl:gap-y-[55px]">
        {/* Session of Courses */}
        {course.sessions.map((session) => (
          <div
            className=" w-[171.771px] lg:w-[387.319px] xl:w-[547px]"
            key={course.name}
          >
            <p className="font-bold text-primaryPink">
              Session 1: {session.name}
            </p>
            <p className="mt-[13.92px] lg:mt-[15.4px] xl:mt-[21px] font-medium">
              {session.description}
            </p>
          </div>
        ))}

        {/* Additional Learnings */}
        <div className=" w-[171.771px] lg:w-[387.319px] xl:w-[547px]">
          {course.additionalLearning !== null && (
            <p className="mb-[13.92px] lg:mb-[15.4px] xl:mb-[21px] font-bold text-primaryPink">
              Additional Learning
            </p>
          )}
          {course.additionalLearning?.map((learning) => (
            <div key={course.name}>
              <p className="font-medium">{learning}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Course Description */}
      <div className="text-[7.537px] lg:text-[16.994px] xl:text-[24px] mt-[22.94px] lg:mt-[70.65px] xl:mt-[88px] text-center flex flex-col justify-center items-center">
        <p className="font-bold text-primaryPink">Description of the Course</p>
        <p className="w-[338.832px] h-[59.037px] lg:w-[764.018px] lg:h-[133.119px] xl:w-[1079px] xl:h-[188px] mt-[8.27px] lg:mt-[18.94px] xl:mt-[26px] tracking-[0.377px] lg:tracking-[0.85px] xl:tracking-[1.2px] font-medium">
          {course.description}
        </p>
      </div>

      {/* Enroll Button */}
      <div className="lg:mt-[24.08px] xl:mt-[34px] flex flex-col justify-center items-center">
        <Button
          className="text-[15.77px] lg:text-[24px] xl:text-[27px]"
          title="enroll now"
        />
      </div>
    </div>
  );
};

export default CourseDescription;
