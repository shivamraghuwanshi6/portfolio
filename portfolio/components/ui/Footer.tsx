import { socials } from "@/data/socials";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-8 text-center text-sm text-zinc-500 md:px-12">
      <p>© {new Date().getFullYear()} Shivam Raghuwanshi. Built with Next.js and Three.js.</p>
      {socials.github && (
        <p className="mt-1">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            github.com/shivamraghuwanshi6
          </a>
        </p>
      )}
    </footer>
  );
}