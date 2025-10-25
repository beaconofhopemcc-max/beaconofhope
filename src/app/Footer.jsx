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

const Footer = () => {
  return (
    <footer
      className={`${inter.className} relative bg-[#003B35] text-white pt-12 pb-6 px-6 overflow-hidden`}
    >
      {/* === Main Footer Content === */}
      <div className="relative z-10 container mx-auto space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* === Company Info === */}
          <div className="space-y-6 text-center md:text-left">
            <Link href="/" className="flex justify-center md:justify-start">
              <Image
                src="/logo.png"
                alt="Moladav Health Logo"
                width={220}
                height={50}
                className="mb-4 transform transition-transform duration-300 hover:scale-105 brightness-0 invert"
              />
            </Link>
            <p className="text-[15px] text-gray-200 leading-relaxed max-w-xs mx-auto md:mx-0 font-light">
              MoladavHealth provides world-class mental health care. Our
              compassionate professionals support you on your journey to
              wellness.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-5 pt-3">
              {[
                {
                  href: "https://www.instagram.com/moladavhealth",
                  icon: <FaInstagram size={22} color="#F8BBD0" />,
                },
                {
                  href: "https://www.facebook.com/moladavhealth",
                  icon: <FaFacebook size={22} color="#A7C7F9" />,
                },
                {
                  href: "https://x.com/moladavhealth",
                  icon: <FaTwitter size={22} color="#E0E0E0" />,
                },
                {
                  href: "https://www.youtube.com/@moladavhealth",
                  icon: <FaYoutube size={22} color="#FF8A80" />,
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
            <h3 className="text-[18px] font-semibold mb-4 border-b-2 border-white inline-block pb-1 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-100 text-[15px] font-light">
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
                    className="hover:text-[#E68A1F] block transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* === Contact Info === */}
          <div className="text-center md:text-left">
            <h3 className="text-[18px] font-semibold mb-4 border-b-2 border-white inline-block pb-1 tracking-wide">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-100 text-[15px] font-light">
              <li className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-3">
                <FaMapMarkerAlt className="text-[#E68A1F] mb-1 sm:mb-0" />
                <span className="max-w-[220px]">
                  123 Health Blvd, Suite 456, Anytown, USA 12345
                </span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-2">
                <FaPhoneAlt className="text-[#E68A1F]" />
                <span>(281) 406-6473</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-2">
                <FaPhoneAlt className="text-[#E68A1F]" />
                <span>(281) 406-6474</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-2">
                <FaEnvelope className="text-[#E68A1F]" />
                <span>contact@moladavhealth.com</span>
              </li>
            </ul>
          </div>

          {/* === Book Consultation === */}
          <div className="text-center md:text-left">
            <h3 className="text-[18px] font-semibold mb-4 border-b-2 border-white inline-block pb-1 tracking-wide">
              Ready to Start?
            </h3>
            <p className="text-[15px] text-gray-100 mb-4 font-light leading-relaxed">
              Book a consultation today and take the first step toward a
              healthier, happier you.
            </p>
            <Link
              href="/book-consultation"
              className="inline-block bg-[#E68A1F] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#cc771b] transition-all duration-500 shadow-md text-[16px]"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* === Footer Bottom (no border, no box) === */}
      <div className="mt-12 pt-6 text-center text-[14px] font-light tracking-wide text-gray-200">
        <p>
          &copy; {new Date().getFullYear()} MoladavHealth. All Rights Reserved.
        </p>
        <div className="mt-3 flex justify-center flex-wrap gap-4">
          <Link
            href="/privacy-policy"
            className="hover:text-[#E68A1F] transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="hover:text-[#E68A1F] transition-colors duration-300"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
