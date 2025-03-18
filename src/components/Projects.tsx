import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// @ts-ignore
import { projectsData } from "../assets/data.js";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [cardsWidth, setCardsWidth] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const carouselRef = useRef(null);
  const totalProjects = projectsData.length;

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth >= 1200) {
        setCardsToShow(5);
        setCardsWidth(20); // 100/5
      } else if (window.innerWidth >= 992) {
        setCardsToShow(4);
        setCardsWidth(25); // 100/4
      } else if (window.innerWidth >= 768) {
        setCardsToShow(3);
        setCardsWidth(33.33); // 100/3
      } else if (window.innerWidth >= 640) {
        setCardsToShow(2);
        setCardsWidth(50); // 100/2
      } else {
        setCardsToShow(1);
        setCardsWidth(100);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const getVisibleProjects = () => {
    let wrappedProjects = [...projectsData];

    for (let i = 0; i < cardsToShow; i++) {
      wrappedProjects.push(projectsData[i]);
    }

    for (let i = 0; i < cardsToShow; i++) {
      wrappedProjects.unshift(projectsData[totalProjects - 1 - i]);
    }

    return wrappedProjects;
  };

  const wrappedProjects = getVisibleProjects();

  const nextProject = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= totalProjects) {
        return 0;
      }
      return nextIndex;
    });
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      if (nextIndex < 0) {
        return totalProjects - 1;
      }
      return nextIndex;
    });
  };

  const calculateTransform = () => {
    const offset = cardsToShow;
    return -((currentIndex + offset) * cardsWidth);
  };

  const cardVariants = {
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      backgroundColor: "#1c2e4a",
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95,
      backgroundColor: "#0b1018",
      transition: { duration: 0.1 }
    }
  };

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    if (entry.isIntersecting && !hasAnimated) {
      setIsInView(true);
      setHasAnimated(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      className="w-full py-20 px-6 md:px-8 lg:px-12 my-20 overflow-hidden bg-white"
      id="Projects"
    >
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-2xl sm:text-4xl font-bold mb-2 text-center text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Projects <span className="font-light">Completed</span>
        </motion.h1>
        <motion.p
          className="text-center text-gray-500 mb-8 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Crafting Spaces, Building Legacies. Explore Our Portfolio
        </motion.p>

        <div className="flex justify-between items-center mb-10 max-w-3xl mx-auto">
          <motion.button
            onClick={prevProject}
            className="cursor-pointer p-3 bg-[#10192c] text-white rounded-lg flex items-center justify-center"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="Previous Project"
          >
            <FaChevronLeft className="text-lg mr-1" />
            <span className="hidden sm:inline">Previous</span>
          </motion.button>

          <div className="flex justify-center sm:hidden">
            {projectsData.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`mx-1 rounded-full ${
                  currentIndex === index
                    ? "bg-[#10192c] w-4 h-2"
                    : "bg-gray-300 w-2 h-2"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <motion.button
            onClick={nextProject}
            className="cursor-pointer p-3 bg-[#10192c] text-white rounded-lg flex items-center justify-center"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="Next Project"
          >
            <span className="hidden sm:inline">Next</span>
            <FaChevronRight className="text-lg ml-1" />
          </motion.button>
        </div>

        <div className="overflow-hidden" ref={carouselRef}>
          <motion.div
            className="flex"
            animate={isInView ? { x: `${calculateTransform()}%` } : {}}
            transition={{
              type: "spring",
              stiffness: 75,
              damping: 20,
              mass: 0.8
            }}
          >
            {wrappedProjects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-2"
                style={{ width: `${cardsWidth}%` }}
              >
                <motion.div
                  className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 h-full"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <motion.div
                    className="h-80 overflow-hidden"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500"
                    />
                  </motion.div>
                  <motion.div
                    className="p-4 bg-white"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <h2 className="text-xl font-semibold text-gray-800">
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {project.price} <span className="px-1 text-gray-400">|</span> {project.location}
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="hidden sm:flex justify-center mt-6">
          {projectsData.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer mx-1 rounded-full ${
                currentIndex === index
                  ? "bg-[#10192c] w-6 h-2"
                  : "bg-gray-300 w-2 h-2"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;