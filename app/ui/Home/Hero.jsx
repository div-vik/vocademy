import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="mt-[65px] lg:mt-[85px] flex flex-col justify-center items-center lg:px-[82px] xl:px-[123px] 2xl:px-[140px]">
      <div className="flex flex-col justify-center items-center relative">
        <div className="hidden xl:flex w-[1400px] h-[438.633px]">
          <Image
            className="object-contain"
            src="/homeBg.png"
            alt="background"
            width={1400}
            height={438.633}
          />
        </div>
        <div className="xl:absolute xl:top-20 w-[424px] lg:w-[852px] xl:w-[1193px] flex justify-center items-center">
          <p className="text-center text-[#000] text-[47.198px] lg:text-[94.841px] xl:text-[96px] font-bold leading-tight">
            Unleash your true{" "}
            <span className="bg-gradient-to-r from-secondaryPink from-20% to-secondaryBlue to-60% text-transparent bg-clip-text">
              potential
            </span>{" "}
            by learning life skills live with us
          </p>
        </div>
      </div>

      <div className="hidden xl:flex justify-start items-center gap-[60px] -mt-[75px] z-10 relative">
        <div className="lg:w-[113.542px] xl:w-[116.4px] lg:h-[279.328px] xl:h-[286.342px]">
          <Image
            className="object-contain lg:w-[113.542px] xl:w-[116.4px] lg:h-[279.328px] xl:h-[286.342px]"
            src="/boy1.svg"
            alt="boy1"
            width={67.5}
            height={155.38}
          />
        </div>

        <div className="xl:flex justify-between items-center w-[325px] lg:w-[723px] xl:w-[847px] -mt-[20px]">
          <p className="text-center text-[12.248px] lg:text-[24px] xl:text-[24px] font-[500] tracking-[0.612px] lg:tracking-[1.2px] leading-[14.8px] lg:leading-[27px]">
            Vocademy helps you with their expert-guided team to fuel your
            creativity and ace your vocational skills through live sessions that
            you need for your dream professional and personal life. For Anyone.
            Anywhere. Fastrack your progress right away
          </p>
        </div>

        <div className="flex justify-center items-end">
          <div className="lg:w-[78.797px] lg:h-[209.029px]">
            <Image
              className="object-contain lg:w-[78.797px] lg:h-[209.029px]"
              src="/girl.svg"
              alt="girl"
              width={42.98}
              height={114.02}
            />
          </div>
          <div className="lg:w-[130.528px] lg:h-[318.986px]">
            <Image
              className="object-contain lg:w-[130.528px] lg:h-[318.986px]"
              src="/boy2.svg"
              alt="boy2"
              width={71.2}
              height={174}
            />
          </div>
        </div>
      </div>

      <div className="xl:hidden w-[325px] lg:w-[723px] mt-[50px]">
        <p className="text-center text-[12.248px] lg:text-[24px] font-[500] tracking-[0.612px] lg:tracking-[1.2px] leading-[14.8px] lg:leading-[27px]">
          Vocademy helps you with their expert-guided team to fuel your
          creativity and ace your vocational skills through live sessions that
          you need for your dream professional and personal life. For Anyone.
          Anywhere. Fastrack your progress right away
        </p>
      </div>

      <div className="flex xl:hidden justify-between items-center w-full h-fit pl-[13px] lg:pl-[60px] pr-[18.8px] lg:pr-[50.47px]">
        <div className="pt-[75px] lg:pt-[155.33px] lg:w-[113.542px] lg:h-[279.328px]">
          <Image
            className="object-contain lg:w-[113.542px] lg:h-[279.328px]"
            src="/boy1.svg"
            alt="boy1"
            width={67.5}
            height={155.38}
          />
        </div>
        <div className="-mt-[40px] lg:w-[78.797px] lg:h-[209.029px]">
          <Image
            className="object-contain lg:w-[78.797px] lg:h-[209.029px]"
            src="/girl.svg"
            alt="girl"
            width={42.98}
            height={114.02}
          />
        </div>
        <div className="pt-[70px] lg:pt-[140px] lg:w-[130.528px] lg:h-[318.986px]">
          <Image
            className="object-contain lg:w-[130.528px] lg:h-[318.986px]"
            src="/boy2.svg"
            alt="boy2"
            width={71.2}
            height={174}
          />
        </div>
      </div>

      <button className="bg-gradient-to-r from-secondaryPink from-20% to-secondaryBlue to-60% font-bold text-[15.758px] lg:text-[20px] p-[4px] lg:p-[6px] rounded-[66px] xl:-mt-[80px]">
        <span className="flex w-full lowercase text-center rounded-[66px] bg-[#fff] px-[22.85px] lg:px-[29px] py-[10.55px] lg:py-[11px]">
          EXPLORE COURSES
        </span>
      </button>
    </div>
  );
};

export default Hero;
