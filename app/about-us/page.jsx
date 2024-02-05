import React from "react";
import Button from "../ui/Button";

const AboutUs = () => {
  return (
    <div className="mt-[97.57px] lg:mt-[154.47px] xl:mt-[114.57px] mb-[117px] lg:mb-[60.66px] xl:mb-[59px] flex flex-col justify-center items-center">
      {/* Hero */}
      <div className="flex flex-col justify-center items-center">
        {/* BG and Text */}
        <div className="flex flex-col justify-center items-center">
          <div></div>

          <div className="w-[378px] lg:w-[755px] xl:w-[1298px]">
            <p className="text-center text-[26.868px] lg:text-[54.575px] xl:text-[75px] font-bold">
              We are here to change the way people think about Online vocational
              based{" "}
              <span className="bg-gradient-to-r from-secondaryPink from-20% to-secondaryBlue to-60% text-transparent bg-clip-text">
                Learning
              </span>
            </p>
          </div>
        </div>

        <div className="w-[313px] lg:w-[660px] xl:w-[973px] mt-[32px] lg:mt-[61px] xl:mt-[49px]">
          <p className="text-center text-[9.768px] lg:text-[16.489px] xl:text-[24px] font-normal leading-tight tracking-[0.684px] lg:tracking-[1.154px] xl:tracking-[1.68px]">
            We are a passionate and optimism-filled online community dedicated
            to teaching life skills  to people across the globe. We are deriving
            outcomes and helping people achieve their goals. Right guidance is
            what it takes to strive in any industry or at an individual level.
            At Vocademyy, we have taken up this challenge to help you level up.
          </p>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="mt-[43px] lg:mt-[101px] xl:mt-[41px] w-full px-[42px] lg:px-[181px] xl:px-[178px]">
        <p className="uppercase text-[12.298px] lg:text-[23.533px] text-center font-bold">
          Mission & Values
        </p>

        <div className="w-full xl:w-fit mt-[47px] lg:mt-[90.34px] flex flex-col justify-center items-center xl:mx-auto">
          <div className="flex flex-col justify-between items-center">
            <div className="flex justify-center items-center w-full xl:px-[85px]">
              <div className="w-[12.793px] lg:w-[24.48px]  xl:w-[35px] h-[12.793px] lg:h-[24.48px] xl:h-[18px] rounded-full bg-primaryPink"></div>
              <hr className="border-[#F91992] border-[0.711px] w-[60%]" />
              <div className="w-[12.793px] lg:w-[24.48px]  xl:w-[35px] h-[12.793px] lg:h-[24.48px] xl:h-[18px] rounded-full bg-primaryPink"></div>
              <hr className="hidden xl:flex border-[#F91992] border-[0.711px] w-[60%]" />
              <div className="hidden xl:flex w-[12.793px] lg:w-[24.48px]  xl:w-[35px] h-[12.793px] lg:h-[24.48px] xl:h-[18px] rounded-full bg-primaryPink"></div>
              <hr className="hidden xl:flex border-[#F91992] border-[0.711px] w-[60%]" />
              <div className="hidden xl:flex w-[12.793px] lg:w-[24.48px]  xl:w-[35px] h-[12.793px] lg:h-[24.48px] xl:h-[18px] rounded-full bg-primaryPink"></div>
            </div>

            <div className="flex text-center gap-[79.6px] lg:gap-[152.33px] mt-[24.88px] xl:gap-[112px] lg:mt-[47.6px] xl:mt-[45px] text-[10.661px] lg:text-[20.401px] xl:text-[15px] font-normal tracking-[0.746px] lg:tracking-[1.428px] xl:tracking-[1.05px]">
              <p className="w-[132.909px] lg:w-[254.336px] xl:w-[187px]">
                Power careers through vocational skill training
              </p>
              <p className="w-[132.909px] lg:w-[254.336px] xl:w-[187px]">
                Help students & adults ace networking & self-confidence
              </p>
              <p className="hidden xl:block w-[187px]">
                To strive for professional & personal growth
              </p>
              <p className="hidden xl:block w-[187px]">
                To Develop an informed & balanced life.
              </p>
            </div>
          </div>

          <div className="xl:hidden mt-[49.33px] lg:mt-[121.03px] flex flex-col justify-between items-center">
            <div className="flex justify-center items-center w-full">
              <div className="w-[12.793px] lg:w-[24.48px] h-[12.793px] lg:h-[24.48px] rounded-full bg-primaryPink"></div>
              <hr className="border-[#F91992] border-[0.711px] w-[60%]" />
              <div className="w-[12.793px] lg:w-[24.48px] h-[12.793px] lg:h-[24.48px] rounded-full bg-primaryPink"></div>
            </div>

            <div className="flex text-center gap-[79.6px] lg:gap-[152.33px] mt-[24.88px] lg:mt-[47.6px] text-[10.661px] lg:text-[20.401px] font-normal tracking-[0.746px] lg:tracking-[1.428px]">
              <p className="w-[132.909px] lg:w-[254.336px]">
                w-ful To strive for professional & personal growth
              </p>
              <p className="w-[132.909px] lg:w-[254.336px]">
                To Develop an informed & balanced life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <Button
        title="explore courses"
        className="mt-[117.33px] lg:mt-[111.16px] xl:mt-[83px] text-[15.758px] lg:text-[20.034px] xl:text-[20px]"
      />
    </div>
  );
};

export default AboutUs;
