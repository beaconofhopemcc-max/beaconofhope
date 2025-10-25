"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [conditionsOpen, setConditionsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        {/* === LOGO ONLY === */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Beacon of Hope Psychiatry Logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* === DESKTOP MENU === */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-[#004AAD] transition-colors">
            Home
          </Link>

          {/* === ABOUT DROPDOWN === */}
          <div
            className="relative group"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-[#004AAD] transition-colors">
              <span>About</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {aboutOpen && (
              <div className="absolute left-0 top-8 bg-white shadow-lg rounded-lg py-2 w-40 border border-gray-100">
                <Link
                  href="/about"
                  className="block px-4 py-2 hover:bg-[#004AAD]/10 hover:text-[#004AAD]"
                >
                  About Us
                </Link>
                <Link
                  href="/team"
                  className="block px-4 py-2 hover:bg-[#004AAD]/10 hover:text-[#004AAD]"
                >
                  Our Team
                </Link>
              </div>
            )}
          </div>

          {/* === CONDITIONS DROPDOWN === */}
          <div
            className="relative group"
            onMouseEnter={() => setConditionsOpen(true)}
            onMouseLeave={() => setConditionsOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-[#004AAD] transition-colors">
              <span>Conditions</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {conditionsOpen && (
              <div className="absolute left-0 top-8 bg-white shadow-lg rounded-lg py-2 w-56 border border-gray-100 grid grid-cols-1">
                {[
                  "depression",
                  "anxiety",
                  "substance-abuse",
                  "bipolar-disorder",
                  "ptsd",
                  "adhd",
                  "ocd",
                ].map((condition) => (
                  <Link
                    key={condition}
                    href={`/${condition}`}
                    className="block px-4 py-2 hover:bg-[#004AAD]/10 hover:text-[#004AAD] capitalize"
                  >
                    {condition.replace("-", " ")}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/services"
            className="hover:text-[#004AAD] transition-colors"
          >
            Services
          </Link>

          <Link
            href="/contact"
            className="hover:text-[#004AAD] transition-colors"
          >
            Contact
          </Link>

          <Link
            href="/insurance"
            className="hover:text-[#004AAD] transition-colors"
          >
            Insurance
          </Link>

          <Link
            href="/patient-intake"
            className="hover:text-[#004AAD] transition-colors"
          >
            Patient Intake
          </Link>

          <Link
            href="/book-consultation"
            className="ml-4 bg-[#004AAD] hover:bg-[#003a8c] text-white font-semibold px-5 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-[1.05]"
          >
            Book a Consultation
          </Link>
        </nav>

        {/* === MOBILE MENU BUTTON === */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* === MOBILE MENU === */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-3 text-gray-700 font-medium">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            {/* ABOUT DROPDOWN */}
            <div>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex justify-between w-full hover:text-[#004AAD]"
              >
                About <ChevronDown className="w-4 h-4" />
              </button>
              {aboutOpen && (
                <div className="pl-4 mt-2 space-y-2 text-sm">
                  <Link href="/about" onClick={() => setMenuOpen(false)}>
                    About Us
                  </Link>
                  <Link href="/team" onClick={() => setMenuOpen(false)}>
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            {/* CONDITIONS DROPDOWN */}
            <div>
              <button
                onClick={() => setConditionsOpen(!conditionsOpen)}
                className="flex justify-between w-full hover:text-[#004AAD]"
              >
                Conditions <ChevronDown className="w-4 h-4" />
              </button>
              {conditionsOpen && (
                <div className="pl-4 mt-2 space-y-2 text-sm capitalize">
                  {[
                    "depression",
                    "anxiety",
                    "substance-abuse",
                    "bipolar-disorder",
                    "ptsd",
                    "adhd",
                    "ocd",
                  ].map((condition) => (
                    <Link
                      key={condition}
                      href={`/${condition}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {condition.replace("-", " ")}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <Link href="/insurance" onClick={() => setMenuOpen(false)}>
              Insurance
            </Link>
            <Link href="/patient-intake" onClick={() => setMenuOpen(false)}>
              Patient Intake
            </Link>

            <Link
              href="/book-consultation"
              onClick={() => setMenuOpen(false)}
              className="bg-[#004AAD] hover:bg-[#003a8c] text-white font-semibold px-5 py-2 rounded-full shadow-md text-center transition-all duration-300"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
