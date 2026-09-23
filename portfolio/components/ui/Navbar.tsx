"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-black/60 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        <Link href="#home" className="text-lg font-semibold tracking-tight text-white">
          Shivam Raghuwanshi
        </Link>

        <ul className="hidden gap-6 text-sm md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <Link href={`#${l.id}`} className={active === l.id ? "text-white" : "text-zinc-400 transition hover:text-white"}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="text-xl text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <ul className="flex flex-col gap-4 px-6 pb-6 text-zinc-300 md:hidden">
          {links.map((l) => (
            <li key={l.id}>
              <Link href={`#${l.id}`} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}