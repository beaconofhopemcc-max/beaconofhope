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

export default function ADHDPage() {
  const [videoVisible, setVideoVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVideoVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      <main className="bg-white text-gray-800 overflow-hidden pt-20">
        {/* === HERO SECTION === */}
        <section
          ref={heroRef}
          className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden"
        >
          {videoVisible ? (
            <video
              src="/adhd.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover"
            ></video>
          ) : (
            <div className="absolute inset-0 bg-transparent" />
          )}

          <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight"
            >
              ADHD Care at Beacon of Hope Psychiatry
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-white leading-relaxed drop-shadow-md"
            >
              Empowering focus, clarity, and confidence for individuals living with
              Attention-Deficit/Hyperactivity Disorder.
            </motion.p>
          </div>
        </section>

        {/* === INTRODUCTION === */}
        <section className="max-w-5xl mx-auto py-20 px-6 md:px-12 lg:px-20 text-center md:text-left">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#004AAD]"
          >
            Understanding ADHD
          </motion.h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Attention-Deficit/Hyperactivity Disorder (ADHD) is more than restlessness or
            distraction. It’s a neurodevelopmental condition that affects focus,
            motivation, and organization. At Beacon of Hope Psychiatry, we specialize in
            helping both children and adults understand their ADHD and use it as a
            strength — not a limitation.
          </p>
        </section>

        {/* === IMAGE SECTION === */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden"
        >
          <Image
            src="/adhd1.png"
            alt="ADHD care at Beacon of Hope Psychiatry"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/20 md:bg-black/10"></div>
        </motion.div>

        {/* === SYMPTOMS SECTION === */}
        <section className="bg-[#f9fafb] py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl font-semibold text-[#004AAD] text-center md:text-left"
            >
              Common Symptoms of ADHD
            </motion.h3>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-lg">
              {[
                "Difficulty maintaining focus or completing tasks",
                "Easily distracted or forgetful in daily activities",
                "Trouble organizing responsibilities or belongings",
                "Restlessness or constant movement",
                "Impulsive decision-making or interrupting others",
                "Trouble managing time or meeting deadlines",
                "Mood swings or frustration when overwhelmed",
                "Periods of hyperfocus on specific interests",
              ].map((symptom, i) => (
                <li
                  key={i}
                  className="flex items-start space-x-3 group transition-transform duration-300 hover:translate-x-1"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0 mt-1 text-[#7D5F42] group-hover:scale-125 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="6" />
                  </svg>
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* === OUR APPROACH === */}
        <section className="max-w-6xl mx-auto py-20 px-6 md:px-12 lg:px-20 relative">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl font-semibold text-[#004AAD] text-center md:text-left"
          >
            Our Approach to Treating ADHD
          </motion.h3>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed text-center md:text-left">
            ADHD treatment at Beacon of Hope is tailored for every individual. We combine
            clinical expertise, emotional support, and lifestyle strategies to help you
            function confidently in work, school, and daily life.
          </p>

          {/* === Connector Line === */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-[45%] w-[70%] h-[4px] rounded-full bg-gradient-to-r from-[#004AAD] via-[#7D5F42] to-[#004AAD] opacity-40"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative z-10">
            {[
              {
                title: "Comprehensive Assessment",
                desc: "We evaluate your symptoms, history, and strengths to understand your unique ADHD profile and challenges.",
              },
              {
                title: "Medication Management",
                desc: "When appropriate, we provide evidence-based medication support to improve focus, calm, and task regulation.",
              },
              {
                title: "Behavioral and Cognitive Coaching",
                desc: "Through personalized guidance, we teach strategies for organization, emotional regulation, and sustained progress.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#7D5F42]/20 hover:shadow-[0_0_20px_#7D5F42]/30 transition-all duration-500"
              >
                <h4 className="text-xl font-bold text-[#004AAD] mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* === WHY CHOOSE US === */}
        <section className="bg-[#f9fafb] py-20 px-6 md:px-12 lg:px-20 text-center">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#004AAD]"
          >
            Why Choose Beacon of Hope Psychiatry
          </motion.h3>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our ADHD specialists are passionate about helping patients unlock their full
            potential. With structure, encouragement, and evidence-based care, we support
            both children and adults in building balanced, fulfilling lives.
          </p>
        </section>

        {/* === BRAND VIDEO SECTION === */}
        <section className="relative bg-white py-20 px-6 md:px-12 lg:px-20 text-center">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#004AAD]"
          >
            Watch the Beacon of Hope Story
          </motion.h3>

          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore how we’re transforming ADHD care through compassion, clarity, and
            comprehensive psychiatric support.
          </p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative mt-12 mx-auto w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] rounded-3xl overflow-hidden shadow-2xl"
          >
            <video
              src="/video.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full h-auto rounded-3xl cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
              poster="/video-preview.jpg"
            ></video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
          </motion.div>
        </section>

        {/* === CTA === */}
        <section className="relative w-full py-24 flex items-center justify-center overflow-hidden bg-[#004AAD] text-white text-center px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-snug">
              Focus. Clarity. Confidence. It Starts Here.
            </h2>
            <p className="text-base sm:text-lg text-gray-100 mb-8 leading-relaxed">
              ADHD doesn’t limit your potential — it reveals your creativity, curiosity,
              and resilience. Let’s build a plan that helps you thrive.
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
