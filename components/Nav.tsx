"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { contact } from "@/config/contact";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#tech", label: "Tech Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-bg-primary/70 border-b border-hairline"
          : "bg-transparent"
      }`}
    >
      <div className="container-edge flex items-center justify-between h-16 md:h-20">
        <a
          href="#top"
          className="serif-display text-lg md:text-xl text-gold-primary"
        >
          <em>@Sudhir_Yadav</em>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="mono-meta text-ink-secondary hover:text-gold-primary transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={contact.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="hidden md:inline-flex btn-ghost"
          style={{ padding: "0.6rem 1.1rem", fontSize: "0.65rem" }}
        >
          Resume <span aria-hidden>↓</span>
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden text-gold-primary p-2"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="block w-6 h-px bg-current mb-1.5"></span>
          <span className="block w-6 h-px bg-current"></span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-hairline bg-bg-primary/95 backdrop-blur-md">
          <div className="container-edge py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="mono-meta text-ink-secondary hover:text-gold-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href={contact.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="btn-ghost mt-2 self-start"
              style={{ padding: "0.6rem 1.1rem", fontSize: "0.65rem" }}
            >
              Resume <span aria-hidden>↓</span>
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
