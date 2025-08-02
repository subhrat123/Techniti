import React from "react";
import bgImage from "./assets/bg10.jpg";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./rounds.css";

const Landing = () => {
  // For the interactive parallax effect
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Container variant for staggering children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  // Variants for individual child elements
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // More engaging button variants
  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 25px rgba(255, 215, 0, 0.7)",
      transition: {
        duration: 0.4,
        yoyo: Infinity,
        ease: "easeInOut",
      },
    },
    tap: { scale: 0.95 },
  };

  // Animation for each word in the title
  const titleWordVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const title = "Welcome to".split(" ");
  const techNeeti = ["Tech", "Neeti"];

  return (
    <div style={{ fontFamily: "Samarkan, sans-serif", fontSize: "24px" }}>
      <section id="landing">
        <div className="h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden relative noselect">
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Enhanced Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-[4px]" />

          {/* Content with Parallax Effect */}
          <motion.div
            className="relative z-10 px-4 flex flex-col items-center"
            style={{ y: yRange }}
          >
            <motion.div
              className="text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-6xl font-extrabold mb-4 text-[#f4e1c1] drop-shadow-md">
                {title.map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    variants={titleWordVariants}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}{" "}
                <br />
                {/* <span className="inline-flex items-center">
                                     <motion.span className="font-[MedievalSharp] text-5xl mr-2" variants={titleWordVariants}>
                                         {techNeeti[0]}
                                     </motion.span>
                                     <motion.span className="font-[MedievalSharp] text-5xl" variants={titleWordVariants}>
                                         {techNeeti[1]}
                                     </motion.span>
                                </span> */}
                <div className="inline-flex items-baseline select-none text-5xl">
                  <span className="font-[MedievalSharp] tracking-tight">
                    Tech
                  </span>
                  <span className="font-[MedievalSharp] tracking-tight">
                    Neeti
                  </span>
                </div>
              </h1>
              <motion.p
                className="text-[#E6C28B] text-sm mb-2"
                variants={itemVariants}
              >
                (The Code Dharma)
              </motion.p>
            </motion.div>

            <motion.p
              className="text-3xl font-semibold font-[MedievalSharp] text-[#f4e1c1] drop-shadow-md max-w-3xl mx-auto mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Join us for an exciting journey of learning, competition, and
              networking.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <a
                href="https://forms.gle/7418PyQ8kgsJa1Vc7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="relative px-10 py-4 text-[#3E1E00] text-lg font-bold rounded-lg shadow-md border-2 border-[#C19A6B] mt-10
                                    bg-gradient-to-r from-[#A56A34] via-[#C19A6B] to-[#A56A34]"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span className="font-[MedievalSharp] text-xl">
                    Register Now
                  </span>
                </motion.button>
              </a>
            </motion.div>
          </motion.div>

          {/* Animated Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 15, 0] }}
            transition={{
              delay: 2.5,
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              className="w-8 h-8 text-[#E6C28B]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
