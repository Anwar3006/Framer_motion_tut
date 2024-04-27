"use client";
import {
  MotionValue,
  motion,
  progress,
  useScroll,
  useTransform,
} from "framer-motion";
import { Acme } from "next/font/google";
import React, { useEffect, useRef } from "react";

const acme = Acme({ weight: "400", subsets: ["latin"] });
interface ParagraphProps {
  text: string;
}

const Word: React.FC<ParagraphProps> = ({ text }) => {
  const WordArray = text.split(" ");
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.8", "start 0.25"],
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <p
        ref={targetRef}
        className={`${acme.className} text-[3.5rem] text-white max-w-screen-xl p-10 flex flex-wrap`}>
        {WordArray.map((word: string, index: number) => {
          const start = index / WordArray.length;
          const end = start + 1 / WordArray.length;

          return (
            <ArrayWords
              word={word}
              range={[start, end]}
              progress={scrollYProgress}
              key={index}
            />
          );
        })}
      </p>
    </div>
  );
};

export default Word;

interface ArrayWordsProps {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}
const ArrayWords: React.FC<ArrayWordsProps> = ({ word, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="mr-3 mt-3 leading-none relative">
      <span className="shadow absolute opacity-10">{word}</span>
      <motion.span style={{ opacity }}>{word}</motion.span>
    </span>
  );
};
