import Image from 'next/image';
import Link from 'next/link';
import { office } from '../data/content';

export default function SiteFooter() {
  return <footer><div className="wrap footer-top"><div><Image src="/iftf-logo.png" width={290} height={145} alt="International Future Trust Foundation"/><p>Bridging Today,<br/>Empowering Tomorrow.</p></div><div><h3>Discover</h3><Link href="/about/">About IFTF</Link><Link href="/programs/">Our focus</Link><Link href="/where-we-work/">Global outlook</Link><Link href="/news/">News & stories</Link></div><div><h3>Connect</h3><Link href="/collaborate/">Become a partner</Link><Link href="/volunteer/">Volunteer</Link><Link href="/contact/">Contact</Link><Link href="/verify/">Verify a letter</Link></div><div><h3>Built on trust</h3><Link href="/transparency/">Transparency</Link><Link href="/publications/">Reports & publications</Link><p className="footer-note">{office.street}<br/>{office.city}<br/>{office.postalCode}</p></div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} International Future Trust Foundation</span><div><Link href="/privacy/">Privacy</Link><Link href="/terms/">Terms</Link><Link href="/accessibility/">Accessibility</Link><a href="#main">Back to top ↑</a></div></div></footer>;
}
