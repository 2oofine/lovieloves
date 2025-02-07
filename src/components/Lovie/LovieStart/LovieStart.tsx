import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import React from "react";
import Image from "next/image";
import First from "../../../../public/assets/memories/first.jpg";

const LovieStart = () => {
  return (
    <div className="flex flex-col overflow-hidden bg">
      <ContainerScroll
        titleComponent={
          <>
            <h1
              className="text-3xl px-6 font-semibold text-red-600 dark:text-white
              md:my-10 md:text-4xl
              "
            >
              This is where it all started—the first spark ✨.
            </h1>
          </>
        }
      >
        <Image
          src={First}
          alt="First interaction with lovie"
          height={720}
          width={1400}
          className="mx-auto object-cover rounded-2xl h-full md:h-[700] lg:h-[1200] object-left-bottom "
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};

export default LovieStart;
