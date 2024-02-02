"use client";

import React, { useEffect, useRef, useState } from "react";
import { MdArrowDownward } from "react-icons/md";
import autoAnimate from "@formkit/auto-animate";

const Accordian = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      ref={parent}
      className="flex justify-between gap-[47px] w-full items-start mb-[9px]"
    >
      {/* Question */}
      <div
        onClick={handleClick}
        className="flex flex-col py-2 text-[10.4px] w-full lg:text-[21.081px] xl:text-[24px] font-medium cursor-pointer"
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex">
            <span className="font-bold pr-2">Q.</span>
            <p>{faq.question}</p>
          </div>

          <div className="p-[1px] rounded-full bg-[#FF77A1] flex items-center">
            {isOpen ? (
              <MdArrowDownward className="w-[12.529px] lg:w-[24.594px] h-[12.529px] xl:w-[28px] lg:h-[24.594px] xl:h-[28px] rotate-180" />
            ) : (
              <MdArrowDownward className="w-[12.529px] lg:w-[24.594px] h-[12.529px] xl:w-[28px] lg:h-[24.594px] xl:h-[28px]" />
            )}
          </div>
        </div>

        {/* Answer */}
        {isOpen && (
          <div className="flex py-2">
            <span className="font-bold pr-2">A.</span>
            <div>
              <p>{faq.answer}</p>
              {faq.points && (
                <div className="mt-4 flex flex-col gap-2">
                  {faq.points.map((point) => (
                    <div key={point} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#FF77A1] rounded-full"></div>
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
