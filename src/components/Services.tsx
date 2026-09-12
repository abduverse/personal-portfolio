"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiBriefcase,
  FiGlobe,
  FiLayers,
  FiSmartphone,
  FiZap,
} from "react-icons/fi";

const services = [
  {
    title: "Mobile App Development",
    description:
      "User-friendly mobile experiences for Android and cross-platform apps that help your business move faster.",
    icon: FiSmartphone,
    highlights: ["React Native", "UI/UX flows", "App deployment"],
  },
  {
    title: "Website Development",
    description:
      "Modern, responsive business websites and web apps built for speed, clarity, and conversions.",
    icon: FiGlobe,
    highlights: ["Next.js", "Landing pages", "Business portals"],
  },
  {
    title: "ERPNext Implementation",
    description:
      "End-to-end ERPNext setup for operational efficiency, data visibility, and business process automation.",
    icon: FiLayers,
    highlights: ["Module setup", "Workflow design", "Data migration"],
  },
  {
    title: "ERP Consulting",
    description:
      "Practical ERP strategy and guidance to help teams choose, customize, and scale the right solutions.",
    icon: FiBriefcase,
    highlights: ["Process mapping", "Business analysis", "System optimization"],
  },
  {
    title: "Business Automation",
    description:
      "Streamline repetitive processes with custom tools, reporting, and digital workflows that reduce manual work.",
    icon: FiZap,
    highlights: ["Automations", "Dashboards", "Reporting"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.14),transparent_35%)]" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Services
          </p>
          <h2 className="text-2xl font-black text-white md:text-3xl">
            What I can help you build
          </h2>
          <p className="mt-4 text-base text-slate-300">
            I help businesses and founders turn ideas into digital products, modern systems, and scalable operations.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group flex h-full flex-col rounded-[26px] border border-white/10 bg-white/5 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.25)]"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                  <Icon className="text-xl" />
                </div>

                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>

                <ul className="mt-5 space-y-2 text-xs text-slate-300">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 rounded-[28px] border border-blue-400/20 bg-blue-500/10 p-6 text-center md:flex-row md:justify-between"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-blue-200">Need a custom solution?</p>
            <h3 className="mt-2 text-2xl font-black text-white">Let’s build your next digital product.</h3>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            Contact me
            <FiArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
