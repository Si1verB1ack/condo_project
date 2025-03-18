import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import menu_icon from "../assets/menu_icon.svg";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

// Navigation links data
const navLinks = [
  { id: 1, text: "Home", href: "#Header" },
  { id: 2, text: "About", href: "#About" },
  { id: 3, text: "Projects", href: "#Projects" },
  { id: 4, text: "Testimonials", href: "#Testimonials" },
];

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-20 lg:px-32 text-[#FFFFFF]">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-10" />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-7 text-[#E8E9E8]">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="cursor-pointer hover:text-[#B0BCC2] transition-colors duration-200"
            >
              {link.text}
            </a>
          ))}
        </ul>

        {/* Sign Up Button (Desktop) */}
        <motion.a
          href="#Contact"
          className="cursor-pointer hidden md:block px-8 py-2 rounded-full bg-[#0F1E2E] overflow-hidden relative group"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.5, ease: "easeOut" },
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 font-medium text-[#E2E8F0] group-hover:text-[#0F1E2E] transition-colors duration-300">
            Sign Up
          </span>
          <div className="absolute inset-0 bg-[#E2E8F0] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
        </motion.a>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setShowMobileMenu(true)}
          aria-label="Open menu"
          className="md:hidden p-2 focus:outline-none"
        >
          <img src={menu_icon} className="w-7" alt="Menu Icon" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-[#192735] bg-opacity-95 backdrop-blur-sm transition-opacity duration-300 ${
          showMobileMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setShowMobileMenu(false)}
            aria-label="Close menu"
            className="p-2 focus:outline-none"
          >
            <IoClose className="w-8 h-8 text-white hover:text-gray-300 transition-colors duration-200" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <ul className="flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium text-[#E8E9E8]">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setShowMobileMenu(false)}
              className="px-4 py-2 rounded-full inline-block hover:text-[#B0BCC2] transition-colors duration-200"
            >
              {link.text}
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;