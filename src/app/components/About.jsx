"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full bg-white py-20 md:py-28 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
      {/* === IMAGE COLUMN === */}
      <div className="relative w-full lg:w-1/2 h-auto overflow-hidden rounded-3xl shadow-lg">
        {/* ✅ Use original image size instead of forced fill */}
        <Image
          src="/come2.png"
          alt="Beacon of Hope Psychiatry"
          width={800}
          height={600}
          className="w-full h-auto rounded-3xl transition-transform duration-700 hover:scale-105 object-contain"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#004AAD]/10 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* === TEXT COLUMN === */}
      <div className="w-full lg:w-1/2 text-left">
        {/* ✅ Slide-up animation using Framer Motion */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#004AAD] leading-snug"
        >
          About Beacon of Hope Psychiatry
        </motion.h2>

        {/* Rose-Gold Accent Line */}
        <div className="mt-3 mb-6 w-24 h-[4px] bg-gradient-to-r from-[#7D5F42] to-[#d1b08a] rounded-full shadow-[0_0_10px_#7D5F42]/40"></div>

        <p className="text-gray-700 text-lg leading-relaxed max-w-xl text-justify">
          Beacon of Hope Psychiatry is a modern center for mental-wellness,
          designed to bring calm, clarity, and compassionate care to every individual.
          We blend clinical excellence with human connection, creating the space
          where healing feels natural and hope feels real.
        </p>

        <p className="mt-4 text-gray-700 text-lg leading-relaxed max-w-xl text-justify">
          From children to adults, our focus is to help you regain balance,
          strengthen emotional resilience, and rediscover your confidence—
          in a professional, welcoming environment built on trust.
        </p>

        <p className="mt-4 text-gray-700 text-lg leading-relaxed max-w-xl text-justify">
          At Beacon of Hope, every story matters, and every life deserves light.
        </p>

        {/* === BUTTON === */}
        <a
          href="/team"
          className="inline-block mt-8 bg-[#004AAD] hover:bg-[#003a8c] text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-[1.03]"
        >
          Meet Our Team
        </a>
      </div>
    </section>
  );
}
