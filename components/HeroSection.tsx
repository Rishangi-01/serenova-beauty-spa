
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroSlideData, homeHeroData } from "@/data";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const { decorativeSymbols } = homeHeroData;
  const primaryButton = heroSlideData.button;
  const secondaryButton = heroSlideData.secondaryButton;

  if (!primaryButton || !secondaryButton) {
    throw new Error("The home hero slide requires both action buttons.");
  }

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.9,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="home" className="scroll-mt-[120px] relative isolate min-h-[650px] w-full overflow-hidden bg-[#f8f3ee] sm:min-h-[720px] lg:min-h-[calc(100vh-115px)]">

      
      <motion.div
        initial={{ scale: reduceMotion ? 1 : 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 2,
          ease: "easeOut",
        }}
        className="absolute inset-0 -z-20 bg-cover bg-[center_35%] bg-no-repeat md:bg-center"
        style={{
          backgroundImage: `url('${heroSlideData.image}')`,
        }}
      />


      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1600px] items-center py-24 sm:min-h-[720px] lg:min-h-[calc(100vh-115px)] px-5 sm:px-8 lg:px-12 xl:px-16">

        <div className="max-w-[780px]">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mb-7 flex items-center gap-3 sm:mb-9"
          >
            <div className="flex items-center gap-1">
              <span className="text-3xl text-[#718b62]">{decorativeSymbols.sparkle}</span>
              <span className="text-xl text-[#718b62]">{decorativeSymbols.leaf}</span>
            </div>

            <span className="font-serif text-lg font-semibold tracking-wide text-[#526d48] sm:text-xl md:text-2xl">
              {heroSlideData.eyebrow}
            </span>

            <span className="hidden h-[2px] w-24 bg-[#9cae8c] sm:block" />
          </motion.div>

          
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.45 }}
            className="font-serif text-[43px] font-medium leading-[1.12] tracking-[-1.5px] text-[#153b2d] sm:text-[56px] md:text-[68px] lg:text-[76px] xl:text-[82px]"
          >
            {heroSlideData.title[0]}
            <br className="hidden sm:block" /> {heroSlideData.title[1]}{" "}
            <span className="italic">
              {heroSlideData.title[2]}
            </span>
          </motion.h1>

          
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
            className="mt-7 max-w-[680px] text-base font-normal leading-[1.8] text-[#65615d] sm:mt-9 sm:text-lg md:text-xl lg:text-[22px]"
          >
            {heroSlideData.text}
          </motion.p>



        </div>
      </div>

      
      <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-[#f8f3ee]/20 to-transparent" />

    </section>
  );
}
