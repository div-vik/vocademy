import React from "react";
import { faqs } from "./data";
import Accordian from "./Accordian";

const Faq = () => {
  return (
    <div className="mt-[45.96px] lg:mt-[102px] xl:mt-[181px] mb-[35px] lg:mb-[102.47px] xl:mb-[59px] w-full flex flex-col justify-center items-center">
      <p className="text-center text-[36px] lg:text-5xl font-bold">FAQs</p>

      <div className="flex flex-col w-full px-[43px] lg:px-[62px] xl:px-[192px] mt-[46px] lg:mt-[54px] xl:mt-[24px]">
        {faqs.map((faq) => (
          <Accordian key={faq.question} faq={faq} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
