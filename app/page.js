import Image from "next/image";
import Hero from "./ui/Home/Hero";
import Topic from "./ui/Home/Topic";
import Feedback from "./ui/Home/Feedback";
import Features from "./ui/Home/Features";
import Contact from "./ui/Home/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Topic />
      <Feedback />
      <Features />
      <Contact />

      <div className="px-[42px] mt-10 flex flex-col justify-center items-center">
        <p className="text-center  text-[16.331px] font-bold">
          We are always ready to partner up with ambitious and passionate
          coaches. Join us in revolutionising life skills as a trainer…
        </p>

        <button className="w-[159.152px] h-[52px] rounded-3xl bg-[#E53990] mt-[35px] text-center text-[15.758px] font-bold lowercase">
          explore courses
        </button>
      </div>
    </div>
  );
}
