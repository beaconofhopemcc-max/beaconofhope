"use client";

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

export default function Home() {
  return (
    <>
      {/* === HEADER === */}
      <Header />

      {/* === MAIN CONTENT === */}
      <main className="min-h-screen bg-[#03271E] text-white font-sans overflow-hidden m-0 p-0">
        <Hero />
        <About />
        <Mission />
        <Services />
        <WhyChooseUs />
        <Insurances />
        <How />
        <Cta />
      </main>

      {/* === FOOTER === */}
      <Footer />
    </>
  );
}
