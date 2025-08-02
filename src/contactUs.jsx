import "@fontsource/medievalsharp";
import React from "react";
import bgImage from "./assets/bg6.png";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaUserFriends,
  FaLocationArrow,
} from "react-icons/fa";

const ContactUs = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const flipCardVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  return (
    <div
      className="w-full flex flex-col items-center justify-center text-center bg-cover bg-center px-4 relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        fontFamily: "'MedievalSharp', cursive",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <motion.div
        className="relative z-10 backdrop-blur-md bg-white/10 border border-white/30 shadow-2xl rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-4xl text-[#F4E1C1] my-6 sm:my-8 md:my-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-[#f4e1c1] drop-shadow-lg"
          variants={itemVariants}
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
          {/* Left Column: Location and Coordinators */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#E6C28B] flex items-center mb-2">
                <FaMapMarkerAlt className="mr-2 sm:mr-3 text-xl sm:text-2xl text-[#FFD700]" />{" "}
                Event Location
              </h3>
              <p className="text-sm sm:text-base">
                JSPM Rajarshi Shahu College of Engineering, Tathawade,
                Pimpri-Chinchwad, Maharashtra 411033
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#E6C28B] flex items-center mb-3 sm:mb-4">
                <FaUserFriends className="mr-2 sm:mr-3 text-xl sm:text-2xl text-[#FFD700]" /> Event
                Coordinators
              </h3>
              <div className="flex flex-col space-y-4">
                {/* Parth Kulkarni */}
                <motion.div
                  className="perspective-1000"
                  whileHover="back"
                  initial="front"
                >
                  <motion.div
                    className="relative w-full h-20 sm:h-24 preserve-3d"
                    variants={flipCardVariants}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Front Side */}
                    <div className="absolute w-full h-full backface-hidden bg-white/10 p-3 sm:p-4 rounded-lg flex items-center">
                      <p className="font-medium text-base sm:text-lg">
                        Parth Kulkarni
                      </p>
                    </div>
                    {/* Back Side */}
                    <div className="absolute w-full h-full backface-hidden bg-white/20 p-3 sm:p-4 rounded-lg flex items-center justify-center transform-rotate-y-180">
                      <p className="flex items-center text-sm sm:text-base">
                        <FaPhone className="mr-1 sm:mr-2" /> +91 8080681792
                      </p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Omanand Swami */}
                <motion.div
                  className="perspective-1000"
                  whileHover="back"
                  initial="front"
                >
                  <motion.div
                    className="relative w-full h-20 sm:h-24 preserve-3d"
                    variants={flipCardVariants}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Front Side */}
                    <div className="absolute w-full h-full backface-hidden bg-white/10 p-3 sm:p-4 rounded-lg flex items-center">
                      <p className="font-medium text-base sm:text-lg">
                        Omanand Swami
                      </p>
                    </div>
                    {/* Back Side */}
                    <div className="absolute w-full h-full backface-hidden bg-white/20 p-3 sm:p-4 rounded-lg flex items-center justify-center transform-rotate-y-180">
                      <p className="flex items-center text-sm sm:text-base">
                        <FaPhone className="mr-1 sm:mr-2" /> +91 94223 08688
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#E6C28B] flex items-center mb-2">
                <FaEnvelope className="mr-2 sm:mr-3 text-xl sm:text-2xl text-[#FFD700]" /> Support
                Email
              </h3>
              <p className="font-medium text-sm sm:text-base">
                codingclub@jspmrscoe.edu.in
              </p>
            </div>
            <div className="mb-4 sm:mb-6 text-left" variants={itemVariants}>
              <h3 className="text-lg sm:text-xl font-semibold text-[#E6C28B] flex items-center mb-2">
                <FaLocationArrow className="mr-2 sm:mr-3 text-xl sm:text-2xl text-[#FFD700]" /> Location
              </h3>
              <a
                href="https://maps.app.goo.gl/1693gQQtsQUcA5yw9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-400 text-sm sm:text-base break-words"
              >
                Open Google Maps
              </a>
            </div>
          </motion.div>

          {/* Right Column: Map */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg sm:text-xl font-semibold text-[#E6C28B] mb-2">
              Our Location on Map
            </h3>
            <div className="mt-2 overflow-hidden rounded-lg border-2 border-[#FFD700]">
              <iframe
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.5712039185974!2d73.74891767499322!3d18.60123036682553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9b099f982ef%3A0xe4b7759f68bc9d8e!2sJSPM%20Rajarshi%20Shahu%20College%20Of%20Engineering%20Tathawade!5e0!3m2!1sen!2sin!4v1710612345678"
                allowFullScreen
                loading="lazy"
                title="Event Location Map"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;