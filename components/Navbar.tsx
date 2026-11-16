
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  Menu,
  X,
} from "lucide-react";
import { navigationData, siteInfoData } from "@/data";

export default function Navbar() {
  const navLinks = navigationData.links;
  const homeLink = navLinks[0];
  const [active, setActive] = useState(homeLink.label);
  const [mobileOpen, setMobileOpen] = useState(false);
  

  const closeMenu = () => {
    setMobileOpen(false);
  
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(30,50,25,0.06)]"
    >
      <div className="mx-auto flex min-h-[100px] max-w-[1600px] items-center justify-between py-2 lg:min-h-[115px] px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* LOGO */}
        <Link
          href={homeLink.href}
          onClick={() => {
            setActive(homeLink.label);
            closeMenu();
          }}
          className="relative z-50 shrink-0"
        >
          <motion.div
            whileHover={{ scale: 1.035 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={siteInfoData.logo}
              alt={siteInfoData.alt}
              width={370}
              height={121}
              priority
              className="h-auto w-[205px] object-contain sm:w-[250px] lg:w-[290px] xl:w-[285px]"
            />
          </motion.div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav aria-label={navigationData.ariaLabel} className="hidden items-center gap-3 lg:flex xl:gap-7">

          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className="group relative"
            >
              <motion.span
                whileHover={{ y: -2 }}
                className={`relative flex items-center rounded-full px-6 py-3 text-[17px] font-medium transition-all duration-300 xl:text-[19px]
                  ${
                    active === link.label
                      ? "bg-[#637e5b] text-white shadow-md"
                      : "text-[#17251a] hover:bg-[#edf2eb] hover:text-[#637e5b]"
                  }`}
              >
                {link.label}
              </motion.span>
            </Link>
          ))}

          {/* REMAINING LINKS */}
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`rounded-full px-6 py-3 text-[17px] font-medium transition-all duration-300 xl:text-[19px]
                ${
                  active === link.label
                    ? "bg-[#637e5b] text-white shadow-md"
                    : "text-[#17251a] hover:bg-[#edf2eb] hover:text-[#637e5b]"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? siteInfoData.mobileMenu.closeLabel : siteInfoData.mobileMenu.openLabel}
          aria-expanded={mobileOpen}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#637e5b] text-white transition-all duration-300 hover:bg-[#4c6747] lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X size={23} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu size={23} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute left-0 top-full w-full overflow-hidden border-t border-[#edf0e9] bg-white shadow-xl lg:hidden"
          >
            <nav aria-label={siteInfoData.mobileMenu.ariaLabel} className="mx-auto flex max-w-[700px] flex-col px-6 py-5">

              {navLinks.slice(0, 2).map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => {
                      setActive(link.label);
                      closeMenu();
                    }}
                    className={`block rounded-xl px-5 py-3.5 text-[16px] font-medium transition-all
                      ${
                        active === link.label
                          ? "bg-[#637e5b] text-white"
                          : "text-[#17251a] hover:bg-[#edf2eb]"
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {navLinks.slice(2).map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index + 3) * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => {
                      setActive(link.label);
                      closeMenu();
                    }}
                    className={`block rounded-xl px-5 py-3.5 text-[16px] font-medium transition-all
                      ${
                        active === link.label
                          ? "bg-[#637e5b] text-white"
                          : "text-[#17251a] hover:bg-[#edf2eb]"
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
