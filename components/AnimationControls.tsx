"use client";
import { motion, useAnimationControls } from "framer-motion";
import React, { useState } from "react";

const AnimationControls = () => {
  const controls = useAnimationControls();

  const handleClick = () => {
    controls.start("flip");
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <button
        onClick={handleClick}
        className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-xl text-white text-2xl shadow-lg shadow-red-600">
        Click Me!
      </button>
      <motion.div
        variants={{
          initial: { rotate: "0deg" },
          flip: { rotate: "360deg", backgroundColor: "pink" },
        }}
        initial="initial"
        animate={controls}
        className="w-[12rem] h-[12rem] bg-black rounded-xl mt-8"
      />
    </div>
  );
};

export default AnimationControls;
