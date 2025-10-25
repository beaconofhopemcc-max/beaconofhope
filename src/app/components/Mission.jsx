"use client";
import Image from "next/image";
import { HeartPulse, Eye, Sparkles } from "lucide-react"; // using clean minimal icons

export default function Mission() {
  return (
    <section className="relative w-full bg-white py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* === Background Image === */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Home3.png"
          alt="Mission Background"
          fill
          className="object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/90"></div>
      </div>

      {/* === Section Title === */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#004AAD]">
          Our Mission, Vision & Core Values
        </h2>
        <div className="mt-3 w-28 h-[4px] mx-auto bg-gradient-to-r from-[#7D5F42] to-[#d1b08a] rounded-full shadow-[0_0_12px_#7D5F42]/40"></div>
      </div>

      {/* === Cards === */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* === MISSION CARD === */}
        <div className="relative group bg-white rounded-2xl border border-[#7D5F42]/50 shadow-lg p-8 transition-all duration-500 hover:shadow-[0_0_25px_#7D5F42]/40">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <HeartPulse className="w-10 h-10 text-[#7D5F42]" />
              <div className="absolute inset-0 rounded-full bg-[#7D5F42]/40 blur-md animate-pulse"></div>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-[#004AAD] mb-4">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To deliver compassionate, evidence-based psychiatric care that
            restores balance, nurtures resilience, and helps every individual
            rediscover the peace they deserve.
          </p>
        </div>

        {/* === VISION CARD === */}
        <div className="relative group bg-white rounded-2xl border border-[#7D5F42]/50 shadow-lg p-8 transition-all duration-500 hover:shadow-[0_0_25px_#7D5F42]/40">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Eye className="w-10 h-10 text-[#7D5F42]" />
              <div className="absolute inset-0 rounded-full bg-[#7D5F42]/40 blur-md animate-pulse"></div>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-[#004AAD] mb-4">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To be a beacon of excellence in mental health care, where healing
            is holistic, accessible, and guided by empathy, innovation, and
            human connection.
          </p>
        </div>

        {/* === CORE VALUES CARD === */}
        <div className="relative group bg-white rounded-2xl border border-[#7D5F42]/50 shadow-lg p-8 transition-all duration-500 hover:shadow-[0_0_25px_#7D5F42]/40">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Sparkles className="w-10 h-10 text-[#7D5F42]" />
              <div className="absolute inset-0 rounded-full bg-[#7D5F42]/40 blur-md animate-pulse"></div>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-[#004AAD] mb-4">
            Our Core Values
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Compassion, integrity, respect, and collaboration form the foundation
            of our work. We believe in meeting every patient with dignity, empathy,
            and genuine care.
          </p>
        </div>
      </div>
    </section>
  );
}
