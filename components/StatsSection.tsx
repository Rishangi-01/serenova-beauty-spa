
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteDecorativeAssets, statsSectionData } from "@/data";

export default function StatsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#fcf8f4] py-12 sm:py-16 lg:py-16">

      
      <motion.div
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -right-5 -top-5 z-0 w-[110px] sm:w-[160px] lg:w-[220px]"
      >
        <Image
          src={statsSectionData.decorativeImages[1].src}
          alt=""
          width={220}
          height={220}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0, x: -35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -bottom-2 -left-3 z-0 w-[170px] sm:w-[230px] lg:w-[320px]"
      >
        <Image
          src={statsSectionData.decorativeImages[0].src}
          alt=""
          width={320}
          height={180}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">

        
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mb-10 flex items-center justify-center gap-5 sm:mb-12"
        >
          <span className="h-[2px] w-16 bg-[#c69a70] sm:w-24" />

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : { y: [0, -5, 0] }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-[48px] w-[75px] sm:h-[60px] sm:w-[95px]"
          >
            <Image
              src={siteDecorativeAssets.lotus}
              alt={siteDecorativeAssets.lotusLabel}
              fill
              sizes="95px"
              className="object-contain"
            />
          </motion.div>

          <span className="h-[2px] w-16 bg-[#c69a70] sm:w-24" />
        </motion.div>

        
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-7">

          {statsSectionData.items.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.75,
                delay: reduceMotion ? 0 : index * 0.15,
                ease: "easeOut",
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -8,
                      transition: { duration: 0.3 },
                    }
              }
              className="group relative flex min-h-[135px] items-center gap-4 rounded-[25px] border border-[#ead9c8] bg-white/75 px-5 py-5 shadow-[0_6px_20px_rgba(120,85,50,0.07)] transition-all duration-500 hover:border-[#c9a27e] hover:bg-white hover:shadow-[0_15px_35px_rgba(120,85,50,0.13)] sm:min-h-[145px] sm:gap-5 sm:px-6 lg:px-7"
            >

              
              <div className="relative flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full bg-[#f8eadb] transition-all duration-500 group-hover:scale-105 group-hover:bg-[#f3e1cd] sm:h-[88px] sm:w-[88px]">

                <Image
                  src={stat.icon}
                  alt=""
                  width={68}
                  height={68}
                  className="h-[65px] w-[65px] object-contain transition-transform duration-500 group-hover:scale-110 sm:h-[75px] sm:w-[75px]"
                />

              </div>

              
              <div className="h-[65px] w-[1px] shrink-0 bg-[#eadbc9] sm:h-[75px]" />

              
              <div className="min-w-0 flex-1">

                <h3 className="font-serif text-[38px] font-bold leading-none tracking-tight text-[#102d20] sm:text-[43px] lg:text-[40px] xl:text-[46px]">
                  {stat.value}
                </h3>

                <p className="mt-3 text-[13px] font-medium leading-snug tracking-wide text-[#62676a] sm:text-[15px]">
                  {stat.label}
                </p>

              </div>

              
              <div className="absolute bottom-0 left-7 right-7 h-[3px] origin-left scale-x-0 rounded-full bg-[#bd9066] transition-transform duration-500 group-hover:scale-x-100" />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
