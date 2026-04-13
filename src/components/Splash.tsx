import { useState, useEffect, type ReactNode } from 'react';

const SPLASH_DURATION = 2200;
const FADE_DURATION = 600;

export default function Splash({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<'splash' | 'fading' | 'done'>('splash');

  useEffect(() => {
    const fadeTimer = setTimeout(() => setPhase('fading'), SPLASH_DURATION);
    const doneTimer = setTimeout(() => setPhase('done'), SPLASH_DURATION + FADE_DURATION);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === 'done') return <>{children}</>;

  return (
    <>
      <div style={{ visibility: 'hidden', position: 'absolute' }}>{children}</div>

      <div
        className="splash-screen"
        style={{ opacity: phase === 'fading' ? 0 : 1 }}
      >
        <div className="splash-content">
          <img src="/venice-emblem.svg" alt="" className="splash-logo" />
          <div className="splash-text">
            <h1 className="splash-title">Built with Venice</h1>
            <p className="splash-desc">A community showcase for the Venice AI ecosystem</p>
          </div>
          <div className="splash-line" />
        </div>
      </div>
    </>
  );
}
