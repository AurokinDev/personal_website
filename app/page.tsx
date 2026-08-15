'use client';

import { useEffect, useState } from 'react';

// The official React Bits source is kept in JavaScript to preserve its shader implementation.
// @ts-expect-error -- the local component intentionally has no declaration file.
import Strands from './components/Strands';

export default function Home() {
  const [showStrands, setShowStrands] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) return;

    const frame = window.requestAnimationFrame(() => setShowStrands(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <main className="site-shell">
      {showStrands && (
        <div className="strands-layer" aria-hidden="true">
          <Strands
            colors={['#8e5bc4', '#c8b1eb', '#6e3f9d']}
            count={4}
            speed={0.18}
            amplitude={0.85}
            waviness={0.85}
            thickness={0.52}
            glow={1.7}
            taper={3.2}
            spread={0.9}
            intensity={0.44}
            saturation={0.76}
            opacity={0.55}
            scale={1.35}
          />
        </div>
      )}

      <div className="content-safe-zone" />
      <section className="intro" aria-label="Morgan Tomasini">
        <h1>Morgan Tomasini</h1>
        <a
          className="linkedin-link"
          href="https://www.linkedin.com/in/morgantomasini/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile for Morgan Tomasini (opens in a new tab)"
        >
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}
