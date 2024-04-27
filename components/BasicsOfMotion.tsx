"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BasicsOfMotion = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <motion.button
        onClick={() => setShow(!show)}
        layout
        className="bg-zinc-700 hover:bg-stone-600 text-white font-bold py-2 px-4 rounded">
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {show && (
          <motion.div
            initial={{ scale: 0, rotate: "0deg", y: 0 }}
            animate={{ scale: 1, rotate: "180deg", y: [0, 150, -150, -150, 0] }}
            exit={{ scale: 0, rotate: "0deg", y: 0 }}
            transition={{
              duration: 0.7,
              ease: "backInOut",
              times: [0, 0.25, 0.4, 0.85, 1], //similar to KeyFrames, between 0 & 1 is 0 - 100%
            }}
            className="w-[12rem] h-[12rem] bg-black rounded-xl mt-8"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsOfMotion;
