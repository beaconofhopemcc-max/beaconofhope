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

export default function TeamPage() {
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
          className="relative w-full py-24 md:h-[80vh] flex items-center justify-center overflow-hidden"
        >
          {videoVisible ? (
            <video
              src="/team.mp4"
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
              Our Team
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-white leading-relaxed drop-shadow-md"
            >
              Guided by expertise, compassion, and integrity.
            </motion.p>
          </div>
        </section>

        {/* === DR. SAMUEL SECTION === */}
        <section className="max-w-7xl mx-auto py-20 px-6 sm:px-8 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          {/* IMAGE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 aspect-[4/5] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl mx-auto lg:mx-0"
          >
            <Image
              src="/profile.png"
              alt="Dr. Samuel Okechukwu Nwanekpe"
              width={1000}
              height={1250}
              className="object-cover object-top w-full h-full"
              priority
            />
          </motion.div>

          {/* BIO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#004AAD]">
              Dr. Samuel Okechukwu Nwanekpe
            </h2>
            <p className="mt-2 text-[#7D5F42] font-medium text-lg">
              Psychiatric & Mental Health Nurse Practitioner (PMHNP-BC)
            </p>
            <div className="mx-auto lg:mx-0 mt-3 w-24 h-[4px] bg-gradient-to-r from-[#7D5F42] to-[#d1b08a] rounded-full shadow-[0_0_10px_#7D5F42]/40"></div>

            <div className="mt-8 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                Navigating life’s challenges, guided by{" "}
                <strong>Beacon of Hope Psychiatry and Medical Cannabis LLC.</strong>{" "}
                Dr. Nwanekpe is a dedicated and compassionate provider who offers
                client-centered care and recognizes the connection between body,
                soul, and mind.
              </p>

              <p>
                With over <strong>20 years of nursing experience</strong>, he has
                developed strong clinical skills and a heart for supporting patients
                across the lifespan.
              </p>

              <p>
                He holds a <strong>Bachelor’s Degree in Nursing Science</strong> and
                earned his <strong>Master’s Degree</strong> from{" "}
                <strong>Walden University, Minneapolis (MN)</strong>. He completed his{" "}
                <strong>Doctor of Nursing Practice (DNP)</strong> at{" "}
                <strong>Rush University, Chicago</strong>, and is a{" "}
                <strong>
                  board-certified Psychiatric and Mental Health Nurse Practitioner
                  (PMHNP-BC)
                </strong>
                .
              </p>

              <p>
                Dr. Nwanekpe provides exceptional, personalized support suited to each
                client’s unique needs — ensuring a safe and supportive therapeutic
                atmosphere for growth and healing.
              </p>
            </div>

            <div className="mt-10">
              <p className="text-2xl font-semibold text-[#7D5F42] italic">
                “A Guide Through Life’s Complexities.”
              </p>
            </div>
          </motion.div>
        </section>

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
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-base sm:text-lg text-gray-100 mb-8 leading-relaxed">
              Schedule a consultation with Dr. Nwanekpe and take the next step toward
              clarity and emotional balance.
            </p>
            <a
              href="/book-consultation"
              className="bg-[#7D5F42] hover:bg-[#6a4f35] text-white font-semibold px-8 sm:px-10 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-[1.05]"
            >
              Book a Consultations
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}
