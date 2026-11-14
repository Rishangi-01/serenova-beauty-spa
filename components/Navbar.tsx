
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Our Team", href: "/team" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  { name: "Skin Care", href: "/services/skin-care" },
  { name: "Hair Care", href: "/services/hair-care" },
  { name: "Body Spa", href: "/services/body-spa" },
  { name: "Beauty Treatments", href: "/services/beauty" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(30,50,25,0.06)]"
    >
      <div className="mx-auto flex min-h-[100px] max-w-[1800px] items-center justify-between px-5 py-2 sm:px-8 lg:min-h-[115px] lg:px-12 xl:px-16">

        {/* LOGO */}
        <Link
          href="/"
          onClick={() => {
            setActive("Home");
            closeMenu();
          }}
          className="relative z-50 shrink-0"
        >
          <motion.div
            whileHover={{ scale: 1.035 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/serenova-logo.png"
              alt="Serenova Beauty and Spa"
              width={370}
              height={121}
              priority
              className="h-auto w-[205px] object-contain sm:w-[250px] lg:w-[290px] xl:w-[285px]"
            />
          </motion.div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-3 lg:flex xl:gap-7">

          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className="group relative"
            >
              <motion.span
                whileHover={{ y: -2 }}
                className={`relative flex items-center rounded-full px-6 py-3 text-[17px] font-medium transition-all duration-300 xl:text-[19px]
                  ${
                    active === link.name
                      ? "bg-[#637e5b] text-white shadow-md"
                      : "text-[#17251a] hover:bg-[#edf2eb] hover:text-[#637e5b]"
                  }`}
              >
                {link.name}
              </motion.span>
            </Link>
          ))}

          {/* SERVICES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => {
                setServicesOpen(!servicesOpen);
                setActive("Services");
              }}
              className={`flex items-center gap-2 rounded-full px-6 py-3 text-[17px] font-medium transition-all duration-300 xl:text-[19px]
                ${
                  active === "Services"
                    ? "text-[#637e5b]"
                    : "text-[#17251a] hover:bg-[#edf2eb] hover:text-[#637e5b]"
                }`}
            >
              Services
              <ChevronDown
                size={19}
                className={`transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-0 top-full mt-3 w-[250px] overflow-hidden rounded-2xl border border-[#e7ece4] bg-white p-3 shadow-[0_15px_45px_rgba(0,0,0,0.12)]"
                >
                  {services.map((service, index) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 }}
                    >
                      <Link
                        href={service.href}
                        onClick={() => {
                          setActive("Services");
                          closeMenu();
                        }}
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] text-[#263426] transition-all duration-300 hover:bg-[#eef3eb] hover:pl-6 hover:text-[#637e5b]"
                      >
                        <Sparkles size={15} className="text-[#829879]" />
                        {service.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* REMAINING LINKS */}
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`rounded-full px-6 py-3 text-[17px] font-medium transition-all duration-300 xl:text-[19px]
                ${
                  active === link.name
                    ? "bg-[#637e5b] text-white shadow-md"
                    : "text-[#17251a] hover:bg-[#edf2eb] hover:text-[#637e5b]"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
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
            <nav className="mx-auto flex max-w-[700px] flex-col px-6 py-5">

              {navLinks.slice(0, 2).map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => {
                      setActive(link.name);
                      closeMenu();
                    }}
                    className={`block rounded-xl px-5 py-3.5 text-[16px] font-medium transition-all
                      ${
                        active === link.name
                          ? "bg-[#637e5b] text-white"
                          : "text-[#17251a] hover:bg-[#edf2eb]"
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* MOBILE SERVICES */}
              <div className="py-1">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex w-full items-center justify-between rounded-xl px-5 py-3.5 text-left text-[16px] font-medium text-[#17251a] hover:bg-[#edf2eb]"
                >
                  Services
                  <ChevronDown
                    size={19}
                    className={`transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-5 border-l-2 border-[#dce5d8] py-2 pl-4">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={closeMenu}
                            className="block rounded-lg px-4 py-3 text-[14px] text-[#53634f] transition-colors hover:bg-[#edf2eb]"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(2).map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index + 3) * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => {
                      setActive(link.name);
                      closeMenu();
                    }}
                    className={`block rounded-xl px-5 py-3.5 text-[16px] font-medium transition-all
                      ${
                        active === link.name
                          ? "bg-[#637e5b] text-white"
                          : "text-[#17251a] hover:bg-[#edf2eb]"
                      }`}
                  >
                    {link.name}
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
