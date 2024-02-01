import React from "react";
import { faqs } from "./data";
import Image from "next/image";
import { MdArrowDownward } from "react-icons/md";

const Faq = () => {
  return (
    <div className="mt-[45.96px] lg:mt-[102px] xl:mt-[181px] w-full flex flex-col justify-center items-center">
      <p className="text-center text-[36px] lg:text-5xl font-bold">FAQs</p>

      <div className="flex flex-col w-full px-[43px] lg:px-[62px] xl:px-[192px] mt-[46px] lg:mt-[54px] xl:mt-[24px]">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="flex justify-between gap-[47px]  items-center mb-[9px]"
          >
            <p className="text-[10.4px] lg:text-[21.081px] xl:text-[24px] font-medium">
              {faq.question}
            </p>
            <div className="p-[1px] rounded-full bg-[#FF77A1] flex items-center">
              <MdArrowDownward className="w-[12.529px] lg:w-[24.594px] h-[12.529px] xl:w-[28px] lg:h-[24.594px] xl:h-[28px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
