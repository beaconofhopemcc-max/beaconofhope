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

export default function BipolarDisorderPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-gray-800 overflow-hidden">
        
        {/* === STANDALONE HERO SECTION === */}
        <section className="relative w-full h-[75vh] md:h-[85vh] flex items-center overflow-hidden">
          <Image
            src="/bipolar.png"
            alt="Bipolar Disorder Support Hero"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Side-weighted gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-4xl">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-8xl font-extrabold text-white drop-shadow-2xl tracking-tight leading-tight"
            >
              Bipolar <br /> Support
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
              Stabilizing mood, restoring balance, and empowering individuals to live with clarity and confidence.
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
              <span style={{ color: ACCENT_COLOR }}>Bipolar Disorder</span>
            </h2>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed text-justify">
              Bipolar disorder involves shifts in mood, energy, and activity levels that can affect daily functioning. 
              It is not simply "moodiness"—it is a clinical condition involving cycles of mania and depression. 
              At Beacon of Hope Psychiatry, we treat bipolar disorder with precision, focusing on long-term stability and holistic wellbeing.
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
              src="/bipolar1.png"
              alt="Professional care for Bipolar Disorder"
              fill
              className="object-cover"
            />
          </motion.div>
        </section>

        {/* === SYMPTOMS GRID === */}
        <section className="bg-slate-50 py-24 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-[#004AAD]">Signs and Symptoms</h3>
              <p className="mt-4 text-gray-600">Managing the highs and lows begins with understanding the patterns.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Extreme mood swings",
                "Reduced need for sleep",
                "Racing thoughts",
                "Rapid or pressured speech",
                "Impulsive decision making",
                "Periods of fatigue or sadness",
                "Difficulty maintaining routines",
                "Heightened irritability",
                "Feelings of hopelessness",
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
              src="/approach-bipolar.png"
              alt="Our care strategy for mood stability"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="space-y-10">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-[#004AAD]">Our Approach</h3>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Our treatment focuses on achieving **mood stability**, improving insight, and strengthening daily functioning through combined modalities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Evaluation", desc: "In-depth assessment of mood patterns and cycles." },
                { title: "Stabilization", desc: "Expertly monitored medication management." },
                { title: "Therapy", desc: "CBT and counseling for emotional awareness." },
                { title: "Prevention", desc: "Strategies to recognize and manage early triggers." },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                  <h4 className="font-bold text-[#004AAD] text-xl mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === PATH TO STABILITY === */}
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#004AAD] text-white text-center">
          <h2 className="text-4xl font-bold mb-16">Reclaim Your Balance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <CalendarCheck size={40} />, title: "Initial Consult", desc: "A thorough review of your history and current needs." },
              { icon: <HeartHandshake size={40} />, title: "Personalized Care", desc: "A tailored balance of medication and support." },
              { icon: <Brain size={40} />, title: "Consistent Growth", desc: "Ongoing monitoring to ensure long-term wellness." },
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
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="relative z-10 px-6 max-w-4xl text-white">
            <h2 className="text-4xl md:text-7xl font-bold mb-8">Find Your Steady Path</h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 font-light max-w-2xl mx-auto">
              Bipolar disorder doesn’t define you. With the right care, you can find the stability needed to live a full and confident life.
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