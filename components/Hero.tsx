"use client";

import { motion } from "framer-motion";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { contact } from "@/config/contact";

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      <div className="hero-whisper" aria-hidden />

      <div className="container-edge relative z-10 flex flex-col items-center text-center pt-28 pb-24">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8, ease }}
          className="inline-flex items-center gap-3 mono-meta text-ink-secondary border border-hairline rounded-full px-6 py-3 mb-10 text-[0.95rem]"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-gold-primary animate-pulse" />
          <span>
            Incoming AI/ML Intern @{" "}
            <em
              className="text-gold-primary not-italic"
              style={{ fontStyle: "italic" }}
            >
              your.org
            </em>
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.15, duration: 0.9, ease }}
          className="serif-display text-[14vw] sm:text-[10vw] md:text-[8.2vw] lg:text-[7.4rem] xl:text-[8rem] leading-[0.95] tracking-tight text-ink-primary"
        >
          Sudhir <em className="text-gold-primary">Yadav</em>
        </motion.h1>

        {/* Italic byline */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.35, duration: 0.8, ease }}
          className="serif-body italic text-base md:text-lg text-gold-muted mt-5"
        >
          AI/ML engineer · Gurugram · India
        </motion.p>

        {/* Sub-handle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.7, ease }}
          className="mono-meta mt-4 text-ink-tertiary"
        >
          @SUDHIRYADAV
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.55, duration: 0.9, ease }}
          className="serif-body mt-9 max-w-2xl text-lg md:text-xl text-ink-secondary leading-relaxed"
        >
          AI/ML engineer building production systems where research meets reality —{" "}
          <em className="text-gold-primary">turning models into products</em>{" "}
          that ship and matter.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 0.7, ease }}
          className="flex flex-col sm:flex-row gap-3 mt-11"
        >
          <a href="#projects" className="btn-gold">
            See Projects <span aria-hidden>→</span>
          </a>
          <a href="#contact" className="btn-ghost">
            Get in Touch
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.85, duration: 0.7, ease }}
          className="flex items-center gap-7 mt-12"
        >
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="icon-gold"
          >
            <SiGithub size={18} />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="icon-gold"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
            className="icon-gold"
          >
            <SiX size={16} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 1, ease }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="mono-meta text-ink-tertiary">SCROLL</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="text-gold-primary"
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
