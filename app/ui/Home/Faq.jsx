import React from "react";
import { faqs } from "./data";
import Image from "next/image";
import { MdArrowDownward } from "react-icons/md";

const Faq = () => {
  return (
    <div className="mt-[45.96px] flex flex-col justify-center items-center">
      <p className="text-center text-[36px] font-bold">FAQs</p>

      <div className="flex flex-col px-[43px] mt-[46px]">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="flex justify-between gap-[47px]  items-center mb-[9px]"
          >
            <p className="text-[10.583px] font-medium">{faq.question}</p>
            <div className="p-[1px] rounded-full bg-[#FF77A1] flex items-center">
              <MdArrowDownward className="w-[12.529px] h-[12.529px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
