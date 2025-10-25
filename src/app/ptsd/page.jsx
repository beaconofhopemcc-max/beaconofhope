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

      <main className="bg-white text-gray-800 overflow-hidden pt-20">
        {/* === HERO SECTION === */}
        <section
          ref={heroRef}
          className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden"
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
              className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight"
            >
              PTSD Care at Beacon of Hope Psychiatry
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

        {/* === INTRODUCTION === */}
        <section className="max-w-5xl mx-auto py-20 px-6 md:px-12 lg:px-20 text-center md:text-left">
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
            deeply distressing events. It can cause intrusive memories, nightmares,
            hypervigilance, and emotional numbness. At Beacon of Hope Psychiatry, we help
            you process trauma safely and rediscover your sense of calm and control.
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
            src="/ptsd1.png"
            alt="PTSD treatment at Beacon of Hope Psychiatry"
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

        {/* === OUR APPROACH === */}
        <section className="max-w-6xl mx-auto py-20 px-6 md:px-12 lg:px-20 relative">
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

          {/* === Connector Line === */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-[45%] w-[70%] h-[4px] rounded-full bg-gradient-to-r from-[#004AAD] via-[#7D5F42] to-[#004AAD] opacity-40"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative z-10">
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
            Our clinicians provide care rooted in understanding and empathy. We use
            trauma-informed methods that help patients feel safe, supported, and seen as
            they work toward healing.
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
            See how compassionate, trauma-informed care at Beacon of Hope is helping
            individuals reclaim peace after trauma.
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
