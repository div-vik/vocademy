import Image from "next/image";
import React from "react";
import { checks, features } from "./data";

const Features = () => {
  return (
    <div className="mt-[36px]">
      <div className="px-[37.29px]">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-[37.99px] h-[43px]">
            <Image
              src="/feature1.svg"
              className="object-contain"
              alt="feature1"
              width={37.99}
              height={43}
            />
          </div>

          <div className="flex justify-between items-center mx-[91.56px] mt-[9px]">
            <div className="w-[17.463px] h-[17.463px] rounded-full bg-[#F91992]"></div>
            <hr className="border-[#F91992] border-[0.805px] w-[200px]" />
            <div className="w-[17.463px] h-[17.463px] rounded-full bg-[#F91992]"></div>
          </div>

          <div className="flex justify-between items-center w-full">
            <div className="text-center mt-[16.93px] flex flex-col justify-between items-center">
              <p className="text-[12.6px] max-w-[164.578px] font-bold text-[#000]">
                Learn from the Experts themselves
              </p>
              <p className="text-[7.489px] max-w-[152px] font-normal text-[#000]">
                Get help from expert trainers who are dedicated to their subject
                for your effective learning. They make sure to go the extra
                mile.
              </p>
            </div>
            <div className="text-center -mt-[3px] flex flex-col justify-between items-center">
              <p className="text-[12.6px] max-w-[164.578px] font-bold text-[#000]">
                Get Personalised Feedback
              </p>
              <p className="text-[7.489px] max-w-[150.819px] font-normal text-[#000]">
                Ask as many questions and request feedback directly from your
                expert tutor. You never left unanswered at any step.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-[39.56px]">
          <div className="w-[41px] h-[49.742px] mt-[45px] mr-[38px]">
            <Image
              src="/feature2.png"
              alt="feature2"
              width={41}
              height={49.742}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-[17.463px] h-[17.463px] rounded-full bg-[#F91992]"></div>
            <div className="text-center mt-[8.47px] flex flex-col justify-center items-center">
              <p className="text-[12px] font-bold text-[#000] max-w-[195.271px]">
                Connect with a community across the globe
              </p>
              <p className="text-[7.489px] font-normal text-[#000] mt-[6.51px] max-w-[150.819px]">
                The community is home to millions of people across the globe who
                are curious and passionate about exploring and expressing their
                creativity.
              </p>
            </div>
          </div>
          <div className="w-[44px] h-[47.259px] mt-[45px] ml-[26.73px]">
            <Image
              src="/feature3.svg"
              alt="feature3"
              width={44}
              height={47.259}
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-[66.56px]">
          <div className="flex justify-between items-center mx-[91.56px]">
            <div className="w-[17.463px] h-[17.463px] rounded-full bg-[#F91992]"></div>
            <hr className="border-[#F91992] border-[0.805px] w-[200px]" />
            <div className="w-[17.463px] h-[17.463px] rounded-full bg-[#F91992]"></div>
          </div>

          <div className="flex justify-between items-center w-full">
            <div className="text-center mt-[16.93px] flex flex-col justify-between items-center">
              <p className="text-[12.6px] max-w-[164.578px] font-bold text-[#000]">
                Limited Learners in a Batch
              </p>
              <p className="text-[7.489px] max-w-[152px] font-normal text-[#000]">
                Quality engagement with a limited number of students in a batch
                to make learning more focused.
              </p>
              <div className="w-[36.999px] h-[37.497px] mt-5">
                <Image
                  src="/feature4.svg"
                  className="object-contain"
                  alt="feature4"
                  width={36.999}
                  height={37.497}
                />
              </div>
            </div>
            <div className="text-center -mt-[8px] flex flex-col justify-between items-center">
              <p className="text-[12.6px] max-w-[164.578px] font-bold text-[#000]">
                Learn through LIVE CLASSES
              </p>
              <p className="text-[7.489px] max-w-[150.819px] font-normal text-[#000]">
                Get a direct learning experience. More engagement. More Results.
              </p>
              <div className="w-[22.225px] h-[32px] mt-[10px]">
                <Image
                  src="/feature5.svg"
                  className="object-contain"
                  alt="feature5"
                  width={22.225}
                  height={32}
                />
              </div>
            </div>
          </div>

          {/* <div className="flex justify-between items-center w-full mt-[37px] relative">
            <div className="w-[36.999px] h-[37.497px] absolute left-[64px]">
              <Image
                src="/feature4.svg"
                className="object-contain"
                alt="feature4"
                width={36.999}
                height={37.497}
              />
            </div>
            <div className="w-[22.225px] h-[32px] mt-[10px] absolute right-[65.59px]">
              <Image
                src="/feature5.svg"
                className="object-contain"
                alt="feature5"
                width={22.225}
                height={32}
              />
            </div>
          </div> */}
        </div>
      </div>

      <div className="mt-[58.5px] px-[24px] flex flex-col justify-center items-center">
        <div className="px-[14px]">
          <p className="text-center text-[28px] text-[#000] font-bold">
            BUT, THIS IS NOT WHERE IT STOPS
          </p>
        </div>

        <div className="w-[128px] h-[104.021px] mt-[25px]">
          <Image
            className="object-contain"
            src="/feature6.svg"
            alt="feature6"
            width={128}
            height={104.021}
          />
        </div>

        <p className="mt-[24.98px] text-[#000] text-center text-[13px] font-semibold tracking-[0.52px]">
          WHAT ELSE IS INCLUDED?
        </p>

        <div className="mt-[47px]">
          {checks.map((check) => (
            <div key={check.title} className="flex mb-[16.4px]">
              <p className="flex gap-[15.34px] items-center text-[14.4px] font-semibold">
                <span>
                  <Image
                    src="/check.svg"
                    alt="check"
                    width={22.009}
                    height={19.341}
                  />
                </span>{" "}
                {check.title}
              </p>
            </div>
          ))}
        </div>

        <button className="w-[159.152px] h-[52px] rounded-3xl bg-[#E53990] mt-[27.15px] text-center text-[15.758px] font-bold lowercase">
          explore courses
        </button>
      </div>

      <div className="mt-[43px] px-[37px] flex flex-col justify-center items-center">
        <div className="">
          <p className="text-center text-[18.9px] text-[#000] font-bold">
            LEARN TO UPSKILL WITH DIVE- DEEP CONTENT TO THRIVE IN
          </p>
        </div>

        <div className="w-[204.696px] h-[179px] mt-9">
          <Image
            className="object-contain"
            src="/feature7.svg"
            alt="feature7"
            width={204.696}
            height={179}
          />
        </div>

        <div className="mt-[49px]">
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

        <button className="w-[159.152px] h-[52px] rounded-3xl bg-[#E53990] mt-[10px] text-center text-[15.758px] font-bold lowercase">
          register now
        </button>
      </div>
    </div>
  );
};

export default Features;
