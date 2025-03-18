import { motion } from "framer-motion";
import { testimonialsData } from "../assets/data.js";
import star_icon from "../assets/star_icon.svg";

const Testimonial = () => {
  return (
    <div className="w-full bg-[#F4F5F7]" id="Testimonials">
      <div className="container mx-auto py-10 px-4 lg:px-32 overflow-hidden">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold mb-4 text-center text-[#192735]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          Customer{" "}
          <span className="underline underline-offset-4 decoration-1 font-light text-[#192735]">
            Testimonials
          </span>
        </motion.h1>
        <motion.p
          className="text-center text-[#3D3D3D] mb-12 max-w-80 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          Real Stories From Those Who Found Home with Us
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              className="max-w-[340px] border shadow-lg rounded-lg px-8 py-12 text-center bg-white relative"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              // whileHover={{ rotateY: 180 }} // Flip the card on hover
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              style={{ transformStyle: "preserve-3d" }} // Ensure 3D transformations
            >
              {/* Front Side of the Card */}
              <motion.div
                className="w-full h-full"
                style={{ backfaceVisibility: "hidden" }} // Hide the back side initially
              >
                <motion.img
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-[#E8E9E8] shadow-md"
                  src={testimonial.image}
                  alt={testimonial.alt}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                />
                <h2 className="text-xl font-semibold text-[#192735] text-center mb-4">
                  {testimonial.name}
                </h2>
                <p className="text-[#3D3D3D] text-sm mb-4">
                  {testimonial.title}
                </p>
                <div className="flex justify-center gap-1 text-[#192735] mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <motion.img
                      src={star_icon}
                      key={starIndex}
                      className="h-5 w-5"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1 + starIndex * 0.1,
                        type: "spring",
                      }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      alt="star"
                    />
                  ))}
                </div>
                <p className="text-[#4B4B4B]">{testimonial.text}</p>
              </motion.div>

              {/* Back Side of the Card */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#192735] text-white rounded-lg px-8 py-12"
                style={{ backfaceVisibility: "hidden", rotateY: 180 }} // Rotate the back side and hide initially
              >
                <p className="text-white">
                  Additional information or a message can go here!
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
