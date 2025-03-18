import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import menu_icon from "../assets/menu_icon.svg";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5"; // Add this import at the top

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-20 lg:px-32 text-[#FFFFFF]">
        <img src={logo} alt="Logo" />
        <ul className="hidden md:flex gap-7 text-[#E8E9E8]">
          <a href="#Header" className="cursor-pointer hover:text-[#B0BCC2]">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-[#B0BCC2]">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-[#B0BCC2]">
            Projects
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-[#B0BCC2]"
          >
            Testimonials
          </a>
        </ul>
        <motion.a
          href="#Contact"
          className="cursor-pointer hidden md:block px-8 py-2 rounded-full bg-[#0F1E2E] overflow-hidden relative group"
          whileHover={{
            scale: 1.02,
            transition: {
              duration: 0.5,
              ease: "easeOut",
            },
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 font-medium text-[#E2E8F0] group-hover:text-[#0F1E2E] transition-colors duration-300">
            Sign Up
          </span>
          <div className="absolute inset-0 bg-[#E2E8F0] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
        </motion.a>

        <img
          onClick={() => setShowMobileMenu(true)}
          src={menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="Menu Icon"
        />
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full top-0 right-0 bottom-0" : "h-0 w-0"
        } overflow-hidden bg-[#192735] transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <IoClose
            onClick={() => setShowMobileMenu(false)}
            className="w-8 h-8 text-white cursor-pointer hover:text-gray-300 transition-colors duration-200"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium text-[#E8E9E8]">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Header"
            className="px-4 py-2 rounded-full inline-block text-[#E8E9E8] hover:text-[#B0BCC2]"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#About"
            className="px-4 py-2 rounded-full inline-block text-[#E8E9E8] hover:text-[#B0BCC2]"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block text-[#E8E9E8] hover:text-[#B0BCC2]"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline-block text-[#E8E9E8] hover:text-[#B0BCC2]"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
