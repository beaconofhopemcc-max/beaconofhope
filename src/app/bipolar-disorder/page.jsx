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

export default function BipolarDisorderPage() {
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
              src="/bipolar.mp4"
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

          {/* MODIFIED: Added pt-8 for small screen padding, and kept max-w-4xl for centering */}
          <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl pt-8">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight"
            >
              Bipolar Disorder 
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-white leading-relaxed drop-shadow-md"
            >
              Stabilizing mood, restoring balance, and empowering individuals to live with
              clarity and confidence.
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
                Understanding Bipolar Disorder
              </motion.h2>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                Bipolar disorder is characterized by shifts in mood, energy, and activity
                levels that can affect daily functioning. It involves episodes of elevated
                mood (mania or hypomania) and periods of depression. At Beacon of Hope
                Psychiatry, we treat bipolar disorder with compassion, precision, and a focus
                on long-term stability and wellbeing.
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
                src="/bipolar1.png"
                alt="Bipolar Disorder care at Beacon of Hope Psychiatry"
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
              Common Symptoms of Bipolar Disorder
            </motion.h3>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-lg">
              {[
                "Extreme mood swings between highs and lows",
                "Periods of excessive energy or reduced need for sleep",
                "Racing thoughts or rapid speech",
                "Impulsive or risky behaviors",
                "Difficulty maintaining focus or making decisions",
                "Periods of sadness, fatigue, or hopelessness",
                "Changes in appetite or sleep patterns",
                "Difficulty maintaining relationships or routines",
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

        {/* === OUR APPROACH (MODIFIED TO MATCH 2-COLUMN LAYOUT) === */}
        {/* MODIFIED: Changed max-w to 7xl and added responsive grid layout */}
        <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-20 relative">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* TEXT & SERVICE LIST COLUMN (Left on Desktop, Top on Mobile) */}
            {/* The connector line from the old Bipolar version is removed since the layout changed */}
            <div className="md:order-1 order-2">
              <motion.h3
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-2xl font-semibold text-[#004AAD] text-center md:text-left"
              >
                Our Approach to Treating Bipolar Disorder
              </motion.h3>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed text-center md:text-left">
                Our treatment focuses on achieving **mood stability**, improving insight, and
                strengthening daily functioning. Each plan is tailored to help clients manage
                highs and lows with resilience and calm.
              </p>

              {/* === Connector Line (Hidden on Mobile/Small Desktop) === */}
              {/* Added the connector line from the AnxietyPage to the BipolarPage for style consistency */}
              <div className="hidden lg:block absolute left-[30%] transform translate-x-1/2 top-[60%] w-[30%] h-[4px] rounded-full bg-gradient-to-r from-[#004AAD] via-[#7D5F42] to-[#004AAD] opacity-40"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16 relative z-10">
                {[
                  {
                    title: "Comprehensive Evaluation",
                    desc: "We conduct in-depth assessments to understand mood patterns, triggers, and lifestyle factors influencing bipolar cycles.",
                  },
                  {
                    title: "Medication Management",
                    desc: "Mood stabilizers and other medications are carefully prescribed and monitored to maintain balance and reduce relapses.",
                  },
                  {
                    title: "Therapeutic Support",
                    desc: "Through cognitive therapy and supportive counseling, clients gain emotional awareness and tools for long-term self-regulation.",
                  },
                   {
                    title: "Relapse Prevention", // Added a 4th point to maintain card balance, or could remove one. Keeping 4 for a 2x2 grid.
                    desc: "We focus on proactive strategies, early warning signs, and lifestyle adjustments to sustain long-term stability.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    // Adjusted padding/text-size to fit 4 items better in the grid
                    className="col-span-1 bg-white rounded-2xl p-8 shadow-lg border border-[#7D5F42]/20 hover:shadow-[0_0_20px_#7D5F42]/30 transition-all duration-500"
                  >
                    <h4 className="text-xl font-bold text-[#004AAD] mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* NEW IMAGE COLUMN (Right on Desktop, Hidden on Mobile) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              // Added hidden md:block to hide on mobile, and used aspect-[4/5] as in AnxietyPage
              className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl shadow-xl md:order-2 order-1 hidden md:block" 
            >
              <Image
                src="/approach-bipolar.png" // Changed image source to be relevant for Bipolar
                alt="Our comprehensive approach to mental health treatment"
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
            We provide expert psychiatric care grounded in compassion. With personalized
            medication management, psychotherapy, and consistent follow-up, we help
            individuals with bipolar disorder regain balance and confidence in their daily
            lives.
          </p>
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
              Find Stability. Reclaim Your Balance.
            </h2>
            <p className="text-base sm:text-lg text-gray-100 mb-8 leading-relaxed">
              Bipolar disorder doesn’t define you — stability and peace are possible with
              the right care and consistent support. Let’s take that step together.
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