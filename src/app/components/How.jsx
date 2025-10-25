"use client";
import { CalendarCheck, HeartHandshake, Brain } from "lucide-react";

export default function How() {
  // Color Palette adjustment:
  // Primary Blue: #004AAD (unchanged)
  // Accent/Secondary: #B98C5B (A rich gold/brown that provides better contrast than the original #7D5F42 against white and blue)

  const ACCENT_COLOR = "#B98C5B";

  const steps = [
    {
      icon: <CalendarCheck className={`w-10 h-10 text-[${ACCENT_COLOR}]`} />,
      title: "Book a Consultation",
      desc: "Schedule your first appointment easily online or by phone. Choose a time that fits your schedule.",
    },
    {
      // FIX: Changed UserHeart to HeartHandshake (the correct component name)
      icon: <HeartHandshake className={`w-10 h-10 text-[${ACCENT_COLOR}]`} />,
      title: "Meet Your Clinician",
      desc: "Connect with our compassionate, licensed professionals who listen, assess, and guide your care journey.",
    },
    {
      icon: <Brain className={`w-10 h-10 text-[${ACCENT_COLOR}]`} />,
      title: "Begin Your Care Plan",
      desc: "Receive a personalized treatment plan designed to bring clarity, balance, and long-term wellness.",
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-[#004AAD] bg-opacity-95 text-white overflow-hidden">
      {/* === Decorative Gradient Glow (Slightly enhanced blue/gold tone) === */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#004AAD] via-[#004AAD] to-[#001f5f]/80 opacity-95 -z-10"></div>

      {/* === Section Header === */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">How It Works</h2>
        {/* Updated accent color and shadow */}
        <div className={`mt-4 w-28 h-[5px] mx-auto bg-gradient-to-r from-[${ACCENT_COLOR}] to-[#d1b08a] rounded-full shadow-[0_0_15px_${ACCENT_COLOR}]/60`}></div>
        <p className="mt-6 text-xl max-w-3xl mx-auto text-gray-100 leading-relaxed">
          Getting started with Beacon of Hope Psychiatry is simple, supportive, and secure.
        </p>
      </div>

      {/* === Steps Grid === */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative bg-white text-[#004AAD] rounded-3xl p-8 shadow-xl transition-all duration-500 border-b-4 border-[${ACCENT_COLOR}] hover:shadow-[0_0_30px_${ACCENT_COLOR}]/50 hover:scale-[1.02]`}
          >
            {/* Step Number Badge */}
            <div className={`absolute -top-4 -right-4 w-12 h-12 flex items-center justify-center rounded-full bg-[${ACCENT_COLOR}] text-white text-xl font-bold shadow-lg`}>
              {index + 1}
            </div>

            {/* === Icon with Pulse === */}
            <div className="flex justify-start mb-6 relative">
              <div className="relative p-3 rounded-full bg-[#004AAD]/10">
                {step.icon}
                {/* Removed inner blur animation as it was distracting */}
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-3">
              {step.title}
            </h3>
            <p className="text-gray-700 leading-normal">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* === CTA === */}
      <div className="mt-20 text-center">
        <button 
          className={`bg-[${ACCENT_COLOR}] hover:bg-[#a37848] text-white font-semibold px-12 py-4 rounded-full text-lg shadow-xl shadow-[${ACCENT_COLOR}]/50 transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] border border-white/20`}
        >
          Start Your Journey Today
        </button>
      </div>
    </section>
  );
}
