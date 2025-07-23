import React from "react";
import bgImage from "./assets/bg10.jpg"; // Background image
//import "@fontsource/medievalsharp"; // Import MedievalSharp font for an ancient look
import "./rounds.css";

const Landing = () => {
    return (

        <div style={{ fontFamily: 'Samarkan', fontSize: '24px' }}>
            <section id="landing">
                <div
                    className="h-screen w-full flex flex-col items-center justify-center text-center bg-cover bg-center relative noselect"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    {/* Overlay for Blurred Background Effect */}
                    <div className="absolute inset-0 bg-black bg-opacity-5 backdrop-blur-[2px]"></div>

                    {/* Content */}
                    <div className="relative z-10">
                        {/* Title with MedievalSharp Font */}
                        <h1 className="text-6xl font-extrabold mb-4 text-[#f4e1c1] drop-shadow-md mt-12">
                            Welcome to Our Event
                        </h1>

                        {/* Description with MedievalSharp Font */}
                        <p className="text-3xl font-semibold font-[MedievalSharp] text-[#f4e1c1] drop-shadow-md max-w-3xl mt-6">
                            Join us for an exciting journey of learning, competition, and networking.
                        </p>

                        {/* Styled Register Button Similar to Navbar */}
                        <a href="https://forms.gle/7418PyQ8kgsJa1Vc7" className="mt-2" target="_blank" rel="noopener noreferrer">
                            <button className="relative px-10 py-4 text-[#3E1E00] text-lg font-bold rounded-lg shadow-md border-2 border-[#C19A6B] transition-all ease-in-out 
                        bg-gradient-to-r from-[#A56A34] via-[#C19A6B] to-[#A56A34] hover:from-[#A56A34] hover:to-[#C19A6B] mt-10">
                                <span className="absolute inset-0 flex items-center justify-center font-[MedievalSharp] text-base">
                                    Register
                                </span>
                            </button>
                        </a>
                    </div>
                </div>

            </section>
        </div >
    );
};

export default Landing;
