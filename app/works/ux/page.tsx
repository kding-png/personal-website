import type { Metadata } from 'next';
import Link from 'next/link';
import { PageTitle } from '@/components/portfolio/typography';
import { ProjectCard } from '@/components/portfolio/project-card';
import { uxProjects } from '@/lib/portfolio';

export const metadata: Metadata = { title: 'UX Projects' };

export default function UXProjects() {
  return <main className="page works-page ux-page">
    <PageTitle>UX Projects</PageTitle>
    <ul className="ux-project-list" aria-label="UX projects">
      {uxProjects.map(project => <li key={project.title}><ProjectCard {...project} /></li>)}
    </ul>
    <Link className="home-link" href="/works">← Back to my works</Link>
  </main>;
}
