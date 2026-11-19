
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { aboutSectionData, siteDecorativeAssets } from "@/data";

export default function AboutSection() {
  const reduceMotion = useReducedMotion();
  const { homeSection } = aboutSectionData;

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="about" className="relative isolate w-full overflow-hidden bg-[#fcf9f5] py-12 sm:py-16 lg:py-16">


      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -right-3 -top-5 z-0 w-[115px] sm:w-[175px] lg:w-[230px]"
      >
        <Image
          src={siteDecorativeAssets.leafTop}
          alt=""
          width={230}
          height={230}
          className="h-auto w-full object-contain"
        />
      </motion.div>


      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -bottom-4 -left-3 z-0 w-[125px] sm:w-[180px] lg:w-[240px]"
      >
        <Image
          src={siteDecorativeAssets.leafBottom}
          alt=""
          width={230}
          height={185}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-[1600px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-14 lg:px-12 xl:gap-20 xl:px-16">


        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          className="relative mx-auto flex w-full max-w-[730px] items-center justify-center gap-5 sm:gap-7 lg:gap-6 xl:gap-8"
        >


          <motion.div
            whileHover={reduceMotion ? undefined : {
              y: -8,
              transition: { duration: 0.4 },
            }}
            className="relative h-[350px] w-[57%] overflow-hidden rounded-tl-[100px] rounded-br-[65px] rounded-tr-[8px] rounded-bl-[8px] border border-[#dce3d2] shadow-[0_15px_40px_rgba(65,80,48,0.10)] sm:h-[490px] lg:h-[440px] xl:h-[530px]"
          >
            <Image
              src={aboutSectionData.mainImage}
              alt={aboutSectionData.mainImageAlt}
              fill
              priority
              sizes="(max-width: 768px) 57vw, 350px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={reduceMotion ? undefined : {
              y: -8,
              transition: { duration: 0.4 },
            }}
            className="relative mt-16 h-[310px] w-[43%] overflow-hidden rounded-tl-[35px] rounded-tr-[8px] rounded-br-[95px] rounded-bl-[8px] border border-[#dce3d2] shadow-[0_15px_40px_rgba(65,80,48,0.10)] sm:mt-24 sm:h-[420px] lg:mt-24 lg:h-[360px] xl:mt-28 xl:h-[440px]"
          >
            <Image
              src={aboutSectionData.familyImage}
              alt={aboutSectionData.familyImageAlt}
              fill
              sizes="(max-width: 768px) 43vw, 280px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -25 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              type: "spring",
            }}
            className="absolute left-[55%] top-[49%] z-20 w-[105px] -translate-x-1/2 -translate-y-1/2 sm:w-[145px] lg:w-[125px] xl:w-[165px]"
          >
            <motion.div
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Image
                src={homeSection.sealImage}
                alt={homeSection.sealImageAlt}
                width={165}
                height={165}
                className="h-auto w-full object-contain drop-shadow-lg"
              />
            </motion.div>
          </motion.div>

        </motion.div>


        <div className="relative z-10">


          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-5 flex items-center gap-5"
          >
            <span className="font-serif text-lg font-semibold text-[#647e52] sm:text-xl">
              {homeSection.eyebrow}
            </span>

            <span className="h-[2px] w-20 bg-[#a8b69b] sm:w-24" />
          </motion.div>


          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-serif text-[34px] sm:text-[43px] md:text-[49px] lg:text-[52px] font-medium leading-[1.2] tracking-[-1px] text-[#171717]"
          >
            {homeSection.title[0]}

            <span className="mt-1 block italic text-[#637e50]">
              {homeSection.title.slice(1).join(" ")}
            </span>
          </motion.h2>


          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 border-l-[5px] border-[#647e52] py-1 pl-6 sm:mt-9 sm:pl-7"
          >
            <p className="max-w-[750px] text-[15px] font-medium leading-[1.8] text-[#414141] sm:text-[17px] md:text-[18px] xl:text-[19px]">
              {aboutSectionData.homeText}
            </p>
          </motion.div>

          
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="mt-12 grid grid-cols-2 gap-5 border-b border-[#dfe3d4] pb-9 sm:mt-14 sm:gap-8"
          >

          
            {homeSection.stats.map((stat, index) => (
            <div key={stat.label} className={`flex items-center gap-3 sm:gap-5 ${index === 1 ? "border-l border-[#d6ddca] pl-4 sm:pl-8" : ""}`}>

              <div className={`flex h-[65px] w-[65px] shrink-0 items-center justify-center bg-[#eff0e4] sm:h-[85px] sm:w-[85px] ${index === 0 ? "rounded-[25px_25px_5px_25px]" : "rounded-[25px_25px_25px_5px]"}`}>
                <Image
                  src={stat.icon}
                  alt=""
                  width={stat.width}
                  height={stat.height}
                  className="h-10 w-10 object-contain sm:h-12 sm:w-12"
                />
              </div>

              <div>
                <h3 className="font-serif text-[42px] font-semibold leading-none text-[#637e50] sm:text-[55px] lg:text-[48px] xl:text-[60px]">
                  {stat.value}
                </h3>

                <p className="mt-2 font-serif text-[14px] font-semibold text-[#202020] sm:text-[17px] lg:text-[15px] xl:text-[18px]">
                  {stat.label}
                </p>
              </div>
            </div>
            ))}

          </motion.div>

        </div>
      </div>
    </section>
  );
}
