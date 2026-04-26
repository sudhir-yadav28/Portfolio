"use client";

import { contact } from "@/config/contact";

const explore = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#tech", label: "Tech Stack" },
  { href: "#contact", label: "Contact" },
];

function handleResumeClick() {
  const a = document.createElement("a");
  a.href = contact.resumeDownloadUrl;
  a.download = "Sudhir_Yadav_Resume.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.open(contact.resumeUrl, "_blank", "noopener,noreferrer");
}

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-hairline mt-10">
      <div className="container-edge py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-y-12 md:gap-x-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-5">
            <h3
              className="signature text-4xl md:text-5xl text-gold-primary"
              aria-label="Sudhir Yadav"
            >
              Sudhir Yadav
            </h3>
            <span
              aria-hidden
              className="block mt-2 h-px w-20 bg-gold-primary/40"
            />
            <p className="serif-body italic text-ink-secondary text-sm mt-5 leading-relaxed max-w-xs">
              Engineering AI systems that ship — and matter.
            </p>
            <p className="mono-meta text-ink-tertiary mt-6">
              {contact.location}
            </p>
          </div>

          {/* Explore */}
          <div className="md:col-span-3 md:col-start-6">
            <span className="mono-label">EXPLORE</span>
            <ul className="mt-5 space-y-2.5">
              {explore.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-ink-secondary hover:text-gold-primary text-sm transition-colors duration-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-2">
            <span className="mono-label">CONNECT</span>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-ink-secondary hover:text-gold-primary transition-colors duration-300"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-secondary hover:text-gold-primary transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-secondary hover:text-gold-primary transition-colors duration-300"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                  className="text-ink-secondary hover:text-gold-primary transition-colors duration-300"
                >
                  Phone
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <span className="mono-label">RESOURCES</span>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={handleResumeClick}
                  className="text-ink-secondary hover:text-gold-primary text-sm transition-colors duration-300 text-left"
                >
                  Resume
                </button>
              </li>
              <li className="text-ink-tertiary">
                Blog{" "}
                <span className="mono-meta text-ink-tertiary ml-1">
                  · soon
                </span>
              </li>
              <li className="text-ink-tertiary">
                Now{" "}
                <span className="mono-meta text-ink-tertiary ml-1">
                  · soon
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-hairline" style={{ borderColor: "rgba(201,169,97,0.12)" }}>
        <div className="container-edge py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="mono-meta text-ink-tertiary" style={{ letterSpacing: "0.15em" }}>
            © 2026 SUDHIR YADAV · BUILT WITH INTENT.
          </p>
          <div className="flex items-center gap-5">
            <p className="mono-meta text-ink-tertiary" style={{ letterSpacing: "0.15em" }}>
              DESIGNED & BUILT BY SUDHIR YADAV
            </p>
            <a
              href="#top"
              className="mono-meta text-gold-primary hover:text-gold-bright transition-colors duration-300"
              style={{ letterSpacing: "0.15em" }}
            >
              ↑ TOP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
