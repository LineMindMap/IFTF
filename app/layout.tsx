import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from './site-header';
import SiteFooter from './site-footer';
export const metadata: Metadata = {title:'IFTF | Bridging Today, Empowering Tomorrow',description:'International Future Trust Foundation. Explore a shared vision for people, partnerships and a more hopeful future.',robots:{index:false,follow:false}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>
    <a className="skip" href="#main">Skip to content</a>
    <SiteHeader />
    {children}
    <SiteFooter />
  </body></html>}
