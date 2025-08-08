import React from "react";
import { motion } from "framer-motion";
import bgImage from "./assets/bg6.png";
import "@fontsource/medievalsharp";

const Prizing = () => {
  const prizes = [
    { title: "Only Competition", price: "₹349" },
    { title: "Competition + Meet-Up", price: "₹499" }
  ];

  return (
    <section id="prizing" className="py-10 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="text-center">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#f4e1c1] border-b-4 border-[#D2691E] font-[MedievalSharp] inline-block"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          Prizing
        </motion.h2>
      </div>

      <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
        {prizes.map((prize, index) => (
          <motion.div
            key={index}
            className="bg-[#FFF8DC] p-6 rounded-lg shadow-lg border-2 border-[#8B4513] text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0px 15px 30px rgba(0,0,0,0.5)",
              transition: { duration: 0.3 }
            }}
          >
            <h3 className="text-xl font-bold text-[#4B2C20] font-[MedievalSharp]">{prize.title}</h3>
            <p className="text-3xl text-[#8B0000] font-extrabold mt-3">{prize.price}</p>
          </motion.div>
        ))}
      </div>

      {/* Register Button */}
      <div className="text-center mt-10">
        <motion.a
          href="https://forms.gle/7418PyQ8kgsJa1Vc7"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#8a3714ff] text-white font-[MedievalSharp] px-6 py-3 rounded-lg text-lg shadow-lg border-2 border-[#8B4513]"
          whileHover={{
            scale: 1.1,
            backgroundColor: "#9d4925ff",
            boxShadow: "0px 10px 20px rgba(0,0,0,0.4)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          Register Now
        </motion.a>
      </div>
    </section>
  );
};

export default Prizing;
