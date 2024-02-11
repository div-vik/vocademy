import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopicCard = ({ icon, title, href }) => {
  return (
    <Link
      href={href}
      className="bg-[#75FCFF] w-[80.9px] lg:w-[147.345px] h-[123px] lg:h-[224.493px] hover:scale-110 ease-in-out duration-200 flex flex-col justify-center items-center rounded-[16.48px] lg:rounded-[30px] px-[13.9px] shadow-[0_2.197px_2.197px_0px_rgba(0,0,0,0.3)] lg:shadow-[0_4px_4px_0px_rgba(0,0,0,0.3)]"
    >
      <div className="w-[22.866px] h-[22.865px] lg:w-[33.921px] lg:h-[37.531px] xl:w-[34.446px] xl:h-[45.872px]">
        <Image
          className="object-contain w-[22.866px] h-[22.865px] lg:w-[33.921px] lg:h-[37.531px] xl:w-[34.446px] xl:h-[45.872px]"
          src={icon}
          alt={title}
          width={22.866}
          height={22.865}
        />
      </div>

      <p className="text-center text-[8.24px] lg:text-[15px] font-bold text-[#000] mt-[27.76px] lg:mt-[50.54px]">
        {title}
      </p>
    </Link>
  );
};

export default TopicCard;
