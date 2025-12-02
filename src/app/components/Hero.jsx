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
          // Check if video is loaded and ready before playing
          if (video.readyState >= 3) {
            await video.play();
            setVideoReady(true);
          } else {
            // Wait for 'canplay' event if it's not ready yet
            video.addEventListener('canplay', handleCanPlay);
          }
        } catch (err) {
          console.warn("Autoplay blocked:", err);
        }
      };
      
      const handleCanPlay = async () => {
          try {
              await video.play();
              setVideoReady(true);
          } catch (err) {
              console.warn("Autoplay blocked after load:", err);
          }
          video.removeEventListener('canplay', handleCanPlay);
      };
      
      playVideo();

      // Cleanup function to remove event listener
      return () => {
        if (video) {
            video.removeEventListener('canplay', handleCanPlay);
        }
      };
    }
  }, []);

  return (
    <section className="w-full bg-black text-white overflow-hidden">
      
      {/* === DESKTOP HERO (Video as background) === */}
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

      {/* === MOBILE & TABLET HERO (Video & Text/Button Stacked) === */}
      <div className="md:hidden w-full">
        {/* Video Section */}
        <div className="relative w-full h-[200px] flex items-center justify-center overflow-hidden bg-white"> 
          <video
            src="/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-contain" 
            poster="/hero-fallback.jpg"
          ></video>
        </div>

        {/* Text & Button Section (Standalone - White Background) */}
        {/* Key Change: Changed p-8 to px-8 pb-8 pt-4 to reduce the top gap */}
        <div className="px-8 pb-8 pt-4 text-center bg-white text-black">
          <h1 className="text-3xl font-bold text-[#004AAD] leading-tight mb-4">
            Beacon of Hope Psychiatry
          </h1>

          <div className="mx-auto w-24 h-[3px] rounded-full bg-gradient-to-r from-[#7D5F42] to-[#A0815F] shadow-sm mb-6"></div>

          <p className="text-base text-gray-700 mb-8 max-w-sm mx-auto">
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