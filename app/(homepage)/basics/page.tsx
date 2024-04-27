import AnimationControls from "@/components/AnimationControls";
import BasicsOfMotion from "@/components/BasicsOfMotion";
import Gestures from "@/components/Gestures";
import ScrollExample1 from "@/components/HorizontalScrollCarousel";
import MultiLayerParallax from "@/components/MultiLayerParallax";
import ScrollBasedAnimation from "@/components/ScrollBasedAnimation";
import TextGradientOpacity from "@/components/Text/TGO";
import TextGradient from "@/components/TextGradient";
import VerticalScrollCarousel from "@/components/VerticalScrollCarousel";
import ViewBasedAnimation from "@/components/ViewBasedAnimation";
import React from "react";

const Basics = () => {
  return (
    // <section className=" bg-[#0D1824]">
    //   {/* <BasicsOfMotion /> */}
    //   {/* <Gestures /> */}
    //   {/* <AnimationControls /> */}
    //   {/* <ViewBasedAnimation /> */}
    //   {/* <ScrollBasedAnimation /> */}
    //   {/* <ScrollExample1 /> */}
    //   {/* <MultiLayerParallax />
    //   <div className="px-4 py-2 text-white text-base">
    //     <p className="mb-5">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quam
    //       ducimus alias exercitationem necessitatibus facilis, nostrum numquam
    //       fugiat, eaque similique et beatae quia consequatur sunt dicta tenetur
    //       temporibus cupiditate reiciendis! Nihil autem expedita provident sint!
    //       Doloribus consectetur veritatis dolore omnis. Ducimus, iure. Autem
    //       odit aperiam, voluptates illum doloremque aut at ducimus possimus
    //       error nisi nihil ipsa corporis consectetur officiis fuga.
    //       <br />
    //       Doloremque rerum ipsum, similique voluptatem soluta non eos nisi, quos
    //       odit dolorem dolor est ab culpa aliquam. Doloremque, earum numquam
    //       officia saepe quis perspiciatis non quidem possimus minima tempora
    //       ipsum! Iure ea iusto doloribus corrupti sit esse suscipit commodi
    //       atque quidem officia, velit, quo, ipsa ducimus cum aut hic quibusdam
    //       cumque. Porro accusamus consequatur tempora a dolore ipsam explicabo?
    //       Facere. Excepturi, dolorem esse.
    //     </p>
    //     <p className="mb-5">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quam
    //       ducimus alias exercitationem necessitatibus facilis, nostrum numquam
    //       fugiat, eaque similique et beatae quia consequatur sunt dicta tenetur
    //       temporibus cupiditate reiciendis! Nihil autem expedita provident sint!
    //       Doloribus consectetur veritatis dolore omnis. Ducimus, iure. Autem
    //       odit aperiam, voluptates illum doloremque aut at ducimus possimus
    //       error nisi nihil ipsa corporis consectetur officiis fuga.
    //       <br />
    //       Doloremque rerum ipsum, similique voluptatem soluta non eos nisi, quos
    //       odit dolorem dolor est ab culpa aliquam. Doloremque, earum numquam
    //       officia saepe quis perspiciatis non quidem possimus minima tempora
    //       ipsum! Iure ea iusto doloribus corrupti sit esse suscipit commodi
    //       atque quidem officia, velit, quo, ipsa ducimus cum aut hic quibusdam
    //       cumque. Porro accusamus consequatur tempora a dolore ipsam explicabo?
    //       Facere. Excepturi, dolorem esse.
    //     </p>
    //     <p className="mb-5">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quam
    //       ducimus alias exercitationem necessitatibus facilis, nostrum numquam
    //       fugiat, eaque similique et beatae quia consequatur sunt dicta tenetur
    //       temporibus cupiditate reiciendis! Nihil autem expedita provident sint!
    //       Doloribus consectetur veritatis dolore omnis. Ducimus, iure. Autem
    //       odit aperiam, voluptates illum doloremque aut at ducimus possimus
    //       error nisi nihil ipsa corporis consectetur officiis fuga.
    //       <br />
    //       Doloremque rerum ipsum, similique voluptatem soluta non eos nisi, quos
    //       odit dolorem dolor est ab culpa aliquam. Doloremque, earum numquam
    //       officia saepe quis perspiciatis non quidem possimus minima tempora
    //       ipsum! Iure ea iusto doloribus corrupti sit esse suscipit commodi
    //       atque quidem officia, velit, quo, ipsa ducimus cum aut hic quibusdam
    //       cumque. Porro accusamus consequatur tempora a dolore ipsam explicabo?
    //       Facere. Excepturi, dolorem esse.
    //     </p>
    //     <p className="mb-5">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quam
    //       ducimus alias exercitationem necessitatibus facilis, nostrum numquam
    //       fugiat, eaque similique et beatae quia consequatur sunt dicta tenetur
    //       temporibus cupiditate reiciendis! Nihil autem expedita provident sint!
    //       Doloribus consectetur veritatis dolore omnis. Ducimus, iure. Autem
    //       odit aperiam, voluptates illum doloremque aut at ducimus possimus
    //       error nisi nihil ipsa corporis consectetur officiis fuga.
    //       <br />
    //       Doloremque rerum ipsum, similique voluptatem soluta non eos nisi, quos
    //       odit dolorem dolor est ab culpa aliquam. Doloremque, earum numquam
    //       officia saepe quis perspiciatis non quidem possimus minima tempora
    //       ipsum! Iure ea iusto doloribus corrupti sit esse suscipit commodi
    //       atque quidem officia, velit, quo, ipsa ducimus cum aut hic quibusdam
    //       cumque. Porro accusamus consequatur tempora a dolore ipsam explicabo?
    //       Facere. Excepturi, dolorem esse.
    //     </p>
    //     <p className="mb-5">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quam
    //       ducimus alias exercitationem necessitatibus facilis, nostrum numquam
    //       fugiat, eaque similique et beatae quia consequatur sunt dicta tenetur
    //       temporibus cupiditate reiciendis! Nihil autem expedita provident sint!
    //       Doloribus consectetur veritatis dolore omnis. Ducimus, iure. Autem
    //       odit aperiam, voluptates illum doloremque aut at ducimus possimus
    //       error nisi nihil ipsa corporis consectetur officiis fuga.
    //       <br />
    //       Doloremque rerum ipsum, similique voluptatem soluta non eos nisi, quos
    //       odit dolorem dolor est ab culpa aliquam. Doloremque, earum numquam
    //       officia saepe quis perspiciatis non quidem possimus minima tempora
    //       ipsum! Iure ea iusto doloribus corrupti sit esse suscipit commodi
    //       atque quidem officia, velit, quo, ipsa ducimus cum aut hic quibusdam
    //       cumque. Porro accusamus consequatur tempora a dolore ipsam explicabo?
    //       Facere. Excepturi, dolorem esse.
    //     </p>
    //   </div> */}
    // </section>
    <>
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

export default Basics;
