import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import foot from "./assets/foot2.png";
import bgImage from "./assets/bg6.png";
import { motion } from "framer-motion";
import "@fontsource/medievalsharp";
import "./rounds.css"; // Make sure to include the CSS file

const Rounds = () => {
    // Responsive positioning - different layouts for different screen sizes
    const rounds = [
        {
            title: "Vidyayuddha (The Battle of Knowledge)",
            description: "Test your logical and analytical skills in this challenging opening round.",
            position: {
                // Desktop/tablet positioning
                desktop: { top: "20%", left: "25%" },
                // Mobile positioning - more centered and stacked
                mobile: { top: "15%", left: "50%" }
            }
        },
        {
            title: "Sanjeevanayuddha (The Battle of Survival)",
            description: "A final face-off coding battle where only the most resilient will triumph.",
            position: {
                 desktop: { top: "45%", left: "50%" },
                mobile: { top: "48%", left: "50%" }
            }
        },
        {
            title: "Ashtaprahar (The Unbroken Code)",
            description: "A relentless 24-hour hackathon where creativity meets endurance, and only the most innovative solutions prevail.",
            position: {
                desktop: { top: "70%", left: "75%" },
                mobile: { top: "85%", left: "50%" }
            }
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
    const generateFootprints = (start, end, index, isMobile) => {
        const footprints = [];
        const steps = isMobile ? 4 : 8; // Fewer footprints on mobile
        const rotation = getRotationAngle(start, end);

        for (let i = 1; i <= steps; i++) {
            const top = `${parseFloat(start.top) + ((parseFloat(end.top) - parseFloat(start.top)) * i / steps)}%`;
            const left = `${parseFloat(start.left) + ((parseFloat(end.left) - parseFloat(start.left)) * i / steps)}%`;

            footprints.push(
                <motion.img
                    key={`footprint-${index}-${i}`}
                    src={foot}
                    alt="footprint"
                    className="absolute w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 opacity-70"
                    style={{ top, left, transform: `translate(-50%, -50%) rotate(${rotation}deg)` }}
                    variants={footprintVariants}
                />
            );
        }
        return footprints;
    };

    // Hook to detect screen size
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Get position based on screen size
    const getPosition = (round) => {
        return isMobile ? round.position.mobile : round.position.desktop;
    };

    return (
        <section id="rounds">
            <div className="min-h-screen w-full flex flex-col items-center justify-start text-center bg-cover bg-center select-none noselect py-10 overflow-hidden px-4"
                style={{ backgroundImage: `url(${bgImage})` }}>

                <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#f4e1c1] border-b-4 border-[#D2691E] font-[MedievalSharp] mt-8 sm:mt-14"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Rounds of the Battle
                </motion.h2>

                <motion.div
                    className="relative w-full h-[600px] sm:h-[700px] md:h-[800px] max-w-screen-xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Render Footprints Paths - Hide on mobile for cleaner look */}
                    {!isMobile && rounds.map((round, index) => (
                        index < rounds.length - 1 && (
                            <motion.div key={`path-${index}`} variants={footprintPathVariants}>
                                {generateFootprints(
                                    getPosition(round),
                                    getPosition(rounds[index + 1]),
                                    index,
                                    isMobile
                                )}
                            </motion.div>
                        )
                    ))}

                    {/* Render Rounds */}
                    {rounds.map((round, index) => {
                        const position = getPosition(round);
                        return (
                            <motion.div
                                key={index}
                                className="absolute flex flex-col items-center mt-6"
                                style={{
                                    top: position.top,
                                    left: position.left,
                                    x: "-50%", // Corrected: Use x for horizontal translation
                                    y: "-50%", // Corrected: Use y for vertical translation
                                    // Ensure cards stay within viewport on mobile
                                    maxWidth: isMobile ? "280px" : "none"
                                }}
                                variants={roundItemVariants}
                            >
                                <motion.div
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                    }}
                                >
                                    <FaMapMarkerAlt className="text-red-600 text-3xl sm:text-4xl md:text-5xl drop-shadow-lg" />
                                </motion.div>

                                <motion.div
                                    className="bg-[#FFF8DC] p-3 sm:p-4 rounded-lg shadow-lg w-48 sm:w-52 md:w-56 lg:w-64 text-center border-2 border-[#8B4513] mt-1 card-glow mx-2"
                                    whileHover={{
                                        scale: isMobile ? 1.05 : 1.1, // Less aggressive scaling on mobile
                                        y: isMobile ? -3 : -5,
                                        boxShadow: "0px 15px 30px rgba(0,0,0,0.5)",
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#4B2C20] font-[MedievalSharp] leading-tight">
                                        {round.title}
                                    </h3>
                                    <p className="text-[#5A3E2B] italic text-xs sm:text-sm font-serif my-2 leading-relaxed">
                                        {round.description}
                                    </p>
                                   
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Rounds;