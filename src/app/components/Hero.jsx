"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center bg-[#fdfdfd] overflow-hidden">
      
      {/* Background Decorative Element (Using home.png) */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image 
          src="/home.png" 
          alt="Background Texture" 
          fill 
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* --- LEFT SIDE: CONTENT --- */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-[#004AAD]/10 text-[#004AAD] font-medium text-sm tracking-wide uppercase">
              Mental Health Excellence
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] leading-[1.1]">
              Beacon of Hope <br />
              <span className="text-[#004AAD]">Psychiatry</span>
            </h1>

            <div className="w-20 h-1.5 bg-gradient-to-r from-[#7D5F42] to-[#d1b08a] rounded-full mx-auto lg:mx-0"></div>

            <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Compassionate mental health care that restores clarity, balance, and peace. We help you navigate your journey to wellness.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="/book-consultation"
                className="w-full sm:w-auto text-center bg-[#004AAD] hover:bg-[#003887] text-white font-bold px-10 py-4 rounded-xl shadow-lg shadow-blue-200 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Book an Appointment
              </a>
              <a
                href="/services"
                className="w-full sm:w-auto text-center bg-white border-2 border-gray-100 hover:border-[#004AAD] text-gray-700 font-semibold px-10 py-4 rounded-xl transition-all duration-300"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* --- RIGHT SIDE: HERO IMAGE --- */}
          <div className="relative group">
            {/* Decorative background shape */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#7D5F42]/20 to-[#004AAD]/10 rounded-[2rem] blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white">
              <img
                src="/home.png" // Replace this with your actual Hero Image filename
                alt="Psychiatry Consultation"
                className="w-full h-[400px] md:h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Floating Info Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#004AAD] rounded-full flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#1A1A1A] font-bold">In-person & Telehealth</p>
                    <p className="text-sm text-gray-600">Flexible care options available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}