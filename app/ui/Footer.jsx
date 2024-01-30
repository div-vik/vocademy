import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-[35px] bg-[#000] text-[#fff] px-[26px] pt-[33px] pb-[24px]">
      <div className="flex justify-between items-center">
        <div className="text-[10px] font-bold flex flex-col gap-[22px]">
          <Link href="#">home</Link>
          <Link href="#">services</Link>
          <Link href="#">contact us</Link>
        </div>
        <div className="text-[10px] font-bold flex flex-col gap-[10px]">
          <Link href="#">FutureLearn Reviews</Link>
          <Link href="#">Learning guide</Link>
          <Link href="#">Certificates</Link>
          <Link href="#">How to Use Learnvoc</Link>
        </div>
        <div className="text-[10px] font-bold flex flex-col gap-[10px]">
          <Link href="#">FAQs</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#">Career advice</Link>
        </div>
        <div className="text-[10px] font-bold flex flex-col gap-[10px]">
          <Link href="#">T&Cs</Link>
          <Link href="#">Privacy policy</Link>
          <Link href="#">Refund policy</Link>
          <Link href="#">Cookie policy</Link>
        </div>
      </div>

      <div className="mt-[38px] w-full flex justify-center items-center">
        <Image
          className="object-contain"
          src="/socials.svg"
          alt="socials"
          width={109}
          height={44}
        />
      </div>
    </div>
  );
};

export default Footer;
