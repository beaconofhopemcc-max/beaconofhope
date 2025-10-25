'use client';

import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Inter } from "next/font/google";

// === Google Font ===
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Define the brand blue color for icons and links
const BRAND_BLUE = '#004AAD'; 
const PRIMARY_TEXT_COLOR = 'text-gray-800'; // For general black/dark text
const SECONDARY_TEXT_COLOR = 'text-gray-600'; // For lightened text

const Footer = () => {
  // New Brand Description
  const newBrandDescription = "Beacon of Hope Psychiatry is dedicated to providing compassionate, evidence-based mental health care that guides you toward clarity and wellness.";
  
  // New CTA Phrase
  const newCTAPhrase = "Begin your path to peace today: schedule your first consultation and embrace a healthier future.";

  // Social Media Base URL
  const socialBaseUrl = '/beaconofhopemcc'; 

  return (
    // MODIFIED: bg-white and text-black
    <footer
      className={`${inter.className} relative bg-white ${PRIMARY_TEXT_COLOR} pt-12 pb-6 px-6 overflow-hidden`}
    >
      {/* === Main Footer Content === */}
      <div className="relative z-10 container mx-auto space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          
          {/* === Company Info === */}
          <div className="space-y-6 text-center md:text-left">
            <Link href="/" className="flex justify-center md:justify-start">
              <Image
                src="/logo.png"
                alt="Beacon of Hope Psychiatry Logo" // MODIFIED: Alt text
                width={220}
                height={50}
                // MODIFIED: Removed brightness-0 invert since the background is white
                className="mb-4 transform transition-transform duration-300 hover:scale-105" 
              />
            </Link>
            {/* MODIFIED: Brand text color and description */}
            <p className={`text-[15px] ${SECONDARY_TEXT_COLOR} leading-relaxed max-w-xs mx-auto md:mx-0 font-light`}>
              {newBrandDescription}
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-5 pt-3">
              {[
                {
                  href: `https://www.instagram.com${socialBaseUrl}`, // MODIFIED: URL
                  icon: <FaInstagram size={22} color={BRAND_BLUE} />, // MODIFIED: Color
                },
                {
                  href: `https://www.facebook.com${socialBaseUrl}`, // MODIFIED: URL
                  icon: <FaFacebook size={22} color={BRAND_BLUE} />, // MODIFIED: Color
                },
                {
                  href: `https://x.com${socialBaseUrl}`, // MODIFIED: URL
                  icon: <FaTwitter size={22} color={BRAND_BLUE} />, // MODIFIED: Color
                },
                {
                  href: `https://www.youtube.com${socialBaseUrl}`, // MODIFIED: URL
                  icon: <FaYoutube size={22} color={BRAND_BLUE} />, // MODIFIED: Color
                },
              ].map(({ href, icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-125 transition-transform duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* === Quick Links === */}
          <div className="text-center md:text-left">
            {/* MODIFIED: Text color and border color */}
            <h3 className={`text-[18px] font-semibold mb-4 border-b-2 border-gray-800 inline-block pb-1 tracking-wide ${PRIMARY_TEXT_COLOR}`}>
              Quick Links
            </h3>
            {/* MODIFIED: Text color and hover color (set to blue) */}
            <ul className={`space-y-3 ${SECONDARY_TEXT_COLOR} text-[15px] font-light`}>
              {[
                ["About Us", "/about-us"],
                ["Services", "/services"],
                ["Reviews", "/reviews"],
                ["Insurances", "/insurances"],
                ["Patient Intake", "/patient-intake"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`hover:text-[${BRAND_BLUE}] block transition-colors duration-300`} // Using bracket syntax for Tailwind JIT
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* === Contact Info === */}
          <div className="text-center md:text-left">
            {/* MODIFIED: Text color and border color */}
            <h3 className={`text-[18px] font-semibold mb-4 border-b-2 border-gray-800 inline-block pb-1 tracking-wide ${PRIMARY_TEXT_COLOR}`}>
              Contact Us
            </h3>
            {/* MODIFIED: Text color and icon color */}
            <ul className={`space-y-3 ${SECONDARY_TEXT_COLOR} text-[15px] font-light`}>
              <li className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-3">
                <FaMapMarkerAlt className={`text-[${BRAND_BLUE}] mb-1 sm:mb-0`} />
                <span className="max-w-[220px]">
                  123 Health Blvd, Suite 456, Anytown, USA 12345
                </span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-2">
                <FaPhoneAlt className={`text-[${BRAND_BLUE}]`} />
                <span>(281) 406-6473</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-2">
                <FaPhoneAlt className={`text-[${BRAND_BLUE}]`} />
                <span>(281) 406-6474</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-2">
                <FaEnvelope className={`text-[${BRAND_BLUE}]`} />
                <span>contact@beaconofhope.com</span>
              </li>
            </ul>
          </div>

          {/* === Book Consultation === */}
          <div className="text-center md:text-left">
            {/* MODIFIED: Text color and border color */}
            <h3 className={`text-[18px] font-semibold mb-4 border-b-2 border-gray-800 inline-block pb-1 tracking-wide ${PRIMARY_TEXT_COLOR}`}>
              Ready to Start?
            </h3>
            {/* MODIFIED: CTA Rephrased text and text color */}
            <p className={`text-[15px] ${SECONDARY_TEXT_COLOR} mb-4 font-light leading-relaxed`}>
              {newCTAPhrase}
            </p>
            {/* MODIFIED: Button color (using a placeholder brown/gold color for contrast) */}
            <Link
              href="/book-consultation"
              className="inline-block bg-[#7D5F42] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#6a4f35] transition-all duration-500 shadow-md text-[16px]"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* === Footer Bottom === */}
      {/* MODIFIED: Text color and link hover color (set to blue) */}
      <div className={`mt-12 pt-6 text-center text-[14px] font-light tracking-wide ${SECONDARY_TEXT_COLOR} border-t border-gray-200`}>
        <p>
          &copy; {new Date().getFullYear()} **Beacon of Hope Psychiatry**. All Rights Reserved.
        </p>
        <div className="mt-3 flex justify-center flex-wrap gap-4">
          <Link
            href="/privacy-policy"
            className={`hover:text-[${BRAND_BLUE}] transition-colors duration-300`}
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className={`hover:text-[${BRAND_BLUE}] transition-colors duration-300`}
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;