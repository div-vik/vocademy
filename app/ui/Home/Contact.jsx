import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-[25px] border-[#FF7EBC] rounded-[24.796px] mt-[37px] border-[1.494px] relative">
      <div className="px-[49px] flex flex-col justify-center items-center">
        <p className="text-[46.264px] font-bold">360°</p>
        <p className="mt-[4.24px] text-[17.6px] font-bold text-center">
          Support to help you Grow Faster
        </p>
        <p className="mt-[14.59px] text-[9.638px] font-bold">
          Talk to our Team Memeber
        </p>
        <p className="mt-[45.83px] text-[15.421px] font-semibold">
          Got any Questions?
        </p>
      </div>

      <div className="flex justify-center w-full items-center mt-[14.25px]">
        <div className="w-[39.517px] h-[39.517px] mt-[14.25px] mb-[27.57px]">
          <Image
            src="/contact1.svg"
            alt="contact"
            width={39.517}
            height={39.517}
            className="object-contain"
          />
        </div>

        <div className="w-[61.447px] h-[60.989px] mb-[16.01px] mr-[18.55px] absolute right-[18.55px]">
          <Image
            src="/contact2.svg"
            alt="contact"
            width={61.447}
            height={60.989}
            className="object-contain"
          />
        </div>
      </div>

      {/* <div className="w-[61.447px] h-[60.989px] mb-[16.01px] mr-[18.55px] absolute top-[198px] right-[18.55px]">
        <Image
          src="/contact2.svg"
          alt="contact"
          width={61.447}
          height={60.989}
          className="object-contain"
        />
      </div> */}
    </div>
  );
};

export default Contact;
