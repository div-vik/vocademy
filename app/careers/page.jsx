"use client";

import React, { useEffect } from "react";
import Button from "../ui/Button";
import Link from "next/link";
import Image from "next/image";
import styles from "./animaion.module.css";

const Careers = () => {
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
    <div className="mt-[84.57px] lg:mt-[185.57px] xl:mt-[161.57px] mb-[34.96px] lg:mb-[109px] xl:mb-[47px] flex flex-col justify-center items-center">
      <div className="leading-tight flex flex-col justify-center items-center gap-[39px] lg:gap-[68px] xl:gap-[40px] relative">
        <div className="absolute -top-[44px] right-[87px] lg:right-[375.68px] lg:-top-[70px] xl:left-[469px] xl:-top-[87px]">
          <Image
            className={`animate-none animatedDiv w-[94.001px] h-[44.365px] lg:w-[126.462px] lg:h-[59.686px] xl:w-[211.096px] xl:h-[99.63px] ${styles.animatedDiv}`}
            src="/cloud3.svg"
            alt="cloud"
            width={94}
            height={44.365}
          />
        </div>

        <div className="absolute lg:left-[97px] lg:-top-[50px] -left-[11px] top-[76px] xl:-left-[47px] xl:-top-[70px]">
          <Image
            className={`animate-none animatedDiv lg:w-[98.654px] lg:h-[36.546px] w-[56px] h-[21.622px] xl:w-[158px] xl:h-[61.005px] ${styles.animatedDiv}`}
            src="/cloud1.svg"
            alt="cloud"
            width={94}
            height={44.365}
          />
        </div>

        <div className="absolute lg:-top-[60px] lg:right-[69.67px] -right-[22.39px] top-[82px] xl:right-[99.78px] xl:-top-[74px]">
          <Image
            className={`animate-none animatedDiv w-[69.395px] h-[31px] lg:w-[131.328px] lg:h-[58.666px] xl:w-[219.218px] xl:h-[97.928px] ${styles.animatedDiv}`}
            src="/cloud5.svg"
            alt="cloud"
            width={94}
            height={44.365}
          />
        </div>

        <div className="absolute top-[133px] -left-[24px] lg:-left-[28px] lg:top-[214px] xl:-left-[115px] xl:top-[195px]">
          <Image
            className={`animate-none animatedDiv w-[47px] h-[22.275px] lg:w-[207.4px] lg:h-[80.078px] xl:w-[346.202px] xl:h-[133.671px] ${styles.animatedDiv}`}
            src="/cloud3.svg"
            alt="cloud"
            width={94}
            height={44.365}
          />
        </div>

        <div className="hidden lg:flex absolute -bottom-[29.92px] right-[27.73px] lg:-right-[19.94px] lg:top-[222px] xl:-right-[136px] xl:top-[202px]">
          <Image
            className={`animate-none animatedDiv w-[88.274px] h-[33.918px] lg:w-[165.943px] lg:h-[63.761px] xl:w-[277px] xl:h-[106.433px] ${styles.animatedDiv}`}
            src="/cloud4.svg"
            alt="cloud"
            width={94}
            height={44.365}
          />
        </div>

        <p className="w-[362px] lg:w-[905px] xl:w-[1151px] text-[34.12px] lg:text-[55.85px] xl:text-[64px] font-bold text-center">
          We are always ready to partner up with ambitious and{" "}
          <span className="bg-gradient-to-r from-secondaryPink from-20% to-secondaryBlue to-60% text-transparent bg-clip-text">
            passionate{" "}
          </span>
          coaches. Join us in revolutionizing life skills as a trainer…
        </p>
        <p className="w-[291px] lg:w-[659px] xl:w-[828px] text-[12px] lg:text-[20.023px] xl:text-[24px] font-medium text-center">
          Explore remote opportunities and join our mission to make vocational
          skill training accessible and easier to help people grow.
        </p>
      </div>

      <div className="leading-tight flex flex-col justify-center items-center mt-[29px] lg:mt-[42px] xl:mt-[90px] gap-[29px] lg:gap-[42px] xl:gap-[40px]">
        <p className="w-[364px] lg:w-[761px] xl:w-[1016px] text-[32.479px] lg:text-[48px] xl:text-[75px] font-bold text-center">
          Vocademyy is where the New Learning works
        </p>
        <p className="w-[282px] lg:w-[684px] xl:w-[866px] text-[12px] lg:text-[20px] font-medium text-center">
          Every day we are refining and exploring ways to fill the skill gap to
          help people upscale effectively. Join us in creating a better future
          of work that unites, is diverse and flexible:
        </p>
      </div>

      <div className="mt-[47px] lg:mt-[55px] xl:mt-[99px] gap-[6.1px] lg:gap-[14.36px] xl:gap-[22px] flex justify-center items-center">
        <div className="w-[124.882px] h-[175px] lg:w-[293.819px] lg:h-[412px] xl:w-[450px] xl:h-[631px] gap-[19.31px] lg:gap-[45.79px] xl:gap-[70px] border-[1.39px] lg:border-[3.26px] xl:border-[5px] rounded-[24.1px] lg:rounded-[56.8px] xl:rounded-[87px] flex flex-col justify-center items-center border-quaternaryPink">
          <div className="mt-[26.9px] lg:mt-[63.33px] xl:mt-[97px] relative flex justify-center items-center w-full">
            <p className="text-[26.624px] lg:text-[62.681px] xl:text-[96px] font-bold z-10 text-center">
              United
            </p>
            <div className="w-[26.624px] h-[26.624px] lg:w-[62.681px] lg:h-[62.681px] xl:w-[96px] xl:h-[96px] absolute right-[11.09px] lg:right-[26.12px] xl:right-[40px] bg-primaryBlue rounded-full" />
          </div>

          <div className="mb-[24.79px] lg:mb-[59.87px] xl:mb-[91px] w-[81.537px] lg:w-[195.88px] xl:w-[300px] text-[9.984px] lg:text-[23.506px] xl:text-[36px] text-center font-medium leading-tight">
            <p>
              We come together, no matter where you are- across the country and
              beyond
            </p>
          </div>
        </div>

        <div className="w-[124.882px] h-[175px] lg:w-[293.819px] lg:h-[412px] xl:w-[450px] xl:h-[631px] gap-[19.31px] lg:gap-[45.79px] xl:gap-[70px] border-[1.39px] lg:border-[3.26px] xl:border-[5px] rounded-[24.1px] lg:rounded-[56.8px] xl:rounded-[87px] flex flex-col justify-center items-center border-quaternaryPink">
          <div className="mt-[26.9px] lg:mt-[63.33px] xl:mt-[97px] relative flex justify-center items-center w-full">
            <p className="text-[26.624px] lg:text-[62.681px] xl:text-[96px] font-bold z-10 text-center">
              Diverse
            </p>
            <div className="w-[26.624px] h-[26.624px] lg:w-[62.681px] lg:h-[62.681px] xl:w-[96px] xl:h-[96px] absolute right-[11.09px] lg:right-[26.12px] xl:right-[40px] bg-primaryBlue rounded-full" />
          </div>

          <div className="mb-[24.79px] lg:mb-[59.87px] xl:mb-[91px] w-[83.201px] lg:w-[195.88px] xl:w-[300px] text-[9.984px] lg:text-[23.506px] xl:text-[36px] text-center font-medium leading-tight">
            <p>
              Our team brings rich diversity creating an inclusive environment
              for everyone onboard.
            </p>
          </div>
        </div>

        <div className="w-[124.882px] h-[175px] lg:w-[293.819px] lg:h-[412px] xl:w-[450px] xl:h-[631px] gap-[19.31px] lg:gap-[45.79px] xl:gap-[70px] border-[1.39px] lg:border-[3.26px] xl:border-[5px] rounded-[24.1px] lg:rounded-[56.8px] xl:rounded-[87px] flex flex-col justify-center items-center border-quaternaryPink">
          <div className="mt-[26.9px] lg:mt-[63.33px] xl:mt-[97px] relative flex justify-center items-center w-full">
            <p className="text-[26.624px] lg:text-[62.681px] xl:text-[96px] font-bold z-10 text-center">
              Flexible
            </p>
            <div className="w-[26.624px] h-[26.624px] lg:w-[62.681px] lg:h-[62.681px] xl:w-[96px] xl:h-[96px] absolute right-[11.09px] lg:right-[26.12px] xl:right-[40px] bg-primaryBlue rounded-full" />
          </div>

          <div className="mb-[12.79px] lg:mb-[31.87px] xl:mb-[48px] w-[83.201px] lg:w-[195.88px] xl:w-[300px] text-[9.984px] lg:text-[23.506px] xl:text-[36px] text-center font-medium leading-tight">
            <p>
              We strive for work-life balance to give you the freedom and
              flexibility to deliver the best of our online sessions. 
            </p>
          </div>
        </div>
      </div>

      <Link href="https://wa.me/9108255341?text=Hello%20I%20have%20few%20questions%20regarding%20online%20ordering.%20Are%20you%20free%20to%20chat%20now%3F">
        <Button
          title="join now"
          className="mt-[43px] lg:mt-[109px] xl:mt-[79px] text-[15.77px] lg:text-[24px] xl:text-[32px]"
        />
      </Link>
    </div>
  );
};

export default Careers;
