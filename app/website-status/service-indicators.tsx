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

  return (
    <ul className="service-list" aria-live="polite">
      {checks.map(({label, path}) => {
        const reachable = results[path];
        return <Status key={path} label={label}
          tone={reachable === true ? 'green' : reachable === false ? 'red' : 'yellow'}
          state={reachable === true ? 'Reachable' : reachable === false ? 'Unreachable' : 'Checking'}/>;
      })}
      <Status label="Letter verification" tone="yellow" state="Planned"/>
      <Status label="Secure sign-in" tone="yellow" state="Planned"/>
      <Status label="Online giving" tone="yellow" state="Planned"/>
    </ul>
  );
}
