"use client";

import React, { useState } from "react";
import Image from "next/image";
import AuthBtn from "@/app/ui/AuthBtn";
import { courses } from "@/app/constant/data";
import { usePathname } from "next/navigation";

const CourseRegister = () => {
  const pathname = usePathname().split("/").pop().replace(/%20/g, " ");

  const [value, setValue] = useState(pathname);
  const [gender, setGender] = useState("gender");
  const [open, setOpen] = useState(false);
  const [openGender, setOpenGender] = useState(false);

  const handleSelect = (name) => {
    setValue(name);
    setOpen(false);
  };

  const handleGenderSelect = (name) => {
    setGender(name);
    setOpenGender(false);
  };
  return (
    <div className="flex flex-col justify-center items-center mt-[83px] mb-[50px] lg:mb-[75px] xl:mb-[109px] lg:mt-[151.57px] xl:mt-[66.57px] px-[25px] lg:px-[100px] xl:px-[162px] 2xl:px-[283px]">
      <div className="text-center font-bold text-[20px] lg:text-[64px] xl:text-[55px]">
        <p>Welcome to Vocademyy - Where Knowledge Meets Innovation</p>
      </div>
      <form className="w-[380px] h-[1087px] lg:w-[825px] lg:h-[798px] xl:w-[825px] xl:h-[798px] rounded-[25.9px] lg:rounded-[41px] xl:rounded-[41px] border-[2.53px] lg:border-[4px] mt-[35px] lg:mt-[75px] xl:mt-[49px] border-primaryPink shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] lg:shadow-[0_5.205px_5.205px_0px_rgba(0,0,0,0.25)] xl:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
        <div className="mt-[89px] lg:mt-[70px] xl:mt-[67px] px-[53px] lg:pl-[113px] lg:pr-[179px] gap-[34.6px] lg:gap-[24px] flex flex-col justify-start lg:justify-center items-start lg:items-end">
          <div className="flex flex-col lg:flex-row justify-center lg:items-center gap-[15px] lg:gap-[22px]">
            <label className="text-[13.956px] lg:text-[16px] font-medium leading-[14.793px] lg:leading-[16.96px]">
              Full Name
            </label>
            <input
              type="text"
              className="w-[273.887px] h-[31.401px] lg:w-[314px] lg:h-[36px] rounded-[12.2px] lg:rounded-[14px] border-[2.62px] lg:border-[3px] px-[14.68px] lg:px-[12px] focus:outline-none border-primaryPink"
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-center lg:items-center gap-[15px] lg:gap-[22px]">
            <label className="text-[13.956px] lg:text-[16px] font-medium leading-[14.793px] lg-leading-[16.96px]">
              Contact number
            </label>
            <input
              type="phone"
              className="w-[273.887px] h-[31.401px] lg:w-[314px] lg:h-[36px] rounded-[12.2px] lg:rounded-[14px] border-[2.62px] lg:border-[3px] px-[14.68px] lg:px-[12px] focus:outline-none border-primaryPink"
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-center lg:items-center gap-[15px] lg:gap-[22px]">
            <label className="text-[13.956px] lg:text-[16px] font-medium leading-[14.793px] lg-leading-[16.96px]">
              Email id
            </label>
            <input
              type="email"
              className="w-[273.887px] h-[31.401px] lg:w-[314px] lg:h-[36px] rounded-[12.2px] lg:rounded-[14px] border-[2.62px] lg:border-[3px] px-[14.68px] lg:px-[12px] focus:outline-none border-primaryPink"
            />
          </div>

          <div className="flex flex-row gap-[28.92px] lg:gap-[17px] w-full lg:pl-[158px]">
            <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-[7px] lg:gap-[23px]">
              <label className="text-[13.956px] lg:text-[16px] font-medium leading-[14.793px] lg-leading-[16.96px]">
                Age
              </label>
              <input
                min={1}
                max={100}
                type="number"
                className="w-[54.08px] h-[31.401px] lg:w-[62px] lg:h-[36px] rounded-[12.2px] lg:rounded-[14px] border-[2.62px] lg:border-[3px] px-[14.68px] lg:px-[12px] focus:outline-none border-primaryPink"
              />
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-[7px] lg:gap-[23px]">
              <label className="text-[13.956px] lg:text-[16px] font-medium leading-[14.793px] lg-leading-[16.96px]">
                Gender
              </label>

              <div className="w-[86.353px] h-[31.401px] lg:w-[99px] lg:h-[36px]">
                <div
                  onClick={() => {
                    setOpenGender(!openGender);
                    setOpen(false);
                  }}
                  className="flex justify-between items-center cursor-pointer px-[14.68px] lg:px-[12px] py-[3px] rounded-[12.2px] lg:rounded-[14px] border-[2.62px] lg:border-[3px] border-primaryPink"
                >
                  <p className="">{gender}</p>
                  <div className="w-[12.212px] h-[6.106px] lg:w-[14px] lg:h-[7px]">
                    <Image
                      className="object-contain w-[12.212px] h-[6.106px] lg:w-[14px] lg:h-[7px]"
                      src="/dropDownArrow.svg"
                      alt="dropDwonArrow"
                      width={12.212}
                      height={6.106}
                    />
                  </div>
                </div>

                {openGender && (
                  <ul className="mt-[10px] w-[86.353px] h-[115px] lg:w-[99px] lg:h-[115px] border-[2.62px] lg:border-[3px] border-primaryPink flex flex-col gap-2 relative bg-white">
                    <li
                      onClick={() => handleGenderSelect("Male")}
                      className="hover:bg-gray-200 px-[14.68px] lg:px-[12px] py-[3px] cursor-pointer"
                    >
                      Male
                    </li>
                    <li
                      onClick={() => handleGenderSelect("Female")}
                      className="hover:bg-gray-200 px-[14.68px] lg:px-[12px] py-[3px] cursor-pointer"
                    >
                      Female
                    </li>
                    <li
                      onClick={() => handleGenderSelect("Others")}
                      className="hover:bg-gray-200 px-[14.68px] lg:px-[12px] py-[3px] cursor-pointer"
                    >
                      Others
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-center lg:items-center gap-[15px] lg:gap-[22px]">
            <label className="text-[13.956px] lg:text-[16px] font-medium leading-[14.793px] lg-leading-[16.96px]">
              Location
            </label>
            <input
              type="text"
              className="w-[273.887px] h-[31.401px] lg:w-[314px] lg:h-[36px] rounded-[12.2px] lg:rounded-[14px] border-[2.62px] lg:border-[3px] px-[14.68px] lg:px-[12px] focus:outline-none border-primaryPink"
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-center lg:items-center gap-[15px] lg:gap-[22px]">
            <label className="text-[13.956px] lg:text-[16px] font-medium leading-[14.793px] lg-leading-[16.96px]">
              Course you want to opt for
            </label>

            <div className="w-[273.887px] h-[31.401px] lg:w-[314px] lg:h-[36px]">
              <div
                onClick={() => {
                  setOpenGender(false);
                  setOpen(!open);
                }}
                className="flex justify-between items-center cursor-pointer px-[14.68px] lg:px-[12px] py-[3px] rounded-[12.2px] lg:rounded-[14px] border-[2.62px] lg:border-[3px] border-primaryPink"
              >
                <p className="capitalize">{value}</p>
                <div className="w-[12.212px] h-[6.106px] lg:w-[14px] lg:h-[7px]">
                  <Image
                    className="object-contain w-[12.212px] h-[6.106px] lg:w-[14px] lg:h-[7px]"
                    src="/dropDownArrow.svg"
                    alt="dropDwonArrow"
                    width={12.212}
                    height={6.106}
                  />
                </div>
              </div>

              {open && (
                <ul className="mt-[10px] w-[273.887px] h-[273.887px] lg:w-[314px] lg:h-[314px] border-[2.62px] lg:border-[3px] border-primaryPink flex flex-col gap-2 relative bg-white overflow-y-scroll">
                  {courses.map((course) => (
                    <li
                      onClick={() => handleSelect(course.name)}
                      className="hover:bg-gray-200 px-[14.68px] lg:px-[12px] py-[3px] cursor-pointer"
                      key={course.id}
                    >
                      {course.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="hidden flex-col lg:flex-row justify-center lg:items-center gap-[15px] lg:gap-[22px]">
            <label className="text-[13.956px] lg:text-[16px] font-medium leading-[14.793px] lg-leading-[16.96px]">
              DOB
            </label>
            {/* <input type="text" className="" /> */}
          </div>

          <div className="flex flex-col lg:flex-row justify-end lg:w-full lg:items-start gap-[15px] lg:gap-[22px]">
            <label className="text-[13.956px] lg:text-[16px] lg:text-end font-medium leading-[14.793px] lg:leading-[23.68px]">
              How did you get to know
              <br className="hidden lg:block" /> about Vocademy?
            </label>
            <textarea className="w-[273.887px] h-[84.608px] lg:w-[314px] lg:h-[97px] rounded-[12.2px] border-[2.62px] lg:border-[3px] px-[14.68px] lg:px-[12px] focus:outline-none border-primaryPink" />
          </div>
        </div>

        <div className="mt-[49.75px] lg:mt-[47px] text-[8.723px] lg:text-[10px] leading-[9.246px] lg:leading-[10.6px] font-normal flex justify-center items-center gap-[15.98px] lg:gap-[18px]">
          <p>I agree to the Terms of Service and Privacy Policy.</p>
          <input
            type="checkbox"
            className="w-[17.445px] h-[17.445px] lg:w-[20px] lg:h-[20px] border-[0.87px] lg:border-[1px] rounded-[5.23px] lg:rounded-[6px] border-primaryPink accent-primaryPink"
          />
        </div>

        <div className="mt-[37.64px] lg:mt-[29px] xl:mt-[35px] flex flex-col justify-center items-center">
          <AuthBtn title="register now" />
        </div>
      </form>
    </div>
  );
};

export default CourseRegister;
