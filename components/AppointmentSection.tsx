
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  UserRound,
  Mail,
  Phone,
  CalendarDays,
  Clock3,
  ListFilter,
} from "lucide-react";
import { appointmentSectionData } from "@/data";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export default function AppointmentSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative isolate w-full min-h-[850px] overflow-hidden bg-[#4c321f] bg-cover bg-center bg-no-repeat py-20 sm:py-24 lg:min-h-[900px] lg:py-20"
      style={{
        backgroundImage: `url('${appointmentSectionData.backgroundImage}')`,
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/5 via-[#382316]/25 to-[#3b281c]/65" />

      <div className="mx-auto flex min-h-full w-full max-w-[1600px] items-center justify-end px-4 sm:px-8 lg:px-12">
        <div className="w-full max-w-[760px] lg:mr-4 xl:mr-8">

          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-9 text-center"
          >
          
            <div className="mb-4 flex items-center justify-center gap-5">
              <span className="h-px w-12 bg-[#e9c5a5]/80 sm:w-20" />

              <span className="text-4xl leading-none text-[#f5d4b6]">
                {appointmentSectionData.decorationSymbol}
              </span>

              <span className="h-px w-12 bg-[#e9c5a5]/80 sm:w-20" />
            </div>

            <p className="mb-4 font-serif text-lg font-semibold tracking-wide text-[#f5d7bd] sm:text-xl">
              {appointmentSectionData.eyebrow}
            </p>

            <h2 className="font-serif text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-[56px]">
              {appointmentSectionData.title}{" "}
              <span className="italic text-[#e9ad82]">
                {appointmentSectionData.highlight}
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[650px] text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              {appointmentSectionData.description}
            </p>
          </motion.div>

          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.15 }}
            className="rounded-[28px] border border-white/70 bg-[#fffaf6]/95 p-5 shadow-[0_25px_80px_rgba(35,20,10,0.25)] backdrop-blur-xl sm:rounded-[36px] sm:p-8 lg:p-8"
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">

          
                <div className="group relative">
                  <UserRound className="absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-[#a85c2b] transition-transform group-focus-within:scale-110" />

                  <input
                    type={appointmentSectionData.fields.firstName.type}
                    name={appointmentSectionData.fields.firstName.name}
                    placeholder={appointmentSectionData.fields.firstName.placeholder}
                    required={appointmentSectionData.fields.firstName.required}
                    className="h-[60px] w-full rounded-xl border border-[#d8b49c] bg-white/75 pl-14 pr-4 text-base text-[#39291f] outline-none transition-all placeholder:text-[#555] hover:border-[#a85c2b] focus:border-[#a85c2b] focus:bg-white focus:ring-4 focus:ring-[#a85c2b]/10"
                  />
                </div>

          
                <div className="group relative">
                  <UserRound className="absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-[#a85c2b] transition-transform group-focus-within:scale-110" />

                  <input
                    type={appointmentSectionData.fields.lastName.type}
                    name={appointmentSectionData.fields.lastName.name}
                    placeholder={appointmentSectionData.fields.lastName.placeholder}
                    required={appointmentSectionData.fields.lastName.required}
                    className="h-[60px] w-full rounded-xl border border-[#d8b49c] bg-white/75 pl-14 pr-4 text-base text-[#39291f] outline-none transition-all placeholder:text-[#555] hover:border-[#a85c2b] focus:border-[#a85c2b] focus:bg-white focus:ring-4 focus:ring-[#a85c2b]/10"
                  />
                </div>

          
                <div className="group relative">
                  <Mail className="absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-[#a85c2b]" />

                  <input
                    type={appointmentSectionData.fields.email.type}
                    name={appointmentSectionData.fields.email.name}
                    placeholder={appointmentSectionData.fields.email.placeholder}
                    required={appointmentSectionData.fields.email.required}
                    className="h-[60px] w-full rounded-xl border border-[#d8b49c] bg-white/75 pl-14 pr-4 text-base text-[#39291f] outline-none transition-all placeholder:text-[#555] hover:border-[#a85c2b] focus:border-[#a85c2b] focus:bg-white focus:ring-4 focus:ring-[#a85c2b]/10"
                  />
                </div>

          
                <div className="group relative">
                  <Phone className="absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-[#a85c2b]" />

                  <input
                    type={appointmentSectionData.fields.phone.type}
                    name={appointmentSectionData.fields.phone.name}
                    placeholder={appointmentSectionData.fields.phone.placeholder}
                    required={appointmentSectionData.fields.phone.required}
                    pattern={appointmentSectionData.fields.phone.pattern}
                    className="h-[60px] w-full rounded-xl border border-[#d8b49c] bg-white/75 pl-14 pr-4 text-base text-[#39291f] outline-none transition-all placeholder:text-[#555] hover:border-[#a85c2b] focus:border-[#a85c2b] focus:bg-white focus:ring-4 focus:ring-[#a85c2b]/10"
                  />
                </div>

          
                <div className="group relative sm:col-span-2">
                  <ListFilter className="pointer-events-none absolute left-5 top-1/2 z-10 h-6 w-6 -translate-y-1/2 text-[#a85c2b]" />

                  <select
                    name={appointmentSectionData.fields.service.name}
                    required={appointmentSectionData.fields.service.required}
                    defaultValue=""
                    className="h-[60px] w-full appearance-none rounded-xl border border-[#d8b49c] bg-white/75 pl-14 pr-12 text-base text-[#555] outline-none transition-all hover:border-[#a85c2b] focus:border-[#a85c2b] focus:bg-white focus:ring-4 focus:ring-[#a85c2b]/10"
                  >
                    <option value="" disabled>
                      {appointmentSectionData.fields.service.placeholder}
                    </option>

                    {appointmentSectionData.fields.service.options.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>

                  <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-xl text-[#a85c2b]">
                   {appointmentSectionData.dropdownIndicator}
                  </span>
                </div>

          
                <div className="group relative">
                  <CalendarDays className="absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-[#a85c2b]" />

                  <input
                    type={appointmentSectionData.fields.date.type}
                    name={appointmentSectionData.fields.date.name}
                    required={appointmentSectionData.fields.date.required}
                    className="h-[60px] w-full rounded-xl border border-[#d8b49c] bg-white/75 pl-14 pr-3 text-base text-[#555] outline-none transition-all hover:border-[#a85c2b] focus:border-[#a85c2b] focus:ring-4 focus:ring-[#a85c2b]/10"
                  />
                </div>

          
                <div className="group relative">
                  <Clock3 className="absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-[#a85c2b]" />

                  <select
                    name={appointmentSectionData.fields.time.name}
                    required={appointmentSectionData.fields.time.required}
                    defaultValue=""
                    className="h-[60px] w-full appearance-none rounded-xl border border-[#d8b49c] bg-white/75 pl-14 pr-10 text-base text-[#555] outline-none transition-all hover:border-[#a85c2b] focus:border-[#a85c2b] focus:ring-4 focus:ring-[#a85c2b]/10"
                  >
                    <option value="" disabled>
                      {appointmentSectionData.fields.time.placeholder}
                    </option>

                    {appointmentSectionData.fields.time.options.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>

                  <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-xl text-[#a85c2b]">
                   {appointmentSectionData.dropdownIndicator}
                  </span>
                </div>
              </div>

              
              <div className="mt-7 flex flex-col items-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.035 }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex min-h-[62px] w-full max-w-[400px] items-center justify-center gap-5 rounded-full bg-gradient-to-r from-[#a85c2b] to-[#bd713a] px-7 py-4 text-base font-semibold tracking-wide text-white shadow-[0_10px_25px_rgba(168,92,43,0.25)] transition-shadow hover:shadow-[0_15px_35px_rgba(168,92,43,0.4)] sm:text-lg"
                >
                  {submitted ? appointmentSectionData.submittedLabel : appointmentSectionData.submitLabel}

                  <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
                </motion.button>

                {submitted && (
                  <p
                    role="status"
                    className="mt-4 text-center text-sm font-medium text-[#55734c]"
                  >
                    {appointmentSectionData.successMessage}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
