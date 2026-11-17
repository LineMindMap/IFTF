import type { Metadata } from 'next';
import Link from 'next/link';
import HelpCenter from './help-center';

export const metadata: Metadata = { title: 'Help & FAQ | IFTF' };

export default function HelpPage() {
  return (
    <main id="main" tabIndex={-1} className="wrap inner-page help-page">
      <h1>Help &amp; FAQ</h1>
      <p className="inner-lead">Find answers about IFTF, its programs, and eVerify.</p>
      <HelpCenter />
      <p>Still need help? <Link className="text-link" href="/contact/">Contact IFTF</Link></p>
    </main>
  );
}
