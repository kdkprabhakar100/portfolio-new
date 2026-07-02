const projects = [
  {
    number: "01",
    title: "Nirjara Beauty Salon",
    description:
      "A complete salon management platform with bookings, services, products, events, blogs and administration.",
    stack: ["React", "Node.js", "MongoDB"],
  },
  {
    number: "02",
    title: "FitGenius",
    description:
      "A modern fitness platform for guided plans, progress tracking and a more engaging health journey.",
    stack: ["Next.js", "Express", "TypeScript"],
  },
  {
    number: "03",
    title: "WasteGuard",
    description:
      "A waste-management experience focused on clearer reporting, tracking and smarter operations.",
    stack: ["React", "Firebase", "GSAP"],
  },
];

export function ProjectPreview() {
  return (
    <section id="projects" className="projects-preview">
      <div className="section-heading">
        <div>
          <p className="section-kicker">03. SELECTED WORK</p>
          <h2>Projects built to be used,<br />not just viewed.</h2>
        </div>
        <p>
          This is the next section to animate with ScrollTrigger. The starter
          keeps it simple so the hero remains the first milestone.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <span className="project-number">{project.number}</span>
            <div className="project-card-glow" />
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
