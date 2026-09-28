"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroScene = dynamic(() => import("../three/HeroScene"), { ssr: false });

const RESUME_URL =
  "https://drive.google.com/file/d/1llA66wIJFcLWnnK2fsWdLzN-oAyuLwk9/view?usp=sharing";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen items-center overflow-hidden bg-black px-6 md:px-12"
    >
      <div className="absolute inset-0 z-0 opacity-40 md:opacity-100">
        <HeroScene />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_70%_50%,rgba(124,58,237,0.18),transparent_60%)]" />

      <div className="pointer-events-none relative z-10 max-w-2xl pt-16 md:pt-0">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3 text-sm text-violet-400"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl font-bold tracking-tight text-white md:text-6xl"
        >
          Shivam Raghuwanshi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-lg text-zinc-300 md:text-xl"
        >
          AI/ML × Full Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-3 max-w-lg text-zinc-400"
        >
          I build intelligent systems, full-stack applications, and modern
          digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pointer-events-auto mt-8 flex flex-wrap gap-3"
        >
          <Link href="#projects" className="rounded-full bg-violet-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-500">
            View Projects
          </Link>
          <Link href="#contact" className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
            Let&apos;s Connect
          </Link>
          <Link href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
            Resume
          </Link>
        </motion.div>
      </div>
    </section>
  );
}