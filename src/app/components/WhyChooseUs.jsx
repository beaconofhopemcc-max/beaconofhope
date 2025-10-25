"use client";
import Image from "next/image";
import {
  ShieldCheck,
  HeartHandshake,
  Stethoscope,
  Laptop,
  Users,
  Sparkles,
} from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#7D5F42]" />,
      title: "Board-Certified Experts",
      desc: "Our clinicians are highly trained and licensed professionals dedicated to delivering safe, evidence-based care.",
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-[#7D5F42]" />,
      title: "Compassion-Driven Care",
      desc: "We treat every patient with empathy, dignity, and genuine understanding — healing begins with trust.",
    },
    {
      icon: <Stethoscope className="w-10 h-10 text-[#7D5F42]" />,
      title: "Personalized Treatment Plans",
      desc: "Each care plan is tailored to your specific mental health needs, lifestyle, and goals for lasting results.",
    },
    {
      icon: <Laptop className="w-10 h-10 text-[#7D5F42]" />,
      title: "Telepsychiatry Access",
      desc: "Get expert psychiatric care from the comfort of your home — secure, confidential, and accessible.",
    },
    {
      icon: <Users className="w-10 h-10 text-[#7D5F42]" />,
      title: "Collaborative Support",
      desc: "Our approach includes families, therapists, and medical teams to ensure holistic care that truly supports you.",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-[#7D5F42]" />,
      title: "Proven Outcomes",
      desc: "We use measurable, results-driven strategies that improve emotional wellness and quality of life.",
    },
  ];

  return (
    <section className="relative w-full py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden bg-white">
      {/* === BACKGROUND IMAGE === */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Home5.png" // or "/Go.png"
          alt="Why Choose Us Background"
          fill
          className="object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/90"></div>
      </div>

      {/* === SECTION HEADING === */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#004AAD]">
          Why Thousands Trust Beacon of Hope Psychiatry
        </h2>
        <div className="mt-3 w-28 h-[4px] mx-auto bg-gradient-to-r from-[#7D5F42] to-[#d1b08a] rounded-full shadow-[0_0_12px_#7D5F42]/40"></div>
        <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
          Healing is not just about treatment — it’s about connection, trust, and care that truly understands you.
        </p>
      </div>

      {/* === GRID OF REASONS === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl border border-[#7D5F42]/40 shadow-md p-8 text-center transition-all duration-500 hover:shadow-[0_0_25px_#7D5F42]/40 hover:-translate-y-1"
          >
            {/* === Icon with Pulse === */}
            <div className="flex justify-center mb-6 relative">
              <div className="relative">
                {reason.icon}
                <div className="absolute inset-0 rounded-full bg-[#7D5F42]/30 blur-md animate-pulse"></div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-[#004AAD] mb-3">
              {reason.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{reason.desc}</p>
          </div>
        ))}
      </div>

      {/* === CTA === */}
      <div className="mt-16 text-center">
        <button className="bg-[#004AAD] hover:bg-[#003a8c] text-white font-semibold px-10 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-[1.03]">
          Schedule Your Appointment
        </button>
      </div>
    </section>
  );
}
