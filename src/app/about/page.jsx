"use client";
import { motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../Header";
import Footer from "../Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function AboutPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  // === Lazy-load video logic ===
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

      <main ref={ref} className="bg-white text-gray-800 overflow-hidden relative pt-20">
        {/* === SCROLL PROGRESS BAR === */}
        <motion.div
          className="fixed top-0 left-0 h-[4px] bg-gradient-to-r from-[#7D5F42] to-[#d1b08a] z-50 shadow-[0_0_10px_#7D5F42]/40 origin-left"
          style={{ scaleX: scrollYProgress }}
        />

        {/* === HERO VIDEO (no overlay, lazy-load, no poster) === */}
        <section
          ref={heroRef}
          className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden"
        >
          {videoVisible ? (
            <video
              src="/about.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover"
            ></video>
          ) : (
            // Minimal transparent placeholder while waiting for video
            <div className="absolute inset-0 bg-transparent" />
          )}

          {/* === Content === */}
          <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
            >
              About Beacon of Hope Psychiatry
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-white leading-relaxed drop-shadow-md"
            >
              Dedicated to restoring emotional balance through compassionate,
              evidence-based psychiatric care.
            </motion.p>
          </div>
        </section>

        {/* === WHO WE ARE === */}
        <section className="py-24 px-6 md:px-12 lg:px-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#004AAD]">
              Who We Are
            </h2>
            <div className="mx-auto mt-3 w-24 h-[4px] bg-gradient-to-r from-[#7D5F42] to-[#d1b08a] rounded-full shadow-[0_0_10px_#7D5F42]/40"></div>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Beacon of Hope Psychiatry is a center built on trust, innovation,
              and empathy. Our clinicians create a space where each story is
              valued, each symptom understood, and every recovery celebrated.
            </p>
          </motion.div>

          {/* Full-size responsive image with original aspect on mobile */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative mt-12 w-full overflow-hidden shadow-lg rounded-3xl"
          >
            <Image
              src="/about1.png"
              alt="Our team caring for patients"
              width={1920}
              height={1080}
              className="w-full h-auto object-contain md:object-cover md:h-[500px] md:object-top"
              priority
            />
          </motion.div>
        </section>

        {/* === MISSION / VISION / VALUES === */}
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#f9fafb]">
          <div className="text-center mb-16">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[#004AAD]"
            >
              Our Mission, Vision & Values
            </motion.h2>
            <div className="mx-auto mt-3 w-24 h-[4px] bg-gradient-to-r from-[#7D5F42] to-[#d1b08a] rounded-full shadow-[0_0_10px_#7D5F42]/40"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                title: "Mission",
                text:
                  "To deliver accessible, compassionate, and clinically sound psychiatric care that restores peace and purpose.",
              },
              {
                title: "Vision",
                text:
                  "To redefine mental-health excellence by combining empathy, innovation, and measurable healing outcomes.",
              },
              {
                title: "Core Values",
                text:
                  "Compassion • Integrity • Collaboration • Respect — the principles guiding every interaction and decision.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-md border border-[#7D5F42]/30 hover:shadow-[0_0_25px_#7D5F42]/40 transition-all duration-500"
              >
                <h3 className="text-2xl font-semibold text-[#004AAD] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* === WHY CHOOSE US === */}
        <section className="py-24 px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[#004AAD]"
            >
              Why Choose Beacon of Hope
            </motion.h2>
            <div className="mx-auto mt-3 w-24 h-[4px] bg-gradient-to-r from-[#7D5F42] to-[#d1b08a] rounded-full shadow-[0_0_10px_#7D5F42]/40"></div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center"
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                We combine medical expertise with genuine human understanding.
                Our integrated approach ensures that care is not just clinical —
                it’s deeply personal, addressing the mind, body, and spirit.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                With telepsychiatry access, in-person sessions, and a patient-first
                philosophy, Beacon of Hope stands as a trusted partner in your
                journey toward healing.
              </p>
            </div>

            {/* Keep original size on mobile */}
            <div className="relative w-full overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/about2.png"
                alt="Why choose us"
                width={1920}
                height={1080}
                className="w-full h-auto object-contain md:object-cover md:h-[400px]"
              />
            </div>
          </motion.div>
        </section>

        {/* === CTA === */}
        <section className="relative w-full py-24 flex items-center justify-center overflow-hidden bg-[#004AAD] text-white text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="px-6 md:px-12 max-w-3xl"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Begin Your Healing Journey?</h2>
            <p className="text-lg text-gray-100 mb-8">
              Take the next step with our compassionate experts. Your path to clarity and balance starts here.
            </p>
            <Link
              href="/book-consultation"
              className="bg-[#7D5F42] hover:bg-[#6a4f35] text-white font-semibold px-10 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-[1.05]"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}
