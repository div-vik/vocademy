import Image from "next/image";
import Hero from "./ui/Home/Hero";
import Topic from "./ui/Home/Topic";
import Feedback from "./ui/Home/Feedback";
import Features from "./ui/Home/Features";
import Contact from "./ui/Home/Contact";
import Faq from "./ui/Home/Faq";

export default function Home() {
  return (
    <div className="2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center">
      <Hero />
      <Topic />
      <Feedback />
      <Features />
      <Contact />

      <div className="flex flex-col justify-center items-center mt-10 lg:mt-[102px]">
        <div className="w-[347px] lg:w-[720px] xl:w-[943px] flex flex-col justify-center items-center">
          <p className="text-center text-[16.331px] lg:text-[40px] font-bold">
            We are always ready to partner up with ambitious and passionate
            coaches. Join us in revolutionising life skills as a trainer…
          </p>

          <button className="h-[52px] flex justify-center items-center lg:h-[66px] px-[48px] lg:px-[62px] py-[17] lg:py-[21px] rounded-[33px] bg-gradient-to-r from-secondaryPink to-secondaryBlue mt-[35px] lg:mt-[66px] xl:mt-[57px] text-center text-[15.758px] lg:text-[32px] font-bold lowercase">
            join us
          </button>
        </div>
      </div>

      <Faq />
    </div>
  );
}
