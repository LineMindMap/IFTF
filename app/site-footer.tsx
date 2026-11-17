import Image from 'next/image';
import Link from 'next/link';
import { assetPath } from './asset-path';
import { office } from '../data/content';

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap footer-top">
        <div>
          <Image src={assetPath('/iftf-logo-transparent.png')} width={1777} height={885} alt="International Future Trust Foundation"/>
          <address className="footer-address">
            {office.street}<br/>{office.city} {office.postalCode}
            <a href={'mailto:' + office.email}>{office.email}</a>
            <a href={office.telephoneHref}>Phone {office.phone}</a>
            <span>Fax {office.fax}</span>
          </address>
        </div>
        <div><h3>Discover</h3><Link href="/about/">About IFTF</Link><Link href="/programs/">Our focus</Link><Link href="/where-we-work/">Global outlook</Link><Link href="/news/">News &amp; stories</Link></div>
        <div><h3>Connect</h3><Link href="/collaborate/">Become a partner</Link><Link href="/volunteer/">Volunteer</Link><Link href="/contact/">Contact</Link><Link href="/verify/">eVerify</Link><Link href="/help/">Help &amp; FAQ</Link></div>
        <div><h3>Built on trust</h3><Link href="/transparency/">Transparency</Link><Link href="/publications/">Reports &amp; publications</Link></div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} International Future Trust Foundation</span>
        <div><Link href="/privacy/">Privacy</Link><Link href="/terms/">Terms</Link><Link href="/accessibility/">Accessibility</Link><a href="#main">Back to top ↑</a></div>
      </div>
    </footer>
  );
}
