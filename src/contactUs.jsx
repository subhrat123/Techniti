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
import "./contactUs.css"; // Include the CSS file
  
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

  

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center px-4 relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        fontFamily: "'MedievalSharp', cursive",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <motion.div
        className="relative z-10 backdrop-blur-md bg-white/10 border border-white/30 shadow-2xl rounded-lg p-4 md:p-8 w-full max-w-4xl text-[#F4E1C1] my-8 md:my-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-[#f4e1c1] drop-shadow-lg"
          variants={itemVariants}
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 text-left">
          {/* Left Column: Location and Coordinators */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-[#E6C28B] flex items-center mb-2">
                <FaMapMarkerAlt className="mr-2 md:mr-3 text-xl md:text-2xl text-[#FFD700]" />
                Event Location
              </h3>
              <p className="text-sm md:text-base">
                JSPM Rajarshi Shahu College of Engineering, Tathawade,
                Pimpri-Chinchwad, Maharashtra 411033
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-[#E6C28B] flex items-center mb-3 md:mb-4">
                <FaUserFriends className="mr-2 md:mr-3 text-xl md:text-2xl text-[#FFD700]" />
                Event Coordinators
              </h3>
              <div className="flex flex-col space-y-4">
                {/* Coordinator 1: Parth Kulkarni */}
                <div className="desktop-card perspective-1000 hidden md:block">
                  <motion.div
                    className="relative w-full h-20 md:h-24 preserve-3d"
                    
                    initial="front"
                    whileHover="back"
                    transition={{ duration: 0.6 }}
                  >
                    {/* Front Side */}
                    <div className="absolute w-full h-full backface-hidden bg-white/10 p-3 md:p-4 rounded-lg flex items-center">
                      <p className="font-medium text-base md:text-lg">
                        Parth Kulkarni
                      </p>
                    </div>
                    {/* Back Side */}
                    <div className="absolute w-full h-full backface-hidden bg-white/20 p-3 md:p-4 rounded-lg flex items-center justify-center transform-rotate-y-180">
                      <p className="flex items-center text-sm md:text-base">
                        <FaPhone className="mr-1 md:mr-2" /> +91 8080681792
                      </p>
                    </div>
                  </motion.div>
                </div>
                {/* Mobile Card */}
                <div className="mobile-card block md:hidden bg-white/10 p-3 rounded-lg">
                  <p className="font-medium text-base">Parth Kulkarni</p>
                  <p className="flex items-center text-sm mt-1">
                    <FaPhone className="mr-1" /> +91 8080681792
                  </p>
                </div>

                {/* Coordinator 2: Omanand Swami */}
                <div className="desktop-card perspective-1000 hidden md:block">
                  <motion.div
                    className="relative w-full h-20 md:h-24 preserve-3d"
                    
                    initial="front"
                    whileHover="back"
                    transition={{ duration: 0.6 }}
                  >
                    {/* Front Side */}
                    <div className="absolute w-full h-full backface-hidden bg-white/10 p-3 md:p-4 rounded-lg flex items-center">
                      <p className="font-medium text-base md:text-lg">
                        Omanand Swami
                      </p>
                    </div>
                    {/* Back Side */}
                    <div className="absolute w-full h-full backface-hidden bg-white/20 p-3 md:p-4 rounded-lg flex items-center justify-center transform-rotate-y-180">
                      <p className="flex items-center text-sm md:text-base">
                        <FaPhone className="mr-1 md:mr-2" /> +91 94223 08688
                      </p>
                    </div>
                  </motion.div>
                </div>
                {/* Mobile Card */}
                <div className="mobile-card block md:hidden bg-white/10 p-3 rounded-lg">
                  <p className="font-medium text-base">Omanand Swami</p>
                  <p className="flex items-center text-sm mt-1">
                    <FaPhone className="mr-1" /> +91 94223 08688
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-[#E6C28B] flex items-center mb-2">
                <FaEnvelope className="mr-2 md:mr-3 text-xl md:text-2xl text-[#FFD700]" />
                Support Email
              </h3>
              <p className="font-medium text-sm md:text-base">
                helpdesk.codingclubrscoe@gmail.com
              </p>
            </div>

            <div className="mb-4 md:mb-6 text-left" variants={itemVariants}>
              <h3 className="text-lg md:text-xl font-semibold text-[#E6C28B] flex items-center mb-2">
                <FaLocationArrow className="mr-2 md:mr-3 text-xl md:text-2xl text-[#FFD700]" />
                Location
              </h3>
              <a
                href="https://maps.app.goo.gl/1693gQQtsQUcA5yw9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-400 text-sm md:text-base"
              >
                Open Google Maps
              </a>
            </div>
          </motion.div>

          {/* Right Column: Map */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg md:text-xl font-semibold text-[#E6C28B] mb-2">
              Our Location on Map
            </h3>
            <div className="mt-2">
              <iframe
                className="w-full h-64 md:h-80 lg:h-96 rounded-lg border-2 border-[#FFD700]"
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