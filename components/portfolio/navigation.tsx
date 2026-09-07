'use client';
import { useState } from 'react';
import Link from 'next/link';
import { headerNavigation } from '@/lib/portfolio';
export function Navigation() {
  const [message, setMessage] = useState('');
  return <div className="navigation-wrap">
    <nav className="home-navigation" aria-label="Main navigation">
      {headerNavigation.map(item => item.href
        ? <Link className="text-action" href={item.href} key={item.label}>{item.label}</Link>
        : <button className="text-action" type="button" key={item.label} onClick={() => setMessage(`${item.label} — coming soon.`)}>{item.label}</button>)}
    </nav>
    <p className="navigation-message" role="status">{message}</p>
  </div>;
}
