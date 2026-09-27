"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { socials } from "@/data/socials";

const items = [
  { key: "github", label: "GitHub", href: socials.github },
  { key: "linkedin", label: "LinkedIn", href: socials.linkedin },
  { key: "email", label: "Email", href: socials.email ? `mailto:${socials.email}` : "" },
  { key: "leetcode", label: "LeetCode", href: socials.leetcode },
  { key: "kaggle", label: "Kaggle", href: socials.kaggle },
].filter((i) => i.href);

export default function Contact() {
  return (
    <section id="contact" className="bg-black px-6 py-28 md:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-violet-400"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-3xl font-bold text-white md:text-5xl"
        >
          Let&apos;s connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-4 max-w-xl text-zinc-400"
        >
          Open to software engineering and AI/ML internship opportunities.
          Feel free to reach out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {items.map((i) => (
            <Link
              key={i.key}
              href={i.href}
              target={i.key === "email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              {i.label}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}