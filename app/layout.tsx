import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'IFTF | Bridging Today, Empowering Tomorrow',description:'International Future Trust Foundation. Explore a shared vision for people, partnerships and a more hopeful future.',robots:{index:false,follow:false}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
