import { useEffect, useState, useRef, useCallback } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiHash, FiExternalLink } from "react-icons/fi";

type Item = {
  id: string;
  label: string;
  sub: string;
  group: string;
  icon: React.ReactNode;
  action: () => void;
};

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const ITEMS: Item[] = [
  {
    id: "nav-about", label: "About", sub: "Scroll to About section", group: "Navigate",
    icon: <FiHash size={14} />,
    action: () => scrollTo("about"),
  },
  {
    id: "nav-skills", label: "Skills", sub: "Scroll to Skills section", group: "Navigate",
    icon: <FiHash size={14} />,
    action: () => scrollTo("skills"),
  },
  {
    id: "nav-projects", label: "Projects", sub: "Scroll to Projects section", group: "Navigate",
    icon: <FiHash size={14} />,
    action: () => scrollTo("projects"),
  },
  {
    id: "nav-contact", label: "Contact", sub: "Scroll to Contact section", group: "Navigate",
    icon: <FiHash size={14} />,
    action: () => scrollTo("contact"),
  },
  {
    id: "link-github", label: "GitHub", sub: "github.com/Marco-Scherillo", group: "Links",
    icon: <FaGithub size={14} />,
    action: () => window.open("https://github.com/Marco-Scherillo", "_blank"),
  },
  {
    id: "link-linkedin", label: "LinkedIn", sub: "linkedin.com/in/marco-scherillo", group: "Links",
    icon: <FaLinkedin size={14} />,
    action: () => window.open("https://www.linkedin.com/in/marco-scherillo", "_blank"),
  },
  {
    id: "link-email", label: "Email me", sub: "marcoscherillo98@gmail.com", group: "Links",
    icon: <FaEnvelope size={14} />,
    action: () => { window.location.href = "mailto:marcoscherillo98@gmail.com"; },
  },
  {
    id: "proj-fortran", label: "FORTRAN-95 Interpreter", sub: "C++ · Compilers · Parsing", group: "Projects",
    icon: <FiExternalLink size={14} />,
    action: () => window.open("https://github.com/Marco-Scherillo/interpreter", "_blank"),
  },
  {
    id: "proj-astar", label: "A* Search Pathfinding", sub: "C · Algorithms · Data Structures", group: "Projects",
    icon: <FiExternalLink size={14} />,
    action: () => window.open("https://github.com/Marco-Scherillo/Intesive-Programing-in-Linux-Projects", "_blank"),
  },
  {
    id: "proj-stock", label: "Stock Data Scraper", sub: "Python · MongoDB · PHP", group: "Projects",
    icon: <FiExternalLink size={14} />,
    action: () => window.open("https://github.com/Marco-Scherillo/Intesive-Programing-in-Linux-Projects", "_blank"),
  },
  {
    id: "proj-pokemon", label: "Pokémon Battle Simulator", sub: "TypeScript · React · AWS EC2", group: "Projects",
    icon: <FiExternalLink size={14} />,
    action: () => window.open("https://github.com/Marco-Scherillo/covey-mon", "_blank"),
  },
  {
    id: "proj-cart", label: "RESTful Shopping Cart API", sub: "Python · FastAPI · REST", group: "Projects",
    icon: <FiExternalLink size={14} />,
    action: () => window.open("https://github.com/Marco-Scherillo/Shopping-cart-Api", "_blank"),
  },
  {
    id: "proj-flight", label: "Flight Data Analysis", sub: "Java · Hadoop · MapReduce", group: "Projects",
    icon: <FiExternalLink size={14} />,
    action: () => window.open("https://github.com/Marco-Scherillo/Flight-project", "_blank"),
  },
  {
    id: "proj-deck", label: "Deck Scanner", sub: "Kotlin · Android · CameraX · OCR", group: "Projects",
    icon: <FiExternalLink size={14} />,
    action: () => window.open("https://github.com/Marco-Scherillo/DeckMaster", "_blank"),
  },
  {
    id: "proj-mpi", label: "MPI Matrix Multiplication", sub: "C · MPI · Parallel Computing", group: "Projects",
    icon: <FiExternalLink size={14} />,
    action: () => window.open("https://github.com/Marco-Scherillo/Intesive-Programing-in-Linux-Projects", "_blank"),
  },
  {
    id: "proj-pi", label: "Pthreads Pi Approximation", sub: "C · Pthreads · Concurrency", group: "Projects",
    icon: <FiExternalLink size={14} />,
    action: () => window.open("https://github.com/Marco-Scherillo/Intesive-Programing-in-Linux-Projects", "_blank"),
  },
  {
    id: "proj-http", label: "HTTP Server from Scratch", sub: "Python · Networking · Sockets", group: "Projects",
    icon: <FiExternalLink size={14} />,
    action: () => window.open("https://github.com/Marco-Scherillo/https-server-from-scrach", "_blank"),
  },
  {
    id: "proj-rag", label: "RAG Bot", sub: "Python · Claude AI · ChromaDB", group: "Projects",
    icon: <FiExternalLink size={14} />,
    action: () => window.open("https://github.com/Marco-Scherillo/rag-bot", "_blank"),
  },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = query.trim()
    ? ITEMS.filter(
        (item) =>
          item.label.toLowerCase().includes(query.toLowerCase()) ||
          item.sub.toLowerCase().includes(query.toLowerCase()) ||
          item.group.toLowerCase().includes(query.toLowerCase())
      )
    : ITEMS;

  const groups = [...new Set(filtered.map((i) => i.group))];

  const flatFiltered = groups.flatMap((g) => filtered.filter((i) => i.group === g));

  const execute = useCallback(
    (item: Item) => {
      item.action();
      setOpen(false);
      setQuery("");
      setActiveIndex(0);
    },
    []
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        setQuery("");
        setActiveIndex(0);
      }
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 10);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const keydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, flatFiltered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        const item = flatFiltered[activeIndex];
        if (item) execute(item);
      }
    };
    window.addEventListener("keydown", keydown);
    return () => window.removeEventListener("keydown", keydown);
  }, [open, flatFiltered, activeIndex, execute]);

  useEffect(() => {
    const el = listRef.current?.querySelectorAll("[data-item]")[activeIndex] as HTMLElement | undefined;
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  if (!open) {
    return (
      <div className="pointer-events-none fixed bottom-6 right-6 z-40 hidden lg:flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-500 backdrop-blur-md select-none">
        <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-slate-400">⌘K</kbd>
        <span>Command palette</span>
      </div>
    );
  }

  let flatIndex = 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4"
      onClick={() => { setOpen(false); setQuery(""); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-slate-950/60 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input */}
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <svg className="h-4 w-4 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sections, projects, links…"
            className="flex-1 bg-transparent text-sm text-slate-100 placeholder-slate-500 outline-none"
          />
          <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs text-slate-400">Esc</kbd>
        </div>

        {/* Results */}
        <div ref={listRef} className="max-h-[360px] overflow-y-auto py-2">
          {flatFiltered.length === 0 ? (
            <p className="py-8 text-center text-sm text-slate-500">No results for "{query}"</p>
          ) : (
            groups.map((group) => {
              const groupItems = filtered.filter((i) => i.group === group);
              return (
                <div key={group}>
                  <p className="px-4 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                    {group}
                  </p>
                  {groupItems.map((item) => {
                    const idx = flatIndex++;
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={item.id}
                        data-item
                        onClick={() => execute(item)}
                        onMouseEnter={() => setActiveIndex(idx)}
                        className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                          isActive ? "bg-sky-500/15 text-white" : "text-slate-300 hover:bg-white/5"
                        }`}
                      >
                        <span className={`shrink-0 ${isActive ? "text-sky-400" : "text-slate-500"}`}>
                          {item.icon}
                        </span>
                        <span className="flex-1 text-sm font-medium">{item.label}</span>
                        <span className={`text-xs ${isActive ? "text-sky-300/70" : "text-slate-500"}`}>
                          {item.sub}
                        </span>
                      </button>
                    );
                  })}
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-4 border-t border-white/10 px-4 py-2 text-[10px] text-slate-500">
          <span><kbd className="font-mono">↑↓</kbd> navigate</span>
          <span><kbd className="font-mono">↵</kbd> open</span>
          <span><kbd className="font-mono">Esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
}
