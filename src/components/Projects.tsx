'use client';

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { FiArrowUpRight, FiExternalLink, FiGithub, FiX } from "react-icons/fi";

import bidding from "../assets/mern.jpg";
import myapp from "../assets/nativeApp.png";
import java from "../assets/java.png";
import cplus from "../assets/cplus.jpg";
import yen_logo from "../assets/yenpic.webp";
import taf_hero from "../assets/taf_hero.webp";

type ProjectLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

type ProjectItem = {
  title: string;
  category: string;
  impact: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  image: StaticImageData;
  links: ProjectLink[];
};

const projects: ProjectItem[] = [
  {
    title: "Yeabsira Industrial Complex — ERP Implementation",
    category: "Enterprise Platform",
    impact: "Project Manager",
    shortDesc:
      "A comprehensive ERP solution for Yeabsira Industrial Complex, designed to optimize operations and enhance decision-making.",
    fullDesc:
      "The ERP system for Yeabsira Industrial Complex is a robust platform developed using Python, JavaScript, and the Frappe framework. It integrates various business functions including finance, operations, and reporting into a unified system. The platform is designed to improve efficiency, provide real-time insights, and support strategic decision-making across the organization.",
    tags: ["Python", "JavaScript", "Frappe", "ERPNext", "Finance", "Operations"],
    image: yen_logo,
    links: [
      { label: "Open System", href: "http://196.191.151.226/", icon: <FiExternalLink /> },
    ],
  },
  {
    title: "Yencomad Construction PLC ERP System",
    category: "Enterprise Platform",
    impact: "Operations",
    shortDesc:
      "A full-scale ERP platform for construction operations, built to streamline core business workflows and reporting.",
    fullDesc:
      "The ERP system for Yencomad Construction PLC is a robust and scalable platform developed with Python, JavaScript, and the Frappe framework. It brings together project management, inventory, finance, HR, and customer operations in one connected workspace. The system emphasizes usability, modular growth, and real-time visibility so teams can move faster and make smarter decisions across the organization.",
    tags: ["Python", "JavaScript", "Frappe", "ERPNext", "Finance", "Operations"],
    image: yen_logo,
    links: [
      { label: "Open System", href: "http://197.156.78.217/", icon: <FiExternalLink /> },
    ],
  },
  {
    title: "TAF Energies PLC ERP System",
    category: "Business Automation",
    impact: "Efficiency",
    shortDesc:
      "A business management system designed to modernize energy operations, workflows, and process visibility.",
    fullDesc:
      "This ERP solution for TAF Energies PLC combines core business functions into a single system, making it easier to manage projects, inventory, accounting, resources, and reporting. Built around a clean and flexible architecture, it helps teams reduce operational friction while giving leadership better data visibility and stronger control over day-to-day execution.",
    tags: ["Python", "JavaScript", "Frappe", "ERPNext", "Reporting", "Automation"],
    image: taf_hero,
    links: [
      { label: "Open System", href: "http://197.156.127.69:8081/", icon: <FiExternalLink /> },
    ],
  },
  {
    title: "Online Bidding System",
    category: "Web Application",
    impact: "Real-time",
    shortDesc:
      "A modern bidding platform for secure auctions, live participation, and responsive buying experiences.",
    fullDesc:
      "The Online Bidding System is a MERN stack application built for real-time auctions and seamless user engagement. It supports user registration, item listing, bidding logic, live updates, and transparent auction tracking. The product is optimized for responsiveness and usability, making it ideal for both individual sellers and organizations needing a modern auction workflow.",
    tags: ["MERN", "MongoDB", "Express", "React", "Node", "Auction"],
    image: bidding,
    links: [
      { label: "Repository", href: "https://github.com/abducodespro/bidding-project", icon: <FiGithub /> },
    ],
  },
  {
    title: "Course Management System",
    category: "Desktop App",
    impact: "Academic",
    shortDesc:
      "A JavaFX academic management tool for organizing course records, students, and schedules efficiently.",
    fullDesc:
      "This desktop system helps administrators manage course enrollment, academic scheduling, and student records with clarity and control. Built using JavaFX and Scene Builder, the interface is designed to be clean, responsive, and easy to navigate while maintaining reliable data handling for educational institutions.",
    tags: ["Java", "JavaFX", "Scene Builder", "Education", "Student Enroll"],
    image: java,
    links: [
      { label: "Repository", href: "https://github.com/abducodespro/course-management", icon: <FiGithub /> },
    ],
  },
  {
    title: "Snake Game",
    category: "Game Development",
    impact: "Classic",
    shortDesc:
      "A polished terminal-based game inspired by the classic snake experience, built for quick gameplay and fun learning.",
    fullDesc:
      "This C++ project recreates the familiar Snake game loop with keyboard controls, score progression, collision handling, and a compact game-state system. It is a strong example of logic-driven development and object-oriented design, while still staying easy to understand and expand.",
    tags: ["C++", "Game Logic", "Console", "OOP", "Interactive"],
    image: cplus,
    links: [
      { label: "Repository", href: "https://github.com/abducodespro/Simple-snake-game-", icon: <FiGithub /> },
    ],
  },
  {
    title: "To-Do App",
    category: "Mobile Product",
    impact: "Productivity",
    shortDesc:
      "A lightweight mobile task manager that helps users organize tasks and stay consistent on the go.",
    fullDesc:
      "The To-Do App is a cross-platform productivity solution built with React Native. It supports adding, updating, completing, and removing tasks with a streamlined interface that keeps everyday planning simple and approachable. The app offers a practical, user-friendly approach to task management for daily routines and work priorities.",
    tags: ["React Native", "Mobile", "Productivity", "Task Management", "Cross-platform"],
    image: myapp,
    links: [
      { label: "Repository", href: "https://github.com/abducodespro/Todo-app", icon: <FiGithub /> },
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),transparent_35%)]" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Featured work</p>
            <h2 className="text-2xl font-black text-white md:text-3xl">
              My <span className="text-blue-400">Projects</span>
            </h2>
          </div>

          <div className="inline-flex w-fit items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
            {projects.length} builds delivered
          </div>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.35)] backdrop-blur-sm"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-blue-400/30 bg-slate-950/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200">
                  {project.category}
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{project.impact}</p>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 p-2 text-blue-300">
                  <FiArrowUpRight className="text-lg" />
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-300">{project.shortDesc}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="rounded-full border border-blue-400/20 bg-blue-500/10 px-2.5 py-1 text-[11px] font-medium text-blue-200">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-200 transition hover:border-blue-400/40 hover:text-white"
                    >
                      {link.icon}
                      {link.label}
                    </a>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="rounded-full bg-blue-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-400"
                >
                  Details
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
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
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-slate-950/80 p-2 text-slate-200 transition hover:text-white"
                  aria-label="Close project details"
                >
                  <FiX className="text-xl" />
                </button>

                <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="border-b border-white/10 lg:border-b-0 lg:border-r">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="h-full max-h-[420px] w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col p-6 md:p-8">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                      {selectedProject.category}
                    </p>
                    <h3 className="text-3xl font-black text-white">{selectedProject.title}</h3>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-blue-400/20 bg-blue-500/10 px-2.5 py-1 text-xs text-blue-200">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="mt-6 text-sm leading-7 text-slate-300">{selectedProject.fullDesc}</p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {selectedProject.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-400"
                        >
                          {link.icon}
                          {link.label}
                        </a>
                      ))}
                    </div>
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

