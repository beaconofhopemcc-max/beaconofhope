"use client";
import Image from "next/image";

export default function Insurances() {
  return (
    <section className="w-full bg-white py-20 md:py-28 px-6 md:px-12 lg:px-20 text-center">
      {/* === IMAGE === */}
      <div className="relative w-full max-w-4xl mx-auto h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-md mb-8">
        <Image
          src="/insurance1.png"
          alt="Insurance and Payment Options"
          fill
          className="object-contain object-center rounded-3xl" // object-contain ensures full image is shown
          priority
        />
        {/* === OVERLAY DIV REMOVED HERE === */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent"></div> */}
      </div>

      {/* === TITLE === */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#004AAD] mb-4">
        Insurance & Payment Options
      </h2>

      {/* === ACCENT LINE === */}
      <div className="mx-auto mb-6 w-24 h-[4px] bg-gradient-to-r from-[#7D5F42] to-[#d1b08a] rounded-full shadow-[0_0_10px_#7D5F42]/40"></div>

      {/* === TEXT === */}
      <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
        We accept all major insurance plans as well as flexible out-of-pocket options.  
        Your access to compassionate, expert psychiatric care is always assured.
      </p>
    </section>
  );
}