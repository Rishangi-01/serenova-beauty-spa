"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { footerSectionData, siteInfoData } from "@/data";

const socialIconMap: Record<string, IconType> = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  youtube: FaYoutube,
  whatsapp: FaWhatsapp,
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" as const },
  },
};

export default function Footer() {
  const quickLinks = footerSectionData.columns[0].links;
  const services = footerSectionData.columns[1].links;

  return (
    <footer
      aria-label={footerSectionData.ariaLabel}
      className="relative isolate overflow-hidden bg-cover bg-center bg-no-repeat lg:bg-size-[100%_100%] bg-size-auto"
    >
      <div
    className="pointer-events-none absolute inset-0 -z-10 hidden bg-cover lg:bg-size-[100%_100%] bg-center bg-no-repeat lg:block"
    style={{
      backgroundImage: `url('${siteInfoData.bgImage}')`,
    }}
  />
      
      <div className="mx-auto max-w-[1600px] pb-20 pt-24 lg:pb-44 lg:pt-28 px-5 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-2 gap-12 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.8fr_1fr_1.25fr] lg:gap-10"
        >
          
          <motion.div variants={fadeUp} className="col-span-2 lg:col-span-1 text-left">
            <Link href={footerSectionData.columns[0].links[0].href} className="inline-block">
              <Image
                src={siteInfoData.logo}
                alt={siteInfoData.alt}
                width={400}
                height={180}
                className="mx-auto h-auto w-[200px] object-contain lg:mx-0 lg:w-[225px]"
              />
            </Link>

            <p className="mt-3 max-w-[336px] text-[16px] leading-7 text-[#252b27] lg:mx-0 lg:text-[17px]">
              {footerSectionData.about}
            </p>

            
            <div className="mt-7 flex items-center gap-4 justify-start">
              {siteInfoData.socials.map((social, index) => {
                const Icon = socialIconMap[social.icon];

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{
                      y: -7,
                      rotate: 8,
                      scale: 1.12,
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.08,
                    }}
                    className="flex h-8 w-8 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-[#155522] text-white shadow-md transition-colors duration-300 hover:bg-[#a65b29]"
                  >
                    <Icon className="lg:w-[21px] lg:h-[21px] w-[16px] h-[16px]" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          
          <motion.div
            variants={fadeUp}
            className="lg:border-l lg:border-[#d8b994]/50 lg:pl-10"
          >
            <h3 className="relative mb-7 inline-block font-serif text-[20px] lg:text-[27px] font-bold text-[#073b16]">
              {footerSectionData.columns[0].title}
              <span className="absolute -bottom-3 left-0 h-[4px] w-20 rounded-full bg-[#c99b31]" />
            </h3>

            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3 text-[16px] text-[#292d29] transition-all duration-300 hover:translate-x-2 hover:text-[#a65b29] sm:text-[17px]"
                  >
                    <ChevronRight
                      size={19}
                      className="text-[#c58b25] transition-transform duration-300 group-hover:translate-x-1"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          
          <motion.div
            variants={fadeUp}
            className="lg:border-l lg:border-[#d8b994]/50 lg:pl-10"
          >
            <h3 className="relative mb-7 inline-block font-serif text-[20px] lg:text-[27px] font-bold text-[#073b16]">
              {footerSectionData.columns[1].title}
              <span className="absolute -bottom-3 left-0 h-[4px] w-20 rounded-full bg-[#c99b31]" />
            </h3>

            <ul className="space-y-3.5">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="group flex items-center gap-3 text-[16px] text-[#292d29] transition-all duration-300 hover:translate-x-2 hover:text-[#a65b29] sm:text-[17px]"
                  >
                    <ChevronRight
                      size={19}
                      className="text-[#c58b25] transition-transform duration-300 group-hover:translate-x-1"
                    />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          
          <motion.div
            variants={fadeUp}
            className="col-span-2 lg:col-span-1 lg:border-l lg:border-[#d8b994]/50 lg:pl-10"
          >
            <h3 className="relative mb-7 inline-block font-serif text-[20px] lg:text-[27px] font-bold text-[#073b16]">
              {footerSectionData.contactTitle}
              <span className="absolute -bottom-3 left-0 h-[4px] w-20 rounded-full bg-[#c99b31]" />
            </h3>

            <div className="space-y-4">
          
              <div className="group flex items-start gap-4">
                <span className="flex h-8 w-8 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-full bg-[#e8ecd5] text-[#155522] transition-all duration-300 group-hover:bg-[#155522] group-hover:text-white">
                  <MapPin className="lg:w-[21px] lg:h-[21px] w-[16px] h-[16px]" />
                </span>
                <p className="pt-1 text-[16px] leading-7 text-[#292d29]">
                  {siteInfoData.addressLines[0]}
                  <br />
                  {siteInfoData.addressLines[1]}
                </p>
              </div>

          
              <a
                href={footerSectionData.contactDetails[0].href}
                className="group flex items-center gap-4"
              >
                <span className="flex h-8 w-8 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-full bg-[#e8ecd5] text-[#155522] transition-all duration-300 group-hover:bg-[#155522] group-hover:text-white">
                  <Phone className="lg:w-[21px] lg:h-[21px] w-[16px] h-[16px]" />
                </span>
                <span className="text-[16px] text-[#292d29] transition-colors group-hover:text-[#a65b29]">
                  {siteInfoData.phones[0]}
                </span>
              </a>

          
              <a
                href={footerSectionData.contactDetails[1].href}
                className="group flex items-center gap-4"
              >
                <span className="flex h-8 w-8 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-full bg-[#e8ecd5] text-[#155522] transition-all duration-300 group-hover:bg-[#155522] group-hover:text-white">
                  <Mail className="lg:w-[21px] lg:h-[21px] w-[16px] h-[16px]" />
                </span>
                <span className="break-all text-[15px] text-[#292d29] transition-colors group-hover:text-[#a65b29] sm:text-[16px]">
                  {siteInfoData.emails[0]}
                </span>
              </a>

              
              <div className="group flex items-center gap-4">
                <span className="flex h-8 w-8 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-full bg-[#e8ecd5] text-[#155522] transition-all duration-300 group-hover:bg-[#155522] group-hover:text-white">
                  <Clock className="lg:w-[21px] lg:h-[21px] w-[16px] h-[16px]" />
                </span>
                <span className="text-[15px] leading-6 text-[#292d29] sm:text-[16px]">
                  {siteInfoData.hours[0].daysShort}{siteInfoData.hours[0].timeSeparator}{siteInfoData.hours[0].time}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      
      <div className="absolute inset-x-0 bottom-0 flex min-h-[105px] items-center justify-center px-4 pb-2 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex w-full max-w-[1000px] items-center justify-center gap-5 text-center"
        >
          <span className="hidden h-[2px] w-24 bg-white/50 sm:block md:w-36" />

          <p className="text-[13px] font-medium lg:text-white text-[#000] sm:text-[16px] md:text-[19px]">
            {footerSectionData.copyright}
          </p>

          <span className="hidden h-[2px] w-24 bg-white/50 sm:block md:w-36" />
        </motion.div>
      </div>
    </footer>
  );
}
