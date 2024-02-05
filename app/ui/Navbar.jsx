"use client";

import Image from "next/image";
import React from "react";
import { navItems } from "./Home/data";
import Link from "next/link";
import { usePa, usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-around items-center mt-[75px] md:mt-[97px] lg:mt-[43px] px-[25px] md:px-[79px] lg:px-[110px]">
      <Link href="/" className="flex flex-1 items-center">
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
          vocademyy
        </p>
      </Link>

      <div className="flex flex-2 justify-center items-center">
        <ul className="hidden xl:flex justify-center items-center lg:gap-[50px] xl:gap-[72px] text-[13px] font-semibold">
          {navItems.map((item) => (
            <li
              key={item.url}
              className={
                pathname === item.url
                  ? "bg-primaryBlue rounded-[33px] px-[39px] py-[14px]"
                  : ""
              }
            >
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className=" hidden xl:flex flex-1 justify-end items-center">
        <Link href="/register">
          <button className="rounded-[33px] px-[35px] py-[13px] bg-opacity-70 hover:bg-gradient-to-r hover:from-[#000] hover:to-[#000] ease-in-out duration-100 hover:text-[#fff] bg-gradient-to-r from-secondaryPink from-20% to-secondaryBlue to-60% text-[13px] font-bold">
            register now
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
