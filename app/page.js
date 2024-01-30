import Image from "next/image";
import Hero from "./ui/Home/Hero";
import Topic from "./ui/Home/Topic";
import Feedback from "./ui/Home/Feedback";
import Features from "./ui/Home/Features";

export default function Home() {
  return (
    <div>
      <Hero />
      <Topic />
      <Feedback />
      <Features />
    </div>
  );
}
