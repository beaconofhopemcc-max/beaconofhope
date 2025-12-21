"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "../Header";
import Footer from "../Footer";
import { CalendarCheck, HeartHandshake, Brain, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ACCENT_COLOR = "#B98C5B";

export default function AnxietyPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-gray-800 overflow-hidden">
        
        {/* === STANDALONE HERO SECTION === */}
        <section className="relative w-full h-[75vh] md:h-[85vh] flex items-center overflow-hidden">
          <Image
            src="/anxiety.png"
            alt="Anxiety Support Hero"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Side-weighted gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-4xl">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-8xl font-extrabold text-white drop-shadow-2xl tracking-tight leading-tight"
            >
              Anxiety <br /> Care
            </motion.h1>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="mt-6"
            >
              <div className="h-2 w-24 rounded-full" style={{ backgroundColor: ACCENT_COLOR }}></div>
            </motion.div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="mt-8 text-lg md:text-2xl text-white leading-relaxed drop-shadow-lg font-light max-w-2xl"
            >
              Compassionate care that helps calm your mind, restore confidence, and bring peace to everyday life.
            </motion.p>
            <motion.div 
               variants={fadeUp}
               initial="hidden"
               animate="visible"
               transition={{ delay: 0.6 }}
               className="mt-10"
            >
                <Link 
                  href="/book-consultation"
                  className="inline-block text-white font-bold px-10 py-4 rounded-full shadow-xl transition-all hover:scale-105"
                  style={{ backgroundColor: ACCENT_COLOR }}
                >
                  Book a Consultation
                </Link>
            </motion.div>
          </div>
        </section>

        {/* === INTRODUCTION SECTION === */}
        <section className="max-w-7xl mx-auto py-24 px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#004AAD] leading-tight">
              Understanding <br />
              <span style={{ color: ACCENT_COLOR }}>Anxiety</span>
            </h2>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed text-justify">
              Anxiety isn’t just worry — it is a deep state of alertness that can make you feel
              tense, restless, or unable to relax. It often appears when your body and mind
              feel unsafe, even in calm environments. At Beacon of Hope Psychiatry, we help
              you retrain your mind and body to feel secure again.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative w-full aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 order-1 lg:order-2"
          >
            <Image
              src="/anxiety1.png"
              alt="Anxiety treatment support"
              fill
              className="object-cover"
            />
          </motion.div>
        </section>

        {/* === SYMPTOMS GRID === */}
        <section className="bg-slate-50 py-24 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-[#004AAD]">Common Symptoms</h3>
              <p className="mt-4 text-gray-600">Recognizing these signs is the first step toward finding your calm.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Racing thoughts or constant worry",
                "Restlessness or feeling on edge",
                "Tightness in the chest",
                "Difficulty concentrating",
                "Trouble sleeping",
                "Irritability or agitation",
                "Fatigue or muscle tension",
                "Avoidance of social situations",
                "Panic attacks or sudden fear",
              ].map((symptom, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 p-5 bg-white rounded-2xl shadow-sm border-b-4 transition-transform hover:-translate-y-1"
                  style={{ borderBottomColor: ACCENT_COLOR }}
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: ACCENT_COLOR }} />
                  <span className="font-medium text-gray-700">{symptom}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === APPROACH SECTION === */}
        <section className="max-w-7xl mx-auto py-24 px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl hidden lg:block"
          >
            <Image
              src="/approach.png"
              alt="Our approach to anxiety treatment"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="space-y-10">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-[#004AAD]">Our Care Strategy</h3>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                We combine therapeutic support and medical expertise to restore emotional balance, helping you rewire anxious thought patterns.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Assessment", desc: "Detailed exploration of lifestyle and emotional factors." },
                { title: "Medication", desc: "Thoughtful management to ease overwhelming symptoms." },
                { title: "Guidance", desc: "Mindfulness and CBT to rewire your thought patterns." },
                { title: "Stability", desc: "Tools to strengthen your nervous system long-term." },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                  <h4 className="font-bold text-[#004AAD] text-xl mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === PATH TO RECOVERY (HOW IT WORKS) === */}
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#004AAD] text-white text-center">
          <h2 className="text-4xl font-bold mb-16">Your Path to Calm</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <CalendarCheck size={40} />, title: "Book Consultation", desc: "Easy online scheduling to start your journey." },
              { icon: <HeartHandshake size={40} />, title: "Personal Connect", desc: "Meet with an expert who listens to your story." },
              { icon: <Brain size={40} />, title: "Evidence-Based Care", desc: "A custom plan to reclaim your peace of mind." },
            ].map((step, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] text-[#004AAD] shadow-xl flex flex-col items-center">
                <div className="mb-6 p-4 rounded-2xl bg-slate-50" style={{ color: ACCENT_COLOR }}>{step.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* === FINAL CTA === */}
        <section className="relative w-full h-[70vh] flex items-center justify-center text-center overflow-hidden">
          <Image
            src="/home6.png"
            alt="Healing Journey Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          
          <div className="relative z-10 px-6 max-w-4xl text-white">
            <h2 className="text-4xl md:text-7xl font-bold mb-8">Find Your Peace Again</h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 font-light max-w-2xl mx-auto">
              Anxiety doesn’t define you. Let our compassionate experts guide you back to a life of confidence and calm.
            </p>
            <Link href="/book-consultation"
              className="inline-block text-white font-bold px-16 py-5 rounded-full text-xl shadow-2xl transition-all hover:scale-105 active:scale-95"
              style={{ backgroundColor: ACCENT_COLOR }}
            >
              Start Your Journey
            </Link>
          </div>
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
        </section>
      </main>

      <Footer />
    </>
  );
}