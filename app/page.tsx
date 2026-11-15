'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { countries, focusAreas } from '../data/content';

function Arrow(){return <span aria-hidden="true">↗</span>}
function Globe(){return <svg viewBox="0 0 200 200" fill="none" aria-hidden="true"><circle cx="100" cy="100" r="90"/><ellipse cx="100" cy="100" rx="45" ry="90"/><ellipse cx="100" cy="100" rx="75" ry="90"/><ellipse cx="100" cy="100" rx="90" ry="35"/><path d="M10 100h180M25 52h150M25 148h150M100 10v180"/></svg>}
function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={false}
    whileInView={reduced ? undefined : { y: [7, 0] }}
    viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.35 }}>{children}</motion.div>;
}

export default function Home() {
  return (
<main id="main" tabIndex={-1}>
<section className="hero wrap"><div className="hero-copy"><p className="eyebrow"><span/> PEOPLE. PURPOSE. POSSIBILITY.</p><h1>A shared future.<br/>A world of<br/><em>possibility.</em></h1><p className="hero-desc">Bridging Today, Empowering Tomorrow.</p><p className="intro">Progress begins with people. Discover a vision of stronger communities, meaningful partnerships and opportunity that reaches further.</p><div className="actions"><Link className="button" href="/programs/">Explore our vision <Arrow/></Link><Link className="text-link" href="/about/">Meet IFTF <Arrow/></Link></div><div className="hero-bottom"><span className="line"/><span>LOCAL PERSPECTIVES.<br/>GLOBAL POSSIBILITIES.</span></div></div><div className="hero-art"><div className="photo-frame"><Image src="/community.jpg" alt="Illustrative photograph of a community gathering" fill sizes="(max-width: 760px) 100vw, 52vw" priority/><div className="photo-shade"/><span className="image-label">THE FUTURE STARTS WITH PEOPLE</span><span className="photo-credit">Illustrative photography · not an IFTF project</span></div><div className="globe-stamp"><Globe/></div><div className="floating-note"><span className="red-rule"/><p>Different places.<br/><em>Shared possibilities.</em></p><Arrow/></div><span className="vertical-note">INTERNATIONAL FUTURE TRUST FOUNDATION</span></div></section>
<div className="preview-note wrap"><span className="status-dot"/> FOUNDATION WEBSITE PREVIEW <span>Photography is illustrative. Program descriptions are draft copy.</span></div>
<nav className="quick-links wrap" aria-label="Quick links">
  <Link href="/programs/">Explore programs <Arrow/></Link>
  <Link href="/collaborate/">Propose a collaboration <Arrow/></Link>
  <Link href="/volunteer/">Volunteer <Arrow/></Link>
  <Link href="/verify/">Verify a letter <Arrow/></Link>
</nav>
<section className="mission wrap section" id="about"><Reveal><p className="eyebrow">01 / WHO WE ARE</p></Reveal><Reveal><h2>Tomorrow is something<br/>we build <em>together.</em></h2><div className="mission-columns"><p>International Future Trust Foundation brings a global outlook to a simple idea: people and partnerships belong at the centre of a better future.</p><div><p>Our website is taking shape. This space will share the foundation’s story, its people and the work that connects its vision to everyday lives.</p><Link className="text-link" href="/founders-story/">Discover our story <Arrow/></Link></div></div></Reveal></section>
<section className="focus section">
  <div className="wrap">
    <Reveal className="section-top">
      <div><p className="eyebrow">OUR FOCUS</p><h2>Education and<br/><em>community prosperity.</em></h2></div>
      <Link className="text-link" href="/programs/">What we do <Arrow/></Link>
    </Reveal>
    <div className="program-list">
      {focusAreas.map(area => <section key={area.id}>
        <h3>{area.title}</h3><p>{area.text}</p>
        <Link className="text-link" href={'/programs/#' + area.id}>Explore {area.title.toLowerCase()} <Arrow/></Link>
      </section>)}
    </div>
  </div>
</section>
<section className="global section wrap">
  <Reveal className="global-copy">
    <p className="eyebrow">WHERE WE WORK</p>
    <h2>Pakistan and <em>Indonesia.</em></h2>
    <p>IFTF is active in both countries, with a focus on education and community prosperity.</p>
    <ul className="country-links">
      {countries.map(country => <li key={country.id}>
        <Link className="text-link" href={'/where-we-work/#' + country.id}>{country.name} <Arrow/></Link>
      </li>)}
    </ul>
  </Reveal>
  <div className="global-art"><Globe/></div>
</section>
<section className="story"><div className="story-photo"><Image src="/community.jpg" alt="Illustrative community scene, pending approved IFTF photography" fill sizes="(max-width:760px) 100vw, 50vw"/><span className="photo-credit">Illustrative image</span></div><Reveal className="story-copy"><p className="eyebrow">04 / THE HUMAN PERSPECTIVE</p><h2>Behind every<br/>possibility,<br/><em>there are people.</em></h2><p>This space is reserved for a real community story, shared with permission. The people, experiences and outcomes will be published after verification.</p><Link className="button light" href="/news/">Stories from our work <Arrow/></Link><span className="story-placeholder">STORY AWAITING PUBLICATION</span></Reveal></section>
<section className="section wrap publications"><Reveal className="section-top"><div><p className="eyebrow">05 / OPEN & ACCOUNTABLE</p><h2>A clear view of<br/><em>the road ahead.</em></h2></div><p className="section-aside">Our plans, reports and policies will provide a transparent record of priorities, progress and learning.</p></Reveal><div className="publication-grid">{[['Our shared direction','Strategy & priorities'],['Progress, documented','Annual reports'],['Trust in practice','Governance & policies']].map(([title,sub],i)=><Link className={'publication book-'+i} key={title} href={i===2?'/transparency/':'/publications/'}><span>IFTF <Arrow/></span><h3>{title}</h3><div className="book-globe"><Globe/></div><p>{sub}<small>Publication forthcoming</small></p></Link>)}</div></section>
<section className="collaborate wrap"><div><p className="eyebrow">BETTER, TOGETHER</p><h2>Let’s turn shared purpose<br/>into <em>possibility.</em></h2></div><Link className="button" href="/collaborate/">Propose a collaboration <Arrow/></Link></section>
<section className="involved wrap section"><p className="eyebrow">06 / FIND YOUR WAY TO CONTRIBUTE</p><div className="involved-links">{[['Bring your time','Volunteer','volunteer'],['Bring your expertise','Careers','careers'],['Support the vision','Give','donate']].map(([label,title,slug])=><Link href={'/'+slug+'/'} key={slug}><span>{label}</span><h3>{title} <Arrow/></h3></Link>)}</div></section>
</main>
  );
}
