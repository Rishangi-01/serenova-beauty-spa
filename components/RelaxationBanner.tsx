"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { relaxationSectionData, siteDecorativeAssets } from "@/data";

export default function RelaxationBanner() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative isolate flex min-h-[420px] w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat py-16 sm:min-h-[450px] lg:min-h-[500px] xl:min-h-[520px]"
      style={{
        backgroundImage: `url('${relaxationSectionData.backgroundImage}')`,
      }}
    >
      {/* SOFT OVERLAY FOR TEXT READABILITY */}
      <div className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-r from-[#fff9f2]/10 via-transparent to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col items-center text-center lg:w-[62%] lg:translate-x-[-28%] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* LOTUS DECORATION */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.65, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mb-5 flex items-center justify-center gap-5 sm:mb-7"
        >
          <span className="h-[2px] w-16 bg-[#a45e32] sm:w-24" />

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative mr-1 hidden h-[90px] w-[105px] shrink-0 sm:block lg:mr-4"
          >
            <Image
              src={siteDecorativeAssets.lotusDecoration}
              alt=""
              fill
              sizes="105px"
              className="object-contain"
            />
          </motion.div>

          <span className="h-[2px] w-16 bg-[#a45e32] sm:w-24" />
        </motion.div>

        {/* HEADING */}
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="max-w-[780px] font-serif text-[34px] font-bold leading-[1.13] tracking-[-1px] text-[#123c26] sm:text-[45px] md:text-[52px] lg:text-[53px] xl:text-[62px]"
        >
          {relaxationSectionData.title[0]}
          <br />{relaxationSectionData.title[1]}{" "}
          <span className="italic text-[#a45a30]">{relaxationSectionData.highlight}</span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.35,
          }}
          className="mt-5 max-w-[750px] text-[15px] leading-[1.8] text-[#34383a] sm:mt-6 sm:text-[18px] md:text-[20px] lg:text-[21px]"
        >
          {relaxationSectionData.description}
        </motion.p>
      </div>
    </section>
  );
}
