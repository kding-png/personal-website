export function ProjectCard({ title, description }: { title: string; description: string }) {
  return <article className="project-card"><h2>{title}</h2><p className="body-copy">{description}</p></article>;
}
