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

export default function ContactPage() {
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
        {/*
          1. MODIFICATION: The 'pt-20' class was removed from the <main> element,
             which was causing extra space at the top of the hero section.
             The default 'mt-0' will be used, relying on the header for spacing.
        */}
        
        {/* === HERO SECTION === */}
        <section
          ref={heroRef}
          // 2. MODIFICATION: Reduced hero height on mobile (h-[80vh] -> h-[55vh])
          // to allow the full video and content to be seen more easily.
          className="relative w-full h-[55vh] md:h-[80vh] flex items-center justify-center overflow-hidden"
        >
          {videoVisible ? (
            <video
              src="/contact.mp4"
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
              Contact Beacon of Hope Psychiatry
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-white leading-relaxed drop-shadow-md"
            >
              Reach out today — we’re here to listen, support, and guide you every step of
              the way.
            </motion.p>
          </div>
        </section>

        {/* === IMAGE + FORM SECTION === */}
        <section className="relative py-20 px-6 md:px-12 lg:px-20 bg-[#f9fafb]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* === Image Side === */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              // 3. MODIFICATION: Changed object-cover to object-contain for the Image.
              // To remove extra top/bottom padding and show the full image,
              // we change the container height from fixed h-[60vh] to an aspect ratio.
              className="relative w-full aspect-[4/3] md:aspect-[3/4] rounded-3xl overflow-hidden shadow-lg"
            >
              <Image
                src="/contact1.png"
                alt="Contact Beacon of Hope Psychiatry"
                fill
                // object-contain ensures the entire image content is visible
                className="object-contain object-center"
                priority
              />
            </motion.div>

            {/* === Form Side === */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-[#7D5F42]/20"
            >
              <h3 className="text-2xl font-bold text-[#004AAD] mb-6 text-center md:text-left">
                Get in Touch
              </h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#004AAD] transition"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#004AAD] transition"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Message</label>
                  <textarea
                    rows="5"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#004AAD] transition"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#004AAD] hover:bg-[#003a8c] text-white font-semibold py-3 rounded-full transition-all duration-300 hover:scale-[1.03]"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
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
              Discover How We Can Support You
            </h2>
            <p className="text-base sm:text-lg text-gray-100 mb-8 leading-relaxed">
              Explore our range of compassionate mental health services — from psychiatric
              evaluation to therapy and medical cannabis care.
            </p>
            <a
              href="/services"
              className="bg-[#7D5F42] hover:bg-[#6a4f35] text-white font-semibold px-8 sm:px-10 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-[1.05]"
            >
              View Our Services
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}