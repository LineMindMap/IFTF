'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { assetPath } from './asset-path';
import Link from 'next/link';
import { aboutMenu, navigation } from '../data/content';

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function SiteHeader() {
  const [menu, setMenu] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const aboutButton = useRef<HTMLButtonElement>(null);
  function closeNavigation() {
    setMenu(false);
    setAboutOpen(false);
  }
  return (
    <header className={menu ? 'menu-expanded' : undefined}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeNavigation();
      }}
      onKeyDown={event => {
        if (event.key === 'Escape' && aboutOpen) {
          setAboutOpen(false);
          aboutButton.current?.focus();
        } else if (event.key === 'Escape' && menu) {
          setMenu(false);
          menuButton.current?.focus();
        }
      }}>
      <div className="utility">
        <span>Bridging Today, Empowering Tomorrow.</span>
        <div><Link href="/verify/">Verify a letter</Link><Link href="/website-status/">Website Status</Link><Link href="/contact/">Contact</Link><Link href="/login/">Login <Arrow/></Link></div>
      </div>
      <div className="mainnav">
        <Link href="/" aria-label="IFTF home" className="brand"><Image src={assetPath('/iftf-logo-transparent.png')} width={1777} height={885} alt="International Future Trust Foundation" priority/></Link>
        <button ref={menuButton} className="menutoggle" onClick={() => menu ? closeNavigation() : setMenu(true)}
          aria-expanded={menu} aria-controls="main-navigation" aria-label={menu ? 'Close navigation' : 'Open navigation'}>
          {menu ? 'Close' : 'Menu'} <span aria-hidden="true">{menu ? '×' : '☰'}</span>
        </button>
        <nav id="main-navigation" aria-label="Main navigation" className={menu ? 'open' : undefined}>
          <div className="about-nav" onBlur={event => {
            if (!event.currentTarget.contains(event.relatedTarget)) setAboutOpen(false);
          }}>
            <button ref={aboutButton} type="button" aria-expanded={aboutOpen} aria-controls="about-submenu"
              onClick={() => setAboutOpen(open => !open)}>About</button>
            <ul id="about-submenu" hidden={!aboutOpen}>
              {aboutMenu.map(item => <li key={item.slug}>
                <Link href={item.url ?? '/' + item.slug + '/'} onClick={closeNavigation}>
                  {item.title}{item.external && <><Arrow/><span className="sr-only">{item.url ? ' (external site)' : ' (external site planned)'}</span></>}
                  {item.slug === 'departments' && <span aria-hidden="true">→</span>}
                </Link>
              </li>)}
            </ul>
          </div>
          {navigation.filter(([, slug]) => slug !== 'about').map(([name, slug]) => <Link key={slug} href={'/' + slug + '/'} onClick={closeNavigation}>{name}</Link>)}
          <Link className="mobile-partner" href="/collaborate/" onClick={closeNavigation}>Partner with us <Arrow/></Link>
        </nav>
        <Link className="button navcta" href="/collaborate/">Partner with us <Arrow/></Link>
      </div>
    </header>
  );
}
