
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const specialists = [
  {
    name: "Dr. Neha Sharma",
    role: "Skin Care Specialist",
    image: "/images/home/team/dr-neha-sharma.webp",
  },
  {
    name: "Dr. Priya Verma",
    role: "Massage Specialist",
    image: "/images/home/team/dr-priya-verma.webp",
  },
  {
    name: "Dr. Anjali Gupta",
    role: "Beauty Therapist",
    image: "/images/home/team/dr-anjali-gupta.webp",
  },
];

export default function TeamSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#fcf8f5] py-20 sm:py-24 lg:py-28">

      {/* TOP RIGHT DECORATIVE IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -right-5 -top-3 z-0 w-[130px] sm:w-[190px] lg:w-[260px]"
      >
        <Image
          src="/images/leaf-top.png"
          alt=""
          width={260}
          height={180}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      {/* BOTTOM LEFT DECORATIVE IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -bottom-3 -left-3 z-0 w-[160px] sm:w-[230px] lg:w-[300px]"
      >
        <Image
          src="/images/team-towel-bottom.png"
          alt=""
          width={300}
          height={180}
          className="h-auto w-full object-contain"
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">

        
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 grid grid-cols-1 items-center gap-7 lg:mb-16 lg:grid-cols-[0.95fr_1fr] lg:gap-14"
        >

          {/* LEFT HEADING */}
          <div className="relative">

            <div className="mb-2 flex items-center gap-3">
              <span className="font-serif text-base font-semibold uppercase tracking-wide text-[#94502a] sm:text-lg">
                Expert Team
              </span>

              <span className="h-[2px] w-20 bg-[#b66a39] sm:w-24" />
            </div>

            <div className="relative flex items-center justify-between gap-2">

              <h2 className="font-serif text-[39px] font-bold leading-[1.05] tracking-tight text-[#143824] sm:text-[53px] lg:text-[57px] xl:text-[62px]">
                Our Experience
                <br />
                <span className="italic text-[#a45a30]">
                  Specialists
                </span>
              </h2>

              {/* LOTUS IMAGE */}
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : { y: [0, -7, 0] }
                }
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative mr-1 hidden h-[90px] w-[105px] shrink-0 sm:block lg:mr-4"
              >
                <Image
                  src="/images/lotus-icon.png"
                  alt=""
                  fill
                  sizes="105px"
                  className="object-contain"
                />
              </motion.div>

            </div>
          </div>

          {/* RIGHT DESCRIPTION */}
          <div className="flex items-center gap-5 lg:gap-7">

            <span className="hidden h-[100px] w-[2px] shrink-0 bg-[#b66a39] sm:block" />

            <p className="max-w-[570px] text-[16px] leading-[1.8] text-[#30343e] sm:text-[18px] lg:text-[19px]">
              Meet our team of certified and experienced professionals
              dedicated to providing the highest quality beauty and
              wellness care.
            </p>

          </div>

        </motion.div>

        {/* SPECIALISTS GRID */}
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-10">

          {specialists.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 55,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : index * 0.18,
                ease: "easeOut",
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -8,
                      transition: { duration: 0.35 },
                    }
              }
              className="group relative mx-auto w-full max-w-[440px] pt-3 pl-3"
            >

              {/* DECORATIVE BROWN CORNER */}
              <div className="absolute left-0 top-0 h-[125px] w-[125px] rounded-tl-[22px] border-l-[13px] border-t-[13px] border-[#c47b48] transition-all duration-500 group-hover:h-[145px] group-hover:w-[145px]" />

              {/* MAIN CARD */}
              <div className="relative flex h-full flex-col rounded-[21px] border border-[#f0e5dd] bg-white/90 p-3 pt-3 shadow-[0_10px_25px_rgba(112,68,40,0.10)] transition-all duration-500 group-hover:shadow-[0_20px_45px_rgba(112,68,40,0.16)] sm:p-4">

                {/* SPECIALIST IMAGE */}
                <div className="relative h-[310px] w-full overflow-hidden rounded-[15px] bg-[#f5e9de] sm:h-[320px] lg:h-[350px] xl:h-[390px]">

                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#68442b]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                </div>

                {/* NAME */}
                <h3 className="mt-4 text-center font-serif text-[25px] font-bold leading-tight text-[#153a25] sm:text-[27px] lg:text-[28px]">
                  {person.name}
                </h3>

                {/* ROLE BADGE */}
                <div className="mx-auto mt-3 rounded-full bg-gradient-to-r from-[#ad6134] to-[#c27b47] px-7 py-2 text-center text-[14px] font-semibold text-white shadow-sm transition-all duration-300 group-hover:shadow-md sm:text-[15px]">
                  {person.role}
                </div>

                {/* LOTUS DIVIDER */}
                <div className="mt-4 flex items-center justify-center gap-2 pb-3">

                  <span className="h-[1.5px] w-12 bg-[#b66a39]" />

                  <motion.div
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { scale: 1.15, rotate: 8 }
                    }
                    className="relative h-[30px] w-[38px]"
                  >
                    <Image
                      src="/images/home/team/lotus-decoration.webp"
                      alt=""
                      fill
                      sizes="38px"
                      className="object-contain"
                    />
                  </motion.div>

                  <span className="h-[1.5px] w-12 bg-[#b66a39]" />

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
