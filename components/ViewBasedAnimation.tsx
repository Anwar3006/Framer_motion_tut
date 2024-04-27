"use client";
import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const ViewBasedAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <>
      <div className="h-[100vh]" />
      <motion.div
        className="bg-zinc-800 h-[105vh]"
        variants={variants}
        initial={"initial"}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        whileInView={"animate"}
      />
      <div
        ref={ref}
        className={`h-[100vh] ${
          isInView ? "bg-gray-300" : "bg-black"
        } transition duration-1000 flex items-center justify-center`}>
        <h1 className={`text-7xl ${isInView ? "text-black" : "text-gray"}`}>
          Hello
        </h1>
      </div>
    </>
  );
};

export default ViewBasedAnimation;
