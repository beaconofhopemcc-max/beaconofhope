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

      {/* === DESKTOP HERO === */}
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
            <a
              href="/book-consultation"
              className="inline-block bg-white hover:bg-[#f0f0f0] text-[#004AAD] font-semibold px-8 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-[1.03]"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </div>

      {/* === MOBILE HERO (text over video, shifted right) === */}
      <div className="relative md:hidden w-full h-[100vh] overflow-hidden">
        <video
          ref={videoRef}
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          // 👇 Focuses the video more toward the right to show people clearly
          className="absolute inset-0 w-full h-full object-cover object-[70%_center]"
          poster="/hero-fallback.jpg"
        ></video>

        {/* Gradient overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

        {/* Text & Button Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-3xl font-bold text-white leading-tight mb-4">
            Beacon of Hope Psychiatry
          </h1>

          <div className="mx-auto w-24 h-[3px] rounded-full bg-gradient-to-r from-[#7D5F42] to-[#A0815F] shadow-sm mb-6"></div>

          <p className="text-base text-gray-200 mb-8 max-w-sm">
            Compassionate mental health care that restores clarity, balance, and peace.
          </p>

          <a
            href="/book-consultation"
            className="inline-block bg-[#004AAD] hover:bg-[#003887] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.05]"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
