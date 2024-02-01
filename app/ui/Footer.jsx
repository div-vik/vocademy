import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-[35px] lg:mt-[102.47px] w-full flex flex-col xl:flex-row xl:justify-between bg-[#000] text-[#fff] px-[26px] lg:px-[61.92px] pt-[33px] lg:pt-[78.59px] pb-[24px] lg:pb-[88.24px] xl:gap-[202px]">
      <div className="w-full flex justify-between xl:justify-end 2xl:justify-center items-start text-[10px] lg:text-[23.814px] xl:text-[10px] font-bold xl:gap-[128px]">
        <div className="flex flex-col gap-[22px]">
          <Link href="#">home</Link>
          <Link href="#">services</Link>
          <Link href="#">contact us</Link>
        </div>
        <div className="flex flex-col gap-[10px]">
          <Link href="#">FutureLearn Reviews</Link>
          <Link href="#">Learning guide</Link>
          <Link href="#">Certificates</Link>
          <Link href="#">How to Use Learnvoc</Link>
        </div>
        <div className="flex flex-col gap-[10px]">
          <Link href="#">FAQs</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#">Career advice</Link>
        </div>
        <div className="flex flex-col gap-[10px]">
          <Link href="#">T&Cs</Link>
          <Link href="#">Privacy policy</Link>
          <Link href="#">Refund policy</Link>
          <Link href="#">Cookie policy</Link>
        </div>
      </div>

      <div className="mt-[38px] lg:mt-[88.24px] xl:mt-0 xl:pr-[94px] flex justify-center items-center gap-7 lg:gap-[50.01px]">
        <Link
          href="#"
          className="w-[44px] lg:w-[104.781px] xl:w-[44px] h-[44px] lg:h-[104.781px] xl:h-[44px] flex"
        >
          <Image
            className="object-contain w-[44px] lg:w-[104.781px] xl:w-[44px] h-[44px] lg:h-[104.781px] xl:h-[44px]"
            src="/instagram.svg"
            alt="instagram"
            width={44}
            height={44}
          />
        </Link>
        <Link
          href="#"
          className="w-[44px] lg:w-[104.781px] xl:w-[44px] h-[44px] lg:h-[104.781px] xl:h-[44px] flex"
        >
          <Image
            className="object-contain w-[44px] lg:w-[104.781px] xl:w-[44px] h-[44px] lg:h-[104.781px] xl:h-[44px]"
            src="/linkedIn.svg"
            alt="linkedIn"
            width={44}
            height={44}
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
