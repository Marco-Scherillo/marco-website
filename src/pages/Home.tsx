import type { MouseEvent } from "react";
import Projects from "../components/Projects";
import About from "../components/about";
import FadeIn from "../components/FadeIn";
import { FaGithub, FaLinkedin, FaPenNib, FaEnvelope } from "react-icons/fa";
import njitSeal from "../assets/New_Jersey_IT_seal.svg.png";
import profilePic from "../assets/naturepic.JPG";
import { Link } from "react-router-dom";

const scrollToSection = (sectionId: string, event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  const section = document.getElementById(sectionId);
  section?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const SKILL_GROUPS = [
  { label: "Languages", items: ["C", "C++", "Java", "Python", "TypeScript", "JavaScript", "Kotlin"] },
  { label: "Frameworks & Libraries", items: ["React", "FastAPI", "Express.js", "NumPy", "Pandas", "Scikit-learn"] },
  { label: "Infrastructure & Tools", items: ["Hadoop", "Amazon EC2", "MongoDB", "MySQL", "Git", "Linux", "JIRA"] },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100">
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.13) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* Animated orbs */}
      <div className="orb-1 pointer-events-none absolute -left-52 top-10 h-[520px] w-[520px] rounded-full bg-sky-500/15 blur-3xl" />
      <div className="orb-2 pointer-events-none absolute -right-40 top-32 h-[480px] w-[480px] rounded-full bg-violet-500/18 blur-3xl" />
      <div className="orb-3 pointer-events-none absolute left-1/3 top-[55%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="orb-4 pointer-events-none absolute -right-20 top-[60%] h-[360px] w-[360px] rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="orb-5 pointer-events-none absolute -left-20 top-[75%] h-[320px] w-[320px] rounded-full bg-sky-400/10 blur-3xl" />

      {/* Top fade for hero contrast */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-slate-900/80 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex mb-8 items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/20"
        >
          <FaPenNib size={14} />
          Blog
        </Link>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_auto_1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-2 text-sm text-sky-200 ring-1 ring-white/10">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold">NJIT Graduate · Open to Full-Time Roles</span>
              </div>

              <h1 className="mt-8 text-4xl font-semibold tracking-tight bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-transparent sm:text-5xl lg:text-6xl">
                Marco Scherillo
              </h1>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                I specialize in end-to-end software engineering — from low-level algorithms and distributed systems
                to intuitive, responsive interfaces. I care about code that ships and software that lasts.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#about"
                  onClick={(event) => scrollToSection("about", event)}
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
                >
                  About me
                </a>
                <a
                  href="#projects"
                  onClick={(event) => scrollToSection("projects", event)}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-300 hover:bg-white/10"
                >
                  View projects
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-slate-100">
                <a
                  href="https://github.com/Marco-Scherillo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 transition hover:bg-white/10"
                >
                  <FaGithub size={18} />
                  <span className="ml-2 text-sm">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/marco-scherillo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 transition hover:bg-white/10"
                >
                  <FaLinkedin size={18} />
                  <span className="ml-2 text-sm">LinkedIn</span>
                </a>
                <a
                  href="mailto:marcoscherillo98@gmail.com"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 transition hover:bg-white/10"
                >
                  <FaEnvelope size={18} />
                  <span className="ml-2 text-sm">Email</span>
                </a>
              </div>

            </div>

            {/* ── Profile photo ── */}
            <div className="flex justify-center">
              <img
                src={profilePic}
                alt="Marco Scherillo"
                className="h-72 w-52 rounded-2xl object-cover object-top border border-white/10 shadow-xl"
              />
            </div>

            {/* ── Snapshot card ── */}
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/30">
              <div className="flex items-center gap-4">
                <img
                  src={njitSeal}
                  alt="NJIT Seal"
                  className="h-14 w-14 rounded-2xl border border-white/10 bg-white/10 object-contain"
                />
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Computer Science</p>
                  <p className="mt-1 text-xl font-semibold text-white">NJIT · Class of 2025</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-xs uppercase tracking-widest text-slate-400">Recent Experience</p>
                  <p className="mt-1 text-sm font-medium text-slate-200">Merck Pharmaceuticals</p>
                  <p className="text-xs text-slate-400">Software Eng. Capstone Intern · Fall 2025</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                    <p className="text-2xl font-bold text-white">11</p>
                    <p className="text-xs text-slate-400">Projects</p>
                  </div>
                  <div className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                    <p className="text-2xl font-bold text-emerald-400">Open</p>
                    <p className="text-xs text-slate-400">to hire</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FadeIn delay={100}>
          <About />
        </FadeIn>

        {/* ── Skills ── */}
        <FadeIn delay={0}>
        <div id="skills" className="mt-20 rounded-[2rem] border border-slate-200/20 bg-white/90 p-8 shadow-xl shadow-slate-950/10">
          <h2 className="text-3xl font-semibold text-slate-950">Skills</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {SKILL_GROUPS.map(({ label, items }) => (
              <div key={label}>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">{label}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-slate-200/80 bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        </FadeIn>

        {/* ── Contact ── */}
        <FadeIn delay={0}>
        <div id="contact" className="mt-20 rounded-[2rem] border border-white/10 bg-slate-900/95 p-10 text-slate-100 shadow-2xl shadow-slate-950/40">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Get in touch</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let's build something together
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Whether you're hiring, starting something new, or just want to talk shop — my inbox is open.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:marcoscherillo98@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                Say hello
              </a>
              <a
                href="https://www.linkedin.com/in/marco-scherillo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
        </FadeIn>

        {/* ── Projects ── */}
        <FadeIn delay={0}>
        <div className="mt-20">
          <Projects />
        </div>
        </FadeIn>
      </div>
    </main>
  );
}
