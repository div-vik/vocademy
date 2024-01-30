import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="mt-10">
      <div className="relative px-[25px]">
        {/* <div className="w-[425px] h-[425px]">
          <Image src="/homeBg.png" alt="background" width={425} height={425} />
        </div> */}
        <div className="">
          <p className="text-center text-[#000] text-[44px] font-bold leading-tight">
            Unleash your true <span>potential</span> by learning life skills
            live with us
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mx-[52px] mt-[50px]">
        <p className="text-center text-[12.248px] font-[500] tracking-[0.612px] leading-[14.8px]">
          Vocademy helps you with their expert-guided team to fuel your
          creativity and ace your vocational skills through live sessions that
          you need for your dream professional and personal life. For Anyone.
          Anywhere. Fastrack your progress right away
        </p>
      </div>

      <div className="flex justify-between items-center w-full h-fit pl-[13px] pr-[18.8px]">
        <div className="pt-[75px]">
          <Image
            className="object-contain"
            src="/boy1.svg"
            alt="boy1"
            width={67.5}
            height={155.38}
          />
        </div>
        <div className="-mt-[40px]">
          <Image
            className="object-contain"
            src="/girl.svg"
            alt="girl"
            width={42.98}
            height={114.02}
          />
        </div>
        <div className="mt-[59px]">
          <Image
            className="object-contain"
            src="/boy2.svg"
            alt="boy2"
            width={71.2}
            height={174}
          />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button className="relative flex justify-center items-center">
          <Image src="/explrBtn.png" alt="btn" width={159.15} height={52} />
          <p className="absolute top-[14px] lowercase text-center text-[15.758px] font-bold">
            EXPLORE COURSES
          </p>
        </button>
      </div>
    </div>
  );
};

export default Hero;
