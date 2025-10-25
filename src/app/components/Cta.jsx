"use client";
import Image from "next/image";

export default function Final() {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-center text-center overflow-hidden">
      {/* === BACKGROUND IMAGE === */}
      <Image
        src="/home6.png"
        alt="Beacon of Hope Psychiatry Final Section"
        fill
        className="object-cover object-center"
        priority
      />

      {/* === GRADIENT OVERLAY === */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#004AAD]/90 via-[#004AAD]/70 to-transparent"></div>

      {/* === CONTENT === */}
      <div className="relative z-10 px-6 md:px-12 max-w-3xl text-white">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 drop-shadow-lg">
          Your Healing Journey Begins Here
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-100 mb-10">
          Take the first step toward peace of mind and emotional balance.  
          Beacon of Hope Psychiatry is here to guide you — with compassion, clarity, and care.
        </p>

        <button className="bg-[#7D5F42] hover:bg-[#6a4f35] text-white font-semibold px-10 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-[1.05]">
          Book Your Appointment
        </button>
      </div>

      {/* === BOTTOM GRADIENT === */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
