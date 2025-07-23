import "@fontsource/medievalsharp";
import React from "react";
import { Link } from "react-router-dom";
import "./index.css"; // Ensure global styles are applied

const Navbar = () => {
    return (
        <div style={{ fontFamily: 'Samarkan', fontSize: '24px' }}>
            <div className="fixed top-0 w-full bg-[#4d2407] bg-opacity-95 backdrop-blur-lg shadow-xl border-b-4 border-[#cf8239] z-50">
                <nav className="flex justify-between items-center px-6 md:px-10 py-4">

                    {/* Event Name Styled with MedievalSharp Font */}
                    <h1 className="text-[#F4E1C1] text-3 font-extrabold tracking-widest drop-shadow-sm"
                        style={{ fontFamily: "'MedievalSharp', cursive" }}>
                        DHAIRYANEETI
                    </h1>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-8 text-[#E6C28B] text-lg font-semibold"
                        style={{ fontFamily: "'MedievalSharp', cursive" }}>
                        <Link to="/" className="hover:text-[#FFD700] transition duration-300 ease-in-out">Home</Link>
                        <Link to="/rounds" className="hover:text-[#FFD700] transition duration-300 ease-in-out">Rounds</Link>
                        <Link to="/contact" className="hover:text-[#FFD700] transition duration-300 ease-in-out">Contact</Link>
                        <a href="https://forms.gle/7418PyQ8kgsJa1Vc7" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition duration-300 ease-in-out">Register</a>
                    </div>

                    {/* Mobile Menu Placeholder (Future Expansion) */}
                    <div className="md:hidden">
                        {/* Consider adding a hamburger menu for mobile */}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
