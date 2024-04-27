"use client";
import { motion, useScroll } from "framer-motion";
import { Acme } from "next/font/google";
import React, { useEffect, useRef } from "react";

const acme = Acme({ weight: "400", subsets: ["latin"] });
interface ParagraphProps {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.8", "start 0.25"],
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <motion.p
        ref={targetRef}
        style={{ opacity: scrollYProgress }}
        className={`${acme.className} text-[3.5rem] text-white max-w-screen-xl p-10 flex flex-wrap`}>
        {text}
      </motion.p>
    </div>
  );
};

export default Paragraph;
