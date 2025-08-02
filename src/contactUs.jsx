import "@fontsource/medievalsharp";
import React from "react";
import bgImage from "./assets/bg6.png";
// eslint-disable-next-line no-unused-vars
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
      className="w-full flex flex-col items-center justify-center text-center bg-cover bg-center px-4 py-12 md:py-20 relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        fontFamily: "'MedievalSharp', cursive",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <motion.div
        className="relative z-10 backdrop-blur-md bg-white/10 border border-white/30 shadow-2xl rounded-2xl p-6 md:p-10 w-full max-w-5xl text-[#F4E1C1] my-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#f4e1c1] drop-shadow-xl"
          variants={itemVariants}
        >
          Contact Us
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {/* Left Column: Info */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Location */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-[#E6C28B] flex items-center mb-2">
                <FaMapMarkerAlt className="mr-2 text-xl" /> Event Location
              </h3>
              <p className="text-sm sm:text-base">
                JSPM Rajarshi Shahu College of Engineering, Tathawade,
                Pimpri-Chinchwad, Maharashtra 411033
              </p>
            </div>

            {/* Coordinators */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-[#E6C28B] flex items-center mb-4">
                <FaUserFriends className="mr-2 text-xl" /> Event Coordinators
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Parth Kulkarni', phone: '+91 8080681792' },
                  { name: 'Omanand Swami', phone: '+91 94223 08688' },
                ].map((coord) => (
                  <motion.div
                    key={coord.name}
                    className="perspective max-w-full"
                    whileHover="back"
                    initial="front"
                  >
                    <motion.div
                      className="relative w-full h-24 preserve-3d"
                      variants={flipCardVariants}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="absolute w-full h-full backface-hidden bg-white/10 p-4 rounded-xl flex items-center justify-center">
                        <p className="font-medium text-base md:text-lg">
                          {coord.name}
                        </p>
                      </div>
                      <div className="absolute w-full h-full backface-hidden bg-white/20 p-4 rounded-xl flex items-center justify-center transform-rotate-y-180">
                        <p className="flex items-center text-sm md:text-base">
                          <FaPhone className="mr-2" /> {coord.phone}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-[#E6C28B] flex items-center mb-2">
                <FaEnvelope className="mr-2 text-xl" /> Support Email
              </h3>
              <p className="font-medium text-sm sm:text-base">
                codingclub@jspmrscoe.edu.in
              </p>
            </div>

            {/* Google Maps */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-[#E6C28B] flex items-center mb-2">
                <FaLocationArrow className="mr-2 text-xl" /> Location
              </h3>
              <a
                href="https://maps.app.goo.gl/1693gQQtsQUcA5yw9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-1 text-blue-300 text-sm sm:text-base hover:underline"
              >
                Open in Google Maps
              </a>
            </div>
          </motion.div>

          {/* Right Column: Embedded Map */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg md:text-xl font-semibold text-[#E6C28B] mb-2">
              Our Location on Map
            </h3>
            <div className="mt-2 w-full overflow-hidden rounded-xl border-4 border-[#FFD700]">
              <iframe
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px]"
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
