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

      <main className="bg-white text-gray-800 overflow-hidden">
        {/* === HERO SECTION === */}
        <section
          ref={heroRef}
          // MODIFIED: Adopted new Hero styles for mobile vertical padding and content alignment
          className="relative w-full py-16 md:h-[80vh] flex items-start md:items-center justify-center overflow-hidden"
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

          {/* MODIFIED: Added pt-8 for top padding on mobile */}
          <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl pt-8">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              // MODIFIED: Reduced mobile text size from text-4xl to text-3xl
              className="text-3xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight"
            >
              Substance Use
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

        {/* === INTRODUCTION & IMAGE (NEW TWO-COLUMN LAYOUT) === */}
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
                Understanding Substance Use Disorders
              </motion.h2>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                Substance use disorder is a complex condition that affects the brain,
                emotions, and behavior. It’s not a moral failure — it’s a medical and
                psychological condition that deserves compassionate, comprehensive care.
                At Beacon of Hope Psychiatry, we focus on healing the person, not just
                treating the addiction.
              </p>
            </div>

            {/* IMAGE COLUMN (Right on Desktop, Bottom on Mobile) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              // MODIFIED: Changed aspect ratio to better suit a content section image
              className="relative w-full aspect-[16/10] overflow-hidden rounded-xl shadow-xl md:order-2 order-1" 
            >
              <Image
                src="/substance1.png" // Keep your substance image source
                alt="Substance abuse recovery at Beacon of Hope Psychiatry"
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

        {/* === OUR APPROACH (NEW TWO-COLUMN LAYOUT) === */}
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
                Our Approach to Addiction Recovery
              </motion.h3>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed text-center md:text-left">
                We combine psychiatry, therapy, and holistic recovery support to address both
                the mental and physical aspects of substance use. Each treatment plan is
                personalized — focused on helping you rediscover stability and self-trust.
              </p>

              {/* === Connector Line (Adjusted for 2-column layout) === */}
              <div className="hidden lg:block absolute left-[30%] transform translate-x-1/2 top-[60%] w-[30%] h-[4px] rounded-full bg-gradient-to-r from-[#004AAD] via-[#7D5F42] to-[#004AAD] opacity-40"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16 relative z-10">
                {[
                  {
                    title: "Comprehensive Assessment",
                    desc: "We identify biological, psychological, and social factors influencing substance use, guiding precise diagnosis and treatment.",
                  },
                  {
                    title: "Targeted Medication Support", // Adjusted title to match the tone of the Anxiety page's list
                    desc: "Safe and effective medications may be used to reduce cravings and withdrawal symptoms, supporting long-term recovery.",
                  },
                  {
                    title: "Therapeutic Guidance",
                    desc: "Through therapy, mindfulness, and relapse prevention, we help rebuild self-trust, confidence, and connection.",
                  },
                  // Adding a 4th point to maintain visual balance in the 2x2 grid on desktop, similar to a typical landing page
                  {
                    title: "Dual Diagnosis Care",
                    desc: "Addressing co-occurring mental health issues (like anxiety or depression) alongside substance use for holistic healing.",
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
                // Assuming you have a separate image for the substance abuse approach
                src="/approach-substance.png" 
                alt="Our comprehensive approach to addiction recovery"
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
            Our recovery philosophy combines science, compassion, and accountability. We
            walk beside you — empowering healing, restoring purpose, and helping you
            rebuild a future free from addiction.
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