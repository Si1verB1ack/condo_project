import Navbar from "./Navbar";
import headerImg from "../assets/header_img_lower_res.jpg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger animation after render
  }, []);
  return (
    <div
      className="min-h-screen bg-cover mb-4 bg-center flex items-center w-full overflow-hidden bg-[#192735]"
      style={{ backgroundImage: `url(${headerImg})` }}
      id="Header"
    >
      <Navbar />
      <div className="container mx-auto text-center py-4 px-6 md:px-20 lg:px-32 text-[#FFFFFF]">
        <motion.h2
          className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 text-[#FFFFFF] hover:text-gray-300 transition-colors duration-300"
          initial={{ opacity: 0, y: 100 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate after render
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ willChange: "transform, opacity" }}
        >
          Explore homes that fit your dreams
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.75, ease: "easeInOut" }}
          className="space-x-6 mt-16"
        >
          <motion.a
            href="#Projects"
            className="relative border-2 border-[#E2E8F0] px-8 py-3 rounded-lg text-[#E2E8F0] bg-transparent transition-all duration-300 hover:bg-[#E2E8F0] hover:text-[#0F1E2E] group"
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 20px rgba(226, 232, 240, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-medium">Projects</span>
          </motion.a>

          <motion.a
            href="#Contact"
            className="relative px-8 py-3 rounded-lg bg-[#0F1E2E] overflow-hidden group transition-all duration-500 ease-in-out"
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 30px rgba(226, 232, 240, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-1 font-medium text-[#E2E8F0] group-hover:text-[#0F1E2E] transition-colors duration-500 ease-in-out">
              Contact Us
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#F1F5F9] via-white to-[#F1F5F9] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out rounded-lg" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
