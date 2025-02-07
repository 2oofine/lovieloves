"use client";
import React, { useState, useRef } from "react";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";
import Image from "next/image";

const LoviePlayer = () => {
  const songs = [
    {
      title: "Palagi",
      src: "/assets/songs/palagi.mp3",
      image: "/assets/songs/images/palagi.jpg",
    },
    {
      title: "Be With You",
      src: "/assets/songs/bewithyou.mp3",
      image: "/assets/songs/images/bewithyou.jpg",
    },
    {
      title: "Dalangin",
      src: "/assets/songs/dalangin.mp3",
      image: "/assets/songs/images/dalangin.jpg",
    },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playPauseHandler = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
    setIsPlaying(true);
  };

  return (
    <div className="w-[70%] md:w-full max-w-md mx-auto bg-gray-900 text-white rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-thin text-center">
        Songs That Remind Me of You 💛
      </h2>
      {/* Album Art */}
      <div className="flex justify-center mt-4">
        <Image
          width={500}
          height={500}
          src={songs[currentSongIndex].image}
          alt={`Album Art - ${songs[currentSongIndex].title}`}
          className="w-48 h-48 object-cover rounded-lg shadow-md"
        />
      </div>

      <p className="text-center text-gray-300 mt-2">
        {songs[currentSongIndex].title}
      </p>

      <audio
        ref={audioRef}
        src={songs[currentSongIndex].src}
        onEnded={nextSong}
        autoPlay={isPlaying}
      />

      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={prevSong}
          className="p-3 rounded-full bg-gray-700 hover:bg-gray-600"
        >
          <SkipBack className="fill-white" size={20} />
        </button>

        <button
          onClick={playPauseHandler}
          className="p-4 rounded-full bg-slate-50 hover:bg-slate-400"
        >
          {isPlaying ? (
            <Pause className="text-black fill-black" size={24} />
          ) : (
            <Play className="text-black fill-black" size={24} />
          )}
        </button>

        <button
          onClick={nextSong}
          className="p-3 rounded-full bg-gray-700 hover:bg-gray-600"
        >
          <SkipForward className="fill-white" size={20} />
        </button>
      </div>
    </div>
  );
};

export default LoviePlayer;
