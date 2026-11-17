import Link from 'next/link';
import { aboutMenu, countries, focusAreas, office, routes, titleFor } from '../../data/content';

const status: Record<string, string> = {
  login: 'Secure sign-in is planned for a later phase.',
  donate: 'Online giving is planned for a later phase.',
};

type PageProps = { params: Promise<{ slug: string }> };

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
          <p>Explore the foundation’s focus areas, or learn how to start a conversation about collaboration.</p>
          <div className="actions">
            <Link className="button" href="/programs/">Explore focus areas</Link>
            <Link className="text-link" href="/collaborate/">Propose a collaboration</Link>
          </div>
        </>
      ) : slug === 'programs' ? (
        <>
          <p className="inner-lead">Education and community prosperity guide the foundation’s work.</p>
          <p>These descriptions outline IFTF’s priorities. Details on individual projects will be added as they become available.</p>
          <div className="program-list">
            {focusAreas.map(area => <section key={area.id} id={area.id}><h2>{area.title}</h2><p>{area.text}</p></section>)}
          </div>
          <Link className="text-link" href="/collaborate/">Propose a collaboration</Link>
        </>
      ) : slug === 'where-we-work' ? (
        <>
          <p className="inner-lead">IFTF is active in Pakistan and Indonesia.</p>
          <p>Our main focus is education and community prosperity. Country profiles will be expanded as project details become available.</p>
          <div className="program-list">
            {countries.map(country => <section key={country.id} id={country.id}>
              <h2>{country.name}</h2>
              {country.id === 'indonesia' && <p>Our current office is in Yogyakarta.</p>}
              <Link className="text-link" href={country.id === 'indonesia' ? '/contact/' : '/programs/'}>
                {country.id === 'indonesia' ? 'Yogyakarta office details' : 'Explore our focus areas'}
              </Link>
            </section>)}
          </div>
        </>
      ) : slug === 'contact' ? (
        <>
          <p className="inner-lead">Yogyakarta office</p>
          <address className="office-address">{office.street}<br/>{office.city}<br/>{office.postalCode}</address>
          <dl className="office-details">
            <div><dt>Phone</dt><dd><a href={office.telephoneHref}>{office.phone}</a></dd></div>
            <div><dt>Fax</dt><dd>{office.fax}</dd></div>
            <div><dt>Email</dt><dd><a href={'mailto:' + office.email}>{office.email}</a></dd></div>
          </dl>
        </>
      ) : slug === 'verify' ? (
        <>
          <p className="inner-lead">Document verification is coming soon.</p>
          <p>eVerify is planned to scan a document’s QR code or barcode and show its verification status, who requested it, when it was issued, and when it expires.</p>
          <Link href="/help/#documents" className="text-link">Get help with document verification</Link>
        </>
      ) : (
        <>
          <p className="inner-lead">{status[slug] ?? (aboutMenu.some(item => item.slug === slug && item.external)
            ? 'The external website link will appear here when it is available.'
            : 'This section is being prepared.')}</p>
          <Link href="/" className="text-link">Return to homepage</Link>
        </>
      )}
    </main>
  );
}
