import React from "react";
import localFont from "next/font/local";
import Image from "next/image";

const nature = localFont({
  src: "../../../public/Nature_Beauty_Personal.ttf",
  display: "swap",
});

const zcool = localFont({
  src: "../../../public/ZCOOL_XiaoWei_Regular_400.ttf",
  display: "swap",
});

const FeedbackCard = ({ name, review, designation }) => {
  return (
    <div className="flex w-[218.667px] lg:w-[483.922px] xl:w-[483.92px] h-[182px] lg:h-[402.776px] xl:h-[402.78px] rounded-[27.112px] lg:rounded-[60px] bg-gradient-to-r from-ternaryPink to-primaryBlue relative">
      <div className="w-fit h-fit inline-flex justify-center items-start text-[57.839px] lg:text-[128px] font-normal text-[#000] pl-5 lg:pt-5">
        {/* <span className={zcool.className}>&quot;</span> */}
        <Image
          className="w-[25px] h-[58px] lg:w-[40px]"
          src="/quot.svg"
          alt="quot"
          width={25}
          height={58}
        />
      </div>

      <div className="flex flex-col relative">
        <div className="mt-[30px] lg:mt-[45px] pl-2 text-[7.23px] w-[144.596px] lg:w-[320px] xl:w-[341px] lg:text-base xl:text-[15px] text-justify font-normal leading-[16.719px] lg:leading-[37px] text-[#000]">
          <p className={nature.className}>{review}</p>
        </div>
        <div className="absolute bottom-0 lg:bottom-5 w-full flex flex-col items-end text-left px-2 py-3 text-[#000] text-[7.23px] lg:text-[16px] font-extrabold leading-[9.941px] lg:leading-[22px]">
          <p>{name}</p>
          <p>{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
