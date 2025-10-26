"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../Header";
import Footer from "../Footer";
import { useEffect, useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function InsurancePage() {
  // Removed videoVisible state and related useEffect/useRef as per request
  // to always show the video and remove the placeholder div.

  return (
    <>
      <Header />

      <main className="bg-white text-gray-800 overflow-hidden">
        {/* === HERO SECTION === */}
        <section
          // 1. MODIFICATION: Changed h-[80vh] to h-[50vh] on mobile, keeping 80vh for md screens and up.
          className="relative w-full h-[50vh] md:h-[80vh] flex items-center justify-center overflow-hidden"
        >
          {/* Video is now rendered unconditionally to ensure it's always visible and not blurred/delayed by a placeholder */}
          <video
            src="/insurance.mp4"
            autoPlay
            muted
            loop
            playsInline
            // preload="none" // Removed preload="none" for faster display
            className="absolute inset-0 w-full h-full object-cover"
          ></video>

          <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight"
            >
              Insurance & Payment Options
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-white leading-relaxed drop-shadow-md"
            >
              We make quality mental health care accessible — with flexible insurance and
              payment options that fit your needs.
            </motion.p>
          </div>
        </section>

        {/* --- */}

        {/* === INSURANCE IMAGE SECTION === */}
        <section className="relative py-20 px-6 md:px-12 lg:px-20 bg-[#f9fafb]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* === Image Side === */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              // 2. MODIFICATION: Replaced fixed height (h-[65vh] md:h-[75vh]) 
              // with a more adaptive aspect ratio (aspect-video) for the container.
              // This is necessary because object-contain respects the full size of the container.
              className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-lg"
            >
              <Image
                src="/insurance1.png"
                alt="Accepted insurance at Beacon of Hope Psychiatry"
                fill
                className="object-contain object-center"
                // object-contain is correct to ensure the full image is shown
                priority
              />
            </motion.div>

            {/* === Text Side === */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h2 className="text-3xl font-bold text-[#004AAD] mb-6">
                We Accept Most Insurance Plans
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                At Beacon of Hope Psychiatry, we believe mental health care should be
                simple, accessible, and affordable. That’s why we partner with a wide
                range of insurance providers to make your journey to healing easier.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Whether you have private insurance, Medicaid, or prefer out-of-pocket
                payments, we’ll help you find the best financial option that suits your
                situation. Our goal is to remove barriers — so you can focus on feeling
                better.
              </p>
              <ul className="mt-6 text-left list-disc list-inside text-gray-700 space-y-2">
                <li>We accept major insurance providers</li>
                <li>We support Medicaid and Medicare plans</li>
                <li>We welcome out-of-pocket and self-pay clients</li>
                <li>Flexible options available for ongoing care</li>
              </ul>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                Not sure if your insurance covers psychiatric care? Contact our friendly
                support team and we’ll guide you through the verification process quickly
                and confidentially.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- */}

        {/* === CTA SECTION === */}
        <section className="relative w-full py-24 flex items-center justify-center overflow-hidden bg-[#004AAD] text-white text-center px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-snug">
              Begin Your Journey to Better Mental Health
            </h2>
            <p className="text-base sm:text-lg text-gray-100 mb-8 leading-relaxed">
              We accept out-of-pocket, Medicaid, Medicare, and a wide range of private
              insurance plans. Getting started is easy — your wellbeing matters most.
            </p>
            <a
              href="/book-consultation"
              className="bg-[#7D5F42] hover:bg-[#6a4f35] text-white font-semibold px-8 sm:px-10 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-[1.05]"
            >
              Book a Consultation
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}