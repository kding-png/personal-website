import Image from 'next/image';
import Link from 'next/link';
import { PageTitle } from '@/components/portfolio/typography';
import { Navigation } from '@/components/portfolio/navigation';
import { biography, featuredProjects } from '@/lib/portfolio';

export default function Home() {
  return <div className="homepage-shell">
    <header className="site-header"><Navigation /></header>
    <main className="page home-page">
      <section className="home-intro" aria-label="Introduction">
        <PageTitle>Hi, I’m Kylinn Ding</PageTitle>
        <p className="body-copy biography">{biography}</p>
      </section>
      <section className="featured-projects" aria-label="Selected projects">
        {featuredProjects.map(project => <article className="featured-project" key={project.id} aria-label={project.id === 1 ? 'Lumino' : `Project ${project.id} placeholder`}>
          {project.id === 1 ? <Link href="/works/lumino" className="featured-link" aria-label="View Lumino case study">
            <div className="featured-cover"><Image src="/projects/lumino/render.webp" alt="Lumino concept render: a glowing mushroom nightlight with a wooden clock base" width={1120} height={1360} sizes="(max-width: 600px) 84vw, 42vw" /></div>
            <h2>Lumino</h2><p>A nightlight and companion app designed to bring reassurance to bedtime.</p>
          </Link> : <div className="project-placeholder"><h2>{project.id}</h2></div>}
        </article>)}
      </section>
    </main>
  </div>;
}
