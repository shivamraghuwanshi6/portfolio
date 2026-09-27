"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { certGroups, certifications } from "@/data/certifications";

export default function Certifications() {
  const [filter, setFilter] = useState<(typeof certGroups)[number]>("All");
  const shown = certifications.filter((c) => filter === "All" || c.group === filter);

  return (
    <section id="certifications" className="bg-black px-6 py-28 md:px-12">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-violet-400"
        >
          Certifications
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-3xl font-bold text-white md:text-5xl"
        >
          Certifications and programs
        </motion.h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {certGroups.map((g) => (
            <button
              key={g}
              onClick={() => setFilter(g)}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                filter === g
                  ? "border-violet-500 bg-violet-500/20 text-white"
                  : "border-white/10 text-zinc-400 hover:text-white"
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((c) => (
              <motion.div
                key={c.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-colors hover:border-violet-500/40"
              >
                <p className="text-xs text-violet-400">{c.issuer}</p>
                <p className="mt-2 font-medium text-white">{c.title}</p>
                <p className="mt-3 text-xs text-zinc-500">{c.group}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}