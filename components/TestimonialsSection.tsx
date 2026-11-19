"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { siteDecorativeAssets, testimonialsSectionData } from "@/data";

export default function TestimonialsSection() {
  const testimonials = testimonialsSectionData.items.slice(0, 3);
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  const current = testimonials[active];

  const changeSlide = (direction: number) => {
    setActive(
      (prev) => (prev + direction + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      aria-label={testimonialsSectionData.ariaLabel}
      className="relative isolate w-full overflow-hidden bg-[#fcf7f3] py-12 sm:py-16 lg:py-16"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -right-3 -top-5 z-0 w-[120px] sm:w-[190px] lg:w-[245px]"
      >
        <Image
          src={siteDecorativeAssets.leafTop}
          alt=""
          width={245}
          height={180}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      <div className="pointer-events-none absolute -bottom-3 -left-4 z-0 w-[170px] sm:w-[260px] lg:w-[370px]">
        <Image
          src={siteDecorativeAssets.bottomLeftSpa}
          alt=""
          width={430}
          height={301}
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="pointer-events-none absolute -bottom-5 -right-3 z-0 w-[100px] sm:w-[140px] lg:w-[180px]">
        <Image
          src={siteDecorativeAssets.bottomRightSpa}
          alt=""
          width={157}
          height={266}
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-0">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[590px] lg:mx-0"
          >
            <div className="absolute -inset-[8px] rounded-tl-[100px] rounded-tr-[75px] rounded-br-[100px] rounded-bl-[75px] border border-[#dfad8c]/70 sm:-inset-[11px]" />

            <div className="relative h-[380px] overflow-hidden rounded-tl-[90px] rounded-tr-[65px] rounded-br-[90px] rounded-bl-[65px] sm:h-[480px] lg:h-[540px] xl:h-[570px]">
              <Image
                src={testimonialsSectionData.sideImage}
                alt={testimonialsSectionData.sideImageAlt}
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center transition-transform duration-1000 hover:scale-105"
              />
            </div>
          </motion.div>

          <div className="relative flex min-w-0 flex-col items-center lg:pl-0">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-10 w-full text-center lg:mb-16"
            >
              <div className="mb-3 flex items-center justify-center gap-4">
                <span className="h-[1px] w-16 bg-[#a65c32] sm:w-20" />

                <motion.div
                  animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative mr-1 h-[90px] w-[105px] shrink-0 sm:block lg:mr-4"
                >
                  <Image
                    src={testimonialsSectionData.decorativeSymbol}
                    alt=""
                    fill
                    sizes="105px"
                    className="object-contain"
                  />
                </motion.div>

                <span className="h-[1px] w-16 bg-[#a65c32] sm:w-20" />
              </div>

              <p className="mb-3 font-serif text-[23px] font-semibold text-[#994c20] sm:text-[26px]">
                {testimonialsSectionData.eyebrow}
              </p>

              <h2 className="font-serif text-[34px] sm:text-[43px] md:text-[49px] lg:text-[52px] font-bold leading-tight text-[#143824]">
                {testimonialsSectionData.title}{" "}
                <span className="italic text-[#a45a30]">
                  {testimonialsSectionData.highlight}
                </span>
              </h2>

              <p className="mx-auto mt-3 max-w-[650px] text-[15px] leading-[1.8] text-[#41414a] sm:text-[18px]">
                {testimonialsSectionData.text}
              </p>
            </motion.div>

            <div className="relative w-full lg:-ml-[125px] lg:w-[calc(100%+125px)]">
              <motion.div
                initial={reduceMotion ? false : { scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -top-7 left-1/2 z-20 flex h-[66px] w-[66px] -translate-x-1/2 items-center justify-center rounded-full border-[5px] border-[#fcf7f3] bg-gradient-to-br from-[#c47a43] to-[#994a22] text-[55px] font-serif leading-[1] text-white shadow-lg sm:left-[62%]"
              >
                <span className="translate-y-[9px]">
                  {testimonialsSectionData.quoteMark}
                </span>
              </motion.div>

              <div className="relative min-h-[340px] overflow-hidden rounded-[30px] border-[3px] border-white/90 bg-white/55 px-5 pb-7 pt-14 shadow-[0_15px_45px_rgba(112,67,39,0.10)] backdrop-blur-md sm:min-h-[340px] sm:px-7 lg:min-h-[350px] lg:px-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -15 }}
                    transition={{ duration: 0.45 }}
                    className="grid h-full items-center gap-5 sm:grid-cols-[185px_1fr] sm:gap-6 lg:grid-cols-[195px_1fr]"
                  >
                    <div className="mx-auto w-fit rounded-full border border-[#a65c32] p-[7px]">
                      <div className="relative h-[150px] w-[150px] overflow-hidden rounded-full sm:h-[170px] sm:w-[170px]">
                        <Image
                          src={current.image}
                          alt={current.imageAlt}
                          fill
                          sizes="170px"
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <p className="font-serif text-[16px] italic leading-[1.7] text-[#242333] sm:text-[17px] lg:text-[18px]">
                        {current.quote}
                      </p>

                      <span className="mt-6 h-[1px] w-[65%] bg-[#b46a3b]" />

                      <h3 className="mt-4 font-serif text-[25px] font-bold text-[#143824] sm:text-[28px]">
                        {current.name}
                      </h3>

                      <p className="mt-1 text-[15px] font-medium text-[#a45a30]">
                        {current.treatment}
                      </p>

                      <div className="mt-3 flex items-center gap-1">
                        {Array.from({ length: current.rating }, (_, index) => (
                          <Star
                            key={index}
                            size={22}
                            strokeWidth={1.5}
                            className="fill-[#f5a900] text-[#f5a900]"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-7 flex items-center justify-center gap-5">
              <button
                onClick={() => changeSlide(-1)}
                aria-label={testimonialsSectionData.previousLabel}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#a65c32]/50 text-[#a65c32] transition-all duration-300 hover:bg-[#a65c32] hover:text-white"
              >
                <ChevronLeft size={19} />
              </button>

              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  aria-label={testimonialsSectionData.showLabelTemplate.replace(
                    "{number}",
                    String(index + 1),
                  )}
                  aria-current={active === index ? "true" : undefined}
                  className={`h-[13px] rounded-full border transition-all duration-300 ${
                    active === index
                      ? "w-[13px] border-[#a45a30] bg-[#a45a30]"
                      : "w-[13px] border-[#a45a30] bg-transparent hover:bg-[#d5a17e]"
                  }`}
                />
              ))}

              <button
                onClick={() => changeSlide(1)}
                aria-label={testimonialsSectionData.nextLabel}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#a65c32]/50 text-[#a65c32] transition-all duration-300 hover:bg-[#a65c32] hover:text-white"
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
