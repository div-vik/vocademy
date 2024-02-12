"use client";

import React, { useState } from "react";
import Image from "next/image";
import AuthBtn from "../ui/AuthBtn";
import { courses } from "../constant/data";
import emailjs from "@emailjs/browser";

const Register = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [course, setCourse] = useState("Select your course");
  const [gender, setGender] = useState("gender");
  const [open, setOpen] = useState(false);
  const [openGender, setOpenGender] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const initialInfo = {
    fullName: "",
    contactNumber: "",
    emailId: "",
    age: "",
    location: "",
    know: "",
    course,
    gender,
    isValid,
    // isChecked,
  };

  const [studentDetail, setStudentDetail] = useState(initialInfo);
  const handleSelect = (name) => {
    setCourse(name);
    setOpen(false);
  };

  const handleGenderSelect = (name) => {
    setGender(name);
    setOpenGender(false);
  };

  const handleChange = (e) => {
    setStudentDetail({
      ...studentDetail,
      [e.target.name]: e.target.value,
      course,
      gender,
      isValid,
      isChecked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !studentDetail.fullName ||
      !studentDetail.contactNumber ||
      !studentDetail.emailId ||
      !studentDetail.age ||
      studentDetail.gender === "gender" ||
      !location ||
      studentDetail.course === "Select your course" ||
      !studentDetail.know
      // studentDetail.isChecked === false
    ) {
      setIsValid(true);
    }

    console.log(studentDetail);

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_jqjogrv";
    const templateId = "template_a04ee2b";
    const publicKey = "NwhXdvjBJSQCxs85i";

    // Create a new object that contains dynamic template params
    const templateParams = {
      full_name: studentDetail.fullName,
      contact_number: studentDetail.contactNumber,
      email_id: studentDetail.emailId,
      age: studentDetail.age,
      gender: studentDetail.gender,
      location: studentDetail.location,
      course_name: studentDetail.course,
      know: studentDetail.know,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setStudentDetail(initialInfo);
        setGender("gender");
        setCourse("Select your course");
        setIsChecked(false);
      })
      .catch((error) => {
        console.log("Error sending email:", error);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[83px] mb-[50px] lg:mb-[75px] xl:mb-[109px] lg:mt-[151.57px] xl:mt-[66.57px] px-[25px] lg:px-[100px] xl:px-[162px] 2xl:px-[283px]">
      <div className="text-center font-bold text-[20px] lg:text-[64px] xl:text-[55px]">
        <p>Welcome to Vocademyy - Where Knowledge Meets Innovation</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-[380px] h-[1087px] lg:w-[825px] lg:h-[798px] xl:w-[825px] xl:h-[798px] rounded-[25.9px] lg:rounded-[41px] xl:rounded-[41px] border-[2.53px] lg:border-[4px] mt-[35px] lg:mt-[75px] xl:mt-[49px] border-primaryPink shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] lg:shadow-[0_5.205px_5.205px_0px_rgba(0,0,0,0.25)] xl:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] flex flex-col items-center"
      >
        <div className="mt-[89px] lg:mt-[70px] xl:mt-[67px] px-[53px] lg:pl-[103px] lg:pr-[179px] gap-[34.6px] lg:gap-[24px] flex flex-col justify-start lg:justify-center items-start lg:items-end">
          <div className="flex flex-col lg:flex-row justify-center lg:items-center gap-[15px] lg:gap-[22px]">
            <label className="text-[13.956px] lg:text-[16px] font-medium leading-[14.793px] lg:leading-[16.96px]">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              name="fullName"
              value={studentDetail.fullName}
              onChange={handleChange}
              type="text"
              className="w-[273.887px] h-[31.401px] lg:w-[314px] lg:h-[36px] rounded-[12.2px] lg:rounded-[14px] border-[2.62px] lg:border-[3px] px-[14.68px] lg:px-[12px] focus:outline-none border-primaryPink"
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-center lg:items-center gap-[15px] lg:gap-[22px]">
            <label className="text-[13.956px] lg:text-[16px] font-medium leading-[14.793px] lg-leading-[16.96px]">
              Contact number <span className="text-red-600">*</span>
            </label>
            <input
              name="contactNumber"
              value={studentDetail.contactNumber}
              onChange={handleChange}
              type="tel"
              className="w-[273.887px] h-[31.401px] lg:w-[314px] lg:h-[36px] rounded-[12.2px] lg:rounded-[14px] border-[2.62px] lg:border-[3px] px-[14.68px] lg:px-[12px] focus:outline-none border-primaryPink"
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-center lg:items-center gap-[15px] lg:gap-[22px]">
            <label className="text-[13.956px] lg:text-[16px] font-medium leading-[14.793px] lg-leading-[16.96px]">
              Email id <span className="text-red-600">*</span>
            </label>
            <input
              name="emailId"
              value={studentDetail.emailId}
              onChange={handleChange}
              type="email"
              className="w-[273.887px] h-[31.401px] lg:w-[314px] lg:h-[36px] rounded-[12.2px] lg:rounded-[14px] border-[2.62px] lg:border-[3px] px-[14.68px] lg:px-[12px] focus:outline-none border-primaryPink"
            />
          </div>

          <div className="flex flex-row gap-[28.92px] lg:gap-[17px] w-full lg:pl-[158px]">
            <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-[7px] lg:gap-[23px]">
              <label className="text-[13.956px] lg:text-[16px] font-medium leading-[14.793px] lg-leading-[16.96px]">
                Age <span className="text-red-600">*</span>
              </label>
              <input
                name="age"
                value={studentDetail.age}
                onChange={handleChange}
                min={1}
                max={100}
                type="number"
                className="w-[54.08px] h-[31.401px] lg:w-[62px] lg:h-[36px] rounded-[12.2px] lg:rounded-[14px] border-[2.62px] lg:border-[3px] px-[14.68px] lg:px-[12px] focus:outline-none border-primaryPink"
              />
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-[7px] lg:gap-[23px]">
              <label className="text-[13.956px] lg:text-[16px] font-medium leading-[14.793px] lg-leading-[16.96px]">
                Gender <span className="text-red-600">*</span>
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
              Location <span className="text-red-600">*</span>
            </label>
            <input
              name="location"
              value={studentDetail.location}
              onChange={handleChange}
              type="text"
              className="w-[273.887px] h-[31.401px] lg:w-[314px] lg:h-[36px] rounded-[12.2px] lg:rounded-[14px] border-[2.62px] lg:border-[3px] px-[14.68px] lg:px-[12px] focus:outline-none border-primaryPink"
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-center lg:items-center gap-[15px] lg:gap-[22px]">
            <label className="text-[13.956px] lg:text-[16px] font-medium leading-[14.793px] lg-leading-[16.96px]">
              Course you want to opt for <span className="text-red-600">*</span>
            </label>

            <div className="w-[273.887px] h-[31.401px] lg:w-[314px] lg:h-[36px]">
              <div
                onClick={() => {
                  setOpenGender(false);
                  setOpen(!open);
                }}
                className="flex justify-between items-center cursor-pointer px-[14.68px] lg:px-[12px] py-[3px] rounded-[12.2px] lg:rounded-[14px] border-[2.62px] lg:border-[3px] border-primaryPink"
              >
                <p className="capitalize">{course}</p>
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
              <span className="text-red-600">*</span>
            </label>
            {/* <input type="text" className="" /> */}
          </div>

          <div className="flex flex-col lg:flex-row justify-end lg:w-full lg:items-start gap-[15px] lg:gap-[22px]">
            <label className="text-[13.956px] lg:text-[16px] lg:text-end font-medium leading-[14.793px] lg:leading-[23.68px]">
              How did you get to know
              <br className="hidden lg:block" /> about Vocademy?{" "}
              <span className="text-red-600">*</span>
            </label>
            <textarea
              name="know"
              value={studentDetail.know}
              onChange={handleChange}
              className="w-[273.887px] h-[84.608px] lg:w-[314px] lg:h-[97px] rounded-[12.2px] border-[2.62px] lg:border-[3px] px-[14.68px] lg:px-[12px] focus:outline-none border-primaryPink"
            />
          </div>
        </div>

        <div className="mt-[49.75px] lg:mt-[47px] text-[8.723px] lg:text-[10px] leading-[9.246px] lg:leading-[10.6px] font-normal flex justify-center items-center gap-[15.98px] lg:gap-[18px]">
          <p>I agree to the Terms of Service and Privacy Policy.</p>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className="w-[17.445px] h-[17.445px] lg:w-[20px] lg:h-[20px] border-[0.87px] lg:border-[1px] rounded-[5.23px] lg:rounded-[6px] border-primaryPink accent-primaryPink"
          />{" "}
          <span className="text-red-600">*</span>
        </div>

        <div className="mt-[37.64px] lg:mt-[29px] xl:mt-[35px] flex flex-col justify-center items-center">
          <AuthBtn title="register now" />
        </div>

        {isValid && (
          <div className="mt-5 text-sm text-red-600 font-semibold">
            <p className="text-red">Please fill all required (*) fields</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Register;
