"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { projects, type Project } from "@/config/projects";
import ProjectModal from "./ProjectModal";

const ease = [0.16, 1, 0.3, 1];

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="section relative">
      <div className="container-edge">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end"
        >
          <div className="lg:col-span-7">
            <span className="mono-label">02 / SELECTED WORK</span>
            <h2 className="serif-display text-4xl md:text-6xl mt-5 leading-[1.05] text-ink-primary">
              Things I've <em className="text-gold-primary">shipped.</em>
            </h2>
            <p className="serif-body text-lg md:text-xl text-ink-secondary mt-6 leading-relaxed max-w-2xl">
              Production systems built across credit-risk, geospatial
              intelligence, workflow automation, and clinical decision support —
              each one starts in a notebook and ends in someone's daily flow.
            </p>
          </div>

          <div className="lg:col-span-5 lg:pl-12 lg:border-l lg:border-hairline">
            <span className="mono-label">DOMAINS</span>
            <ul className="mt-5">
              {[
                "Credit-Risk Modeling",
                "Geospatial Intelligence",
                "Workflow Automation",
                "Clinical Decision Support",
              ].map((d, i) => (
                <li
                  key={d}
                  className="flex items-baseline gap-4 py-3 border-b border-hairline last:border-b-0"
                >
                  <span className="mono-meta text-gold-primary tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="serif-body text-base md:text-lg text-ink-secondary leading-snug">
                    {d}
                  </span>
                </li>
              ))}
            </ul>
            <p className="serif-body italic text-ink-tertiary text-sm mt-5 leading-relaxed">
              Notebook → API → user. Every project below crossed that line.
            </p>
          </div>
        </motion.div>

        {/* Projects list */}
        <div className="mt-20 md:mt-28">
          {projects.map((p, i) => (
            <ProjectRow
              key={p.id}
              project={p}
              index={i}
              isLast={i === projects.length - 1}
              onOpen={() => setActive(p)}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

function ProjectRow({
  project,
  index,
  isLast,
  onOpen,
}: {
  project: Project;
  index: number;
  isLast: boolean;
  onOpen: () => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.95, ease, delay: index * 0.06 }}
      className={`relative group py-14 md:py-20 ${
        !isLast ? "border-b border-hairline" : ""
      }`}
    >
      <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
        {/* Big faded number */}
        <div className="col-span-12 md:col-span-2 flex md:block items-baseline gap-4">
          <span
            className="serif-display text-[88px] md:text-[70px] leading-[0.85] text-gold-primary"
            style={{ opacity: 0.18 }}
          >
            {project.number}
          </span>
        </div>

        {/* Body */}
        <div className="col-span-12 md:col-span-10 lg:col-span-8">
          <h3 className="serif-display text-3xl md:text-5xl text-ink-primary leading-tight">
            {project.title}
          </h3>
          <p className="serif-body italic text-lg md:text-xl text-gold-primary mt-3">
            {project.tagline}
          </p>
          <p className="text-ink-secondary text-base md:text-[1.05rem] leading-[1.8] mt-6 max-w-2xl">
            {project.description}
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2 mt-7">
            {project.tech.map((t) => (
              <span key={t} className="pill-outline">
                {t}
              </span>
            ))}
          </div>

          {/* See project */}
          <button
            onClick={onOpen}
            className="mt-9 inline-flex items-center gap-2 mono-meta text-gold-primary hover:text-gold-bright transition-colors group/btn"
            aria-label={`See ${project.title} details`}
          >
            <span className="gold-underline">SEE PROJECT</span>
            <span
              aria-hidden
              className="transition-transform duration-500 group-hover/btn:translate-x-1"
            >
              →
            </span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}
