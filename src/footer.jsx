import "@fontsource/medievalsharp";
import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <section
            id="footer"
            className="bg-[#4d2407] border-t-2 border-[#cf8239] text-[#F4E1C1] py-6"
            style={{ fontFamily: "'MedievalSharp', cursive" }}
        >
            <footer className="container mx-auto text-center">
                <h2 className="text-2xl font-bold text-[#FFD700] drop-shadow-lg">
                    ⚔️ Technical Event ⚔️
                </h2>
                <p className="text-[#E6C28B] text-sm mt-2">
                    A legendary coding battle filled with logic, scripting, face-offs, and illusions.
                </p>

                {/* Navigation Links */}
                <div className="mt-4 flex justify-center space-x-6">
                    <a href="#home" className="hover:underline text-[#FFD700]">
                        Home
                    </a>
                    <a href="#rounds" className="hover:underline text-[#FFD700]">
                        Rounds
                    </a>
                    <a href="#contact" className="hover:underline text-[#FFD700]">
                        Contact
                    </a>
                    <a href="#register" className="hover:underline text-[#FFD700]">
                        Register
                    </a>
                </div>

                {/* Social Media Links */}
                <div className="mt-6 flex justify-center space-x-6">
                    <a
                        href="https://www.instagram.com/codingclub.rscoe?igsh=cXBsN2dpbDRyMW05&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E6C28B] hover:text-[#FFD700] transition duration-300"
                    >
                        <FaInstagram size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/coding-club-rscoe/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E6C28B] hover:text-[#FFD700] transition duration-300"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UCw8qokuFX0z-1ePJ4Q3Rh8A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E6C28B] hover:text-[#FFD700] transition duration-300"
                    >
                        <FaYoutube size={24} />
                    </a>
                </div>

                {/* Mention Coding Club */}
                <p className="mt-4 text-[#E6C28B] text-sm">
                    Proudly organized by <span className="text-[#FFD700] font-semibold">Coding Club JSPM RSCOE</span>
                </p>

                {/* Copyright Notice */}
                <div className="mt-4 text-[#E6C28B] text-sm">
                    © {new Date().getFullYear()} Technical Event. All Rights Reserved.
                </div>
            </footer>
        </section>
    );
};

export default Footer;
