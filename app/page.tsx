"use client";

import React from "react";
import Image from "next/image";

import Navbar from "./ui/navbar";
import { ChevronDown } from "lucide-react";

import useLanguage from "./hooks/useLanguage";

export default function Home() {
  const language = useLanguage();
  
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen items-center justify-start bg-[#FCE9EA]">
        <header className="flex flex-row items-center justify-center gap-8 w-full">
          <div className="flex flex-col items-center justify-center gap-4 w-1/2 px-4 py-8 h-screen">
            <div className="flex flex-col items-center justify-center gap-8 px-4 py-8 pt-18">
              <div className="relative align-middle text-center">
              <h3 className="text-lg font-bold mb-4 font-dm-serif-display text-[#D64C5A] tracking-widest xl:text-xl">
                PREMIUM HANDMADE
              </h3>
              <span className="absolute left-0 right-0 h-0.5 origin-center scale-x-35 rounded-full bg-[#DE5260]"></span>
            </div>
            <div className="relative align-middle text-center">
              <h1 className="text-6xl font-medium mb-8 font-cormorant-garamond text-[#0B0001] xl:text-8xl">SWEETBERRY</h1>
              <span className="absolute left-0 right-0 h-0.5 origin-center scale-x-50 rounded-full bg-[#DE5260]"></span>
            </div>
            <p className="text-center font-light text-lg font-inter text-[#0B0001] max-w-lg my-4 xl:text-xl">
              {language === "fr" ? "Redécouvrez la fraise avec nos chefs-d'œuvre chocolatés. Délicieux, élégants et faits avec amour. Parfaits pour rendre vos moments les plus doux inoubliables." :
              language === "es" ? "Redescubre la fresa con nuestras obras maestras de chocolate. Delicioso, elegante y hecho con amor. Perfecto para hacer que tus momentos más dulces sean inolvidables." :
              language === "de" ? "Entdecken Sie die Erdbeere mit unseren Schokoladenmeisterwerken neu. Köstlich, elegant und mit Liebe gemacht. Perfekt, um Ihre süßesten Momente unvergesslich zu machen." :
              language === "it" ? "Riscopri la fragola con i nostri capolavori di cioccolato. Delizioso, elegante e fatto con amore. Perfetto per rendere indimenticabili i tuoi momenti più dolci." :
              language === "ru" ? "Откройте для себя клубнику с нашими шоколадными шедеврами. Вкусно, элегантно и с любовью. Идеально, чтобы сделать ваши самые сладкие моменты незабываемыми." :
              "Rediscover the strawberry with our chocolate masterpieces. Delicious, elegant and made with love. Perfect to make your sweetest moments unforgettable."}
            </p>
            </div>
            <button className="bg-transparent border-2 border-[#DE5260] p-5 rounded-full flex flex-row items-center justify-center cursor-pointer transition duration-300 ease-in-out animate-bounce hover:bg-[#fcd1d186] hover:border-[#D64C5A]">
              <ChevronDown className="text-[#0B0001]" size={20} strokeWidth={0.75} />
            </button>
          </div>
          <div className="w-3/4 h-screen bg-[url(/images/background.png)] bg-cover bg-center">
            
          </div>
        </header>
      </main>
    </>
  );
}
