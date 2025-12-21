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

export default function SubstanceUsePage() {
  return (
    <>
      <Header />

      <main className="bg-white text-gray-800 overflow-hidden">
        
        {/* === STANDALONE HERO SECTION === */}
        <section className="relative w-full h-[75vh] md:h-[85vh] flex items-center overflow-hidden">
          <Image
            src="/substance.png"
            alt="Substance Use Support Hero"
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
              Substance <br /> Use Care
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
              Evidence-based treatment that helps you reclaim control, restore balance, and rebuild your life with dignity.
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
                  Start Your Recovery
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
              A Medical Approach <br />
              <span style={{ color: ACCENT_COLOR }}>to Recovery</span>
            </h2>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed text-justify">
              Substance use disorder is a complex condition that affects the brain,
              emotions, and behavior. It’s not a moral failure — it’s a medical 
              condition that deserves compassionate, comprehensive care.
              At Beacon of Hope Psychiatry, we focus on healing the person, not just
              treating the symptoms.
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
              src="/substance1.png"
              alt="Recovery Support"
              fill
              className="object-cover"
            />
          </motion.div>
        </section>

        {/* === SIGNS & SYMPTOMS GRID === */}
        <section className="bg-slate-50 py-24 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-[#004AAD]">Common Signs</h3>
              <p className="mt-4 text-gray-600">Recognizing these signs is the first step toward reclaiming your future.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Increased tolerance",
                "Withdrawal symptoms",
                "Loss of interest in hobbies",
                "Neglecting responsibilities",
                "Secretive behavior or denial",
                "Using to cope with stress",
                "Physical health decline",
                "Failed attempts to quit",
                "Changes in social circles",
              ].map((sign, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 p-5 bg-white rounded-2xl shadow-sm border-b-4 transition-transform hover:-translate-y-1"
                  style={{ borderBottomColor: ACCENT_COLOR }}
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: ACCENT_COLOR }} />
                  <span className="font-medium text-gray-700">{sign}</span>
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
              src="/approach-substance.png"
              alt="Treatment Approach for Substance Use"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="space-y-10">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold text-[#004AAD]">Our Care Model</h3>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                We combine psychiatry, therapy, and holistic recovery support to address both the mental and physical aspects of substance use.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Assessment", desc: "Detailed biological and social evaluation." },
                { title: "Medication", desc: "FDA-approved options to manage cravings." },
                { title: "Dual Diagnosis", desc: "Treating underlying anxiety or depression." },
                { title: "Rebuilding", desc: "Tools for long-term accountability and joy." },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                  <h4 className="font-bold text-[#004AAD] text-xl mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === HOW IT WORKS (RECOVERY PATH) === */}
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-[#004AAD] text-white text-center">
          <h2 className="text-4xl font-bold mb-16">Your Path to Freedom</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <CalendarCheck size={40} />, title: "Confidential Call", desc: "Reach out to start your private assessment." },
              { icon: <HeartHandshake size={40} />, title: "Clinical Support", desc: "Safe, medical management of your recovery." },
              { icon: <Brain size={40} />, title: "Sustainable Life", desc: "Ongoing tools to prevent relapse and thrive." },
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
            alt="Recovery Journey Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="relative z-10 px-6 max-w-4xl text-white">
            <h2 className="text-4xl md:text-7xl font-bold mb-8">Recovery Is Possible</h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 font-light max-w-2xl mx-auto">
              Every new day is another chance to choose healing. Let us walk beside you on the journey to freedom and self-trust.
            </p>
            <Link href="/book-consultation"
              className="inline-block text-white font-bold px-16 py-5 rounded-full text-xl shadow-2xl transition-all hover:scale-105 active:scale-95"
              style={{ backgroundColor: ACCENT_COLOR }}
            >
              Start Your New Chapter
            </Link>
          </div>
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
        </section>
      </main>

      <Footer />
    </>
  );
}