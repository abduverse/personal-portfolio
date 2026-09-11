'use client';

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { FiArrowUpRight, FiAward, FiExternalLink, FiX } from "react-icons/fi";

import employability from "../assets/employ_certeficate.jpg";
import cisco from "../assets/cisco_certeficate.jpg";
import udacity from "../assets/udacity_certeficate.jpg";
import charity_certeficate from "../assets/charity_certeficate.jpg";

type CertificateLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

type CertificateItem = {
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  image: StaticImageData;
  links: CertificateLink[];
};

const certificates: CertificateItem[] = [
  {
    title: "Introduction to Cybersecurity",
    category: "Cybersecurity",
    shortDesc: "A practical course covering the basics of online safety, threats, vulnerabilities, and organizational defense.",
    fullDesc:
      "This course gave me a strong foundation in cybersecurity, including how to recognize common threats, assess digital risks, and understand the importance of prevention. I explored the role of security awareness, the impact of cyber attacks, and the strategies organizations use to protect systems, data, and user trust.",
    tags: ["Security", "Threats", "Risk", "Awareness", "Protection"],
    image: cisco,
    links: [],
  },
  {
    title: "Programming Fundamentals",
    category: "Web Development",
    shortDesc: "A front-end learning path focused on HTML, CSS, JavaScript, and DOM-based interactivity.",
    fullDesc:
      "This Udacity course helped me build a solid base in front-end development. I learned how to structure pages with HTML, style them with CSS, and add interactivity through JavaScript. The program also introduced DOM manipulation, which strengthened my understanding of responsive design and user-centered web experiences.",
    tags: ["HTML", "CSS", "JavaScript", "DOM", "Frontend"],
    image: udacity,
    links: [
      { label: "Credential", href: "https://www.udacity.com/certificate/e/4eef93d8-4bc3-11ef-b2ae-9f07b4fe3618", icon: <FiAward /> },
    ],
  },
  {
    title: "Employability and Job Readiness",
    category: "Career Skills",
    shortDesc: "A professional development program focused on communication, resume writing, interviews, and workplace readiness.",
    fullDesc:
      "This program supported my preparation for the workforce by sharpening professional communication, interview techniques, and resume basics. It also emphasized workplace etiquette, adaptability, and time management, all of which are essential in real-world work environments and team-based settings.",
    tags: ["Resume", "Interview", "Communication", "Soft Skills"],
    image: employability,
    links: [],
  },
  {
    title: "Charity Event Participation",
    category: "Community",
    shortDesc: "A community-focused event where I contributed to fundraising, outreach, and social impact efforts.",
    fullDesc:
      "Participating in the charity event gave me firsthand experience in fundraising, community engagement, and social responsibility. It reinforced the importance of teamwork and collective action, while also showing how practical outreach can help create meaningful impact for a local cause.",
    tags: ["Community", "Volunteer", "Fundraising", "Teamwork"],
    image: charity_certeficate,
    links: [],
  },
];

export default function Certificate() {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);

  return (
    <section id="certificates" className="relative overflow-hidden bg-slate-900 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.12),transparent_35%)]" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Recognition</p>
            <h2 className="text-2xl font-black text-white md:text-3xl">
              My <span className="text-emerald-400">Certificates</span>
            </h2>
          </div>

          <div className="inline-flex w-fit items-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200">
            Learning, growth, and impact
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.35)] backdrop-blur-sm"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/10 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-emerald-400/30 bg-slate-950/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-200">
                  {certificate.category}
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-white">{certificate.title}</h3>
                <div className="rounded-full border border-white/10 bg-white/5 p-2 text-emerald-300">
                  <FiAward className="text-lg" />
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-300">{certificate.shortDesc}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {certificate.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-200">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between pt-6">
                <div className="flex flex-wrap gap-2">
                  {certificate.links.length > 0 ? (
                    certificate.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-200 transition hover:border-emerald-400/40 hover:text-white"
                      >
                        {link.icon}
                        {link.label}
                      </a>
                    ))
                  ) : (
                    <span className="text-xs uppercase tracking-[0.18em] text-slate-400">Verified</span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedCertificate(certificate)}
                  className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-emerald-400"
                >
                  View
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[30px] border border-white/10 bg-slate-900 shadow-[0_30px_80px_rgba(15,23,42,0.8)]"
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-slate-950/80 p-2 text-slate-200 transition hover:text-white"
                  aria-label="Close certificate details"
                >
                  <FiX className="text-xl" />
                </button>

                <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="border-b border-white/10 lg:border-b-0 lg:border-r">
                    <Image
                      src={selectedCertificate.image}
                      alt={selectedCertificate.title}
                      className="h-full max-h-105 w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col p-6 md:p-8">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
                      {selectedCertificate.category}
                    </p>
                    <h3 className="text-3xl font-black text-white">{selectedCertificate.title}</h3>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedCertificate.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-200">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="mt-6 text-sm leading-7 text-slate-300">{selectedCertificate.fullDesc}</p>

                    {selectedCertificate.links.length > 0 && (
                      <div className="mt-8 flex flex-wrap gap-3">
                        {selectedCertificate.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400"
                          >
                            {link.icon}
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

