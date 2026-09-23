const links = ["About", "Projects", "Skills", "Contact"];

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between px-6 py-4 backdrop-blur-md md:px-12">
      <a href="#" className="text-lg font-semibold tracking-tight text-white">
        Shiv<span className="text-violet-500">.</span>
      </a>
      <ul className="flex gap-6 text-sm text-zinc-400">
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} className="transition hover:text-white">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}