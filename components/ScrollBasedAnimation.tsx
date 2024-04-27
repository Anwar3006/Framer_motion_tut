"use client";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import React, { useEffect } from "react";

const ScrollBasedAnimation = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
  });
  const bg = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(86, 1, 245)", "rgb(1, 245, 13)"]
  );

  //   useEffect(() => {
  //     console.log(scrollYProgress);
  //   }, [scrollYProgress]);

  return (
    <div>
      <motion.div
        className={`h-[2rem] sticky top-0 origin-left `}
        style={{ scaleX: scaleX, background: bg }}
      />
      <div className="px-4 py-2">
        <p className="mb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quam
          ducimus alias exercitationem necessitatibus facilis, nostrum numquam
          fugiat, eaque similique et beatae quia consequatur sunt dicta tenetur
          temporibus cupiditate reiciendis! Nihil autem expedita provident sint!
          Doloribus consectetur veritatis dolore omnis. Ducimus, iure. Autem
          odit aperiam, voluptates illum doloremque aut at ducimus possimus
          error nisi nihil ipsa corporis consectetur officiis fuga.
          <br />
          Doloremque rerum ipsum, similique voluptatem soluta non eos nisi, quos
          odit dolorem dolor est ab culpa aliquam. Doloremque, earum numquam
          officia saepe quis perspiciatis non quidem possimus minima tempora
          ipsum! Iure ea iusto doloribus corrupti sit esse suscipit commodi
          atque quidem officia, velit, quo, ipsa ducimus cum aut hic quibusdam
          cumque. Porro accusamus consequatur tempora a dolore ipsam explicabo?
          Facere. Excepturi, dolorem esse.
        </p>
        <p className="mb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quam
          ducimus alias exercitationem necessitatibus facilis, nostrum numquam
          fugiat, eaque similique et beatae quia consequatur sunt dicta tenetur
          temporibus cupiditate reiciendis! Nihil autem expedita provident sint!
          Doloribus consectetur veritatis dolore omnis. Ducimus, iure. Autem
          odit aperiam, voluptates illum doloremque aut at ducimus possimus
          error nisi nihil ipsa corporis consectetur officiis fuga.
          <br />
          Doloremque rerum ipsum, similique voluptatem soluta non eos nisi, quos
          odit dolorem dolor est ab culpa aliquam. Doloremque, earum numquam
          officia saepe quis perspiciatis non quidem possimus minima tempora
          ipsum! Iure ea iusto doloribus corrupti sit esse suscipit commodi
          atque quidem officia, velit, quo, ipsa ducimus cum aut hic quibusdam
          cumque. Porro accusamus consequatur tempora a dolore ipsam explicabo?
          Facere. Excepturi, dolorem esse.
        </p>
        <p className="mb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quam
          ducimus alias exercitationem necessitatibus facilis, nostrum numquam
          fugiat, eaque similique et beatae quia consequatur sunt dicta tenetur
          temporibus cupiditate reiciendis! Nihil autem expedita provident sint!
          Doloribus consectetur veritatis dolore omnis. Ducimus, iure. Autem
          odit aperiam, voluptates illum doloremque aut at ducimus possimus
          error nisi nihil ipsa corporis consectetur officiis fuga.
          <br />
          Doloremque rerum ipsum, similique voluptatem soluta non eos nisi, quos
          odit dolorem dolor est ab culpa aliquam. Doloremque, earum numquam
          officia saepe quis perspiciatis non quidem possimus minima tempora
          ipsum! Iure ea iusto doloribus corrupti sit esse suscipit commodi
          atque quidem officia, velit, quo, ipsa ducimus cum aut hic quibusdam
          cumque. Porro accusamus consequatur tempora a dolore ipsam explicabo?
          Facere. Excepturi, dolorem esse.
        </p>
        <p className="mb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quam
          ducimus alias exercitationem necessitatibus facilis, nostrum numquam
          fugiat, eaque similique et beatae quia consequatur sunt dicta tenetur
          temporibus cupiditate reiciendis! Nihil autem expedita provident sint!
          Doloribus consectetur veritatis dolore omnis. Ducimus, iure. Autem
          odit aperiam, voluptates illum doloremque aut at ducimus possimus
          error nisi nihil ipsa corporis consectetur officiis fuga.
          <br />
          Doloremque rerum ipsum, similique voluptatem soluta non eos nisi, quos
          odit dolorem dolor est ab culpa aliquam. Doloremque, earum numquam
          officia saepe quis perspiciatis non quidem possimus minima tempora
          ipsum! Iure ea iusto doloribus corrupti sit esse suscipit commodi
          atque quidem officia, velit, quo, ipsa ducimus cum aut hic quibusdam
          cumque. Porro accusamus consequatur tempora a dolore ipsam explicabo?
          Facere. Excepturi, dolorem esse.
        </p>
        <p className="mb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quam
          ducimus alias exercitationem necessitatibus facilis, nostrum numquam
          fugiat, eaque similique et beatae quia consequatur sunt dicta tenetur
          temporibus cupiditate reiciendis! Nihil autem expedita provident sint!
          Doloribus consectetur veritatis dolore omnis. Ducimus, iure. Autem
          odit aperiam, voluptates illum doloremque aut at ducimus possimus
          error nisi nihil ipsa corporis consectetur officiis fuga.
          <br />
          Doloremque rerum ipsum, similique voluptatem soluta non eos nisi, quos
          odit dolorem dolor est ab culpa aliquam. Doloremque, earum numquam
          officia saepe quis perspiciatis non quidem possimus minima tempora
          ipsum! Iure ea iusto doloribus corrupti sit esse suscipit commodi
          atque quidem officia, velit, quo, ipsa ducimus cum aut hic quibusdam
          cumque. Porro accusamus consequatur tempora a dolore ipsam explicabo?
          Facere. Excepturi, dolorem esse.
        </p>
      </div>
    </div>
  );
};

export default ScrollBasedAnimation;
