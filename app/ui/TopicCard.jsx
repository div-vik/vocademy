import Image from "next/image";
import React from "react";

const TopicCard = ({ icon, title }) => {
  return (
    <div className="bg-[#75FCFF] w-[80.9px] h-[123px] flex flex-col justify-center items-center rounded-[16.48px]">
      <div>
        <Image src={icon} alt={title} width={22.866} height={22.865} />
      </div>

      <p className="text-center text-[8.24px] font-bold text-[#000] mt-[27.76px]">
        {title}
      </p>
    </div>
  );
};

export default TopicCard;
