"use client";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import useDimension from "@/hook/useDimension";

const VerticalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  //get height of screen to use
  const { height } = useDimension();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 2.8]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 1.6]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="main">
      <div className="h-screen bg-gray-500" />
      <div
        ref={targetRef}
        className="gallery h-[175vh] flex flex-row bg-zinc-700 gap-[2vw] p-[2vw] box-border overflow-hidden 
        [&>div:nth-of-type(1)]:top-[-45%] [&>div:nth-of-type(2)]:top-[-95%] [&>div:nth-of-type(3)]:top-[-75%] [&>div:nth-of-type(4)]:top-[-35%]">
        <Column images={[images[0], images[1], images[2]]} y={y1} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
    </main>
  );
};

export default VerticalScrollCarousel;

const images = [
  "/images/img-1.jpg",
  "/images/img-2.jpg",
  "/images/img-3.jpg",
  "/images/img-4.jpg",
  "/images/img-5.jpg",
  "/images/img-6.jpeg",
  "/images/img-7.jpeg",
  "/images/img-8.jpeg",
  "/images/img-9.jpg",
  "/images/img-10.jpeg",
  "/images/img-11.jpg",
  "/images/img-12.jpeg",
];

type ColumnProps = {
  images: string[];
  y?: MotionValue;
};

const Column: React.FC<ColumnProps> = ({ images, y }) => {
  return (
    <motion.div
      style={{ y }}
      className="column w-[25%] h-[100%] flex flex-col gap-[2vw] min-w-[250px] relative ">
      {images.map((src: string, index: number) => (
        <div
          className="imageContainer w-[100%] h-[100%] relative rounded-[1vw] overflow-hidden"
          key={index}>
          <Image
            src={src}
            sizes="25vw"
            fill
            alt="image"
            className="object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
};
