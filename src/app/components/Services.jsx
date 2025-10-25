"use client";
import Image from "next/image";
import { Stethoscope, Brain, MessageSquare, Globe } from "lucide-react";

export default function Services() {
  const serviceList = [
    {
      icon: <Stethoscope className="w-8 h-8 text-[#7D5F42]" />,
      title: "Medication Management",
    },
    {
      icon: <Brain className="w-8 h-8 text-[#7D5F42]" />,
      title: "Psychiatric Evaluation",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-[#7D5F42]" />,
      title: "Therapy & Counseling",
    },
    {
      icon: <Globe className="w-8 h-8 text-[#7D5F42]" />,
      title: "Telepsychiatry Care",
    },
  ];

  const conditions = [
    { name: "Depression", img: "/depression.jpg" },
    { name: "ADHD", img: "/adhd.jpg" },
    { name: "Schizophrenia", img: "/schizo.jpg" },
    { name: "Anxiety", img: "/anxiety.jpg" },
    { name: "Substance Abuse", img: "/substance.jpg" },
    { name: "PTSD", img: "/ptsd.jpg" },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-[#f9fafb] py-20 md:py-28 px-6 md:px-12 lg:px-20">
      {/* === SECTION TITLE === */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#004AAD]">
          Our Services & Conditions We Treat
        </h2>
        <div className="mt-3 w-28 h-[4px] mx-auto bg-gradient-to-r from-[#7D5F42] to-[#d1b08a] rounded-full shadow-[0_0_12px_#7D5F42]/40"></div>
        <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
          We provide personalized, evidence-based mental health care designed to
          restore balance and support long-term wellness.
        </p>
      </div>

      {/* === SERVICES WE OFFER === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {serviceList.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md border border-[#7D5F42]/30 p-8 text-center transition-all duration-500 hover:shadow-[0_0_25px_#7D5F42]/40 hover:-translate-y-1"
          >
            <div className="flex justify-center mb-4 relative">
              <div className="relative">
                {service.icon}
                <div className="absolute inset-0 rounded-full bg-[#7D5F42]/30 blur-md animate-pulse"></div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#004AAD]">
              {service.title}
            </h3>
          </div>
        ))}
      </div>

      {/* === CONDITIONS WE TREAT === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {conditions.map((condition, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl group shadow-lg transition-all duration-500 hover:shadow-[0_0_25px_#7D5F42]/30"
          >
            <Image
              src={condition.img}
              alt={condition.name}
              width={600}
              height={400}
              className="object-cover w-full h-[260px] transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-[#004AAD]/40 group-hover:bg-[#004AAD]/50 transition-all duration-500"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h4 className="text-white text-2xl font-semibold drop-shadow-lg">
                {condition.name}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* === VIEW ALL CTA === */}
      <div className="mt-16 text-center">
        <button className="bg-[#004AAD] hover:bg-[#003a8c] text-white font-semibold px-10 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-[1.03]">
          View All Services & Conditions
        </button>
      </div>
    </section>
  );
}
