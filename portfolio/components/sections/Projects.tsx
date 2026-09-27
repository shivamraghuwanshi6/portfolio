"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";
import { featuredProjects, otherProjects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-black px-6 py-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-violet-400"
        >
          Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-3xl font-bold text-white md:text-5xl"
        >
          Selected work
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.1 }}
            >
              <TiltCard className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                <div className={`h-28 bg-gradient-to-br ${p.accent}`} />
                <div className="p-6">
                  <p className="text-xs text-zinc-500">{p.category}</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {p.description}
                  </p>

                  <ul className="mt-4 space-y-1 text-sm text-zinc-300">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="text-violet-400">▹</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300 transition group-hover:border-violet-500/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {(p.github || p.live) && (
                    <div className="mt-6 flex gap-3">
                      {p.github && (
                        <Link href={p.github} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200">
                          GitHub
                        </Link>
                      )}
                      {p.live && (
                        <Link href={p.live} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10">
                          Live Demo
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <h3 className="mt-20 text-xl font-semibold text-white">More projects</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((p) => (
            <div
              key={p.name}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-violet-500/40 hover:bg-white/5"
            >
              <p className="font-medium text-white">{p.name}</p>
              {p.description && (
                <p className="mt-2 text-sm text-zinc-400">{p.description}</p>
              )}
              {p.tech.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs text-violet-300">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}