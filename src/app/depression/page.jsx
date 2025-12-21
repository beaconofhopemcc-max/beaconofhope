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

export default function DepressionPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-gray-800 overflow-hidden">
        
        {/* === STANDALONE HERO SECTION === */}
        <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
          <Image
            src="/depression.png"
            alt="Depression Support"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Subtle gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

          <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-8xl font-extrabold text-white drop-shadow-2xl tracking-tight"
            >
              Depression Care
            </motion.h1>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="mt-6 flex justify-center"
            >
              <div className="h-1.5 w-24 rounded-full" style={{ backgroundColor: ACCENT_COLOR }}></div>
            </motion.div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="mt-8 text-lg md:text-2xl text-white leading-relaxed drop-shadow-lg font-light max-w-3xl mx-auto"
            >
              Compassionate treatment designed to restore peace, energy, and joy to your daily life.
            </motion.p>
          </div>
        </section>

        {/* === INTRODUCTION SECTION === */}
        <section className="max-w-7xl mx-auto py-24 px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#004AAD] leading-tight">
              Understanding <br />
              <span style={{ color: ACCENT_COLOR }}>Depression</span>
            </h2>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed text-justify">
              Depression is more than sadness — it’s a persistent feeling of emptiness or
              disconnection that can affect your thoughts, sleep, focus, and energy.
              At Beacon of Hope Psychiatry, we view depression not as a weakness,
              but as a condition that deserves evidence-based, compassionate care.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative w-full aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50"
          >
            <Image
              src="/approach.png"
              alt="Our approach to depression"
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
              <p className="mt-4 text-gray-600">Recognizing these signs is the first step toward reclaiming your well-being.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Persistent sadness or emptiness",
                "Loss of interest in activities",
                "Fatigue or lack of motivation",
                "Sleep disturbances",
                "Difficulty concentrating",
                "Changes in appetite",
                "Feelings of worthlessness",
                "Social withdrawal",
                "Physical aches without cause",
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

        {/* === CARE MODEL SECTION === */}
        <section className="max-w-7xl mx-auto py-24 px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl hidden lg:block"
          >
            <Image
              src="/approach-detail.png"
              alt="Treatment Approach Detail"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="space-y-10">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-[#004AAD]">Our Care Model</h3>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Our care blends advanced medical treatment with holistic emotional support, customized to your unique story and lifestyle goals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Evaluation", desc: "Detailed biological and emotional assessment." },
                { title: "Medication", desc: "Safe management to restore chemical balance." },
                { title: "Therapy", desc: "Counseling to strengthen mental resilience." },
                { title: "Mind-Body", desc: "Lifestyle and nutrition for total wellness." },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                  <h4 className="font-bold text-[#004AAD] text-xl mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === HOW IT WORKS === */}
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#004AAD] text-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Your Path to Recovery</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <CalendarCheck size={40} />, title: "Book Consultation", desc: "Schedule your first appointment easily online." },
              { icon: <HeartHandshake size={40} />, title: "Personal Assessment", desc: "Connect with our experts to discuss your journey." },
              { icon: <Brain size={40} />, title: "Personalized Care", desc: "Begin your custom path to mental stability." },
            ].map((step, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] text-[#004AAD] shadow-xl text-center flex flex-col items-center">
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
            alt="Healing Journey"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          
          <div className="relative z-10 px-6 max-w-4xl text-white">
            <h2 className="text-4xl md:text-7xl font-bold mb-8">You Are Not Alone</h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 font-light">Let’s work together to bring peace, purpose, and stability back to your life.</p>
            <Link href="/book-consultation"
              className="inline-block text-white font-bold px-16 py-5 rounded-full text-lg shadow-2xl transition-all hover:scale-105"
              style={{ backgroundColor: ACCENT_COLOR }}
            >
              Start Your Healing Journey
            </Link>
          </div>
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
        </section>
      </main>

      <Footer />
    </>
  );
}