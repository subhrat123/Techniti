import "@fontsource/medievalsharp";
import React from "react";
import bgImage from "./assets/bg6.png"; // Background image

const ContactUs = () => {
    return (
        <div
            className="min-h-screen w-full flex flex-col items-center justify-center text-center bg-cover bg-center px-4 py-12 relative"
            style={{ backgroundImage: `url(${bgImage})`, fontFamily: "'MedievalSharp', cursive" }}
        >
            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            {/* Contact Section with Glassmorphism */}
            <div className="relative z-10 backdrop-blur-md bg-white/10 border border-white/30 shadow-2xl rounded-lg p-8 w-full max-w-3xl text-[#F4E1C1]">
                <h2 className="text-4xl font-bold mb-6 text-[#f4e1c1] drop-shadow-lg"> Contact Us</h2>

                {/* Event Location */}
                <div className="mb-6 text-left">
                    <h3 className="text-xl font-semibold text-[#E6C28B]">📍 Event Location:</h3>
                    <p>JSPM Rajarshi Shahu College of Engineering, Tathawade, Service Rd, Ashok Nagar, Pimpri-Chinchwad, Maharashtra 411033</p>
                </div>

                {/* Event Coordinators */}
                <div className="mb-6 text-left">
                    <h3 className="text-xl font-semibold text-[#E6C28B]">👤 Event Coordinators:</h3>
                    <p className="font-medium text-[#FFD700]">Shreya Patil</p>
                    <p>📞 +91 98812 53332</p>

                    <p className="font-medium text-[#FFD700] mt-2">Omanand Swami</p>
                    <p>📞 +91 94223 08688</p>
                </div>


                <div className="mb-6 text-left">
                    <h3 className="text-xl font-semibold text-[#E6C28B]"> Support Email:</h3>
                    <p className="font-medium text-[#FFD700]">dhairyaneeti2025@gmail.com


                    </p>


                </div>
                {/* Contact Form */}
                {/* <form className="space-y-4 text-left">
                    <div>
                        <label className="block text-[#FFD700] font-medium">Your Name</label>
                        <input
                            type="text"
                            className="w-full p-3 border border-white/30 rounded bg-white/10 backdrop-blur-lg text-[#FFD700] focus:ring-2 focus:ring-[#FFD700]"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-[#FFD700] font-medium">Your Email</label>
                        <input
                            type="email"
                            className="w-full p-3 border border-white/30 rounded bg-white/10 backdrop-blur-lg text-[#FFD700] focus:ring-2 focus:ring-[#FFD700]"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-[#FFD700] font-medium">Your Message</label>
                        <textarea
                            className="w-full p-3 border border-white/30 rounded bg-white/10 backdrop-blur-lg text-[#FFD700] focus:ring-2 focus:ring-[#FFD700]"
                            rows="4"
                            placeholder="Type your message..."
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full px-6 py-3 text-lg font-bold rounded-lg shadow-md border border-[#FFD700] transition-all ease-in-out bg-gradient-to-r from-[#A56A34] via-[#C19A6B] to-[#FFD700] hover:from-[#FFD700] hover:to-[#C19A6B] text-[#3E1E00]"
                    >
                        Send Message
                    </button>
                </form> */}

                {/* Google Map Embed */}
                <div className="mt-8">
                    <iframe
                        className="w-full h-64 rounded-lg border-2 border-[#FFD700]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.5712039185974!2d73.74891767499322!3d18.60123036682553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9b099f982ef%3A0xe4b7759f68bc9d8e!2sJSPM%20Rajarshi%20Shahu%20College%20Of%20Engineering%20Tathawade!5e0!3m2!1sen!2sin!4v1710612345678"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
