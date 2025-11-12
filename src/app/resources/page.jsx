"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../Header";
import Footer from "../Footer";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans overflow-hidden">
      {/* === Header === */}
      <Header />

      {/* === Hero Section === */}
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
            src="/home6.png" // ✅ from your public folder
            alt="Mental health support"
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
            Resources & Support
          </h1>
          <p className="text-gray-700 leading-relaxed text-justify text-[16px]">
            At Beacon of Hope Psychiatry, we believe knowledge is empowerment.
            This page provides mental health resources, trusted helplines, and
            educational materials to support your wellbeing beyond sessions.
            You’re never alone — help is always available.
          </p>
        </motion.div>
      </section>

      {/* === Emergency & Helpline Section === */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 leading-relaxed text-justify">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#004AAD] mb-6">
            Immediate Help & Crisis Lines
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-gray-700 mb-6">
                If you or someone you know is struggling, please reach out for
                immediate support. These confidential hotlines are available 24/7
                and can connect you with trained professionals who can help:
              </p>
              <ul className="list-disc ml-6 space-y-3 text-gray-700">
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
                  <strong>Emergency Services:</strong> If you’re in danger or feel unsafe,
                  call <span className="font-semibold text-[#004AAD]">911</span> or visit your
                  nearest emergency room.
                </li>
              </ul>
            </div>

            <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/depression.jpg" // ✅ from your public folder
                alt="Helpline support"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* === Educational Resources === */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 leading-relaxed text-justify bg-[#f9f9f9] rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#004AAD] mb-6">
            Educational Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <Image
                src="/adhd.jpg"
                alt="ADHD Education"
                width={400}
                height={250}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#004AAD] mb-3">
                  Understanding ADHD
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Learn about symptoms, treatment options, and coping strategies
                  for attention-deficit/hyperactivity disorder.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <Image
                src="/anxiety.jpg"
                alt="Anxiety Management"
                width={400}
                height={250}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#004AAD] mb-3">
                  Coping with Anxiety
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Grounding exercises and mindfulness strategies to help manage
                  anxiety, stay present, and regain emotional balance.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <Image
                src="/bipolar1.png"
                alt="Bipolar Disorder Support"
                width={400}
                height={250}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#004AAD] mb-3">
                  Living with Bipolar Disorder
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Understanding mood patterns, early warning signs, and self-care
                  techniques for living a balanced life.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* === Self-Help & Wellness Section === */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 leading-relaxed text-justify">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#004AAD] mb-6">
            Self-Help & Wellness Tools
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/ocd1.png"
                alt="Mindfulness and self-care"
                fill
                className="object-cover object-center"
              />
            </div>

            <div>
              <p className="text-gray-700 mb-4">
                Take small, consistent steps to support your emotional wellbeing:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Keep a daily mood journal to notice triggers and improvements.</li>
                <li>Practice short breathing exercises to reduce anxiety.</li>
                <li>Engage in mindful movement such as walking, stretching, or yoga.</li>
                <li>Schedule moments of rest and connection with loved ones.</li>
                <li>Reach out to your therapist when you need perspective or guidance.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* === Footer === */}
      <Footer />
    </main>
  );
}
