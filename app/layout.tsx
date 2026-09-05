import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: { default: 'Kylinn Ding — Designer & Artist', template: '%s — Kylinn Ding' },
  description: 'Kylinn Ding is a designer and artist based in Boston and Beijing, exploring human factors, UX design, and art.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
