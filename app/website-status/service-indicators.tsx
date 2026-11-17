'use client';

import { useEffect, useState } from 'react';
import { assetPath } from '../asset-path';

const checks = [
  { label: 'Public website', path: '/' },
  { label: 'Contact page', path: '/contact/' },
];

function Status({ label, tone, state }: { label: string; tone: string; state: string }) {
  return <li><strong>{label}</strong><span className={'status-badge ' + tone}>{state}</span></li>;
}

export default function ServiceIndicators() {
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [motionPaused, setMotionPaused] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    for (const { path } of checks) {
      fetch(assetPath(path), { cache: 'no-store', signal: AbortSignal.any([controller.signal, AbortSignal.timeout(8000)]) })
        .then(response => {
          if (!controller.signal.aborted) setResults(previous => ({ ...previous, [path]: response.ok }));
        })
        .catch(() => {
          if (!controller.signal.aborted) setResults(previous => ({ ...previous, [path]: false }));
        });
    }
    return () => controller.abort();
  }, []);

  const website = results['/'];
  const tone = website === true ? 'green' : website === false ? 'red' : 'yellow';

  return <>
    <div className={'status-hero ' + tone} data-motion={motionPaused ? 'paused' : 'playing'}>
      <div className="status-hero-copy">
        <p className="status-kicker">IFTF Website Status</p>
        <h1 aria-live="polite">{website === true ? 'Website is up' : website === false ? 'Website unreachable' : 'Checking the website'}</h1>
        <p>Availability from your current connection.</p>
      </div>
      <div className="status-visual" aria-hidden="true">
        <div className="status-orbit status-orbit-outer"><i/><i/></div>
        <div className="status-orbit status-orbit-middle"><i/></div>
        <div className="status-orbit status-orbit-inner"><i/></div>
        <div className="status-scan"/>
        <div className="status-core">{website === true ? '✓' : website === false ? '!' : '…'}</div>
      </div>
      {website === true && (
        <button type="button" className="status-motion" onClick={() => setMotionPaused(paused => !paused)}>
          {motionPaused ? 'Resume motion' : 'Pause motion'}
        </button>
      )}
    </div>
    <section aria-labelledby="services">
      <h2 id="services">Service availability</h2>
      <p>Checks run from your browser when you open this page. They show whether each page responds at that moment.</p>
      <ul className="service-list" aria-live="polite">
      {checks.map(({label, path}) => {
        const reachable = results[path];
        return <Status key={path} label={label}
          tone={reachable === true ? 'green' : reachable === false ? 'red' : 'yellow'}
          state={reachable === true ? 'Reachable' : reachable === false ? 'Unreachable' : 'Checking'}/>;
      })}
      <Status label="eVerify" tone="yellow" state="Planned"/>
      <Status label="Secure sign-in" tone="yellow" state="Planned"/>
      <Status label="Online giving" tone="yellow" state="Planned"/>
      </ul>
    </section>
  </>;
}
