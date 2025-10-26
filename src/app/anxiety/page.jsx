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

export default function AnxietyPage() {
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

      <main className="bg-white text-gray-800 overflow-hidden">
        {/* === HERO SECTION === */}
        <section
          ref={heroRef}
          // MODIFIED: Reduced mobile vertical padding to py-16 and used items-start to top-align content
          className="relative w-full py-16 md:h-[80vh] flex items-start md:items-center justify-center overflow-hidden" 
        >
          {videoVisible ? (
            <video
              src="/anxiety.mp4"
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

          {/* MODIFIED: Added pt-8 for top padding on mobile */}
          <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl pt-8">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight"
            >
              Anxiety
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-white leading-relaxed drop-shadow-md"
            >
              Compassionate care that helps calm your mind, restore confidence, and bring
              peace to everyday life.
            </motion.p>
          </div>
        </section>

        {/* === INTRODUCTION & IMAGE (SWAPPED ON DESKTOP) === */}
        <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* TEXT COLUMN (Left on Desktop, Top on Mobile) */}
            <div className="md:order-1 order-2 text-center md:text-left">
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl font-bold text-[#004AAD]"
              >
                Understanding Anxiety
              </motion.h2>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                Anxiety isn’t just worry — it’s a deep state of alertness that can make you feel
                tense, restless, or unable to relax. It often appears when your body and mind
                feel unsafe, even in calm environments. At Beacon of Hope Psychiatry, we help
                you retrain your mind and body to feel secure again.
              </p>
            </div>

            {/* IMAGE COLUMN (Right on Desktop, Bottom on Mobile) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative w-full aspect-[16/10] overflow-hidden rounded-xl shadow-xl md:order-2 order-1" 
            >
              <Image
                src="/anxiety1.png"
                alt="Anxiety treatment at Beacon of Hope Psychiatry"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </motion.div>
          </div>
        </section>

        {/* Removed the separate IMAGE SECTION as it is now integrated above */}

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
              Common Symptoms of Anxiety
            </motion.h3>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-lg">
              {[
                "Racing thoughts or constant worry",
                "Restlessness or feeling on edge",
                "Increased heart rate or tightness in the chest",
                "Difficulty concentrating or relaxing",
                "Trouble sleeping or staying asleep",
                "Irritability or agitation",
                "Fatigue or muscle tension",
                "Avoidance of situations that cause stress",
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

        {/* === OUR APPROACH (MODIFIED TO INCLUDE IMAGE) === */}
        {/* MODIFIED: Changed max-w to 7xl and added responsive grid layout with approach.png */}
        <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-20 relative">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* TEXT & SERVICE LIST COLUMN (Left on Desktop, Top on Mobile) */}
            <div className="md:order-1 order-2">
              <motion.h3
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-2xl font-semibold text-[#004AAD] text-center md:text-left"
              >
                Our Approach to Treating Anxiety
              </motion.h3>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed text-center md:text-left">
                Our anxiety care plans combine therapeutic support and medical expertise to
                restore emotional balance. We help you understand your triggers and strengthen
                your nervous system’s ability to stay calm under stress.
              </p>

              {/* === Connector Line (Hidden on Mobile/Small Desktop) === */}
              <div className="hidden lg:block absolute left-[30%] transform translate-x-1/2 top-[60%] w-[30%] h-[4px] rounded-full bg-gradient-to-r from-[#004AAD] via-[#7D5F42] to-[#004AAD] opacity-40"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16 relative z-10">
                {[
                  {
                    title: "Comprehensive Assessment",
                    desc: "We explore medical, emotional, and lifestyle factors contributing to anxiety to design an accurate diagnosis and plan.",
                  },
                  {
                    title: "Targeted Medication Support",
                    desc: "When necessary, medications are used thoughtfully to ease overwhelming symptoms and promote stability.",
                  },
                  {
                    title: "Therapeutic Guidance",
                    desc: "Through CBT, mindfulness, and coping techniques, we help you rewire anxious thought patterns into clarity and calm.",
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
            </div>

            {/* NEW IMAGE COLUMN (Right on Desktop, Bottom on Mobile) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl shadow-xl md:order-2 order-1 hidden md:block" // Hidden on mobile
            >
              <Image
                src="/approach.png"
                alt="Our comprehensive approach to anxiety treatment"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </motion.div>

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
            We believe anxiety is not your identity — it’s a signal that you need care.
            With personalized treatment, compassionate listening, and modern psychiatry,
            we help you find your steady rhythm again.
          </p>
        </section>

        {/* REMOVED: The BRAND VIDEO SECTION has been removed. */}

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
              You Can Find Calm Again
            </h2>
            <p className="text-base sm:text-lg text-gray-100 mb-8 leading-relaxed">
              Anxiety doesn’t define you — and you don’t have to live in survival mode.
              Our compassionate experts are here to guide you toward peace and confidence.
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