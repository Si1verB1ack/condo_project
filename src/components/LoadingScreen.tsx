import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-[#192735] flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.div className="relative w-24 h-24 mb-8">
          {/* Building animation */}
          <motion.div
            className="absolute bottom-0 w-20 h-20 bg-[#E2E8F0] rounded-lg"
            animate={{
              height: ["0%", "100%", "100%"],
              opacity: [0.3, 1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 left-6 w-20 h-20 bg-[#E2E8F0] rounded-lg"
            animate={{
              height: ["0%", "80%", "80%"],
              opacity: [0.3, 0.7, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.2
            }}
          />
          <motion.div
            className="absolute bottom-0 left-12 w-20 h-20 bg-[#E2E8F0] rounded-lg"
            animate={{
              height: ["0%", "60%", "60%"],
              opacity: [0.3, 0.5, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.4
            }}
          />
        </motion.div>

        <motion.div
          className="text-[#E2E8F0] text-xl font-medium space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Building Dreams
          </motion.p>
          <div className="flex justify-center space-x-1">
            {[0, 1, 2].map((index) => (
              <motion.span
                key={index}
                className="w-2 h-2 bg-[#E2E8F0] rounded-full"
                animate={{
                  y: ["0%", "-50%", "0%"]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;

// import { motion } from "framer-motion";
// import { BsBuilding, BsHouseDoor, BsBuildingCheck } from "react-icons/bs";

// const LoadingScreen = () => {
//   return (
//     <div className="fixed inset-0 bg-[#192735] flex flex-col items-center justify-center z-50">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center"
//       >
//         <div className="flex items-center justify-center space-x-4 mb-8">
//           <motion.div
//             animate={{
//               scale: [1, 1.2, 1],
//               rotate: [0, 10, 0],
//               opacity: [0.5, 1, 0.5]
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: 0
//             }}
//           >
//             <BsHouseDoor className="w-8 h-8 text-[#E2E8F0]" />
//           </motion.div>
//           <motion.div
//             animate={{
//               scale: [1, 1.2, 1],
//               rotate: [0, 10, 0],
//               opacity: [0.5, 1, 0.5]
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: 0.3
//             }}
//           >
//             <BsBuilding className="w-10 h-10 text-[#E2E8F0]" />
//           </motion.div>
//           <motion.div
//             animate={{
//               scale: [1, 1.2, 1],
//               rotate: [0, 10, 0],
//               opacity: [0.5, 1, 0.5]
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: 0.6
//             }}
//           >
//             <BsBuildingCheck className="w-8 h-8 text-[#E2E8F0]" />
//           </motion.div>
//         </div>

//         <motion.p
//           className="text-[#E2E8F0] text-xl font-medium"
//           animate={{ opacity: [0.5, 1, 0.5] }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         >
//           Building Dreams
//         </motion.p>
//       </motion.div>
//     </div>
//   );
// };

// export default LoadingScreen;

