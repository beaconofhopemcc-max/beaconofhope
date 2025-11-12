"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../Header";
import Footer from "../Footer";

export default function PoliciesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans overflow-hidden">
      {/* === Header === */}
      <Header />

      {/* === Hero Section (Image Left, Text Right) === */}
      <section className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 gap-10">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 h-[300px] md:h-[400px] relative rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/policies-hero.jpg" // 🖼️ place this image in /public
            alt="Beacon of Hope Policies"
            fill
            className="object-cover object-center"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#004AAD] mb-6">
            Our Policies
          </h1>
          <p className="text-gray-700 leading-relaxed text-justify text-[16px]">
            At Beacon of Hope Psychiatry, we prioritize compassion, respect, and
            transparency in every aspect of our care. Below you’ll find our
            practice policies, designed to create a supportive, safe, and
            ethical environment for all patients and families.
          </p>
        </motion.div>
      </section>

      {/* === Policies Section === */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-12 leading-relaxed text-justify">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#004AAD] mb-4">
            Payment Policy
          </h2>
          <p className="text-gray-700 mb-6">
            Beacon of Hope Psychiatry is committed to transparent and fair billing
            practices. Payment is due at the time of your appointment unless prior
            arrangements have been made. We accept major credit cards, debit cards,
            and insurance plans approved by our office. If you have questions about
            coverage or payment options, our staff will gladly assist before your
            visit. Late cancellations or missed appointments may incur a fee.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#004AAD] mb-4">
            Policy on Minors and Parental Presence
          </h2>
          <p className="text-gray-700 mb-6">
            We value the role of parents and guardians in a child’s care. For
            patients under 18, a parent or guardian must attend the first visit.
            Follow-ups may occur independently when clinically appropriate. While
            confidentiality is respected, safety-related or treatment-relevant
            information may be shared with parents when necessary.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#004AAD] mb-4">
            Confidentiality and Privacy Policy
          </h2>
          <p className="text-gray-700 mb-6">
            Your privacy is a top priority. All clinical information is protected in
            compliance with HIPAA standards. Records are confidential and not shared
            without written consent, except in cases of legal obligation or imminent
            risk of harm. Beacon of Hope Psychiatry uses secure electronic systems
            and safeguards to ensure your data remains protected.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#004AAD] mb-4">
            Controlled Substances Policy
          </h2>
          <p className="text-gray-700 mb-6">
            Controlled substances (such as stimulants and certain anxiety
            medications) are prescribed with caution and close monitoring.
            Refills require scheduled appointments and assessments. Lost or
            stolen prescriptions cannot be replaced. Periodic medication reviews
            or urine drug screens may be required to ensure safety and compliance
            with medical and legal standards.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#004AAD] mb-4">
            Phone Use During Appointments
          </h2>
          <p className="text-gray-700 mb-6">
            To ensure a meaningful therapeutic experience, patients are asked to
            avoid using mobile devices during sessions. During telehealth visits,
            ensure your phone or device is placed on a stable surface, with
            notifications turned off, to maintain focus and privacy throughout
            your visit.
          </p>
        </motion.div>

        {/* === Crisis Resources === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#004AAD] mb-4">
            Emergency and Crisis Resources
          </h2>
          <p className="text-gray-700 mb-6">
            If you or someone you know is in distress or needs immediate help,
            please reach out using the trusted national resources below:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 text-justify">
            <li>
              <strong>Suicide and Crisis Lifeline:</strong> Call or text{" "}
              <span className="font-semibold text-[#004AAD]">988</span>
            </li>
            <li>
              <strong>National Alliance on Mental Illness (NAMI):</strong> Call{" "}
              <span className="font-semibold text-[#004AAD]">(800) 950-6264</span>
            </li>
            <li>
              <strong>Crisis Text Line:</strong> Text{" "}
              <span className="font-semibold text-[#004AAD]">HOME</span> to{" "}
              <span className="font-semibold text-[#004AAD]">741741</span>
            </li>
            <li>
              <strong>
                If you are in danger or need urgent help, call 911 or visit your
                nearest emergency room.
              </strong>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* === Footer === */}
      <Footer />
    </main>
  );
}
