import React from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import bgImage from "./assets/bg6.png";
import wetNjoy from "./assets/wetNjoy.png";
import worqhat from "./assets/worqHat.png";
import campusPune from "./assets/campusPune.png";
import smashers from "./assets/Smashers.jpg";
import engineering from "./assets/Engineering.webp";
import codingSeekho from "./assets/coding_seekho.png";
import "@fontsource/medievalsharp";

const SponsorsSpeakers = () => {
  const sponsors = [
    {
      category: "Adventure  Partner",
      name: "Wet'n Joy",
      description: "Bringing you thrilling adventures and unforgettable experiences.",
      image: wetNjoy
    },
    {
      category: "Innovation Partner",
      name: "WorqHat",
      description: "Empowering innovation and creativity in every step.",
      image: worqhat
    },
    {
      category: "Youth Partner",
      name: "Campus Times Pune",
      description: "Your ultimate source for campus events, news, and student stories.",
      image: campusPune
    }
  ];

  const speakers = [
    {
      name: "Mr. Varun Singla",
      channel: "Gate Smashers",
      subscribers: "2.4M",
      followers: "59.7k",
      image: smashers,
      youtube: "https://www.youtube.com/@GateSmashers",
      instagram: "https://instagram.com/gate.smashers"
    },
    {
      name: "Mr. Shridhar Rajendra Mankar",
      channel: "5 Minutes Engineering",
      subscribers: "781k",
      followers: "6.8k",
      image: engineering,
      youtube: "https://www.youtube.com/@5MinutesEngineering",
      instagram: "https://instagram.com/5minutesengineering"
    },
    {
      name: "Mr. Sagnik Ghosh",
      channel: "WorqHat",
      subscribers: "-",
      followers: "-",
      image: worqhat,
      youtube: "https://www.youtube.com/@worqhat",
      instagram: "https://instagram.com/worqhat"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
   <section className="py-10 relative overflow-hidden">
  <div
    className="absolute inset-0 transform rotate-180 scale-x-[-1]"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: -1,
    }}
  />
      <div className="text-center">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#f4e1c1] border-b-4 border-[#D2691E] font-[MedievalSharp] inline-block"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          Our Sponsors & Speakers
        </motion.h2>
      </div>

      <div className="text-center m-8">
        <motion.h3
          className="text-xl sm:text-2xl md:text-3xl font-bold text-[#f4e1c1] border-b-2 border-[#D2691E] font-[MedievalSharp] inline-block mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Sponsors
        </motion.h3>
      </div>


      {/* Sponsors */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            className="bg-[#FFF8DC] p-5 rounded-lg shadow-lg border-2 border-[#8B4513] text-center"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0px 15px 30px rgba(0,0,0,0.5)",
              transition: { duration: 0.3 }
            }}
          >
            <img src={sponsor.image} alt={sponsor.name} className="mx-auto mb-4 w-28 h-28 object-contain rounded-lg" />
            <h3 className="text-lg font-bold text-[#4B2C20] font-[MedievalSharp]">{sponsor.category}</h3>
            <p className="text-xl text-[#8B4513] font-semibold mt-2">{sponsor.name}</p>
            <p className="text-sm text-[#5A3E2B] italic mt-2">{sponsor.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Speakers */}
      <div className="max-w-6xl mx-auto mt-14 px-4">
        <div className="text-center mb-8">
          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl font-bold text-[#f4e1c1] border-b-2 border-[#D2691E] font-[MedievalSharp] inline-block mb-6"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            MeetUp Speakers
          </motion.h3>
        </div>
        <div className=" flex items-center justify-center gap-4">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              className="bg-[#FFF8DC] w-64 h-80 p-4 rounded-lg shadow-lg border-2 border-[#8B4513] text-center"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.4)",
                transition: { duration: 0.3 }
              }}
            >
              <img src={speaker.image} alt={speaker.name} className="mx-auto mb-4 w-24 h-24 object-contain rounded-full" />
              <p className="text-lg font-bold text-[#4B2C20] font-[MedievalSharp]">{speaker.name}</p>
              <p className="text-sm text-[#5A3E2B] italic">{speaker.channel}</p>
              <div>
                {speaker.channel !== "WorqHat" ? (
                  <>
                    <p className="text-xs text-[#4B2C20] mt-1">YouTube: {speaker.subscribers}</p>
                    <p className="text-xs text-[#4B2C20]">Instagram: {speaker.followers}</p>
                  </>) : (<><br></br><p className="text-xs text-[#4B2C20]">Chief Executive Officer</p></>)}
              </div>
              <div className="flex justify-center gap-4 mt-3">
                {speaker.youtube && (
                  <a href={speaker.youtube} target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="text-red-600 text-xl hover:scale-110 transition-transform" />
                  </a>
                )}
                {speaker.instagram && (
                  <a href={speaker.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-pink-500 text-xl hover:scale-110 transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSpeakers;
