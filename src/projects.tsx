type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "1.5rem", borderRadius: 8 }}>
      <h3 style={{ marginBottom: "0.5rem" }}>{title}</h3>
      <p style={{ marginBottom: "0.75rem" }}>{description}</p>

      <p style={{ fontSize: "0.9rem", color: "#555" }}>
        <strong>Tech:</strong> {tech.join(", ")}
      </p>

      <div style={{ marginTop: "1rem" }}>
        {github && (
          <a href={github} target="_blank">
            GitHub
          </a>
        )}
        {demo && (
          <>
            {" · "}
            <a href={demo} target="_blank">
              Live Demo
            </a>
          </>
        )}
      </div>
    </div>
  );
}