import "@fontsource/medievalsharp";
import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    
    const socialIconVariants = {
        hover: {
            scale: 1.2,
            color: "#FFD700",
            transition: { duration: 0.3 },
        },
        tap: { scale: 0.9 },
    };

    const footerVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <motion.section
            id="footer"
            className="bg-[#4d2407] border-t-2 border-[#cf8239] text-[#F4E1C1] py-8"
            style={{ fontFamily: "'MedievalSharp', cursive" }}
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <footer className="container mx-auto text-center px-4">
                <h2 className="text-2xl font-bold  drop-shadow-lg">
                    ⚔️ <div className="inline-flex items-baseline select-none">
          <span className="font-[MedievalSharp] text-32l tracking-tight">
            Tech
          </span>
          <span className="text-32l font-[MedievalSharp] tracking-tight">
            Neeti
          </span>
        </div> ⚔️
                </h2>
                <p className="text-[#E6C28B] text-sm mt-2 max-w-lg mx-auto">
                    A legendary coding battle filled with logic, scripting, face-offs, and illusions.
                </p>

                {/* Navigation Links */}
                <div className="mt-4 flex justify-center space-x-6">
                    <motion.a href="#home" className="hover:underline " whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Home</motion.a>
                    <motion.a href="#rounds" className="hover:underline " whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Rounds</motion.a>
                    <motion.a href="#contact" className="hover:underline " whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Contact</motion.a>
                </div>

                {/* Social Media Links */}
                <div className="mt-6 flex justify-center space-x-6">
                    <motion.a href="https://www.instagram.com/codingclub.rscoe" target="_blank" rel="noopener noreferrer" className="text-[#E6C28B]" variants={socialIconVariants} whileHover="hover" whileTap="tap">
                        <FaInstagram size={28} />
                    </motion.a>
                    <motion.a href="https://in.linkedin.com/company/coding-club-rscoe/" target="_blank" rel="noopener noreferrer" className="text-[#E6C28B]" variants={socialIconVariants} whileHover="hover" whileTap="tap">
                        <FaLinkedin size={28} />
                    </motion.a>
                    <motion.a href="https://www.youtube.com/@codingclub-rscoe" target="_blank" rel="noopener noreferrer" className="text-[#E6C28B]" variants={socialIconVariants} whileHover="hover" whileTap="tap">
                        <FaYoutube size={28} />
                    </motion.a>
                </div>

                {/* Mention Coding Club */}
                <p className="mt-6 text-[#E6C28B] text-sm">
                    Proudly organized by <span className=" font-semibold">Coding Club JSPM RSCOE</span>
                </p>

                {/* Copyright Notice */}
                <div className="mt-4 text-[#E6C28B] text-xs opacity-70">
                    © {new Date().getFullYear()} TechNeeti. All Rights Reserved.
                </div>
            </footer>
        </motion.section>
    );
};

export default Footer;