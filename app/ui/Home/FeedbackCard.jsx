import React from "react";
import localFont from "next/font/local";

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
      <div className="text-[57.839px] lg:text-[128px] font-normal text-[#000] pl-5 lg:pl-[60px]">
        <span className={zcool.className}>&quot;</span>
      </div>

      <div className="flex flex-col justify-center items-center pt-20 pl-[5px] pr-[20px] lg:pr-[76px]">
        <div className="text-[9.037px] nature-beauty-personal text-left lg:text-base xl:text-[15px] font-normal leading-[16.719px] lg:leading-[37px] text-[#000]">
          <p className={nature.className}>{review}</p>
        </div>
        <div className="w-full flex flex-col items-end text-left px-2 py-3 text-[#000] text-[7.23px] lg:text-[16px] font-extrabold leading-[9.941px] lg:leading-[22px]">
          <p>{name}</p>
          <p>{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
