'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { assetPath } from './asset-path';
import Link from 'next/link';
import { navigation } from '../data/content';

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function SiteHeader() {
  const [menu, setMenu] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  return (
    <header className={menu ? 'menu-expanded' : undefined}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMenu(false);
      }}
      onKeyDown={event => {
        if (event.key === 'Escape' && menu) {
          setMenu(false);
          menuButton.current?.focus();
        }
      }}>
      <div className="utility">
        <span>Bridging Today, Empowering Tomorrow.</span>
        <div><Link href="/verify/">Verify a letter</Link><Link href="/contact/">Contact</Link><Link href="/login/">Login <Arrow/></Link></div>
      </div>
      <div className="mainnav">
        <Link href="/" aria-label="IFTF home" className="brand"><Image src={assetPath('/iftf-logo.png')} width={820} height={409} alt="International Future Trust Foundation" priority/></Link>
        <button ref={menuButton} className="menutoggle" onClick={() => setMenu(!menu)}
          aria-expanded={menu} aria-controls="main-navigation" aria-label={menu ? 'Close navigation' : 'Open navigation'}>
          {menu ? 'Close' : 'Menu'} <span aria-hidden="true">{menu ? '×' : '☰'}</span>
        </button>
        <nav id="main-navigation" aria-label="Main navigation" className={menu ? 'open' : undefined}>
          {navigation.map(([name, slug]) => <Link key={slug} href={'/' + slug + '/'} onClick={() => setMenu(false)}>{name}</Link>)}
          <Link className="mobile-partner" href="/collaborate/" onClick={() => setMenu(false)}>Partner with us <Arrow/></Link>
        </nav>
        <Link className="button navcta" href="/collaborate/">Partner with us <Arrow/></Link>
      </div>
    </header>
  );
}
