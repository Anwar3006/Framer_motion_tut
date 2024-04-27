"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const MultiLayerParallax = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const fullImageY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

  return (
    <div
      ref={targetRef}
      className="w-full h-screen relative overflow-hidden flex items-center justify-center">
      <motion.h1
        style={{ y: textY }}
        className="text-6xl md:text-8xl text-gray-200 font-bold relative z-10 mb-[20rem]">
        MultiLayerParallax
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-bottom"
        style={{
          backgroundImage: "url(/images/image-full.jpg)",
          y: fullImageY,
        }}
      />
      <motion.div
        className="absolute inset-0 z-20 bg-cover bg-bottom"
        style={{ backgroundImage: "url(/images/image-bottom.png)" }}
      />
    </div>
  );
};

export default MultiLayerParallax;
