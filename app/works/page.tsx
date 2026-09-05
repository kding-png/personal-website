import type { Metadata } from 'next';
import Link from 'next/link';
import { PageTitle } from '@/components/portfolio/typography';
import { ProjectCard } from '@/components/portfolio/project-card';
import { projects } from '@/lib/portfolio';
export const metadata: Metadata = { title: 'My works' };
export default function Works() {
  return <main className="page works-page">
    <PageTitle>My works</PageTitle>
    <section className="projects" aria-label="Selected work categories">
      {projects.map(project => <ProjectCard key={project.title} {...project} />)}
    </section>
    <Link className="home-link" href="/">← Back to home</Link>
  </main>;
}
