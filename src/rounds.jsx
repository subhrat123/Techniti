import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import foot from "./assets/foot2.png";
import bgImage from "./assets/bg6.png";
import { motion } from "framer-motion";
import "@fontsource/medievalsharp";
import "./rounds.css";

const Rounds = () => {
    const rounds = [
        { 
            title: "Vidyayuddha (The Battle of Knowledge)", 
            description: "Test your logical and analytical skills in this challenging opening round.", 
            time: "10:00 AM - 11:00 AM", 
            position: { top: "20%", left: "15%" } 
        },
        { 
            title: "Abhijnana (Test Of Recognition)", 
            description: "Identify, decode, and recognize patterns to prove your sharp intellect.", 
            time: "11:30 AM - 12:30 PM", 
            position: { top: "45%", left: "40%" } 
        },
        { 
            title: "Sanjeevanayuddha (The Battle of Survival)", 
            description: "A final face-off coding battle where only the most resilient will triumph.", 
            time: "2:00 PM - 3:30 PM", 
            position: { top: "60%", left: "68%" } 
        }
    ];

    // Animation variants for the main container to orchestrate children animations
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.8, // Time between each round's animation
            },
        },
    };

    // Variants for each round (marker + card)
    const roundItemVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    // Variants for the footprints path
    const footprintPathVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15, // Animate each footprint with a small delay
            },
        },
    };

    // Variants for individual footprints
    const footprintVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    // Helper function to calculate rotation angle for footprints
    const getRotationAngle = (start, end) => {
        const dx = parseFloat(end.left) - parseFloat(start.left);
        const dy = parseFloat(end.top) - parseFloat(start.top);
        return Math.atan2(dy, dx) * (180 / Math.PI);
    };

    // Function to generate animated footprints between two points
    const generateFootprints = (start, end, index) => {
        const footprints = [];
        const steps = 8;
        const rotation = getRotationAngle(start, end);

        for (let i = 1; i <= steps; i++) {
            const top = `${parseFloat(start.top) + ((parseFloat(end.top) - parseFloat(start.top)) * i / steps)}%`;
            const left = `${parseFloat(start.left) + ((parseFloat(end.left) - parseFloat(start.left)) * i / steps)}%`;

            footprints.push(
                <motion.img
                    key={`footprint-${index}-${i}`}
                    src={foot}
                    alt="footprint"
                    className="absolute w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 opacity-70"
                    style={{ top, left, transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
                    variants={footprintVariants}
                />
            );
        }
        return footprints;
    };

    return (
        <section id="rounds">
            <div className="min-h-screen w-full flex flex-col items-center justify-start text-center bg-cover bg-center select-none noselect py-8 md:py-10 overflow-hidden"
                style={{ backgroundImage: `url(${bgImage})` }}>
                
                <motion.h2 
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#f4e1c1] border-b-4 border-[#D2691E] font-[MedievalSharp] mt-8 md:mt-14"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Karya Yatra Marg
                </motion.h2>

                <motion.div 
                    className="relative w-full h-[600px] md:h-[700px] lg:h-[800px]"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Render Footprints Paths */}
                    {rounds.map((round, index) => (
                        index < rounds.length - 1 && (
                            <motion.div key={`path-${index}`} variants={footprintPathVariants}>
                                {generateFootprints(round.position, rounds[index + 1].position, index)}
                            </motion.div>
                        )
                    ))}

                    {/* Render Rounds */}
                    {rounds.map((round, index) => (
                        <motion.div
                            key={index}
                            className="absolute flex flex-col items-center"
                            style={{ top: round.position.top, left: round.position.left, transform: "translate(-50%, -50%)" }}
                            variants={roundItemVariants}
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                }}
                            >
                                <FaMapMarkerAlt className="text-red-600 text-4xl md:text-5xl drop-shadow-lg" />
                            </motion.div>
                            
                            <motion.div 
                                className="bg-[#FFF8DC] p-3 md:p-4 rounded-lg shadow-lg w-48 md:w-56 lg:w-64 text-center border-2 border-[#8B4513] mt-1 card-glow"
                                whileHover={{ 
                                    scale: 1.05, 
                                    y: -5,
                                    boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <h3 className="text-base md:text-lg font-bold text-[#4B2C20] font-[MedievalSharp]">{round.title}</h3>
                                <p className="text-[#5A3E2B] italic text-xs md:text-sm font-serif my-1 md:my-2">{round.description}</p>
                                <span className="text-xs md:text-sm text-[#654321] font-medium">{round.time}</span>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Rounds;