"use client";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { Acme } from "next/font/google";
import React, { useEffect, useRef } from "react";

const acme = Acme({ weight: "400", subsets: ["latin"] });
interface ParagraphProps {
  text: string;
}

const Character: React.FC<ParagraphProps> = ({ text }) => {
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
            <ArrayCharacter
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

export default Character;

interface ArrayCharacterProps {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}
const ArrayCharacter: React.FC<ArrayCharacterProps> = ({
  word,
  range,
  progress,
}) => {
  const characterArray = word.split("");
  const amount = range[1] - range[0];
  const stepSize = amount / word.length;
  return (
    <span className="mr-3 mt-3 leading-none relative">
      {characterArray.map((char: string, index: number) => {
        const start = range[0] + index * stepSize;
        const end = range[0] + (index + 1) * stepSize;
        // console.log([start, end]);
        return (
          <Char
            key={index}
            char={char}
            range={[start, end]}
            progress={progress}
          />
        );
      })}
    </span>
  );
};

interface CharProps {
  char: string;
  range: [number, number];
  progress: MotionValue<number>;
}

const Char: React.FC<CharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative">
      <span className="absolute opacity-10">{char}</span>
      <motion.span style={{ opacity }}>{char}</motion.span>
    </span>
  );
};
