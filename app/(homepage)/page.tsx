"use client";
import React, { useEffect, useState } from "react";
import { motion, Variant } from "framer-motion";
import ScrollExample1 from "@/components/HorizontalScrollCarousel";
import VerticalScrollCarousel from "@/components/VerticalScrollCarousel";
import TextGradientOpacity from "@/components/Text/TGO";
import TextGradient from "@/components/TextGradient";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgb(253, 224, 71)",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <section className="bg-yellow-300 h-screen w-full">
        <div className="flex justify-center items-center h-full">
          <h1
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="text-9xl font-bold">
            Hello World
          </h1>
          <motion.div
            // @ts-ignore
            variants={variants}
            animate={cursorVariant}
            className="bg-black h-10 w-10 fixed top-0 left-0 rounded-full pointer-events-none"
          />
        </div>
      </section>

      <div className="h-6 w-full bg-gradient-to-b from-yellow-300 to-yellow-400" />

      <section className="bg-yellow-400 h-screen w-full">
        <div className="flex justify-center items-center h-full">
          <div className="border-2 p-7 rounded-md border-black mx-10 bg-gray-400 hover:scale-105 transition-all duration-300">
            <h1 className="text-6xl font-bold">Hello World</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              corrupti ea unde quidem, est, illo tempora facere pariatur cumque
              voluptas, accusantium natus excepturi! Incidunt minima eius
              tenetur quas, voluptas natus.
            </p>
          </div>
        </div>
      </section>

      <ScrollExample1 />
      <VerticalScrollCarousel />
      <main className="h-[105vh] bg-zinc-700">
        <TextGradientOpacity />
      </main>
      <main className="h-[105vh] bg-zinc-900 flex items-center justify-center">
        <TextGradient />
      </main>
    </>
  );
};

export default Home;
