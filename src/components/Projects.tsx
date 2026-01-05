import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="A* 4x4 Puzzle Solver"
          description="Implemented the A* search algorithm in C to solve a 4x4 sliding puzzle using admissible heuristics."
          tech={["C", "A*", "Heuristics", "Data Structures"]}
          github="https://github.com/Marco-Scherillo/Intesive-Programing-in-Linux-Projects"
        />

        <ProjectCard
          title="Pokémon Battle Simulator"
          description="Full-stack Pokémon battle simulator with turn-based logic and team composition."
          tech={["React", "TypeScript", "Node.js"]}
          github="https://github.com/ghxlam/covey-mon"
        />

        <ProjectCard
          title="DigiDex – Yu-Gi-Oh Card Scanner"
          description="Android app that scans Yu-Gi-Oh cards using OCR and stores collections locally."
          tech={["Android", "Kotlin", "OCR"]}
        />

        <ProjectCard
          title="SPL-Tool (FDA XML Parser)"
          description="Backend tool for parsing FDA Structured Product Label XML files and reconstructing tables."
          tech={["Python", "Flask", "XML", "DOCX"]}
        />

        <ProjectCard
          title="Flight Data Analysis with Hadoop MapReduce"
          description="Processed 22 years of U.S. flight data using Hadoop MapReduce on a 10-node Amazon EC2 cluster to analyze airline performance trends."
          tech={["Java", "Hadoop", "MapReduce", "AWS EC2"]}
        />

        <ProjectCard
          title="MPI Matrix Multiplication"
          description="Parallel matrix multiplication using MPI with distributed computation."
          tech={["C", "MPI", "Parallel Computing"]}
        />

        <ProjectCard
          title="Pthreads Pi Approximation"
          description="Multithreaded C program approximating Pi and analyzing performance across threads."
          tech={["C", "Pthreads", "Concurrency"]}
        />
        <ProjectCard
          title="RESTful Shopping Cart API"
          description="Developed a RESTful shopping cart API using FastAPI, supporting product management and cart operations."
          tech={["Python", "FastAPI", "REST", "Backend"]}
        />

        <ProjectCard
          title="FORTRAN-95 Interpreter"
          description="Lexer, parser, and interpreter for a subset of FORTRAN-95."
          tech={["C++", "Parsing", "Compilers"]}
        />
      </div>
    </section>
  );
}
