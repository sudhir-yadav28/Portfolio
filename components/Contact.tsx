"use client";

import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { HiMail, HiPhone } from "react-icons/hi";
import { contact } from "@/config/contact";
import type { IconType } from "react-icons";

const ease = [0.16, 1, 0.3, 1];

type Card = {
  label: string;
  value: string;
  secondary?: string;
  action: string;
  href: string;
  Icon: IconType;
  external?: boolean;
};

function handleResumeClick() {
  // Trigger download
  const a = document.createElement("a");
  a.href = contact.resumeDownloadUrl;
  a.download = "Sudhir_Yadav_Resume.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // Open Drive preview
  window.open(contact.resumeUrl, "_blank", "noopener,noreferrer");
}

export default function Contact() {
  const cards: Card[] = [
    {
      label: "EMAIL",
      value: contact.email,
      action: "Send a message",
      href: `mailto:${contact.email}?subject=${encodeURIComponent(
        "Hello Sudhir"
      )}`,
      Icon: HiMail,
    },
    {
      label: "PHONE",
      value: contact.phone,
      action: "Give a call",
      href: `tel:${contact.phone.replace(/\s+/g, "")}`,
      Icon: HiPhone,
    },
    {
      label: "LINKEDIN",
      value: "/in/sudhiryadav",
      secondary: "The full professional story.",
      action: "Connect",
      href: contact.linkedin,
      Icon: FaLinkedin,
      external: true,
    },
    {
      label: "GITHUB",
      value: "@sudhiryadav",
      secondary: "Where the code actually lives.",
      action: "Follow",
      href: contact.github,
      Icon: SiGithub,
      external: true,
    },
  ];

  return (
    <section id="contact" className="section relative">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease }}
          className="max-w-3xl"
        >
          <span className="mono-label">05 / CONTACT</span>
          <h2 className="serif-display text-5xl md:text-7xl mt-5 leading-[1.02] text-ink-primary">
            Let's build <em className="text-gold-primary">something.</em>
          </h2>
          <p className="serif-body text-lg md:text-xl text-ink-secondary mt-7 leading-relaxed max-w-2xl">
            Open to{" "}
            <em className="text-ink-primary">AI/ML and SWE internships</em>,{" "}
            <em className="text-ink-primary">research roles</em>, and{" "}
            <em className="text-ink-primary">serious side-projects</em> — the
            kind where the problem is hard, the team cares, and the work ends
            up in someone's hands.
          </p>
        </motion.div>

        {/* Contact grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.85, ease, delay: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
        >
          {cards.map(({ label, value, secondary, action, href, Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="contact-card group bg-bg-elevated p-7 border border-hairline rounded-sm flex flex-col gap-5 cursor-pointer"
            >
              <span className="contact-card__icon icon-gold inline-flex">
                <Icon size={22} />
              </span>

              <div className="flex flex-col gap-1.5">
                <span className="mono-label text-gold-muted">{label}</span>
                <p className="text-ink-primary text-[0.95rem] md:text-base break-all leading-snug">
                  {value}
                </p>
                {secondary ? (
                  <p className="text-ink-secondary text-sm leading-relaxed">
                    {secondary}
                  </p>
                ) : null}
              </div>

              <span className="mt-auto inline-flex items-center gap-2 mono-meta text-gold-primary">
                <span
                  aria-hidden
                  className="contact-card__arrow inline-block"
                >
                  ↗
                </span>
                <span>{action}</span>
              </span>
            </a>
          ))}
        </motion.div>

        {/* Diamond divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease, delay: 0.15 }}
          className="mt-24 flex items-center gap-5 max-w-3xl mx-auto"
          aria-hidden
        >
          <span className="flex-1 h-px bg-gold-primary/30" />
          <span className="text-gold-primary text-sm leading-none">◆</span>
          <span className="flex-1 h-px bg-gold-primary/30" />
        </motion.div>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="mt-12 flex flex-col items-center text-center max-w-2xl mx-auto"
        >
          <h3 className="serif-body italic text-2xl md:text-[1.75rem] text-ink-primary leading-tight">
            Want the full picture?
          </h3>
          <p className="text-ink-secondary text-base mt-4 leading-relaxed max-w-md">
            Download my resume — one page, no fluff, every project and tool I
            work with.
          </p>
          <button
            type="button"
            onClick={handleResumeClick}
            className="resume-btn mt-8 btn-gold"
          >
            <span aria-hidden>↓</span> Download Resume
          </button>
          <p className="mono-meta text-ink-tertiary mt-8">

            Based in {contact.location}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
