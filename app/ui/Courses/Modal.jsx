import React from "react";

const Modal = ({ handleOpen, isOpen }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[60%] h-[90%] flex justify-center items-center rounded-[20.4px] lg:rounded-[46px] xl:rounded-[65px] border-[0.94px] lg:border-[2.12px] xl:border-[3px] px-[16.64px] lg:px-[37.53px] xl:px-[53px] pt-[25.44px] lg:pt-[57.35px] xl:pt-[81px] pb-[17.9px] lg:pb-[40.36px] xl:pb-[57px] bg-white border-primaryPink">
        vocademyy
      </div>
      <div
        className="absolute right-10 top-14 text-2xl cursor-pointer"
        onClick={() => handleOpen(!isOpen)}
      >
        X
      </div>
    </div>
  );
};

export default Modal;
