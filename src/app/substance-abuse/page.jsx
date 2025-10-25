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

export default function SubstanceAbusePage() {
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
              src="/substance.mp4"
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
              Substance Use Recovery at Beacon of Hope Psychiatry
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-white leading-relaxed drop-shadow-md"
            >
              Compassionate, evidence-based addiction treatment that helps you reclaim
              control, restore balance, and rebuild your life with dignity.
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
            Understanding Substance Use Disorders
          </motion.h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Substance use disorder is a complex condition that affects the brain,
            emotions, and behavior. It’s not a moral failure — it’s a medical and
            psychological condition that deserves compassionate, comprehensive care.
            At Beacon of Hope Psychiatry, we focus on healing the person, not just
            treating the addiction.
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
            src="/substance1.png"
            alt="Substance abuse recovery at Beacon of Hope Psychiatry"
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
              Common Signs of Substance Use Disorder
            </motion.h3>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-lg">
              {[
                "Increased tolerance or need for more of the substance",
                "Withdrawal symptoms when not using",
                "Loss of interest in hobbies and relationships",
                "Neglecting responsibilities or work",
                "Secretive behavior or denial",
                "Using substances to cope with stress or emotions",
                "Physical health decline or weight changes",
                "Failed attempts to quit or cut down",
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
            Our Approach to Addiction Recovery
          </motion.h3>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed text-center md:text-left">
            We combine psychiatry, therapy, and holistic recovery support to address both
            the mental and physical aspects of substance use. Each treatment plan is
            personalized — focused on helping you rediscover stability and self-trust.
          </p>

          {/* === Connector Line === */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-[45%] w-[70%] h-[4px] rounded-full bg-gradient-to-r from-[#004AAD] via-[#7D5F42] to-[#004AAD] opacity-40"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative z-10">
            {[
              {
                title: "Comprehensive Assessment",
                desc: "We identify biological, psychological, and social factors influencing substance use, guiding precise diagnosis and treatment.",
              },
              {
                title: "Medication-Assisted Treatment",
                desc: "Safe and effective medications may be used to reduce cravings and withdrawal symptoms, supporting long-term recovery.",
              },
              {
                title: "Therapeutic Guidance",
                desc: "Through therapy, mindfulness, and relapse prevention, we help rebuild self-trust, confidence, and connection.",
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
            Our recovery philosophy combines science, compassion, and accountability. We
            walk beside you — empowering healing, restoring purpose, and helping you
            rebuild a future free from addiction.
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
            See how our holistic care approach helps individuals rediscover strength and
            freedom — one recovery at a time.
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
              Recovery Is Possible — Let’s Begin Together
            </h2>
            <p className="text-base sm:text-lg text-gray-100 mb-8 leading-relaxed">
              Every new day is another chance to choose healing. Reach out to Beacon of
              Hope Psychiatry and start your journey to freedom.
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
