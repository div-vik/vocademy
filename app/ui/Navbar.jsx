import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="mt-[75px] px-[25px]">
      <div className="flex items-center">
        <div className="w-[39px] h-[44.426px] mr-[5px]">
          <Image
            className="object-contain"
            src="/logo.png"
            alt="logo"
            width={39}
            height={44.426}
          />
        </div>
        <p className="text-[#000] items-center font-semibold text-xl">
          vocademy
        </p>
      </div>
    </div>
  );
};

export default Navbar;
