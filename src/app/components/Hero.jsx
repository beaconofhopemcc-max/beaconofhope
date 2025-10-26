"use client";
import { useEffect, useRef, useState } from "react";
// Optional: If you wanted to use the Next.js Link component, 
// you would import it here: import Link from 'next/link';

export default function Hero() {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playVideo = async () => {
        try {
          // Note: Autoplay might still be blocked on some mobile browsers
          // even with 'muted' and 'playsInline', but this structure is correct.
          await video.play(); 
          setVideoReady(true);
        } catch (err) {
          console.warn("Autoplay blocked:", err);
        }
      };
      playVideo();
    }
  }, []); // Retained the original dependency array structure

  return (
    // Main section background is black for the desktop view but will be overridden for mobile
    <section className="w-full bg-black text-white overflow-hidden">
      
      {/* === DESKTOP (text overlay on video) - MODIFIED BUTTON === */}
      {/* This section remains hidden on mobile (md:flex) */}
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
            {/* === DESKTOP BUTTON MODIFICATION START === */}
            <a href="/book-consultation" 
               className="inline-block bg-white hover:bg-[#f0f0f0] text-[#004AAD] font-semibold px-8 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-[1.03]">
              Book an Appointment
            </a>
            {/* === DESKTOP BUTTON MODIFICATION END === */}
          </div>
        </div>
      </div>

      {/* === MOBILE (video first, white background, blue/brown text) - MODIFIED BUTTON === */}
      <div className="flex flex-col md:hidden w-full min-h-screen">
        
        {/* Video at the Top (50vh height) */}
        <div className="relative w-full h-[30vh]">
          <video
            ref={videoRef}
            src="/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            // Use object-cover to fill the space
            className="w-full h-full object-cover" 
            poster="/hero-fallback.jpg"
          ></video>
        </div>

        {/* Remaining White Space with Blue and Brown Text */}
        <div className="flex-grow bg-white px-6 py-10 text-center">
          
          {/* Blue Heading */}
          <h1 className="text-3xl font-bold text-[#004AAD] leading-tight mb-4">
            Beacon of Hope Psychiatry
          </h1>
          
          {/* Brown Separator */}
          <div className="mx-auto mt-4 w-32 h-[4px] rounded-full bg-gradient-to-r from-[#7D5F42] to-[#A0815F] shadow-sm mb-6"></div>

          {/* Brown Paragraph */}
          <p className="text-base text-[#7D5F42] mb-8">
            Compassionate mental health care that restores clarity, balance, and peace.
          </p>
          
          {/* Blue Button with White Text */}
          {/* === MOBILE BUTTON MODIFICATION START === */}
          <a href="/book-consultation"
             className="inline-block bg-[#004AAD] hover:bg-[#003887] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.03]">
            Book an Appointment
          </a>
          {/* === MOBILE BUTTON MODIFICATION END === */}
        </div>
      </div>
    </section>
  );
}