import Link from 'next/link';
import { focusAreas, routes } from '../../data/content';

const labels: Record<string, string> = {
  about: 'About IFTF',
  programs: 'What We Do',
  'where-we-work': 'Where We Work',
  'get-involved': 'Get Involved',
  'founders-story': 'Founders’ Story',
  verify: 'Verify a Letter',
  collaborate: 'Propose a Collaboration',
};

const status: Record<string, string> = {
  login: 'Secure sign-in is planned for a later phase.',
  verify: 'Letter verification is planned for a later phase.',
  donate: 'Online giving is planned for a later phase.',
};

type PageProps = { params: Promise<{ slug: string }> };
const titleFor = (slug: string) => labels[slug] ?? slug[0].toUpperCase() + slug.slice(1);

export function generateStaticParams() {
  return routes.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return { title: titleFor(slug) + ' | IFTF' };
}

export const dynamicParams = false;

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return (
    <main id="main" tabIndex={-1} className="wrap inner-page">
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span>
        <span aria-current="page">{titleFor(slug)}</span>
      </nav>
      <h1>{titleFor(slug)}</h1>
      {slug === 'about' ? (
        <>
          <p className="inner-lead">Bridging Today, Empowering Tomorrow.</p>
          <p>International Future Trust Foundation brings an international outlook to a shared purpose: creating more opportunity through people and partnerships.</p>
          <p>Explore the foundation’s proposed focus areas, or learn how to start a conversation about collaboration.</p>
          <div className="actions">
            <Link className="button" href="/programs/">Explore focus areas</Link>
            <Link className="text-link" href="/collaborate/">Propose a collaboration</Link>
          </div>
        </>
      ) : slug === 'programs' ? (
        <>
          <p className="inner-lead">Four proposed areas for the foundation’s work.</p>
          <p>These areas describe the current direction. Program details will be published after review.</p>
          <div className="program-list">
            {focusAreas.map(area => <section key={area.number}><h2>{area.title}</h2><p>{area.text}</p></section>)}
          </div>
          <Link className="text-link" href="/collaborate/">Propose a collaboration</Link>
        </>
      ) : (
        <>
          <p className="inner-lead">{status[slug] ?? 'This section is being prepared.'}</p>
          <Link href="/" className="text-link">Return to homepage</Link>
        </>
      )}
    </main>
  );
}
