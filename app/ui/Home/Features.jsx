import Image from "next/image";
import React from "react";
import { checksLeft, checksRight, features } from "./data";
import Button from "../Button";

const Features = () => {
  return (
    <div className="mt-[36px] lg:mt-[150.22px]">
      <div className="px-[37.29px] md:px-[150px] lg:px-[92px] xl:px-[71px] 2xl:px-0">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-[37.99px] lg:w-[82.289px] xl:w-[64px] h-[43px] lg:h-[93.136px] xl:h-[68.74px]">
            <Image
              src="/feature1.svg"
              className="object-contain w-[37.99px] lg:w-[82.289px] xl:w-[64px] h-[43px] lg:h-[93.136px] xl:h-[68.74px]"
              alt="feature1"
              width={37.99}
              height={43}
            />
          </div>

          <div className="flex flex-col justify-center items-center mt-[9px] lg:mt-[19.49px] xl:w-full">
            <div className="flex justify-center items-center mx-[91.56px] xl:px-[139px] w-full">
              <div className="w-[17.463px] lg:w-[37.825px] xl:w-[42px] h-[17.463px] lg:h-[37.825px] rounded-full bg-[#F91992]"></div>
              <hr className="border-[#F91992] border-[0.805px] w-[50%]" />
              <div className="w-[17.463px] lg:w-[37.825px] xl:w-[42px] h-[17.463px] lg:h-[37.825px] rounded-full bg-[#F91992]"></div>
              <hr className="border-[#F91992] hidden xl:flex border-[0.805px] w-[50%]" />
              <div className="w-[17.463px] lg:w-[37.825px] xl:w-[42px] h-[17.463px] lg:h-[37.825px] hidden xl:flex rounded-full bg-[#F91992]"></div>
            </div>

            <div className="flex justify-between items-center w-full 2xl:gap-14">
              <div className="text-center mt-[16.93px] lg:mt-[18.34px] xl:mt-[15.26px] flex flex-col justify-between items-center">
                <p className="text-[12.6px] lg:text-[25.509px] leading-tight w-[164.578px] lg:w-[356.469px] xl:w-[311px] font-bold text-[#000]">
                  Learn from the Experts themselves
                </p>
                <p className="text-[7.489px] lg:text-[16.047px] leading-tight mt-[6.51px] lg:mt-[13.09px] w-[150.819px] lg:w-[326.668px] font-normal text-[#000]">
                  Get help from expert trainers who are dedicated to their
                  subject for your effective learning. They make sure to go the
                  extra mile.
                </p>
              </div>
              <div className="hidden xl:flex mt-20 w-[41px] h-[49.742px] lg:w-[88.805px] lg:h-[107.74px] xl:w-[62px] xl:h-[89.269px]">
                <Image
                  src="/feature2.svg"
                  alt="feature2"
                  width={41}
                  height={49.742}
                  className="object-contain w-[41px] h-[49.742px] lg:w-[88.805px] lg:h-[107.74px] xl:w-[62px] xl:h-[89.269px]"
                />
              </div>
              <div className="text-center lg:-mt-[20px] xl:pl-16 flex flex-col justify-between items-center">
                <p className="text-[12.6px] lg:text-[25.509px] leading-tight w-[164.578px] lg:w-[356.469px] xl:w-[311px] font-bold text-[#000]">
                  Get Personalised Feedback
                </p>
                <p className="text-[7.489px] lg:text-[16.047px] leading-tight mt-[6.51px] lg:mt-[13.09px] w-[150.819px] lg:w-[326.668px] font-normal text-[#000]">
                  Ask as many questions and request feedback directly from your
                  expert tutor. You never left unanswered at any step.
                </p>
              </div>
              <div className="hidden xl:flex mt-20 w-[44px] lg:w-[95.303px] xl:w-[88.81px] h-[47.259px] lg:h-[102.36px] xl:h-[90px]">
                <Image
                  src="/feature3.svg"
                  alt="feature3"
                  width={44}
                  height={47.259}
                  className="object-contain w-[44px] lg:w-[95.303px] xl:w-[88.81px] h-[47.259px] lg:h-[102.36px] xl:h-[90px]"
                />
              </div>
              <div className="text-center mt-[8.47px] lg:mt-[18.34px] hidden xl:flex flex-col justify-center items-center">
                <p className="text-[12px] lg:text-[27px] leading-tight font-bold text-[#000] w-[195.271px] lg:w-[422.949px] xl:w-[369px]">
                  Connect with a community across the globe
                </p>
                <p className="text-[7.489px] lg:text-[16.047px] font-normal text-[#000] mt-[6.51px] lg:mt-[13.09px] w-[150.819px] lg:w-[326.668px] leading-tight">
                  The community is home to millions of people across the globe
                  who are curious and passionate about exploring and expressing
                  their creativity.
                </p>
              </div>
            </div>

            <div className="hidden justify-center items-center gap-[413px]">
              <div className="w-[41px] h-[49.742px] lg:w-[88.805px] lg:h-[107.74px] xl:w-[62px] xl:h-[89.269px]">
                <Image
                  src="/feature2.svg"
                  alt="feature2"
                  width={41}
                  height={49.742}
                  className="object-contain w-[41px] h-[49.742px] lg:w-[88.805px] lg:h-[107.74px] xl:w-[62px] xl:h-[89.269px]"
                />
              </div>
              <div className="w-[44px] lg:w-[95.303px] xl:w-[88.81px] h-[47.259px] lg:h-[102.36px] xl:h-[90px]">
                <Image
                  src="/feature3.svg"
                  alt="feature3"
                  width={44}
                  height={47.259}
                  className="object-contain w-[44px] lg:w-[95.303px] xl:w-[88.81px] h-[47.259px] lg:h-[102.36px] xl:h-[90px]"
                />
              </div>
            </div>
          </div>

          <div className="flex xl:hidden justify-center items-center gap-[28px] w-full mt-[39.56px] lg:mt-[87.16px]">
            <div className="w-[41px] h-[49.742px] lg:w-[88.805px] lg:h-[107.74px] mt-[45px] lg:mt-[110px]">
              <Image
                src="/feature2.svg"
                alt="feature2"
                width={41}
                height={49.742}
                className="object-contain w-[41px] h-[49.742px] lg:w-[88.805px] lg:h-[107.74px]"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="w-[17.463px] lg:w-[37.825px] h-[17.463px] lg:h-[37.825px] rounded-full bg-[#F91992]"></div>
              <div className="text-center mt-[8.47px] lg:mt-[18.34px] flex flex-col justify-center items-center">
                <p className="text-[12px] lg:text-[27px] leading-tight font-bold text-[#000] w-[195.271px] lg:w-[422.949px]">
                  Connect with a community across the globe
                </p>
                <p className="text-[7.489px] lg:text-[16.047px] font-normal text-[#000] mt-[6.51px] lg:mt-[13.09px] w-[150.819px] lg:w-[326.668px] leading-tight">
                  The community is home to millions of people across the globe
                  who are curious and passionate about exploring and expressing
                  their creativity.
                </p>
              </div>
            </div>
            <div className="w-[44px] lg:w-[95.303px] h-[47.259px] lg:h-[102.36px] mt-[45px] lg:mt-[110px]">
              <Image
                src="/feature3.svg"
                alt="feature3"
                width={44}
                height={47.259}
                className="object-contain w-[44px] lg:w-[95.303px] h-[47.259px] lg:h-[102.36px]"
              />
            </div>
          </div>

          <div className="flex flex-col xl:flex-row justify-center items-center xl:items-start mt-[66.56px] lg:mt-[146.13px] xl:mt-[50px] xl:w-full xl:gap-[100px]">
            <div className="hidden xl:flex justify-center items-center w-[92.32px] h-full my-auto">
              <Image
                src="/feature4.svg"
                className="object-contain w-[92.32px] h-[112px]"
                alt="feature4"
                width={92.32}
                height={112}
              />
            </div>
            <div className="flex flex-col justify-between xl:flex-2 items-center">
              <div className="flex justify-center items-center mx-[91.56px] w-full">
                <div className="w-[17.463px] lg:w-[37.825px] h-[17.463px] lg:h-[37.825px] rounded-full bg-[#F91992]"></div>
                <hr className="border-[#F91992] border-[0.805px] w-[50%]" />
                <div className="w-[17.463px] lg:w-[37.825px] h-[17.463px] lg:h-[37.825px] rounded-full bg-[#F91992]"></div>
              </div>

              <div className="flex justify-around items-center w-full">
                <div className="text-center mt-[16.93px] flex flex-col justify-between items-center">
                  <p className="text-[12.6px] lg:text-[27.509px] leading-tight w-[140.765px] lg:w-[304.89px] font-bold text-[#000]">
                    Limited Learners in a Batch
                  </p>
                  <p className="text-[7.489px] lg:text-[16.047px] lg:mt-[11.94px] mt-[6.51px] leading-tight w-[150.819px] lg:w-[326.668px] font-normal text-[#000]">
                    Quality engagement with a limited number of students in a
                    batch to make learning more focused.
                  </p>
                  <div className="xl:hidden w-[36.999px] lg:w-[80.139px] h-[37.497px] lg:h-[81.217px] mt-5">
                    <Image
                      src="/feature4.svg"
                      className="object-contain w-[36.999px] lg:w-[80.139px] h-[37.497px] lg:h-[81.217px]"
                      alt="feature4"
                      width={36.999}
                      height={37.497}
                    />
                  </div>
                </div>
                <div className="text-center -mt-[10px] lg:-mt-[34px] xl:-mt-[10px] flex flex-col justify-between items-center">
                  <p
                    p
                    className="text-[12.6px] lg:text-[27.509px] leading-tight w-[140.765px] lg:w-[304.89px] font-bold text-[#000]"
                  >
                    Learn through LIVE CLASSES
                  </p>
                  <p className="text-[7.489px] lg:text-[16.047px] mt-[6.51px] leading-tight w-[150.819px] lg:w-[326.668px] font-normal text-[#000]">
                    Get a direct learning experience. More engagement. More
                    Results.
                  </p>
                  <div className="xl:hidden w-[22.225px] lg:w-[48.139px] h-full lg:h-[69.311px] mt-[10px] flex">
                    <Image
                      src="/feature5.svg"
                      className="object-contain w-[22.225px] lg:w-[48.139px] h-[32px] lg:h-[69.311px]"
                      alt="feature5"
                      width={22.225}
                      height={32}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden xl:flex justify-center items-center w-[94.54px] h-full my-auto">
              <Image
                src="/feature5.svg"
                className="object-contain w-[94.54px] h-[107px]"
                alt="feature5"
                width={94}
                height={107}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[58.5px] px-[24px] flex flex-col justify-center items-center">
        <div className="flex flex-col lg:flex-row justify-center items-center mt-[25px] gap-[25px] lg:gap-[68.53px]">
          <div className="px-[14px] flex-2 w-[354px] lg:w-[463.975px] xl:w-[650px]">
            <p className="text-center lg:text-start text-[28px] lg:text-[65px] xl:text-[93px] leading-tight text-[#000] font-bold">
              BUT, THIS IS NOT WHERE IT STOPS
            </p>
          </div>

          <div className="w-[128px] lg:w-[241.547px] xl:w-[338.393px] h-[104.021px] lg:h-[196.297px] xl:h-[275px] flex-1">
            <Image
              className="object-contain w-[128px] lg:w-[241.547px] xl:w-[338.393px] h-[104.021px] lg:h-[196.297px] xl:h-[275px]"
              src="/feature6.svg"
              alt="feature6"
              width={128}
              height={104.021}
            />
          </div>
        </div>

        <p className="mt-[24.98px] lg:mt-[42.38px] text-[#000] text-center text-[13px] lg:text-[14.276px] xl:text-xl font-semibold tracking-[0.52px]">
          WHAT ELSE IS INCLUDED?
        </p>

        <div className="mt-[47px] xl:mt-[87px] px-5 md:px-10 lg:px-0 w-full mx-auto md:mx-0 flex flex-col md:flex-row md:justify-center md:items-start md:gap-[98.3px] text-[14.4px] md:text-[17.131px] xl:text-2xl font-semibold">
          <div className="">
            {checksLeft.map((check) => (
              <div key={check.title} className="flex mb-[16.4px] gap-[23px]">
                <span className="w-[22.009px] h-[19.341px] lg:w-[23.556px] lg:h-[20.7px]">
                  <Image
                    className="object-contain w-[22.009px] h-[19.341px] lg:w-[23.556px] lg:h-[20.7px]"
                    src="/check.svg"
                    alt="check"
                    width={22.009}
                    height={19.341}
                  />
                </span>
                <p className="flex gap-[15.34px] items-center">
                  {" "}
                  {check.title}
                </p>
              </div>
            ))}
          </div>
          <div className="">
            {checksRight.map((check) => (
              <div key={check.title} className="flex mb-[16.4px] gap-[23px]">
                <span className="w-[22.009px] h-[19.341px] lg:w-[23.556px] lg:h-[20.7px]">
                  <Image
                    className="object-contain w-[22.009px] h-[19.341px] lg:w-[23.556px] lg:h-[20.7px]"
                    src="/check.svg"
                    alt="check"
                    width={22.009}
                    height={19.341}
                  />
                </span>
                <p className="flex gap-[15.34px] items-center">
                  {" "}
                  {check.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Button
          title="explore courses"
          className="mt-[27.15px] lg:mt-[102.45px] xl:mt-[110px] text-[15.758px] lg:text-xl"
        />
      </div>

      <div className="mt-[43px] lg:mt-[141.89px] xl:mt-[42px] px-[37px] flex flex-col justify-center items-center">
        <div className="lg:w-[539px] xl:hidden text-center text-[18.9px] lg:text-[32px] text-[#000] font-bold">
          <p>LEARN TO UPSKILL WITH DIVE- DEEP CONTENT TO THRIVE IN</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center mt-9 gap-[49px] lg:gap-[72.06px] xl:gap-[101.06px] lg:mt-[119px]">
          <div className="w-[204.696px] lg:w-[541px] h-[179px] lg:h-[473.088px]">
            <Image
              className="object-contain w-[204.696px] lg:w-[541px] h-[179px] lg:h-[473.088px]"
              src="/feature7.svg"
              alt="feature7"
              width={204.696}
              height={179}
            />
          </div>

          <div className="">
            <div className="hidden lg:w-[539px] xl:flex text-left text-[18.9px] lg:text-[32px] text-[#000] font-bold">
              <p>LEARN TO UPSKILL WITH DIVE- DEEP CONTENT TO THRIVE IN</p>
            </div>

            <div className="xl:mt-[74px]">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-[41px] mb-[39px]"
                >
                  <div className="w-[19px] h-[19px] rounded-full bg-[#F91992]"></div>
                  <p className="text-xl font-bold">{feature.title}</p>
                </div>
              ))}
            </div>

            <Button
              title="register now"
              className="hidden xl:flex justify-center items-center text-[15.758px] lg:text-xl"
            />
          </div>
        </div>

        <Button title="register now" className="xl:hidden" />
      </div>
    </div>
  );
};

export default Features;
