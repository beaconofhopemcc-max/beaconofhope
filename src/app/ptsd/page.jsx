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

export default function PTSDPage() {
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

      {/* MODIFIED: Removed 'pt-20' class from main */}
      <main className="bg-white text-gray-800 overflow-hidden">
        {/* === HERO SECTION === */}
        <section
          ref={heroRef}
          // MODIFIED: Replaced fixed height with responsive padding/height
          className="relative w-full py-24 md:h-[80vh] flex items-center justify-center overflow-hidden" 
        >
          {videoVisible ? (
            <video
              src="/ptsd.mp4"
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
              // MODIFIED: Reduced mobile text size from text-4xl to text-3xl
              className="text-3xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight"
            >
              PTSD 
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-white leading-relaxed drop-shadow-md"
            >
              Compassionate trauma-focused care that helps you regain safety, confidence,
              and peace of mind.
            </motion.p>
          </div>
        </section>

        {/* === INTRODUCTION & IMAGE (NEW TWO-COLUMN LAYOUT) === */}
        {/* Replaces the old INTRODUCTION and IMAGE SECTION with a new two-column layout */}
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
                Understanding PTSD
              </motion.h2>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                Post-Traumatic Stress Disorder (PTSD) develops after experiencing or witnessing
                deetply distressing events. It can cause intrusive memories, nightmares,
                hypervigilance, and emotional numbness. At Beacon of Hope Psychiatry, we help
                you process trauma safely and rediscover your sense of calm and control.
              </p>
            </div>

            {/* IMAGE COLUMN (Right on Desktop, Bottom on Mobile) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              // MODIFIED: Adopted aspect ratio from other pages for a clean content image
              className="relative w-full aspect-[16/10] overflow-hidden rounded-xl shadow-xl md:order-2 order-1" 
            >
              <Image
                // MODIFIED: Changed image source from '/ptsd1.png' to '/approach.png'
                src="/approach.png" 
                alt="PTSD treatment at Beacon of Hope Psychiatry"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </motion.div>
          </div>
        </section>


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
              Common Symptoms of PTSD
            </motion.h3>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-lg">
              {[
                "Flashbacks or intrusive memories of trauma",
                "Nightmares or disturbing dreams",
                "Avoidance of reminders of the event",
                "Feeling emotionally numb or detached",
                "Irritability or sudden anger",
                "Hypervigilance or being easily startled",
                "Difficulty sleeping or concentrating",
                "Negative changes in mood and beliefs about self or others",
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

        {/* === OUR APPROACH (NEW TWO-COLUMN LAYOUT) === */}
        {/* Restructured the OUR APPROACH to match the 2-column layout */}
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
                Our Approach to Treating PTSD
              </motion.h3>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed text-center md:text-left">
                We create a safe, supportive space for healing trauma. Using proven therapies
                and compassionate care, our goal is to help you regain emotional safety,
                self-trust, and calm.
              </p>

              {/* === Connector Line (Adjusted for 2-column layout) === */}
              <div className="hidden lg:block absolute left-[30%] transform translate-x-1/2 top-[60%] w-[30%] h-[4px] rounded-full bg-gradient-to-r from-[#004AAD] via-[#7D5F42] to-[#004AAD] opacity-40"></div>
              
              {/* Cards Container - Adjusted to sm:grid-cols-2 and added a 4th card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16 relative z-10">
                {[
                  {
                    title: "Trauma-Informed Evaluation",
                    desc: "We start by understanding your story, identifying triggers, and ensuring care is trauma-sensitive and paced for your comfort.",
                  },
                  {
                    title: "Evidence-Based Therapy",
                    desc: "We use approaches like EMDR, CBT, and exposure therapy to reduce intrusive symptoms and help you process painful memories safely.",
                  },
                  {
                    title: "Holistic Support",
                    desc: "We integrate mindfulness, stress-reduction, and medication management to support the mind and body together during recovery.",
                  },
                   {
                    title: "Relapse Prevention & Resilience",
                    desc: "Building long-term coping skills, self-compassion, and support systems to maintain stability and prevent future relapse.",
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
              // MODIFIED: New Aspect Ratio and hidden on mobile for the 2-column approach section
              className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl shadow-xl md:order-2 order-1 hidden md:block"
            >
              <Image
                // MODIFIED: Added image source for the approach section
                src="/approach-detail.png" 
                alt="Our comprehensive approach to PTSD treatment"
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
            Our clinicians provide care rooted in understanding and empathy. We use
            trauma-informed methods that help patients feel safe, supported, and seen as
            they work toward healing.
          </p>
        </section>

        {/* REMOVED: BRAND VIDEO SECTION */}

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
              Healing Is Possible — You Deserve Peace
            </h2>
            <p className="text-base sm:text-lg text-gray-100 mb-8 leading-relaxed">
              You are not defined by your trauma. With the right support, your mind and
              body can recover. Let’s take the first step together toward lasting peace.
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