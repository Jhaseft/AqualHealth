// TeamCard.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TeamCard({ member }) {
  const [hovered, setHovered] = useState(false);
  const { name, role, image, description } = member;

  return (
    <div
      className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg h-full flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-80 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
      />
      <div className="p-4 bg-white">
        <p className="text-sm text-gray-500">{role}</p>
        <h3 className="text-lg font-bold">{name}</h3>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-gradient-to-b from-teal-800 to-teal-500 text-white p-6 flex flex-col justify-center"
          >
            <p className="text-sm uppercase tracking-widest">{role}</p>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{name}</h3>
            <p className="mt-2 text-sm leading-relaxed">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
