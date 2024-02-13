import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col xl:flex-row-reverse justify-center lg:justify-start xl:justify-between items-center w-[380px] lg:w-[920px] xl:w-[1272px] h-[275px] lg:h-[936px] xl:h-[686px] border-[#FF7EBC] rounded-[24.796px] lg:rounded-[83px] mt-[37px] lg:mt-[113px] border-[1.494px] lg:border-[5px] xl:px-[128px] relative shadow-lg">
        <div className="hidden lg:flex w-[243.816px] h-[242px] mt-[78px]">
          <Image
            src="/contact2.svg"
            alt="contact"
            width={243.816}
            height={242}
            className="object-contain w-[243.816px] h-[242px]"
          />
        </div>

        <div>
          <div className="px-[49px] mt-[30.59px] lg:mt-[42px] flex flex-col justify-center items-center">
            <p className="text-[46.264px] lg:text-[96px] font-bold bg-gradient-to-r from-secondaryPink to-secondaryBlue text-transparent bg-clip-text">
              360°
            </p>
            <p className="mt-[4.24px] lg:mt-[10px] text-[17.6px] lg:text-[40px] font-bold text-center">
              Support to help you Grow Faster
            </p>
            <p className="mt-[14.59px] lg:mt-[30px] text-[9.638px] lg:text-xl font-bold">
              Talk to our Team Memeber
            </p>
            <p className="mt-[45.83px] lg:mt-[96px] text-[15.421px] lg:text-[32px] font-semibold">
              Got any Questions?
            </p>
          </div>

          <div className="flex justify-center w-full items-center mt-[14.25px] lg:mt-[31px]">
            <Link
              target="_blank"
              href="https://wa.me/9108255341?text=Hello%20I%20have%20few%20questions%20regarding%20online%20ordering.%20Are%20you%20free%20to%20chat%20now%3F"
              className="w-[39.517px] lg:w-[82px] h-[39.517px] lg:h-[82px] mb-[27.57px]"
            >
              <Image
                src="/contact1.svg"
                alt="contact"
                width={39.517}
                height={39.517}
                className="object-contain w-[39.517px] lg:w-[82px] h-[39.517px] lg:h-[82px]"
              />
            </Link>

            <div className="lg:hidden w-[61.447px] h-[60.989px] mb-[16.01px] mr-[18.55px] absolute right-[18.55px] -bottom-3">
              <Image
                src="/contact2.svg"
                alt="contact"
                width={61.447}
                height={60.989}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
