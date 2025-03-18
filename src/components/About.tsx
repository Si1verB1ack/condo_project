import { motion } from "framer-motion";
import brand_img from "../assets/brand_img.png"; // 🚀 Use WebP format
import {
  FaCalendarAlt,
  FaBuilding,
  FaRulerCombined,
  FaTasks,
} from "react-icons/fa";

// Stats data
const stats = [
  { id: 1, icon: FaCalendarAlt, value: "10+", label: "Years of Excellence" },
  { id: 2, icon: FaBuilding, value: "50+", label: "Luxury Rooms" },
  { id: 3, icon: FaRulerCombined, value: "500+", label: "Happy Guests" },
  { id: 4, icon: FaTasks, value: "24/7", label: "Customer Support" },
];

const About = () => {
  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full"
      id="About"
    >
      {/* Left Side: Image (White Background) */}
      <motion.div
        className="flex flex-col md:w-1/2 items-center justify-center mb-10 md:mb-0 md:pr-8 w-full h-full bg-white"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {/* Image */}
        <motion.div
          className="w-full h-full overflow-hidden rounded-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={brand_img}
            alt="Brand Image"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>
      </motion.div>

      {/* Right Side: Text Content in a Card (Gray Background) */}
      <motion.div
        className="flex flex-col md:w-1/2 items-center md:items-start text-[#3D3D3D] bg-[#F4F5F7] shadow-lg rounded-xl p-8 w-full h-full"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-4 text-[#192735] text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About{" "}
          <span className="underline underline-offset-4 decoration-1 text-[#192735] font-light">
            Our Hotel
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-[#3D3D3D] max-w-80 text-center md:text-left mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Passionate about Hospitality, Dedicated to Your Comfort
        </motion.p>

        {/* Stats Section with Icons */}
        <motion.div
          className="grid grid-cols-2 gap-6 md:gap-10 w-full"
          variants={statsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="text-center md:text-left"
              variants={statItemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <stat.icon className="text-3xl text-[#192735] mx-auto md:mx-0" />
              </motion.div>
              <motion.p
                className="text-3xl font-medium text-[#192735] mt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {stat.value}
              </motion.p>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          className="bg-white p-6 rounded-lg my-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.1 }}
          whileHover={{
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            y: -3,
          }}
        >
          <motion.p
            className="text-[#3D3D3D] italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            "The best hotel experience I've ever had! The staff was incredibly
            welcoming, and the rooms were luxurious and comfortable. Highly
            recommend!"
          </motion.p>
          <motion.p
            className="text-[#192735] font-semibold mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            – John Doe
          </motion.p>
        </motion.div>

        {/* Learn More button */}
        <motion.button
          className="bg-[#192735] text-white px-8 py-3 rounded-full hover:bg-[#E8E9E8] hover:text-[#192735] hover:shadow-lg transition-all duration-300 flex items-center gap-2 relative overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Learn More"
        >
          Learn More
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-3"
            viewBox="0 0 20 20"
            fill="currentColor"
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </motion.svg>
          <div className="absolute inset-0 bg-gradient-to-r from-[#E8E9E8] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;