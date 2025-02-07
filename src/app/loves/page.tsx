"use client";
import LovieMessages from "@/components/Lovie/LovieMessages/LovieMessages";
import LoviePlayer from "@/components/Lovie/LoviePlayer/LoviePlayer";
import LovieStart from "@/components/Lovie/LovieStart/LovieStart";
import dynamic from "next/dynamic";

const LovieMemoriesNoSSR = dynamic(
  () => import("../../components/Lovie/LovieFirstMemories/LovieFirstMemories"),
  {
    ssr: false,
  }
);

const page = () => {
  return (
    <>
      {/* START */}
      <LovieStart />
      {/* MEMORIES */}
      <LovieMemoriesNoSSR />
      {/* Player */}
      <LoviePlayer />
      {/* Messages */}
      <LovieMessages />
    </>
  );
};

export default page;
