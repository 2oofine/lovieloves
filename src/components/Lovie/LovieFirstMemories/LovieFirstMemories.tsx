import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import React from "react";

import FirstSelfie from "../../../../public/assets/memories/first-selfie.jpg";
import FirstMet from "../../../../public/assets/memories/first-met.jpg";
import FirstPitik from "../../../../public/assets/memories/first-pitik.jpg";
import FirstDate from "../../../../public/assets/memories/first-date.gif";

const LovieMemories = () => {
  const memories = [
    {
      quote:
        "Patay na patay parin ako sa'yo hanggang ngayon, alam mo ba 'yon lovie? HAHAHA",
      name: `First selfie na sinend mo saakin 😍`,
      designation: "02/19/2024",
      src: FirstSelfie,
    },
    {
      quote:
        "You have the most beautiful eyes I've ever looked into, they shine like the moon. From that day, I knew you were the one. A memory I'll never forget. 😁",
      name: "The day we first met.",
      designation: "04/20/2024",
      src: FirstMet,
    },
    {
      quote:
        "Sobrang ganda mo rito, lovie! Alam ko na ayaw mo ng mga kuha ko, pero para sa'kin, kahit anong angulo, wala pa rin tatalo sa ganda mo.",
      name: `My first "pitik" 📷 sa'yo`,
      designation: "05/19/2024",
      src: FirstPitik,
    },
    {
      quote:
        "I'll never forget this day, the moment that marked the beginning of us, our first date, and the day we became official!!!",
      name: "Our First Chapter Together (05/19/2024) 💛",
      designation: "05/18-19/2024",
      src: FirstDate,
    },
  ];
  return (
    <div className="overflow-x-hidden">
      <h1
        className="text-3xl text-center px-6 font-semibold text-red-600 dark:text-white
              md:my-10 md:text-4xl"
      >
        And from that moment, everything changed— our love grew stronger with
        every challenge.
      </h1>
      <AnimatedTestimonials testimonials={memories} />
    </div>
  );
};

export default LovieMemories;
