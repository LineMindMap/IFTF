import Link from 'next/link';
import Image from 'next/image';
import {routes} from '../../data/content';
export function generateStaticParams(){return routes.map(slug=>({slug}))}
export const dynamicParams=false;
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const title=slug.split('-').map(word=>word[0].toUpperCase()+word.slice(1)).join(' ');return <main className="stub wrap"><Link href="/"><Image src="/iftf-logo.png" width={280} height={140} alt="IFTF home"/></Link><p className="eyebrow">INTERNATIONAL FUTURE TRUST FOUNDATION</p><h1>{title}</h1><p>This section is being prepared.</p><p>{slug==='login'?'Secure sign-in is planned for a later phase. No account details are collected.':slug==='verify'?'Letter verification is not yet available. This preview cannot confirm the authenticity of any letter.':slug==='donate'?'Online donations are not yet available. This preview does not accept payments.':'Verified information and services will be published here when ready.'}</p><Link href="/" className="button">Return to homepage ↗</Link></main>}
