import Projects from "../components/Projects";
import About from "../components/about";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import njitSeal from "../assets/New_Jersey_IT_seal.svg.png";

export default function Home() {
  return (
    <main className="max-w-[900px] mx-auto px-4 py-16">
      {/* ===== HERO / HEADER ===== */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={njitSeal}
            alt="NJIT Seal"
            className="h-12 w-12 object-contain"
          />

          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Marco Scherillo
          </h1>
        </div>

        <About />
      </section>

      {/* ===== DIVIDER ===== */}
      <div className="h-px w-full bg-gray-200 mb-20" />

      {/* ===== PROJECTS ===== */}
      <Projects />

      {/* ===== LINKS / CTA ===== */}
      <div className="mt-8 flex items-center gap-6">
        <a
          href="https://github.com/Marco-Scherillo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition"
          aria-label="GitHub"
        >
          <FaGithub size={28} />
        </a>

        <a
          href="https://linkedin.com/in/marco-scherillo-7a7428158"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-[#0A66C2] transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={28} />
        </a>
      </div>
    </main>
  );
}
