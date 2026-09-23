"use client";
import { motion } from "framer-motion";

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const stats = [
  { value: "8.2", label: "Current CGPA" },
  { value: "2028", label: "Graduating" },
  { value: "4", label: "Featured projects" },
];

export default function About() {
  return (
    <section id="about" className="bg-black px-6 py-28 md:px-12">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-sm text-violet-400">About me</p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">
            Turning ideas into working products.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Reveal delay={0.1} className="space-y-4 text-lg leading-relaxed text-zinc-400">
            <p>
              I&apos;m a Computer Science and Engineering student specializing in
              Artificial Intelligence and Machine Learning at SRM University,
              Kattankulathur.
            </p>
            <p>
              I enjoy building practical software applications, machine learning
              systems, and modern web experiences. My interests include AI,
              machine learning, full stack and backend development, and MLOps.
            </p>
            <p>
              I&apos;m continuously improving my problem-solving, development, and
              communication skills by working on real-world projects.
            </p>
          </Reveal>

          <Reveal
            delay={0.2}
            className="self-start rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          >
            <p className="text-sm text-zinc-500">Education</p>
            <p className="mt-2 text-lg font-semibold text-white">
              B.Tech in Computer Science and Engineering
            </p>
            <p className="text-zinc-300">Specialization: AI and Machine Learning</p>
            <p className="mt-1 text-zinc-400">SRM University, Kattankulathur</p>
            <p className="text-zinc-500">2024 – 2028</p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.1}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-md"
            >
              <p className="text-3xl font-bold text-white md:text-5xl">{s.value}</p>
              <p className="mt-2 text-xs text-zinc-400 md:text-sm">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}