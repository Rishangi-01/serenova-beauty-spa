
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { servicesData, siteDecorativeAssets } from "@/data";

export default function ServicesSection() {
  const reduceMotion = useReducedMotion();
  const services = servicesData.items.slice(0, servicesData.homeCount);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.16,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.75,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="services"
      className="relative isolate w-full overflow-hidden bg-[#fcf9f6] py-12 sm:py-16 lg:py-16"
    >

      
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -right-4 -top-5 z-0 w-[125px] sm:w-[190px] lg:w-[250px]"
      >
        <Image
          src={siteDecorativeAssets.leafTop}
          alt=""
          width={250}
          height={250}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -bottom-5 -left-4 z-0 w-[125px] sm:w-[190px] lg:w-[250px]"
      >
        <Image
          src={siteDecorativeAssets.towelBottom}
          alt=""
          width={250}
          height={200}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">

      
        <div className="mx-auto mb-10 max-w-[900px] text-center sm:mb-14">

      
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="mb-3 flex justify-center"
          >
            <Image
              src={siteDecorativeAssets.lotus}
              alt=""
              width={75}
              height={65}
              className="h-[55px] w-[65px] object-contain sm:h-[65px] sm:w-[75px]"
            />
          </motion.div>

      
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-4 flex items-center justify-center gap-5"
          >
            <span className="h-[2px] w-12 bg-[#899b7c] sm:w-20" />

            <span className="font-serif text-lg font-semibold text-[#587247] sm:text-xl">
              {servicesData.eyebrow}
            </span>

            <span className="h-[2px] w-12 bg-[#899b7c] sm:w-20" />
          </motion.div>

      
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-[34px] sm:text-[43px] md:text-[49px] lg:text-[52px] font-bold leading-[1.2] tracking-tight text-[#153c2b]"
          >
            {servicesData.title}{" "}
            <span className="italic text-[#71875c]">
              {servicesData.highlight}
            </span>
          </motion.h2>

      
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mx-auto mt-4 max-w-[850px] text-[15px] leading-[1.7] text-[#505b62] sm:text-[17px] md:text-[19px]"
          >
            {servicesData.text}
          </motion.p>
        </div>

      
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -6,
                      transition: { duration: 0.3 },
                    }
              }
              className="group flex min-w-0 items-center gap-4 rounded-[25px] border border-[#e5dfd1] bg-white/65 p-3 shadow-[0_5px_12px_rgba(70,75,45,0.07)] transition-all duration-500 hover:border-[#a8b797] hover:bg-white hover:shadow-[0_15px_35px_rgba(70,75,45,0.12)] sm:gap-5 sm:p-4 lg:gap-6"
            >

      
              <div className="relative h-[165px] w-[45%] shrink-0 overflow-hidden rounded-[23px] sm:h-[195px] md:h-[180px] lg:h-[200px] xl:h-[225px]">

                <Image
                  src={service.homeImage}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 45vw, 280px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

      
                <div className="absolute inset-0 bg-[#253b24]/0 transition-all duration-500 group-hover:bg-[#253b24]/10" />
              </div>

      
              <a href="#contact" className="flex min-w-0 flex-1 flex-col justify-center py-2 pr-1 sm:py-3 sm:pr-2">

      
                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { rotate: 8, scale: 1.08 }
                  }
                  transition={{ duration: 0.3 }}
                  className="mb-2 flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#f5e9d0] sm:mb-3 sm:h-[58px] sm:w-[58px]"
                >
                  <Image
                    src={service.homeIcon}
                    alt=""
                    width={38}
                    height={38}
                    className="h-[32px] w-[32px] object-contain sm:h-[40px] sm:w-[40px]"
                  />
                </motion.div>

      
                <h3 className="font-serif text-[20px] font-bold leading-tight text-[#153c2b] transition-colors duration-300 group-hover:text-[#71875c] sm:text-[25px] lg:text-[24px] xl:text-[27px]">
                  {service.title}
                </h3>

      
                <motion.span
                  initial={{ width: 38 }}
                  whileHover={{ width: 65 }}
                  className="my-2 block h-[3px] w-10 rounded-full bg-[#c5a13b] transition-all duration-300 group-hover:w-16 sm:my-3"
                />

      
                <p className="text-[13px] leading-[1.55] text-[#48545d] sm:text-[15px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
                  {service.text}
                </p>

              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
