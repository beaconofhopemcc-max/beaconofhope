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

export default function ServicesPage() {
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

  const services = [
    {
      title: "Comprehensive Psychiatric Evaluation",
      desc: "Thorough assessments that uncover root causes of mental and emotional challenges, forming the foundation for personalized treatment plans.",
      image: "/services1.png",
    },
    {
      title: "Medication Management",
      desc: "Careful, evidence-based medication oversight to achieve balance, safety, and symptom relief for every individual.",
      image: "/services2.png",
    },
    {
      title: "Therapy and Counseling",
      desc: "Individualized therapy sessions focused on emotional healing, stress management, and personal growth.",
      image: "/services3.png",
    },
    {
      title: "Mental Health & Behavioral Assessment",
      desc: "In-depth evaluations that analyze thinking patterns, mood, and behavior to provide clear diagnostic insight.",
      image: "/services4.png",
    },
    {
      title: "Telepsychiatry and Virtual Care",
      desc: "Secure, confidential video consultations that bring expert care to your home — anywhere, anytime.",
      image: "/services5.png",
    },
    {
      title: "Holistic and Wellness Coaching",
      desc: "A balanced approach that integrates lifestyle changes, mindfulness, and personalized wellness routines to support recovery.",
      image: "/services6.png",
    },
    {
      title: "Medical Cannabis Center",
      desc: "Specialized evaluation and prescription of medical cannabis as part of an integrative plan for chronic pain, anxiety, and PTSD relief.",
      image: "/services7.png",
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-white text-gray-800 overflow-hidden">
        {/* === HERO SECTION === */}
        <section
          ref={heroRef}
          className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden" 
          /* Set height to 60vh on mobile and removed top padding from main */
        >
          {videoVisible ? (
            <video
              src="/services.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover"
            ></video>
          ) : (
            <div className="absolute inset-0 bg-[#004AAD]/10" />
          )}

          <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight"
            >
              Our Services
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-white leading-relaxed drop-shadow-md"
            >
              Evidence-based, compassionate, and holistic psychiatric care tailored to
              your unique journey.
            </motion.p>
          </div>
        </section>

        {/* === INTRODUCTION === */}
        <section className="max-w-5xl mx-auto py-20 px-6 md:px-12 lg:px-20 text-center md:text-left md:pb-10"> {/* REDUCED BOTTOM PADDING ON DESKTOP */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#004AAD]"
          >
            Comprehensive Mental Health Services
          </motion.h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            At Beacon of Hope Psychiatry, every service we offer is guided by compassion,
            precision, and the belief that healing requires both science and humanity.
            Whether in-person or online, we provide support designed to bring balance,
            confidence, and calm back into your life.
          </p>
        </section>

        {/* === SERVICES GRID === */}
        <section className="relative max-w-6xl mx-auto py-20 px-6 md:px-12 lg:px-20 md:pt-10"> {/* REDUCED TOP PADDING ON DESKTOP */}
          {/* === Connector Line (desktop) === */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-[52%] w-[80%] h-[4px] rounded-full bg-gradient-to-r from-[#004AAD] via-[#7D5F42] to-[#004AAD] opacity-40 animate-pulse"></div>

          {/* === Connector Line (mobile vertical) === */}
          <div className="md:hidden absolute left-[49%] transform -translate-x-1/2 top-[5%] h-[90%] w-[3px] rounded-full bg-gradient-to-b from-[#004AAD] via-[#7D5F42] to-[#004AAD] opacity-40 animate-pulse"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-[#7D5F42]/20 transition-all duration-500 group"
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                <div className="p-8 text-center">
                  <h4 className="text-xl font-bold text-[#004AAD] mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to Begin Your Journey to Wellness?
            </h2>
            <p className="text-base sm:text-lg text-gray-100 mb-8 leading-relaxed">
              Book an appointment today and experience compassionate care that meets you
              where you are — mind, body, and spirit.
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