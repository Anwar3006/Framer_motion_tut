"use client";
import { motion, MotionConfig } from "framer-motion";
import React from "react";

const Gestures = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-7">
      <MotionConfig transition={{ duration: 0.35, ease: "easeInOut" }}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8, rotate: "-4.5deg" }}
          className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-xl text-white text-2xl shadow-lg shadow-red-600">
          Click Me!
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8, rotate: "-4.5deg" }}
          className="bg-yellow-700 hover:bg-yellow-600 px-4 py-2 rounded-xl text-white text-2xl shadow-lg shadow-indigo-600">
          Click Me!
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
