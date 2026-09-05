import Link from 'next/link';

export function ProjectCard({ title, description, href }: { title: string; description?: string; href?: string }) {
  const content = <><h2>{title}</h2>{description && <p className="body-copy">{description}</p>}</>;
  return <article className="project-card">
    {href ? <Link href={href} className="project-link">{content}</Link> : content}
  </article>;
}
