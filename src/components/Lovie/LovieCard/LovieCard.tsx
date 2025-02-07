"use client";

import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Me from "../../../../public/assets/goofy-ahh-emojis/romantic.jpg";
import { CardBody, CardContainer, CardItem } from "../../ui/3d-card";

const LovieCard = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(13);
  const router = useRouter();

  useEffect(() => {
    if (loading) {
      let value = 0;
      const interval = setInterval(() => {
        value += 10;
        setProgress(value);
        if (value >= 100) {
          clearInterval(interval);
          router.push("/loves"); // Navigate when complete
        }
      }, 200); // Increment every 500ms (5 sec total)

      return () => clearInterval(interval);
    }
  }, [loading, router]); // Runs only when `loading` starts

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!loading) {
      setLoading(true);
      setProgress(0); // Reset progress before loading
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Show Progress Bar When Loading */}
      {loading ? (
        <div className="w-[200px] mt-10">
          {" "}
          {/* Ensure parent container controls width */}
          <Progress
            value={progress}
            className="w-full bg-gray-300 [&>div]:bg-red-500"
          />
          <p className="text-center text-neutral-600 dark:text-white mt-4">
            Going back in time ⏳...
          </p>
        </div>
      ) : (
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-350px sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Hi, Lovie!
            </CardItem>
            <CardItem
              translateZ="60"
              as="p"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              This is for you ❤️
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={Me}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>

            <div className="flex justify-end items-center mt-20">
              <button
                onClick={handleClick}
                disabled={loading}
                className={`px-4 py-2 rounded-xl bg-red-400 dark:bg-white dark:text-black text-white text-base font-bold ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Click me
              </button>
            </div>
          </CardBody>
        </CardContainer>
      )}
    </div>
  );
};

export default LovieCard;
