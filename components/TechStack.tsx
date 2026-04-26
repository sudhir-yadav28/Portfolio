"use client";

import { motion } from "framer-motion";
import { type IconType } from "react-icons";
import {
  SiPython,
  SiPostgresql,
  SiMysql,
  SiOpenjdk,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiHuggingface,
  SiOpencv,
  SiLangchain,
  SiOpenai,
  SiOllama,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiReact,
  SiNextdotjs,
  SiStreamlit,
  SiPandas,
  SiNumpy,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiAnthropic,
} from "react-icons/si";
import { techStack, skills } from "@/config/tech";

const ease = [0.16, 1, 0.3, 1];

const iconMap: Record<string, IconType> = {
  python: SiPython,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  openjdk: SiOpenjdk,
  pytorch: SiPytorch,
  tensorflow: SiTensorflow,
  scikitlearn: SiScikitlearn,
  huggingface: SiHuggingface,
  opencv: SiOpencv,
  langchain: SiLangchain,
  openai: SiOpenai,
  ollama: SiOllama,
  fastapi: SiFastapi,
  django: SiDjango,
  flask: SiFlask,
  react: SiReact,
  nextdotjs: SiNextdotjs,
  streamlit: SiStreamlit,
  pandas: SiPandas,
  numpy: SiNumpy,
  git: SiGit,
  github: SiGithub,
  docker: SiDocker,
  vercel: SiVercel,
  anthropic: SiAnthropic,
};

export default function TechStack() {
  return (
    <section id="tech" className="section relative">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease }}
          className="max-w-3xl"
        >
          <span className="mono-label">04 / TOOLKIT</span>
          <h2 className="serif-display text-4xl md:text-6xl mt-5 leading-[1.05] text-ink-primary">
            The kit I <em className="text-gold-primary">build with.</em>
          </h2>
          <p className="serif-body text-lg md:text-xl text-ink-secondary mt-6 leading-relaxed max-w-2xl">
            A working toolset earned project by project — chosen for what ships,
            not for what looks good on a slide.
          </p>
        </motion.div>

        <div className="mt-20 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left — toolkit */}
          <div className="lg:col-span-8 border-t border-hairline">
            {techStack.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, ease, delay: i * 0.04 }}
                className="py-7 md:py-8 border-b border-hairline"
              >
                <span className="mono-label">{cat.label}</span>
                <div className="mt-4 flex flex-nowrap items-center gap-x-4 lg:gap-x-5 overflow-x-auto no-scrollbar">
                  {cat.items.map((item, idx) => {
                    const Icon = item.icon ? iconMap[item.icon] : null;
                    return (
                      <span
                        key={item.name}
                        className="inline-flex items-center gap-2 group whitespace-nowrap shrink-0"
                      >
                        {Icon ? (
                          <span className="icon-gold inline-flex opacity-80 group-hover:opacity-100 transition-opacity">
                            <Icon size={15} />
                          </span>
                        ) : (
                          <span
                            aria-hidden
                            className="inline-block h-1 w-1 rounded-full bg-gold-primary/60 group-hover:bg-gold-primary transition-colors"
                          />
                        )}
                        <span className="serif-body text-sm md:text-base text-ink-secondary group-hover:text-ink-primary transition-colors">
                          {item.name}
                        </span>
                        {idx < cat.items.length - 1 ? (
                          <span
                            aria-hidden
                            className="ml-2 inline-block h-3 w-px bg-hairline"
                          />
                        ) : null}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — skills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="lg:col-span-4 lg:pl-10 lg:border-l lg:border-hairline"
          >
            <span className="mono-label">SKILLS</span>
            <h3 className="serif-display text-2xl md:text-3xl mt-4 leading-[1.15] text-ink-primary">
              What I actually <em className="text-gold-primary">do.</em>
            </h3>
            <ul className="mt-8 space-y-0">
              {skills.map((skill, idx) => (
                <li
                  key={skill}
                  className="flex items-baseline gap-3 py-3 border-b border-hairline last:border-b-0"
                >
                  <span className="mono-meta text-ink-tertiary tabular-nums">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="serif-body text-sm md:text-base text-ink-secondary leading-snug">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
