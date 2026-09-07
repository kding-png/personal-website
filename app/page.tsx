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
        {featuredProjects.map(project => <article className="featured-project" key={project.id} aria-label={`Project ${project.id} placeholder`}>
          <div className="project-placeholder"><h2>{project.id}</h2></div>
        </article>)}
      </section>
    </main>
  </div>;
}
