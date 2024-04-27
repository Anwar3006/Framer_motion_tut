"use client";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { Acme } from "next/font/google";
import React, { useRef } from "react";

const acme = Acme({ weight: "400", subsets: ["latin"] });
const paragraph =
  "Ersten seelen schöne mich es unbestimmten ich seh mögt mit. Noch nennt mein noch wirklichkeiten fühlt. In mich ergreift.";

const TextGradient = () => {
  const splitParagraph = paragraph.split(" ");
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.7", "start center"],
  });

  return (
    <p
      ref={targetRef}
      className={`${acme.className} text-6xl text-white flex flex-wrap px-10`}>
      {splitParagraph.map((word: string, index: number) => {
        const start = index / splitParagraph.length;
        const end = start + 1 / splitParagraph.length;
        return (
          <Words
            key={index}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
};

export default TextGradient;

interface WordsProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Words: React.FC<WordsProps> = ({ word, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative">
      <span className="absolute opacity-10">{word}</span>
      <motion.span style={{ opacity }} className="mr-3 mt-3 leading-none">
        {word}
      </motion.span>
    </span>
  );
};
