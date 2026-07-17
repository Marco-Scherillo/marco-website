import { useState } from "react";
import ProjectCard from "./ProjectCard";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
};

const PROJECTS: Project[] = [
  {
    title: "FORTRAN-95 Interpreter",
    description: "Built a lexical analyzer, syntax parser (using EBNF), and execution engine for handling control flow and variable assignments.",
    tech: ["C++", "Parsing", "EBNF", "Compilers"],
    github: "https://github.com/Marco-Scherillo/interpreter",
  },
  {
    title: "A* Search Pathfinding",
    description: "Designed and implemented a pathfinding algorithm to solve a 4×4 matrix puzzle, efficiently identifying the shortest path to the goal state.",
    tech: ["C", "A*", "Heuristics", "Data Structures"],
    github: "https://github.com/Marco-Scherillo/Intesive-Programing-in-Linux-Projects",
  },
  {
    title: "Stock Data Scraper",
    description: "Python-based scraper for retrieving and analyzing top-performing stocks, backed by MongoDB Atlas and presented through a dynamic Apache/PHP website.",
    tech: ["Python", "MongoDB", "Apache", "PHP"],
    github: "https://github.com/Marco-Scherillo/Intesive-Programing-in-Linux-Projects",
  },
  {
    title: "Pokémon Battle Simulator",
    description: "Collaborated to design and implement a turn-based Pokémon battle feature using TDD throughout. Deployed on an Amazon EC2 instance.",
    tech: ["TypeScript", "React", "Node.js", "AWS EC2"],
    github: "https://github.com/Marco-Scherillo/covey-mon",
  },
  {
    title: "RESTful Shopping Cart API",
    description: "FastAPI-powered shopping cart with product management and cart operations via a clean REST interface.",
    tech: ["Python", "FastAPI", "REST", "Backend"],
    github: "https://github.com/Marco-Scherillo/Shopping-cart-Api",
  },
  {
    title: "Flight Data Analysis",
    description: "Processed 22 years of U.S. flight data using a Hadoop MapReduce cluster of 10 Amazon EC2 instances to surface airline performance trends.",
    tech: ["Java", "Hadoop", "MapReduce", "AWS EC2"],
    github: "https://github.com/Marco-Scherillo/Flight-project",
  },
  {
    title: "Deck Scanner",
    description: "Android app built with CameraX and OCR to scan trading cards, track collections, and store data locally — developed in an Agile team setting.",
    tech: ["Android", "Kotlin", "CameraX", "OCR"],
    github: "https://github.com/Marco-Scherillo/DeckMaster",
  },
  {
    title: "MPI Matrix Multiplication",
    description: "Parallel matrix multiplication using MPI with distributed computation across multiple nodes.",
    tech: ["C", "MPI", "Parallel Computing"],
    github: "https://github.com/Marco-Scherillo/Intesive-Programing-in-Linux-Projects",
  },
  {
    title: "Pthreads Pi Approximation",
    description: "Multithreaded C program approximating Pi via Monte Carlo simulation, benchmarking performance across thread counts.",
    tech: ["C", "Pthreads", "Concurrency"],
    github: "https://github.com/Marco-Scherillo/Intesive-Programing-in-Linux-Projects",
  },
  {
    title: "HTTP Server from Scratch",
    description: "Lightweight HTTP server built from scratch in Python to explore networking, sockets, and HTTP request/response handling without relying on web frameworks.",
    tech: ["Python", "Networking", "Sockets", "HTTP"],
    github: "https://github.com/Marco-Scherillo/https-server-from-scrach",
  },
  {
    title: "RAG Bot",
    description: "RAG-based Q&A bot that lets you chat with your documents using Claude and ChromaDB. Ingests markdown, text, and PowerPoint files, converts them to embeddings, and answers queries against the stored content.",
    tech: ["Python", "Claude AI", "ChromaDB", "RAG"],
    github: "https://github.com/Marco-Scherillo/rag-bot",
  },
];

const ALL_TAGS = [...new Set(PROJECTS.flatMap((p) => p.tech))].sort();

export default function Projects() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? PROJECTS.filter((p) => p.tech.includes(activeTag))
    : PROJECTS;

  const toggleTag = (tag: string) =>
    setActiveTag((prev) => (prev === tag ? null : tag));

  return (
    <section
      id="projects"
      className="rounded-[2rem] border border-white/10 bg-slate-900/95 p-10 shadow-2xl shadow-slate-950/40"
    >
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-sky-400">Work</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Projects</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
            A mix of coursework, personal builds, and collaborative projects — from parallel computing in C to
            full-stack web apps.
          </p>
        </div>
        <a
          href="https://github.com/Marco-Scherillo"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm text-sky-400 hover:text-sky-300 transition"
        >
          More on GitHub →
        </a>
      </div>

      {/* Tag filter */}
      <div className="mt-7 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTag(null)}
          className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
            activeTag === null
              ? "bg-sky-500 text-white shadow-sm shadow-sky-500/30"
              : "border border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-slate-200"
          }`}
        >
          All
          <span className="ml-1.5 tabular-nums opacity-60">{PROJECTS.length}</span>
        </button>

        {ALL_TAGS.map((tag) => {
          const count = PROJECTS.filter((p) => p.tech.includes(tag)).length;
          const isActive = activeTag === tag;
          return (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                isActive
                  ? "bg-sky-500 text-white shadow-sm shadow-sky-500/30"
                  : "border border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-slate-200"
              }`}
            >
              {tag}
              <span className="ml-1.5 tabular-nums opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Count label */}
      <p className="mt-4 text-xs text-slate-500">
        {activeTag
          ? `${filtered.length} project${filtered.length !== 1 ? "s" : ""} tagged "${activeTag}"`
          : `${PROJECTS.length} projects`}
      </p>

      {/* Grid */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <div
            key={`${project.title}-${activeTag ?? "all"}`}
            className="card-appear"
            style={{ animationDelay: `${i * 45}ms` }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
