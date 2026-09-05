import { PageTitle } from '@/components/portfolio/typography';
import { Navigation } from '@/components/portfolio/navigation';
import { biography } from '@/lib/portfolio';

export default function Home() {
  return <main className="page home-page">
    <PageTitle>Hi,<br />I’m Kylinn Ding</PageTitle>
    <p className="body-copy biography">{biography}</p>
    <Navigation />
  </main>;
}
