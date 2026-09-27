"use client";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2024 – 2028",
    title: "B.Tech in Computer Science and Engineering (AI & ML)",
    place: "SRM University, Kattankulathur",
    note: "Current CGPA: 8.2",
  },
  {
    year: "Until 2023",
    title: "Schooling",
    place: "Jawahar Navodaya Vidyalaya (JNV)",
    note: "Passed out in 2023",
  },
];

const exploring = [
  "Advanced Machine Learning",
  "AI Engineering",
  "Full Stack Development",
  "MLOps",
  "Cloud Deployment",
  "Data Structures & Algorithms",
  "Production-ready applications",
];

export default function Journey() {
  return (
    <section id="journey" className="bg-black px-6 py-28 md:px-12">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-violet-400"
        >
          Learning journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-3xl font-bold text-white md:text-5xl"
        >
          Where I&apos;m learning
        </motion.h2>

        <div className="mt-12 border-l border-white/10 pl-8">
          {timeline.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pb-10 last:pb-0"
            >
              <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.9)]" />
              <p className="text-sm text-violet-400">{t.year}</p>
              <p className="mt-1 text-lg font-semibold text-white">{t.title}</p>
              <p className="text-zinc-400">{t.place}</p>
              <p className="text-sm text-zinc-500">{t.note}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
        >
          <p className="text-lg font-semibold text-white">Currently exploring</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {exploring.map((e) => (
              <span
                key={e}
                className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-sm text-violet-200"
              >
                {e}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}