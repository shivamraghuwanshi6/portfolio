"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const HeroScene = dynamic(() => import("../three/HeroScene"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center overflow-hidden bg-black px-6 md:px-12">
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      <div className="pointer-events-none relative z-10 max-w-2xl">
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
          className="text-5xl font-bold tracking-tight text-white md:text-7xl"
        >
          Shivam
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-lg text-zinc-400 md:text-xl"
        >
          AI/ML × Full Stack Developer
        </motion.p>
      </div>
    </section>
  );
}