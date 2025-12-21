"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "../Header";
import Footer from "../Footer";
import { CalendarCheck, HeartHandshake, Brain } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ACCENT_COLOR = "#B98C5B";

export default function TeamPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-gray-800 overflow-hidden">
        
        {/* === HERO SECTION === */}
        <section className="relative w-full min-h-[70vh] flex items-center pt-24 pb-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Text */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="z-10 order-2 lg:order-1">
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#004AAD] leading-tight">
                Meet Our <span style={{ color: ACCENT_COLOR }}>Compassionate</span> Team
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Guided by expertise and integrity, we provide a safe, supportive atmosphere for your growth and healing.
              </p>
              <div className="mt-10">
                <Link 
                  href="/book-consultation"
                  className="inline-block text-white font-bold px-10 py-4 rounded-full shadow-xl transition-all hover:scale-105"
                  style={{ backgroundColor: ACCENT_COLOR }}
                >
                  Book a Consultation
                </Link>
              </div>
            </motion.div>

            {/* Right Side: Image (team.png) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full h-[400px] md:h-[500px] order-1 lg:order-2"
            >
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/team.png"
                  alt="Beacon of Hope Clinical Team"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* === DR. SAMUEL BIO SECTION (Using EXACT Content) === */}
        <section className="max-w-7xl mx-auto py-24 px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Side (profiles.png) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 lg:sticky lg:top-24"
          >
            <Image
              src="/profiles.png"
              alt="Dr. Samuel Okechukwu Nwanekpe"
              fill
              className="object-cover object-top"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#004AAD]">Dr. Samuel Okechukwu Nwanekpe</h2>
              <p className="text-xl font-semibold mt-2" style={{ color: ACCENT_COLOR }}>
                Psychiatric & Mental Health Nurse Practitioner (PMHNP-BC)
              </p>
              <div className="w-28 h-1.5 mt-4 rounded-full" style={{ backgroundColor: ACCENT_COLOR }}></div>
            </div>
            
            {/* The verbatim content starts here */}
            <div className="text-lg text-gray-700 space-y-6 leading-relaxed">
              <p>
                Navigating life’s challenges, guided by <strong>Beacon of Hope Psychiatry and Medical Cannabis LLC</strong>. 
                Dr. Nwanekpe is a dedicated and compassionate provider who offers client-centered care and recognizes the connection between body, soul, and mind.
              </p>

              <p>
                With over <strong>20 years of nursing experience</strong>, he has developed strong clinical skills and a heart for supporting patients across the lifespan.
              </p>

              <p>
                He holds a <strong>Bachelor’s Degree in Nursing Science</strong> and earned his <strong>Master’s Degree</strong> from <strong>Walden University, Minneapolis (MN)</strong>. 
                He completed his <strong>Doctor of Nursing Practice (DNP)</strong> at <strong>Rush University, Chicago</strong>, and is a <strong>board-certified Psychiatric and Mental Health Nurse Practitioner (PMHNP-BC)</strong>.
              </p>

              <p>
                Dr. Nwanekpe provides exceptional, personalized support suited to each client’s unique needs — ensuring a safe and supportive therapeutic atmosphere for growth and healing.
              </p>

              <div className="pt-6">
                <p className="text-2xl font-bold italic" style={{ color: ACCENT_COLOR }}>
                  “A Guide Through Life’s Complexities.”
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* === HOW IT WORKS SECTION === */}
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#004AAD] text-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">How It Works</h2>
            <div className="mt-4 w-24 h-1 mx-auto rounded-full bg-white/30"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                icon: <CalendarCheck size={40} />, 
                title: "Book a Consultation", 
                desc: "Schedule your first appointment easily online or by phone. Choose a time that fits your schedule." 
              },
              { 
                icon: <HeartHandshake size={40} />, 
                title: "Meet Your Clinician", 
                desc: "Connect with our compassionate, licensed professionals who listen, assess, and guide your care journey." 
              },
              { 
                icon: <Brain size={40} />, 
                title: "Begin Your Care Plan", 
                desc: "Receive a personalized treatment plan designed to bring clarity, balance, and long-term wellness." 
              },
            ].map((step, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] text-[#004AAD] shadow-xl border-b-8 transition-transform hover:scale-[1.02]" style={{ borderBottomColor: ACCENT_COLOR }}>
                <div className="mb-6 p-4 inline-block rounded-2xl bg-slate-50" style={{ color: ACCENT_COLOR }}>{step.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* === FINAL CTA SECTION === */}
        <section className="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden">
          <Image
            src="/home6.png"
            alt="Healing Journey Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="relative z-10 px-6 max-w-3xl text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Your Healing Journey Begins Here</h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
              Take the first step toward peace of mind and emotional balance with Beacon of Hope Psychiatry.
            </p>
            <Link href="/book-consultation"
              className="inline-block text-white font-bold px-12 py-5 rounded-full text-lg shadow-2xl transition-all hover:scale-105"
              style={{ backgroundColor: ACCENT_COLOR }}
            >
              Book Your Appointment
            </Link>
          </div>
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
        </section>
      </main>

      <Footer />
    </>
  );
}