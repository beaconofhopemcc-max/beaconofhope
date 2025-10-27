"use client";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full bg-white py-20 md:py-28 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
      {/* === IMAGE COLUMN === */}
      <div className="relative w-full lg:w-1/2 h-[320px] md:h-[450px] overflow-hidden rounded-3xl shadow-lg">
        <Image
          src="/Home2.png"
          alt="Beacon of Hope Psychiatry"
          fill
          className="object-cover object-center rounded-3xl transition-transform duration-700 hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#004AAD]/10 via-transparent to-transparent"></div>
      </div>

      {/* === TEXT COLUMN === */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#004AAD] leading-snug">
          About Beacon of Hope Psychiatry
        </h2>

        {/* Rose-Gold Accent Line */}
        <div className="mt-3 mb-6 w-24 h-[4px] mx-auto lg:mx-0 bg-gradient-to-r from-[#7D5F42] to-[#d1b08a] rounded-full shadow-[0_0_10px_#7D5F42]/40"></div>

        <p className="text-gray-700 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
          Beacon of Hope Psychiatry is a modern center for mental-wellness,
          designed to bring calm, clarity, and compassionate care to every individual.
          We blend clinical excellence with human connection, creating the space
          where healing feels natural and hope feels real.
        </p>

        <p className="mt-4 text-gray-700 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
          From children to adults, our focus is to help you regain balance,
          strengthen emotional resilience, and rediscover your confidence—
          in a professional, welcoming environment built on trust.
        </p>

        <p className="mt-4 text-gray-700 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
          At Beacon of Hope, every story matters, and every life deserves light.
        </p>

        {/* === BUTTON MODIFICATION START === */}
        <a href="/team"
           className="inline-block mt-8 bg-[#004AAD] hover:bg-[#003a8c] text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-[1.03]">
          Meet Our Team
        </a>
        {/* === BUTTON MODIFICATION END === */}
      </div>
    </section>
  );
}