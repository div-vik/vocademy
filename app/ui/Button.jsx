import React from "react";

const Button = ({ title, className }) => {
  return (
    // Require title, text size and margin as props
    <button
      className={
        className +
        " w-[159.152px] lg:w-[202.344px] xl:w-[202px] h-[52px] lg:h-[66.112px] xl:h-[66px] rounded-[33px] bg-gradient-to-r from-secondaryPink to-secondaryBlue hover:bg-gradient-to-r hover:from-[#000] hover:to-[#000] hover:text-[#fff] ease-in-out duration-500 text-center font-bold lowercase"
      }
    >
      {title}
    </button>
  );
};

export default Button;
