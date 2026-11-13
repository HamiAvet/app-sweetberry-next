"use client";

// Import custom UI components
import Navbar from "./ui/navbar";

// Import icons from lucide-react
import { ChevronDown } from "lucide-react";

// Import custom hooks
import useLanguage from "./hooks/useLanguage";

// Home page component for the Sweetberry application
export default function Home() {
  // Get the current language from the custom hook
  const language = useLanguage();
  
  // Additional logic for the home page can be added here
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen items-center justify-start bg-[#FCE9EA]">
        <header className="flex flex-col-reverse items-center justify-center gap-8 w-full md:flex-row md:items-stretch md:gap-0">
          <div className="flex flex-col items-center justify-center gap-4 w-full xs:w-1/2 px-4 pt-0 pb-8 md:pt-8 md:h-screen h-1/2">
            <div className="flex flex-col items-center justify-center gap-8 px-4 py-8 pt-18">
              <div className="relative align-middle text-center">
                <h3 className="text-sm xs:text-lg xl:text-xl font-bold mb-4 font-dm-serif-display text-[#D64C5A] tracking-widest">
                  PREMIUM HANDMADE
                </h3>
                <span className="absolute left-0 right-0 h-0.5 origin-center scale-x-35 rounded-full bg-[#DE5260]"></span>
              </div>
              <div className="relative align-middle text-center">
                <h1 className="text-5xl xs:text-6xl xl:text-8xl font-medium mb-8 font-cormorant-garamond text-[#0B0001]">SWEETBERRY</h1>
                <span className="absolute left-0 right-0 h-0.5 origin-center scale-x-50 rounded-full bg-[#DE5260]"></span>
              </div>
              <p className="text-base xs:text-lg xl:text-xl text-center font-light font-inter text-[#0B0001] max-w-lg my-4">
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
          <div className="relative md:w-[60%] md:h-auto w-full h-80 bg-[url(/images/background.png)] bg-cover bg-center">
            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute bottom-0 left-0 h-12 w-full
                bg-linear-to-b from-transparent to-[#FCE9EA]

                md:inset-y-0 md:-left-px md:h-full md:w-30
                md:bg-linear-to-r md:from-[#FCE9EA] md:from-10% md:to-transparent
              "
            />
          </div>
        </header>
      </main>
    </>
  );
}