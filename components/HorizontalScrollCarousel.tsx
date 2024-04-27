"use client";
import Lenis from "@studio-freight/lenis/types";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";

const ScrollExample1 = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>

      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

export default ScrollExample1;

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const fromYtoX = useTransform(scrollYProgress, [0, 1], [10, -1000 * 2.75]);

  return (
    <main ref={targetRef} className="h-[300vh] bg-emerald-300 relative">
      <div className="h-screen bg-slate-300 sticky top-0 flex items-center overflow-hidden">
        <motion.div style={{ x: fromYtoX }} className="flex gap-4">
          {images.map((image) => (
            <Card key={image.id} id={image.id} url={image.url} />
          ))}
        </motion.div>
      </div>
    </main>
  );
};

const images = [
  {
    id: 1,
    url: "https://m.media-amazon.com/images/I/81ywJT+vlVL.jpg",
  },
  {
    id: 2,
    url: "https://i2.wp.com/picfiles.alphacoders.com/337/337637.jpg",
  },
  {
    id: 3,
    url: "https://i5.walmartimages.com/asr/e74beab2-37a6-44a4-ac5c-b6f3d222bc35.968a847bd29fb37646da893eb1142793.jpeg",
  },
  {
    id: 4,
    url: "https://m.media-amazon.com/images/I/71MyiKMP4SL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 5,
    url: "https://m.media-amazon.com/images/I/713jre8053L.jpg",
  },
  {
    id: 6,
    url: "https://avatarthelastairbender-store.com/wp-content/uploads/2021/06/avatar-the-last-airbender-part-three-kraft-paper-poster-874.jpg",
  },
  {
    id: 7,
    url: "https://akibamarket.com/wp-content/uploads/2020/06/poster-boku-no-hero-nuevo-horizontal-copia.jpg",
  },
  {
    id: 8,
    url: "https://m.media-amazon.com/images/I/81ncF44lNnL._AC_SL1500_.jpg",
  },
  {
    id: 9,
    url: "https://avatarthelastairbender-store.com/wp-content/uploads/2021/06/avatar-the-last-airbender-part-three-kraft-paper-poster-874.jpg",
  },
  {
    id: 10,
    url: "https://m.media-amazon.com/images/I/71Kelxa3EVL.jpg",
  },
  {
    id: 11,
    url: "https://www.animesenpai.net/wp-content/uploads/2022/08/20220806_200737_compress59-725x1024.jpg",
  },
  {
    id: 12,
    url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3eb70ccc-e7ad-4e1a-87fa-f97df9ef1c52/dagos1o-d6c46e81-b9c0-4dff-8413-0a306fa41037.jpg/v1/fill/w_1024,h_1360,q_75,strp/goku_dragonball_poster_by_saodvd_dagos1o-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM2MCIsInBhdGgiOiJcL2ZcLzNlYjcwY2NjLWU3YWQtNGUxYS04N2ZhLWY5N2RmOWVmMWM1MlwvZGFnb3Mxby1kNmM0NmU4MS1iOWMwLTRkZmYtODQxMy0wYTMwNmZhNDEwMzcuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.WG6kU459ObDVXZ7NuNAIpjAWumGvbMfD09ZcFrQQdW4",
  },
  {
    id: 13,
    url: "https://funkygraphix.co.uk/cdn/shop/products/FullmetalAlchemist_2003_a34_55b4352c-5885-4cdd-9c1d-91e760e073dc_1000x.jpg?v=1626337556",
  },
];

type CardType = {
  id: number;
  url: string;
};
const Card: React.FC<CardType> = ({ id, url }) => {
  return (
    <div
      key={id}
      className="w-[300px] h-[440px] rounded-lg bg-cover bg-center bg-no-repeat hover:scale-105 duration-500 shadow-2xl"
      style={{
        backgroundImage: `url('${url}')`,
      }}
    />
  );
};
