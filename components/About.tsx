"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const ease = [0.16, 1, 0.3, 1];

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="section relative">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20"
        >
          {/* Left — copy (60%) */}
          <div className="lg:col-span-3 flex flex-col">
            <span className="mono-label">01 / ABOUT</span>
            <h2 className="serif-display text-4xl md:text-6xl mt-5 leading-[1.05] text-ink-primary">
              The story <em className="text-gold-primary">so far.</em>
            </h2>

            <div className="mt-10 space-y-6 text-base md:text-lg text-ink-secondary leading-[1.8] max-w-2xl">
              <p>
                I build because I can't <em className="text-ink-primary">not</em>{" "}
                build. Late nights, broken builds, that quiet hour after a model
                finally converges — that's where I feel most alive. Right now I'm a
                Data Science &amp; AI undergrad at{" "}
                <span className="text-ink-primary">Masters' Union</span> and{" "}
                <span className="text-ink-primary">IIT Guwahati</span>, learning in
                two rooms at once and trying to deserve the seat in both.
              </p>
              <p>
                 Currently I'm a SWE (ML) Intern at{" "}
                <span className="text-ink-primary">Crefio</span>, where every model
                I touch ends up shaping a real lending decision — that responsibility
                has changed how I write code. Before that, at{" "}
                <span className="text-ink-primary">Branding Pioneers</span>, I helped
                ship an AI CRM with live voice and dialogue systems that real
                businesses still use every day.
              </p>
              <p>
                <em className="text-gold-primary">
                  I want to work where the bar is brutal and the work is honest.
                </em>{" "}
                I'm not interested in safe — I want rooms where engineers care so
                much it shows in the smallest details, and I plan to earn the right
                to stay in them.
              </p>
            </div>
          </div>

          {/* Right — photo (40%) */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease }}
                className="relative aspect-[3/4] p-2 group"
                style={{
                  border: "1px solid rgba(201, 169, 97, 0.3)",
                }}
              >
                <div className="relative w-full h-full overflow-hidden bg-bg-elevated">
                  {!imgError ? (
                    <Image
                      src="/images/profile.jpg"
                      alt="Sudhir Yadav"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:saturate-[0.95]"
                      onError={() => setImgError(true)}
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-bg-elevated to-bg-primary">
                      <span className="mono-meta text-ink-tertiary mb-3">
                        IMAGE
                      </span>
                      <p className="text-ink-secondary text-sm">
                        Photo coming soon
                      </p>
                      <p className="mono-meta text-ink-tertiary mt-3 text-[0.6rem]">
                        /public/images/profile.jpg
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
              <p className="mono-meta text-ink-tertiary mt-5 text-center lg:text-left">
                SUDHIR YADAV · GURUGRAM · 2026
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
