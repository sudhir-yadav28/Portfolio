"use client";

import { motion } from "framer-motion";
import {
  experience,
  education,
  certifications,
} from "@/config/experience";

const ease = [0.16, 1, 0.3, 1];

export default function Experience() {
  return (
    <section id="experience" className="section relative">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease }}
          className="max-w-3xl"
        >
          <span className="mono-label">03 / EXPERIENCE</span>
          <h2 className="serif-display text-4xl md:text-6xl mt-5 leading-[1.05] text-ink-primary">
            Where I'm <em className="text-gold-primary">building.</em>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20 md:mt-24">
          {/* Connecting line */}
          <div
            aria-hidden
            className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-hairline"
          />

          <ul className="space-y-14 md:space-y-20">
            {experience.map((role, i) => (
              <motion.li
                key={role.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease, delay: i * 0.05 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Node */}
                <span
                  aria-hidden
                  className={`absolute left-[7px] md:left-[10px] top-2 w-[13px] h-[13px] rounded-full ${
                    role.isFuture
                      ? "border-2 border-dashed border-gold-primary bg-bg-primary"
                      : "bg-gold-primary"
                  }`}
                />

                {role.isFuture && (
                  <span className="mono-meta text-gold-primary block mb-3 tracking-[0.25em]">
                    ↗ NEXT CHAPTER
                  </span>
                )}

                <div
                  className={`${
                    role.isFuture
                      ? "border border-dashed border-gold-primary/40 rounded-sm p-7 md:p-9 bg-bg-elevated/40"
                      : ""
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                    <h3
                      className={`serif-display text-2xl md:text-3xl leading-tight ${
                        role.isFuture ? "text-gold-muted" : "text-ink-primary"
                      }`}
                    >
                      {role.company}
                    </h3>
                    <span className="mono-meta text-ink-tertiary whitespace-nowrap">
                      {role.dates}
                    </span>
                  </div>

                  <p className="serif-body italic text-gold-primary text-base md:text-lg mt-1">
                    {role.role}
                  </p>
                  <p className="mono-meta text-ink-tertiary mt-2">
                    {role.location}
                  </p>

                  <ul className="mt-6 space-y-3 max-w-3xl">
                    {role.bullets.map((b, idx) => (
                      <li
                        key={idx}
                        className="text-ink-secondary text-base md:text-[1.02rem] leading-[1.75] pl-5 relative"
                      >
                        <span className="absolute left-0 top-[0.7em] w-2 h-px bg-gold-primary/60" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease }}
          className="mt-24 pt-14 border-t border-hairline"
        >
          <span className="mono-label">EDUCATION</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8">
            {education.map((ed) => (
              <div key={ed.school}>
                <h4 className="serif-display text-xl md:text-2xl text-ink-primary leading-tight">
                  {ed.school}
                </h4>
                <p className="serif-body italic text-gold-primary mt-1">
                  {ed.program}
                </p>
                <p className="mono-meta text-ink-tertiary mt-2">
                  {ed.dates} · {ed.location}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="mt-14 pt-8 border-t border-hairline"
        >
          <span className="mono-label">CERTIFICATIONS</span>
          <ul className="mt-5 space-y-2">
            {certifications.map((c, i) => (
              <li
                key={i}
                className="serif-body italic text-ink-tertiary text-sm md:text-base leading-relaxed"
              >
                — {c}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
