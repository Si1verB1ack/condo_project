import { motion } from "framer-motion";

function Contact() {
  const formAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <motion.h1
        className="text-2xl sm:text-4xl font-bold mb-2 text-center text-[#2D3748]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 font-light text-[#2D3748]">
          Us
        </span>
      </motion.h1>
      <motion.p
        className="text-center text-gray-500 mb-12 max-w-80 mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Ready to make the move? Contact us today to get started.
      </motion.p>

      <motion.form
        className="max-w-2xl mx-auto text-gray-600 pt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={formAnimation}
      >
        <div className="flex flex-wrap">
          <motion.div className="w-full md:w-1/2 text-left" variants={item}>
            <label
              htmlFor="name"
              className="text-sm font-medium text-[#2D3748]"
            >
              Your Name
            </label>
            <motion.input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-[#1a202c] transition duration-300"
              placeholder="Your Name"
              name="name"
              required
              whileFocus={{
                scale: 1.01,
                boxShadow: "0 0 0 2px rgba(26, 32, 44, 0.5)",
              }}
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 text-left md:pl-4"
            variants={item}
          >
            <label
              htmlFor="email"
              className="text-sm font-medium text-[#2D3748]"
            >
              Your Email
            </label>
            <motion.input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-[#1a202c] transition duration-300"
              placeholder="Your Email"
              name="email"
              required
              whileFocus={{
                scale: 1.01,
                boxShadow: "0 0 0 2px rgba(26, 32, 44, 0.5)",
              }}
            />
          </motion.div>
        </div>

        <motion.div className="my-6 text-left" variants={item}>
          <label
            htmlFor="message"
            className="text-sm font-medium text-[#2D3748]"
          >
            Message
          </label>
          <motion.textarea
            id="message"
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-[#1a202c] transition duration-300"
            name="message"
            required
            whileFocus={{
              scale: 1.01,
              boxShadow: "0 0 0 2px rgba(26, 32, 44, 0.5)",
            }}
          ></motion.textarea>
        </motion.div>

        <motion.button
          className="cursor-pointer bg-[#192735] text-white px-8 py-2 rounded hover:bg-[#E8E9E8] hover:text-[#192735] transition duration-300"
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
}

export default Contact;
