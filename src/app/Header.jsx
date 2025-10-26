"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [conditionsOpen, setConditionsOpen] = useState(false);

  const navigate = () => {
    setMenuOpen(false);
    setAboutOpen(false);
    setConditionsOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      setAboutOpen(false);
      setConditionsOpen(false);
    }
  };

  return (
    <header className="w-full bg-white shadow-lg font-[Inter]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 md:py-4">
        {/* === LOGO ONLY === */}
        <a
          href="/"
          className="flex items-center rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004AAD]/50"
        >
          <img
            src="/logo.png"
            alt="Beacon of Hope Psychiatry Logo"
            width={180}
            height={60}
            className="object-contain rounded-full"
          />
        </a>

        {/* === DESKTOP MENU === */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-gray-700 font-medium">
          <a
            href="/"
            className="hover:text-[#004AAD] transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004AAD]/50 p-1"
          >
            Home
          </a>

          {/* === ABOUT DROPDOWN (DESKTOP) === */}
          <div
            className="relative group"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-[#004AAD] transition-colors p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004AAD]/50">
              <span>About</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            {aboutOpen && (
              <div className="absolute left-0 top-8 bg-white shadow-xl rounded-xl py-2 w-40 border border-gray-100 z-50 overflow-hidden transform transition-all duration-200">
                <a
                  href="/about"
                  className="block px-4 py-2 text-sm hover:bg-[#004AAD] hover:text-white transition-colors"
                >
                  About Us
                </a>
                <a
                  href="/team"
                  className="block px-4 py-2 text-sm hover:bg-[#004AAD] hover:text-white transition-colors"
                >
                  Our Team
                </a>
              </div>
            )}
          </div>

          {/* === CONDITIONS DROPDOWN (DESKTOP) === */}
          <div
            className="relative group"
            onMouseEnter={() => setConditionsOpen(true)}
            onMouseLeave={() => setConditionsOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-[#004AAD] transition-colors p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004AAD]/50">
              <span>Conditions</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            {conditionsOpen && (
              <div className="absolute left-0 top-8 bg-white shadow-xl rounded-xl py-2 w-56 border border-gray-100 grid grid-cols-1 z-50 overflow-hidden transform transition-all duration-200">
                {[
                  "depression",
                  "anxiety",
                  "substance-abuse",
                  "bipolar-disorder",
                  "ptsd",
                  "adhd",
                  "ocd",
                ].map((condition) => (
                  <a
                    key={condition}
                    href={`/${condition}`}
                    className="block px-4 py-2 text-sm hover:bg-[#004AAD] hover:text-white capitalize transition-colors"
                  >
                    {condition.replace("-", " ")}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="/services"
            className="hover:text-[#004AAD] transition-colors p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004AAD]/50"
          >
            Services
          </a>

          <a
            href="/contact"
            className="hover:text-[#004AAD] transition-colors p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004AAD]/50"
          >
            Contact
          </a>

          <a
            href="/insurance"
            className="hover:text-[#004AAD] transition-colors p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004AAD]/50"
          >
            Insurance
          </a>

          <a
            href="/patient-intake"
            className="hover:text-[#004AAD] transition-colors p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004AAD]/50"
          >
            Patient Intake
          </a>

          <a
            href="/book-consultation"
            className="ml-4 bg-[#004AAD] hover:bg-[#003a8c] text-white font-semibold px-5 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-[1.05] focus:outline-none focus:ring-4 focus:ring-[#004AAD]/50"
          >
            Book a Consultation
          </a>
        </nav>

        {/* === MOBILE MENU BUTTON === */}
        <button
          className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* === MOBILE MENU (DROPDOWN) === */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 sm:px-6 py-4 space-y-2 text-gray-700 font-medium border-t border-gray-200">
          <a
            href="/"
            onClick={navigate}
            className="block w-full py-2 hover:bg-[#004AAD]/10 hover:text-[#004AAD] rounded-lg px-2"
          >
            Home
          </a>

          {/* ABOUT DROPDOWN (MOBILE) */}
          <div className="border-b border-gray-100 pb-2">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex justify-between w-full py-2 px-2 hover:bg-[#004AAD]/10 hover:text-[#004AAD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004AAD]/50"
            >
              About
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  aboutOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {aboutOpen && (
              <div className="pl-6 mt-1 space-y-1 text-sm bg-gray-50 rounded-lg py-1">
                <a
                  href="/about"
                  onClick={navigate}
                  className="block w-full py-2 hover:text-[#004AAD] transition-colors px-2"
                >
                  About Us
                </a>
                <a
                  href="/team"
                  onClick={navigate}
                  className="block w-full py-2 hover:text-[#004AAD] transition-colors px-2"
                >
                  Our Team
                </a>
              </div>
            )}
          </div>

          {/* CONDITIONS DROPDOWN (MOBILE) */}
          <div className="border-b border-gray-100 pb-2">
            <button
              onClick={() => setConditionsOpen(!conditionsOpen)}
              className="flex justify-between w-full py-2 px-2 hover:bg-[#004AAD]/10 hover:text-[#004AAD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004AAD]/50"
            >
              Conditions
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  conditionsOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {conditionsOpen && (
              <div className="pl-6 mt-1 space-y-1 text-sm capitalize bg-gray-50 rounded-lg py-1">
                {[
                  "depression",
                  "anxiety",
                  "substance-abuse",
                  "bipolar-disorder",
                  "ptsd",
                  "adhd",
                  "ocd",
                ].map((condition) => (
                  <a
                    key={condition}
                    href={`/${condition}`}
                    onClick={navigate}
                    className="block w-full py-2 hover:text-[#004AAD] transition-colors px-2"
                  >
                    {condition.replace("-", " ")}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="/services"
            onClick={navigate}
            className="block w-full py-2 hover:bg-[#004AAD]/10 hover:text-[#004AAD] rounded-lg px-2"
          >
            Services
          </a>
          <a
            href="/contact"
            onClick={navigate}
            className="block w-full py-2 hover:bg-[#004AAD]/10 hover:text-[#004AAD] rounded-lg px-2"
          >
            Contact
          </a>
          <a
            href="/insurance"
            onClick={navigate}
            className="block w-full py-2 hover:bg-[#004AAD]/10 hover:text-[#004AAD] rounded-lg px-2"
          >
            Insurance
          </a>
          <a
            href="/patient-intake"
            onClick={navigate}
            className="block w-full py-2 hover:bg-[#004AAD]/10 hover:text-[#004AAD] rounded-lg px-2"
          >
            Patient Intake
          </a>

          <a
            href="/book-consultation"
            onClick={navigate}
            className="mt-4 block bg-[#004AAD] hover:bg-[#003a8c] text-white font-semibold px-5 py-3 rounded-full shadow-md text-center transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#004AAD]/50"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
