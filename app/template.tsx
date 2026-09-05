import type { ReactNode } from 'react';

// Templates remount on navigation, replaying the lightweight entrance animation.
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-transition">{children}</div>;
}
