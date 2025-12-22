"use client";

import { useState } from "react";
import Header from "./Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Mission from "./components/Mission";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Insurances from "./components/Insurances";
import How from "./components/How";
import Cta from "./components/Cta";
import Footer from "./Footer";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

/** * SEO CONFIGURATION 
 * Optimized for Mental Health Services
 */
const seoData = {
  title: "Mental Health Support | Compassionate Care & Therapy",
  description: "Evidence-based mental health services specializing in anxiety, depression, and holistic recovery. Start your journey to peace today.",
  keywords: [
    "mental health services",
    "online therapy",
    "anxiety treatment",
    "depression support",
    "wellness and recovery",
    "licensed therapists"
  ],
  image: "/home.png", // Using your requested image for social previews
  url: "https://beaconofhopepsychiatry.com" 
};

export default function Home() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* SEO Tags */}
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords.join(", ")} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content={seoData.image} />

      <Header />

      <main className="flex-grow">
        {/* We pass the modal trigger to the Hero if you want the "Get Started" button to open it */}
        <Hero onCtaClick={() => setIsModalOpen(true)} />
        
        <About />
        <Mission />
        <Services />
        <WhyChooseUs />
        <Insurances />
        <How />
        <Cta />
      </main>

      {/* Reusable Appointment Modal from your blog code */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white p-6 sm:p-10 rounded-[2rem] shadow-2xl max-w-sm w-full text-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Book Your Session</h3>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => router.push('/insurances')} 
                  className="w-full py-4 bg-[#FACC15] text-gray-900 font-bold rounded-xl hover:bg-[#eab308] transition-colors"
                >
                  Use Insurance
                </button>
                <button 
                  onClick={() => router.push('/selfpay')} 
                  className="w-full py-4 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition-colors"
                >
                  Self Pay
                </button>
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="mt-2 text-gray-400 text-sm hover:text-gray-600"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}