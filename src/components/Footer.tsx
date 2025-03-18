import { motion } from "framer-motion";
import logo_dark from "../assets/logo_dark.svg";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-[#1a202c] w-full overflow-hidden"
      id="Footer"
    >
      <motion.div 
        className="container mx-auto flex flex-col md:flex-row justify-between items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div className="w-full md:w-1/3 mb-8 md:mb-0" variants={itemVariants}>
          <motion.img 
            src={logo_dark} 
            alt="Logo" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.p 
            className="text-gray-400 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </motion.p>
        </motion.div>
        <motion.div className="w-full md:w-1/5 mb-8 md:mb-0" variants={itemVariants}>
          <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
          <ul className="grid grid-cols-2 gap-2 text-gray-400">
            {[
              { href: "#Header", text: "Home" },
              { href: "#About", text: "About Us" },
              { href: "#Projects", text: "Projects" },
              { href: "#Contact", text: "Contact Us" },
              { href: "#Testimonials", text: "Testimonials" },
              { href: "#", text: "Privacy Policy" }
            ].map((link, index) => (
              <motion.a 
                key={index}
                href={link.href} 
                className="cursor-pointer hover:text-white"
                whileHover={{ x: 5, color: "#ffffff" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {link.text}
              </motion.a>
            ))}
          </ul>
        </motion.div>
        <motion.div className="w-full md:w-1/3" variants={itemVariants}>
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex items-center space-x-4">
            <motion.input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="p-2.5 rounded-lg bg-[#2d3748] text-gray-300 border border-[#4A5568] focus:ring-2 focus:ring-[#63B3ED] focus:outline-none flex-1 transition duration-300"
              whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(99, 179, 237, 0.5)" }}
            />
            <motion.button 
              className="bg-[#1a202c] whitespace-nowrap cursor-pointer text-white px-6 py-2.5 rounded-lg hover:bg-[#2d3748] focus:outline-none focus:ring-2 focus:ring-[#63B3ED] transition duration-300"
              whileHover={{ scale: 1.05, backgroundColor: "#2d3748" }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      <motion.div 
        className="border-t border-[#4A5568] py-4 mt-10 text-center text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        Copyright © 2012 - 2025 Russey Residence®. All rights reserved.
      </motion.div>
    </div>
  );
};

export default Footer;