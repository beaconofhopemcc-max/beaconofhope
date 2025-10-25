"use client";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playVideo = async () => {
        try {
          await video.play();
          setVideoReady(true);
        } catch (err) {
          console.warn("Autoplay blocked:", err);
        }
      };
      playVideo();
    }
  }, []);

  return (
    <section className="w-full bg-black text-white overflow-hidden">
      {/* === DESKTOP (text overlay on video) === */}
      <div className="hidden md:flex relative items-center justify-center h-[90vh]">
        <video
          ref={videoRef}
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/hero-fallback.jpg"
        ></video>

        <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Beacon of Hope Psychiatry
          </h1>

          <div className="mx-auto mt-4 w-32 h-[4px] rounded-full bg-gradient-to-r from-[#7D5F42] to-[#d1b08a] shadow-[0_0_15px_#7D5F42]"></div>

          <p className="mt-6 text-lg md:text-xl text-white leading-relaxed drop-shadow-md">
            Compassionate mental health care that restores clarity, balance, and peace.
          </p>

          <div className="mt-8">
            <button className="bg-white hover:bg-[#f0f0f0] text-[#004AAD] font-semibold px-8 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-[1.03]">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>

      {/* === MOBILE (video first, text after) === */}
      <div className="flex flex-col md:hidden">
        <div className="relative w-full h-[55vh]">
          <video
            ref={videoRef}
            src="/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-contain bg-black"
            poster="/hero-fallback.jpg"
          ></video>
        </div>

        <div className="px-6 py-10 text-center">
          <h1 className="text-3xl font-bold text-white leading-tight mb-4">
            Beacon of Hope Psychiatry
          </h1>
          <p className="text-base text-gray-200 mb-6">
            Compassionate mental health care that restores clarity, balance, and peace.
          </p>
          <button className="bg-white hover:bg-[#f0f0f0] text-[#004AAD] font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-[1.03]">
            Book an Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
