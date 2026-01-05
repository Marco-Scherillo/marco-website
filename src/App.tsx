import ProjectCard from "./projects";

function App() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 1rem" }}>
      <section> 
        <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
          Marco Scherillo
        </h1>

        <h2 style={{ fontSize: "1.25rem", fontWeight: 400, color: "#555" }}>
          Computer Science Graduate From NJIT
        </h2>

        <p style={{ marginTop: "1.5rem", fontSize: "1.1rem" }}>
          I’m a computer science student focused on building full-stack
          applications, distributed systems, and data-driven tools.
        </p>
        <div style={{ marginTop: "2rem" }}>
          <a href="https://github.com/Marco-Scherillo" target="_blank">GitHub</a>
          {" · "}
          <a href="linkedin.com/in/marco-scherillo-7a7428158" target="_blank">
          LinkedIn
          </a>
        </div>
      </section>
      <section style={{ marginTop: "4rem" }}>
  <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Projects</h2>

  <div style={{ display: "grid", gap: "1.5rem" }}>
    <ProjectCard
      title="A* 4x4 Puzzle Solver"
      description="Implemented the A* search algorithm in C to solve a 4x4 sliding puzzle using admissible heuristics."
      tech={["C", "A*", "Heuristics"]}
      github="https://github.com/Marco-Scherillo/Intesive-Programing-in-Linux-Projects."
    />

    <ProjectCard
      title="Pokémon Battle Simulator"
      description="Full-stack Pokémon battle simulator with turn-based logic and team composition."
      tech={["React", "TypeScript", "Node.js"]}
      github="https://github.com/ghxlam/covey-mon"
    />
  </div>
</section>

    </main>
  );
}

export default App;
