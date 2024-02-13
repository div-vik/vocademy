"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import styles from "./animaion.module.css";

const Hero = () => {
  useEffect(() => {
    // Start animation when the component is mounted
    const elements = document.getElementsByClassName(styles.animatedDiv);

    const startAnimation = () => {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(styles.animate);
      }
    };

    startAnimation();

    // Stop animation after a few seconds (adjust the duration accordingly)
    const timeout = setTimeout(() => {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove(styles.animate);
      }
    }, 20000);

    return () => clearTimeout(timeout); // Cleanup on component unmount
  }, []);

  return (
    <div className="mt-[65px] lg:mt-[85px] xl:mt-[20px] flex flex-col justify-center items-center lg:px-[82px] xl:px-[123px] 2xl:px-[140px]">
      <div className="flex flex-col justify-center px-20 w-screen items-center">
        <div className="xl:mt-20 w-[424px] lg:w-[852px] xl:w-[1193px] flex flex-col justify-center items-center relative">
          <div className="absolute -top-6 right-[100px] lg:right-[227.13px] xl:right-[40%] xl:-top-20">
            <Image
              className={`animate-none animatedDiv w-[94px] h-[44.365px] lg:w-[88.274px] lg:h-[33.918px] xl:w-[211.096px] xl:h-[99.63px] ${styles.animatedDiv}`}
              src="/cloud3.svg"
              alt="cloud"
              width={94}
              height={44.365}
            />
          </div>

          <div className="absolute lg:top-[150px] lg:left-[30px] left-[18px] top-[72px] xl:-left-[101px] xl:top-[108px]">
            <Image
              className={`animate-none animatedDiv lg:w-[94.001px] lg:h-[44.365px] w-[56px] h-[21.622px] xl:w-[168.347px] xl:h-[65px] ${styles.animatedDiv}`}
              src="/cloud1.svg"
              alt="cloud"
              width={94}
              height={44.365}
            />
          </div>

          <div className="absolute lg:top-[158px] lg:right-[24.61px] right-[8.61px] top-[71px] xl:-right-[106px] xl:top-[98px]">
            <Image
              className={`animate-none animatedDiv w-[69.395px] h-[31px] xl:w-[211.096px] xl:h-[99.63px] ${styles.animatedDiv}`}
              src="/cloud5.svg"
              alt="cloud"
              width={94}
              height={44.365}
            />
          </div>

          <div className="absolute bottom-[19.72px] left-[29px] lg:left-[80px] lg:bottom-[43.73px] xl:-left-[3px] xl:bottom-[9.63px]">
            <Image
              className={`animate-none animatedDiv w-[47px] h-[22.275px] xl:w-[211.096px] xl:h-[99.63px] ${styles.animatedDiv}`}
              src="/cloud3.svg"
              alt="cloud"
              width={94}
              height={44.365}
            />
          </div>

          <div className="absolute -bottom-[29.92px] right-[27.73px] lg:right-[51px] lg:bottom-[0.38px] xl:-right-[96.2px] xl:-bottom-[17.63px]">
            <Image
              className={`animate-none animatedDiv w-[88.274px] h-[33.918px] lg:w-[56px] lg:h-[21.622px] xl:w-[358.202px] xl:h-[137.633px] ${styles.animatedDiv}`}
              src="/cloud4.svg"
              alt="cloud"
              width={94}
              height={44.365}
            />
          </div>

          <p className="text-center text-[#000] text-[47.198px] lg:text-[94.841px] xl:text-[96px] font-bold leading-tight">
            Unleash your true{" "}
            <span className="bg-gradient-to-r from-secondaryPink from-20% to-secondaryBlue to-60% text-transparent bg-clip-text">
              potential
            </span>{" "}
            by learning life skills live with us
          </p>
        </div>
      </div>

      <div className="hidden xl:flex justify-center px-10 items-center w-screen gap-[60px] xl:gap-0 -mt-[75px] z-10 relative">
        <div className="lg:w-[113.542px] xl:w-[116.4px] lg:h-[279.328px] xl:h-[286.342px] xl:mr-[60px]">
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
            Vocademyy helps you with their expert-guided team to fuel your
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

      <button className="bg-gradient-to-r from-secondaryPink from-20% to-secondaryBlue to-60% hover:bg-gradient-to-r hover:from-[#000] hover:to-[#000] ease-in-out duration-100 font-bold text-[15.758px] lg:text-[20px] p-[4px] lg:p-[6px] rounded-[66px] xl:-mt-[80px] z-20">
        <Link
          href="/courses"
          className="flex w-full lowercase text-center rounded-[66px] bg-[#fff] hover:bg-[#000] hover:text-[#fff] px-[22.85px] lg:px-[29px] py-[10.55px] lg:py-[11px] ease-in-out duration-500"
        >
          EXPLORE COURSES
        </Link>
      </button>
    </div>
  );
};

export default Hero;
