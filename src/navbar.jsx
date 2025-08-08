import "@fontsource/medievalsharp";
import "@fontsource/poor-story";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State to track hover on floating navbar

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Variants for the initial navbar container
  const navbarVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Variants for the floating menu
  const floatingMenuVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  // Common link variants for hover/tap feedback
  const linkVariants = {
    hover: { scale: 1.1, color: "#FFD700" },
    tap: { scale: 0.95 },
  };

  // Variants for expanding links from the left
  const leftLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Variants for expanding links from the right
  const rightLinkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Reusable Logo component for the floating navbar
  const FloatingLogo = () => (
    <Link to="/">
      <h1 className="text-[#F4E1C1] text-2xl font-bold tracking-wide flex items-center">
        <div className="inline-flex items-baseline select-none">
          <span className="font-[MedievalSharp] text-4xl tracking-tight">
            Tech
          </span>
          <span className="text-4xl font-[MedievalSharp] tracking-tight">
            Neeti
          </span>
        </div>
      </h1>
    </Link>
  );

  return (
    <>
      {/* Initial Navbar (No changes here) */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            style={{ fontFamily: "Samarkan, sans-serif" }}
            variants={navbarVariants}
            initial="initial"
            animate="animate"
            exit="initial"
          >
            <div className="fixed top-0 w-full bg-[#4d2407] bg-opacity-95 backdrop-blur-lg shadow-xl border-b-4 border-[#cf8239] z-50">
              <nav className="flex justify-between items-center px-6 md:px-10 py-4">
                <h1 className="text-[#F4E1C1] text-3xl font-extrabold tracking-wider drop-shadow-lg flex items-center">
                  <div className="inline-flex items-baseline select-none">
                    <span className="font-[MedievalSharp] text-4xl tracking-tight">
                      Tech
                    </span>
                    <span className="text-4xl font-[MedievalSharp] tracking-tight">
                      Neeti
                    </span>
                  </div>
                </h1>
                <div
                  className="hidden md:flex space-x-8 text-[#E6C28B] text-lg font-semibold items-center"
                  style={{ fontFamily: "'MedievalSharp', cursive" }}
                >
                  <motion.div
                    variants={linkVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Link to="/">Home</Link>
                  </motion.div>
                  <motion.div
                    variants={linkVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Link to="/rounds">Rounds</Link>
                  </motion.div>
                  <motion.div
                    variants={linkVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Link to="/contact">Contact</Link>
                  </motion.div>
                  <motion.a
                    href="https://forms.gle/7418PyQ8kgsJa1Vc7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#A56A34] px-4 text-[#3E1E00] py-2 rounded-lg hover:bg-[#C19A6B] transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Register
                  </motion.a>
                </div>
                <div className="md:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-[#E6C28B] hover:text-[#FFD700] z-50 relative"
                  >
                    {/* Hamburger/close icon */}
                  </button>
                </div>
              </nav>
              <AnimatePresence>
                {isOpen && (
                  <motion.div className="md:hidden absolute top-full left-0 w-full bg-[#4d2407] bg-opacity-95 backdrop-blur-lg flex flex-col items-center space-y-4 py-6">
                    {/* Mobile menu items */}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Navbar (MODIFIED) */}
      {/* Floating Navbar */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            className="fixed top-4 inset-x-0 mx-auto w-fit z-50"
            variants={floatingMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              className="bg-[#4d2407] bg-opacity-80 backdrop-blur-xl shadow-2xl rounded-full"
              initial={false}
              animate={{
                paddingLeft: isHovered ? "2rem" : "1.5rem",
                paddingRight: isHovered ? "2rem" : "1.5rem",
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              <nav className="flex items-center overflow-hidden p-2">
                {/* Left Links - Smooth appear on hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className="flex items-center space-x-6"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{
                        width: "auto",
                        opacity: 1,
                        transition: {
                          duration: 0.3,
                          ease: "easeOut",
                          delay: 0.1,
                        },
                      }}
                      exit={{
                        width: 0,
                        opacity: 0,
                        transition: {
                          duration: 0.2,
                          ease: "easeIn",
                        },
                      }}
                    >
                      <motion.div
                        variants={linkVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Link
                          to="/"
                          className="text-[#E6C28B] text-lg whitespace-nowrap"
                        >
                          Home
                        </Link>
                      </motion.div>
                      <motion.div
                        variants={linkVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Link
                          to="/rounds"
                          className="text-[#E6C28B] text-lg whitespace-nowrap"
                        >
                          Rounds
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Centered Logo - With subtle scale animation */}
                <motion.div
                  className="px-6 flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <FloatingLogo />
                </motion.div>

                {/* Right Links - Smooth appear on hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className="flex items-center space-x-6"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{
                        width: "auto",
                        opacity: 1,
                        transition: {
                          duration: 0.3,
                          ease: "easeOut",
                          delay: 0.1,
                        },
                      }}
                      exit={{
                        width: 0,
                        opacity: 0,
                        transition: {
                          duration: 0.2,
                          ease: "easeIn",
                        },
                      }}
                    >
                      <motion.div
                        variants={linkVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Link
                          to="/contact"
                          className="text-[#E6C28B] text-lg whitespace-nowrap"
                        >
                          Contact
                        </Link>
                      </motion.div>
                      <motion.a
                        href="https://forms.gle/7418PyQ8kgsJa1Vc7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#A56A34] px-5 py-2 rounded-full text-[#3E1E00] font-bold text-lg hover:bg-[#C19A6B] whitespace-nowrap"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Register
                      </motion.a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
