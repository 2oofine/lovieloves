"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../../ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";

const LovieMessages = () => {
  const images = [
    "/assets/images/me.jpg",
    "/assets/images/feelingpogi.jpg",
    "/assets/images/sad.jpg",
    "/assets/images/huh.jpg",
    "/assets/images/freakyahh.jpg",
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }

    setIsVisible(true);
    setOpacity(1); // Reset opacity to full visibility when shown
  };

  useEffect(() => {
    if (isVisible) {
      const fadeInterval = setInterval(() => {
        setOpacity((prevOpacity) => {
          const newOpacity = prevOpacity - 0.05; // Decrease opacity by 0.05 each interval
          if (newOpacity <= 0) {
            clearInterval(fadeInterval); // Stop fading when opacity reaches 0
            return 0;
          }
          return newOpacity;
        });
      }, 100); // Decrease opacity every 100ms (adjust for speed)

      // Hide image completely after the fade is done
      setTimeout(() => {
        setIsVisible(false);
      }, 5000); // Ensure image disappears after full fade
    }
  }, [isVisible]);

  return (
    <div className="py-7 flex flex-col items-center justify-center z-[1000]">
      <h1
        className="text-3xl text-center px-6 font-semibold text-red-600 dark:text-white
              md: my-10 md:text-4xl"
      >
        Always know that I love you and will support you in everything you do. 🫶
      </h1>

      <Modal>
        <ModalTrigger className="bg-red-400 rounded-xl dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="py-3 px-3 text-lg font-medium group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Click me 🥹
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            💛
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              It’s Been One Year Since We First Talked 😚
            </h4>
            <div className="flex justify-center items-center">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-32 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>

            <span className="py-2 text-neutral-700 dark:text-neutral-300 text-sm text-center">
              My reactions kapag kausap ka 😝
            </span>
            <div className="py-2 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <div className="flex  justify-center">
                <span className="w-full text-neutral-700 dark:text-neutral-300 text-sm ">
                  Meron man tayong mga &apos;di pag kakaintindihan madalas, mga
                  tampuhan at maliit na away—lagi mong tatandaan, lovie, na
                  pipiliin ko pa rin at palaging mamahalin ka sa mga panahong
                  dumadaan tayo sa challenges sa relationship natin. I&apos;m
                  sorry sa mga pagkukulang &apos;di ko napupunan. Alam kong may
                  mga bagay akong hindi naiintindihan, at may mga chances na
                  hindi ko nabibigay &apos;yung mga bagay na inaasahan mo saakin
                  as a partner. Pero gusto kong malaman mo na I&apos;m striving
                  everyday just to be a better person for you, mahal na mahal
                  kita at hinding mag babago &apos;yon.
                  <br />
                  <br />
                  Ikaw &apos;yung dahilan bakit parin ako nagpapatuloy sa buhay.
                  Thank you lovie for making me realize a lot of things. Salamat
                  sa pag mamahal, sa pag-unawa at sa walang sawang pagtanggap
                  saakin sa buhay mo lovie kahit na minsan naiinis kana saakin
                  at sumasakit na ulo mo saakin XD. Always know na hinding-hindi
                  ako mawawala sa piling mo, oteyy?
                </span>
              </div>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <button
              onClick={handleClick}
              className="bg-red-400 text-white dark:bg-white dark:text-black text-sm px-3 py-3 w-auto rounded-xl border"
            >
              Click to claim 😁
            </button>
            <audio ref={audioRef} src="/assets/goofy-ahh-sounds/vineboom.mp3" />

            {isVisible && (
              <div
                className="image-container"
                style={{
                  position: "fixed", // Fixed position for centering
                  top: "50%", // Center vertically
                  left: "50%", // Center horizontally
                  transform: "translate(-50%, -50%)", // Perfect centering
                  zIndex: 10,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  width={500}
                  height={500}
                  src="/assets/goofy-ahh-emojis/rose.jpg" // Replace with your image path
                  alt="Celebration"
                  className="fade-image"
                  style={{
                    opacity,
                    transition: "opacity 3000ms ease-out",
                  }}
                />
                <p
                  className="text-center bg-white text-black w-full font-bold"
                  style={{ opacity, transition: "opacity 3000ms ease-out" }}
                >
                  You&apos;ve been charmed by the rose emoji. 💐 Hope
                  you&apos;re ready to have some love!
                </p>
              </div>
            )}
            <p className="text-neutral-700 text-sm">
              From your lovie, <br /> Sherwin
            </p>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LovieMessages;
