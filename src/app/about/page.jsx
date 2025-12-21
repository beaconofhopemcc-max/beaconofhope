'use client';
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  Target, 
  Star, 
  ShieldCheck, 
  Users, 
  Zap, 
  CalendarCheck, 
  HeartHandshake, 
  Brain 
} from "lucide-react";
import Header from "../Header";
import Footer from "../Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ACCENT_COLOR = "#B98C5B";

export default function AboutPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  return (
    <>
      <Header />

      <main ref={ref} className="bg-white text-gray-800 overflow-hidden relative">
        <motion.div
          className="fixed top-0 left-0 h-[4px] bg-gradient-to-r from-[#7D5F42] to-[#d1b08a] z-50 shadow-[0_0_10px_#7D5F42]/40 origin-left"
          style={{ scaleX: scrollYProgress }}
        />

        {/* === HERO SECTION === */}
        <section className="relative w-full min-h-[70vh] flex items-center pt-20 md:pt-0">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="z-10 order-2 md:order-1">
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#004AAD] leading-tight">
                About <span style={{ color: ACCENT_COLOR }}>Beacon of Hope</span> Psychiatry
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
                Dedicated to restoring emotional balance through compassionate, evidence-based psychiatric care.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full h-[350px] md:h-[450px] order-1 md:order-2"
            >
              <Image
                src="/about.png"
                alt="Beacon of Hope Hero"
                fill
                priority
                className="object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* === 1. MISSION / VISION / VALUES === */}
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-50/50">
          <div className="text-center mb-16">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-[#004AAD]">
              Our Mission, Vision & Values
            </motion.h2>
            <div className="mx-auto mt-3 w-24 h-[4px] rounded-full" style={{ backgroundColor: ACCENT_COLOR }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Mission", icon: <Target className="mb-4" style={{ color: ACCENT_COLOR }} />, text: "To deliver accessible, compassionate, and clinically sound psychiatric care that restores peace and purpose." },
              { title: "Vision", icon: <Star className="mb-4" style={{ color: ACCENT_COLOR }} />, text: "To redefine mental-health excellence by combining empathy, innovation, and measurable healing outcomes." },
              { title: "Core Values", icon: <Heart className="mb-4" style={{ color: ACCENT_COLOR }} />, text: "Compassion • Integrity • Collaboration • Respect — the principles guiding every interaction." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                {item.icon}
                <h3 className="text-2xl font-semibold text-[#004AAD] mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* === 2. HOW IT WORKS === */}
        <section className="relative w-full py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-[#004AAD] text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#004AAD] via-[#004AAD] to-[#001f5f]/80 opacity-95 -z-10"></div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">How It Works</h2>
            <div 
              className="mt-4 w-28 h-[5px] mx-auto rounded-full shadow-lg" 
              style={{ background: `linear-gradient(to right, ${ACCENT_COLOR}, #d1b08a)` }}
            ></div>
            <p className="mt-6 text-xl max-w-3xl mx-auto text-gray-100 leading-relaxed">
              Getting started with Beacon of Hope Psychiatry is simple, supportive, and secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              { icon: <CalendarCheck className="w-10 h-10" style={{ color: ACCENT_COLOR }} />, title: "Book a Consultation", desc: "Schedule your first appointment easily online or by phone." },
              { icon: <HeartHandshake className="w-10 h-10" style={{ color: ACCENT_COLOR }} />, title: "Meet Your Clinician", desc: "Connect with our compassionate, licensed professionals who listen." },
              { icon: <Brain className="w-10 h-10" style={{ color: ACCENT_COLOR }} />, title: "Begin Your Care Plan", desc: "Receive a personalized treatment plan designed for long-term wellness." },
            ].map((step, index) => (
              <div key={index} className="relative bg-white text-[#004AAD] rounded-3xl p-8 shadow-xl border-b-4" style={{ borderBottomColor: ACCENT_COLOR }}>
                <div className="absolute -top-4 -right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white text-xl font-bold border-2" style={{ color: ACCENT_COLOR, borderColor: ACCENT_COLOR }}>{index + 1}</div>
                <div className="mb-6"><div className="p-3 inline-block rounded-full bg-[#004AAD]/10">{step.icon}</div></div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-700 leading-normal">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/book-consultation" className="inline-block text-white font-semibold px-12 py-4 rounded-full text-lg shadow-xl hover:scale-[1.05] transition-all" style={{ backgroundColor: ACCENT_COLOR }}>
              Start Your Journey Today
            </Link>
          </div>
        </section>

        {/* === 3. WHO WE ARE & WHY CHOOSE US (Shared Section) === */}
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content Side */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-12">
              {/* Who We Are Segment */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#004AAD]">Who We Are</h2>
                <div className="mt-3 w-24 h-[4px] rounded-full mb-6" style={{ backgroundColor: ACCENT_COLOR }}></div>
                <p className="text-lg leading-relaxed text-gray-700 text-justify">
                  Beacon of Hope Psychiatry is a center built on trust, innovation, and empathy. Our clinicians create a space where each story is valued, each symptom understood, and every recovery celebrated.
                </p>
              </div>

              {/* Why Choose Us Segment - Horizontal Cards */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#004AAD]">Why Choose Us</h3>
                <div className="flex flex-col gap-4">
                  {[
                    { icon: <ShieldCheck className="w-8 h-8" style={{ color: ACCENT_COLOR }} />, title: "Medical Expertise", text: "Combining evidence-based science with deep clinical experience." },
                    { icon: <Users className="w-8 h-8" style={{ color: ACCENT_COLOR }} />, title: "Patient-First Care", text: "Integrated approach addressing mind, body, and spirit." },
                    { icon: <Zap className="w-8 h-8" style={{ color: ACCENT_COLOR }} />, title: "Modern Access", text: "Telepsychiatry and in-person sessions for your convenience." }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-all"
                    >
                      <div className="flex-shrink-0 p-3 rounded-xl bg-white shadow-sm border border-slate-50">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#004AAD] text-lg">{item.title}</h4>
                        <p className="text-gray-600 leading-tight">{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Full Frame Image (No Cropping) */}
            <motion.div 
              variants={fadeUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              className="relative w-full h-[500px] lg:h-[700px] bg-slate-50 rounded-[3rem] overflow-hidden flex items-center justify-center p-8 lg:p-12 border border-slate-100 shadow-inner"
            >
              {/* Background Accent */}
              <div className="absolute top-10 right-10 w-32 h-32 rounded-full blur-3xl opacity-20" style={{ backgroundColor: ACCENT_COLOR }}></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full blur-3xl opacity-10 bg-[#004AAD]"></div>
              
              <div className="relative w-full h-full">
                <Image
                  src="/about1.png" 
                  alt="Our Team and Services"
                  fill
                  className="object-contain" // Ensures the full image is visible
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* === 4. FINAL CTA SECTION === */}
        <section className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-center text-center overflow-hidden">
          <Image
            src="/home6.png"
            alt="Beacon of Hope Psychiatry Final Section"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div> 
          
          <div className="relative z-20 px-6 md:px-12 max-w-3xl text-white">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 drop-shadow-lg">
              Your Healing Journey Begins Here
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-100 mb-10 drop-shadow-md">
              Take the first step toward peace of mind and emotional balance.  
              Beacon of Hope Psychiatry is here to guide you — with compassion, clarity, and care.
            </p>

            <Link href="/book-consultation"
               className="inline-block bg-[#7D5F42] hover:bg-[#6a4f35] text-white font-semibold px-10 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-[1.05]">
              Book Your Appointment
            </Link>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>
        </section>
      </main>

      <Footer />
    </>
  );
}