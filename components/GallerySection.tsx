
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { gallerySectionData, siteDecorativeAssets } from "@/data";

export default function GallerySection() {
  const reduceMotion = useReducedMotion();
  const galleryImages = gallerySectionData.items.slice(0, 4);

  return (
    <section id="gallery" className="relative isolate w-full overflow-hidden bg-[#fcf8f5] py-12 sm:py-16 lg:py-16">

      {/* TOP RIGHT LEAF IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 45 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -right-5 -top-4 z-0 w-[125px] sm:w-[185px] lg:w-[250px]"
      >
        <Image
          src={siteDecorativeAssets.leafTop}
          alt=""
          width={250}
          height={250}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      {/* BOTTOM LEFT LEAF IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -45 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -bottom-4 -left-4 z-0 w-[140px] sm:w-[200px] lg:w-[260px]"
      >
        <Image
          src={siteDecorativeAssets.leafBottom}
          alt=""
          width={260}
          height={220}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center sm:mb-16"
        >

          {/* LOTUS AND DECORATIVE LINES */}
          <div className="mb-3 flex items-center justify-center gap-5">

            <span className="h-[2px] w-14 bg-[#a7794e] sm:w-24" />

            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[48px] w-[65px] sm:h-[58px] sm:w-[80px]"
            >
              <Image
                src={siteDecorativeAssets.lotus}
                alt=""
                fill
                sizes="80px"
                className="object-contain"
              />
            </motion.div>

            <span className="h-[2px] w-14 bg-[#a7794e] sm:w-24" />

          </div>

          {/* SMALL HEADING */}
          <p className="font-serif text-lg font-semibold tracking-wide text-[#815b38] sm:text-xl">
            {gallerySectionData.title[0]}
          </p>

          {/* MAIN HEADING */}
          <h2 className="mt-3 font-serif text-[34px] sm:text-[43px] md:text-[49px] lg:text-[52px] font-bold leading-tight tracking-[-1px] text-[#183a29]">
            {gallerySectionData.homeSection.title}{" "}
            <span className="italic text-[#70885c]">
              {gallerySectionData.homeSection.highlight}
            </span>
          </h2>

        </motion.div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-4 xl:gap-5">

          {/* LEFT LARGE IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : -45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9 }}
            className="group relative h-[360px] overflow-hidden rounded-[25px] sm:h-[480px] lg:h-[610px] xl:h-[615px]"
          >
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#172d1c]/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="absolute inset-0 rounded-[25px] border border-white/20" />
          </motion.div>

          {/* RIGHT IMAGE GRID */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5">

            {/* TOP WIDE IMAGE */}
            <motion.div
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : -35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="group relative h-[250px] overflow-hidden rounded-[25px] sm:h-[300px] lg:h-[295px] xl:h-[300px]"
            >
              <Image
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute inset-0 rounded-[25px] border border-white/20" />
            </motion.div>

            {/* TWO BOTTOM IMAGES */}
            <div className="grid grid-cols-2 gap-3 sm:gap-5">

              {galleryImages.slice(2).map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.8,
                    delay: reduceMotion ? 0 : index * 0.15,
                  }}
                  className="group relative h-[190px] overflow-hidden rounded-[22px] sm:h-[240px] lg:h-[295px] xl:h-[295px]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 30vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-0 rounded-[22px] border border-white/20" />
                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
