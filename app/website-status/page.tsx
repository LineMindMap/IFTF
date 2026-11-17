import type { Metadata } from 'next';
import Link from 'next/link';
import { aboutMenu, deferredWork, liveRoutes, routes, titleFor } from '../../data/content';
import ServiceIndicators from './service-indicators';

export const metadata: Metadata = { title: 'Website Status | IFTF' };

export default function WebsiteStatus() {
  const unfinished = routes.filter(slug => !liveRoutes.includes(slug));
  return (
    <main id="main" tabIndex={-1} className="wrap inner-page status-page">
      <ServiceIndicators />
      <div className="status-backlog">
        <section aria-labelledby="unfinished">
          <h2 id="unfinished">Pages in development</h2>
          <ul className="service-list">
            {unfinished.map(slug => {
              const external = aboutMenu.find(item => item.slug === slug && item.external);
              const state = slug === 'about' ? 'Draft' : external && !external.url ? 'URL pending' : 'Planned';
              return <li key={slug}><Link href={external?.url ?? '/' + slug + '/'}>{titleFor(slug)}</Link><span className="status-badge yellow">{state}</span></li>;
            })}
          </ul>
        </section>
        <section aria-labelledby="later">
          <h2 id="later">Features planned for later</h2>
          <ul className="later-list">
            {deferredWork.map(item => <li key={item.title}><strong>{item.title}</strong><p>{item.detail}</p></li>)}
          </ul>
        </section>
      </div>
    </main>
  );
}
