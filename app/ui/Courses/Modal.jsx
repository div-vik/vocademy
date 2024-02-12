import React from "react";
import Link from "next/link";
import Button from "../Button";
import { motion } from "framer-motion";

const Modal = ({ handleOpen, isOpen, course }) => {
  const courseInfo = course;
  const { group, oneToOne } = courseInfo[0].fees;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => handleOpen(!isOpen)}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="w-fit lg:h-[90%] flex flex-col justify-start items-start rounded-[20.4px] lg:rounded-[46px] xl:rounded-[65px] border-[0.94px] lg:border-[2.12px] xl:border-[3px] px-[10px] pt-[10px] pb-[10px] relative bg-white border-primaryPink"
      >
        <div className="absolute right-5 lg:right-8 top-2 lg:top-7 px-2 text-lg lg:text-2xl font-bold cursor-pointer rounded-full bg-white">
          X
        </div>

        <div className="xl:pl-[30px] py-5 rounded-[20.4px] lg:rounded-[46px] xl:rounded-[65px] w-full h-full flex flex-col justify-start items-center overflow-hidden overflow-y-scroll hideScrollbar">
          {courseInfo.map((info, index) => (
            <div key={index}>
              {/* Course Name */}
              <div className="w-full text-center flex flex-col justify-center items-center">
                <p className="text-[12.561px] lg:text-[28.323px] xl:text-[40px] font-bold text-primaryPink">
                  Name of the session: {info.name}
                </p>
                <p className="text-[7.537px] lg:text-[16.994px] xl:text-[24px] font-[600]">
                  Total sessions: {info.totalSessions}
                </p>
              </div>

              <div className="mt-[21.77px] lg:mt-[49.39px] xl:mt-[69px] mb-[24.39px] lg:mb-[55.59px] xl:mb-[77px] text-[7.537px] lg:text-[16.994px] xl:text-[24px] gap-x-[38.31px] lg:gap-x-[86.39px] xl:gap-x-[122px] grid grid-cols-2">
                <div className="font-[600]">
                  <p>Duration of each session: {info.sessionDuration}</p>
                  <p>Batch Options: {info.batchOptions}, Group</p>
                  <p>No. of Students in a group: {info.studentsInGroup}</p>
                  <p>Age group: {info.ageGroup}</p>
                </div>

                <div className="font-[600] w-[171.771px] lg:w-[387.319px] xl:w-[547px]">
                  <p>Study Materials: {info.studyMaterials}</p>
                  <p>Certificate of Completion: {info.certificate}</p>
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
                {info.sessions.map((session, index) => (
                  <div
                    className=" w-[171.771px] lg:w-[387.319px] xl:w-[547px]"
                    key={index}
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
                  {info.additionalLearning !== null && (
                    <p className="mb-[13.92px] lg:mb-[15.4px] xl:mb-[21px] font-bold text-primaryPink">
                      Additional Learning
                    </p>
                  )}
                  {info.additionalLearning?.map((learning, index) => (
                    <div key={index}>
                      <p className="font-medium">{learning}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Description */}
              <div className="text-[7.537px] lg:text-[16.994px] xl:text-[24px] mt-[22.94px] lg:mt-[70.65px] xl:mt-[88px] text-center flex flex-col justify-center items-center">
                <p className="font-bold text-primaryPink">
                  Description of the info
                </p>
                <p className="w-[338.832px] h-[59.037px] lg:w-[764.018px] lg:h-[133.119px] xl:w-[1079px] xl:h-[188px] mt-[8.27px] lg:mt-[18.94px] xl:mt-[26px] tracking-[0.377px] lg:tracking-[0.85px] xl:tracking-[1.2px] font-medium">
                  {info.description}
                </p>
              </div>

              {/* Enroll Button */}
              <Link
                href={`/register/${info.name.toLowerCase()}`}
                className="lg:mt-[24.08px] xl:mt-[34px] flex flex-col justify-center items-center"
              >
                <Button
                  className="text-[15.77px] lg:text-[24px] xl:text-[27px]"
                  title="enroll now"
                />
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
