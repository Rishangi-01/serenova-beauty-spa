
"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from "lucide-react";

import { gallerySectionData, siteDecorativeAssets } from "@/data";

export default function GallerySection() {
  const reduceMotion = useReducedMotion();

  const galleryImages = gallerySectionData.items.slice(0, 4);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const isOpen = selectedIndex !== null;

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const showNext = useCallback(() => {
    setSelectedIndex((current) =>
      current === null ? null : (current + 1) % galleryImages.length
    );
  }, [galleryImages.length]);

  const showPrevious = useCallback(() => {
    setSelectedIndex((current) =>
      current === null
        ? null
        : (current - 1 + galleryImages.length) % galleryImages.length
    );
  }, [galleryImages.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeModal, showNext, showPrevious]);

  const imageAnimation = reduceMotion
    ? { duration: 0 }
    : { duration: 0.8 };

  return (
    <>
      <section
        id="gallery"
        className="relative isolate w-full overflow-hidden bg-[#fcf8f5] py-12 sm:py-16 lg:py-16"
      >
        {/* Top Decorative Leaf */}
        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={imageAnimation}
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

        {/* Bottom Decorative Leaf */}
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={imageAnimation}
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

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={imageAnimation}
            className="mb-12 text-center sm:mb-16"
          >
            <div className="mb-3 flex items-center justify-center gap-5">
              <span className="h-[2px] w-14 bg-[#a7794e] sm:w-24" />

              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={imageAnimation}
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

            <p className="font-serif text-lg font-semibold tracking-wide text-[#815b38] sm:text-xl">
              {gallerySectionData.title[0]}
            </p>

            <h2 className="mt-3 font-serif text-[34px] font-bold leading-tight tracking-[-1px] text-[#183a29] sm:text-[43px] md:text-[49px] lg:text-[52px]">
              {gallerySectionData.homeSection.title}{" "}
              <span className="italic text-[#70885c]">
                {gallerySectionData.homeSection.highlight}
              </span>
            </h2>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-4 xl:gap-5">

            {/* First Large Image */}
            <motion.button
              type="button"
              onClick={() => setSelectedIndex(0)}
              aria-label={`View ${galleryImages[0].alt}`}
              initial={{ opacity: 0, x: reduceMotion ? 0 : -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={imageAnimation}
              className="group relative h-[360px] cursor-zoom-in overflow-hidden rounded-[25px] text-left sm:h-[480px] lg:h-[610px] xl:h-[615px]"
            >
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#172d1c]/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#183a29] shadow-xl backdrop-blur-sm transition-transform duration-500 group-hover:scale-100 scale-75">
                  <ZoomIn size={25} />
                </span>
              </div>

              <div className="absolute inset-0 rounded-[25px] border border-white/20" />
            </motion.button>

            <div className="grid grid-cols-1 gap-4 sm:gap-5">

              {/* Second Image */}
              <motion.button
                type="button"
                onClick={() => setSelectedIndex(1)}
                aria-label={`View ${galleryImages[1].alt}`}
                initial={{ opacity: 0, y: reduceMotion ? 0 : -35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ ...imageAnimation, delay: reduceMotion ? 0 : 0.15 }}
                className="group relative h-[250px] cursor-zoom-in overflow-hidden rounded-[25px] text-left sm:h-[300px] lg:h-[295px] xl:h-[300px]"
              >
                <Image
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#183a29] shadow-xl">
                    <ZoomIn size={25} />
                  </span>
                </div>

                <div className="absolute inset-0 rounded-[25px] border border-white/20" />
              </motion.button>

              {/* Third & Fourth Images */}
              <div className="grid grid-cols-2 gap-3 sm:gap-5">
                {galleryImages.slice(2).map((image, index) => (
                  <motion.button
                    type="button"
                    key={image.src}
                    onClick={() => setSelectedIndex(index + 2)}
                    aria-label={`View ${image.alt}`}
                    initial={{
                      opacity: 0,
                      y: reduceMotion ? 0 : 35,
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      ...imageAnimation,
                      delay: reduceMotion ? 0 : index * 0.15,
                    }}
                    className="group relative h-[190px] cursor-zoom-in overflow-hidden rounded-[22px] text-left sm:h-[240px] lg:h-[295px] xl:h-[295px]"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 30vw"
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 transition-all duration-500 group-hover:opacity-100">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#183a29] shadow-xl">
                        <ZoomIn size={22} />
                      </span>
                    </div>

                    <div className="absolute inset-0 rounded-[22px] border border-white/20" />
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            key="gallery-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.3 }}
            onClick={closeModal}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image preview"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close image preview"
              className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:bg-white hover:text-black sm:right-8 sm:top-8 sm:h-12 sm:w-12"
            >
              <X size={25} />
            </button>

            {/* Previous Button */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white hover:text-black sm:left-6 sm:h-12 sm:w-12"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image Container */}
            <motion.div
              key={selectedIndex}
              initial={{
                opacity: 0,
                scale: reduceMotion ? 1 : 0.85,
                y: reduceMotion ? 0 : 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: reduceMotion ? 1 : 0.9,
              }}
              transition={{ duration: reduceMotion ? 0 : 0.35 }}
              onClick={(event) => event.stopPropagation()}
              className="relative flex h-[75vh] w-full max-w-[1100px] items-center justify-center sm:h-[82vh]"
            >
              <Image
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                fill
                priority
                sizes="(max-width: 768px) 95vw, 85vw"
                className="object-contain"
              />
            </motion.div>

            {/* Next Button */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-2 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white hover:text-black sm:right-6 sm:h-12 sm:w-12"
            >
              <ChevronRight size={28} />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm tracking-widest text-white backdrop-blur-md">
              {selectedIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
