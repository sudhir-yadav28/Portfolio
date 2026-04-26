"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import type { Project } from "@/config/projects";

const ease = [0.16, 1, 0.3, 1];

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    setImgIndex(0);
  }, [project?.id]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (project && project.images.length > 1) {
        if (e.key === "ArrowLeft")
          setImgIndex((i) => (i - 1 + project.images.length) % project.images.length);
        if (e.key === "ArrowRight")
          setImgIndex((i) => (i + 1) % project.images.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, onClose]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease }}
          className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          <motion.div
            key="dialog"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.45, ease }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-bg-elevated border border-hairline rounded-sm"
          >
            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-gold-primary hover:text-gold-bright hover:bg-bg-primary/60 rounded-full transition-colors"
            >
              <span className="text-xl leading-none">×</span>
            </button>

            <div className="p-6 md:p-12">
              {/* Header */}
              <div className="flex items-start gap-5">
                <span
                  className="serif-display text-5xl md:text-7xl text-gold-primary leading-[0.85]"
                  style={{ opacity: 0.25 }}
                >
                  {project.number}
                </span>
                <div className="flex-1">
                  <h3 className="serif-display text-3xl md:text-5xl text-ink-primary leading-tight">
                    {project.title}
                  </h3>
                  <p className="serif-body italic text-lg md:text-xl text-gold-primary mt-2">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Image gallery */}
              <div className="mt-10">
                {project.images.length > 0 ? (
                  <div className="space-y-4">
                    <div className="relative aspect-video w-full overflow-hidden bg-bg-primary border border-hairline">
                      <Image
                        src={project.images[imgIndex]}
                        alt={`${project.title} screenshot ${imgIndex + 1}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 80vw"
                        className="object-contain"
                      />
                    </div>
                    {project.images.length > 1 && (
                      <div className="flex items-center justify-between gap-4">
                        <button
                          onClick={() =>
                            setImgIndex(
                              (i) =>
                                (i - 1 + project.images.length) %
                                project.images.length
                            )
                          }
                          className="mono-meta text-gold-primary hover:text-gold-bright"
                        >
                          ← PREV
                        </button>
                        <span className="mono-meta text-ink-tertiary">
                          {String(imgIndex + 1).padStart(2, "0")} /{" "}
                          {String(project.images.length).padStart(2, "0")}
                        </span>
                        <button
                          onClick={() =>
                            setImgIndex((i) => (i + 1) % project.images.length)
                          }
                          className="mono-meta text-gold-primary hover:text-gold-bright"
                        >
                          NEXT →
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="aspect-video w-full bg-bg-primary border border-dashed border-hairline flex flex-col items-center justify-center gap-2">
                    <span className="mono-meta text-ink-tertiary">GALLERY</span>
                    <p className="text-ink-tertiary text-sm">
                      Screenshots coming soon — drop image paths into{" "}
                      <code className="text-gold-muted">/config/projects.ts</code>
                    </p>
                  </div>
                )}
              </div>

              {/* Long description */}
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="md:col-span-2">
                  <span className="mono-label">OVERVIEW</span>
                  <p className="text-ink-secondary text-base md:text-lg leading-[1.85] mt-4">
                    {project.longDescription}
                  </p>
                </div>
                <div>
                  <span className="mono-label">STACK</span>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((t) => (
                      <span key={t} className="pill-outline">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              {(project.githubUrl || project.liveUrl) && (
                <div className="mt-12 flex flex-wrap gap-3 pt-8 border-t border-hairline">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold"
                    >
                      <SiGithub size={14} /> View on GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
