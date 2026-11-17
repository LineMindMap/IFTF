'use client';

import { useRef, useState } from 'react';

const groups = [
  { id: 'foundation', title: 'About IFTF', entries: [
    ['What does IFTF stand for?', 'International Future Trust Foundation.'],
    ['Where is IFTF active?', 'IFTF is active in Pakistan and Indonesia.'],
    ['What are IFTF’s focus areas?', 'Education and community prosperity.'],
    ['Where is the IFTF office?', 'The current office is in Yogyakarta, Indonesia. You can find the address and contact details on the Contact page.'],
  ] },
  { id: 'documents', title: 'eVerify and documents', entries: [
    ['What is eVerify?', 'eVerify is IFTF’s upcoming system for checking document verification and expiry.'],
    ['Can I verify a document now?', 'eVerify is still in development. Contact IFTF if you need help with a document now.'],
    ['What will an eVerify result show?', 'The planned result includes verification status, who requested the document, its issue date, and when it expires.'],
    ['Will eVerify work with QR codes or barcodes?', 'Support for QR codes and barcodes is planned.'],
  ] },
  { id: 'support', title: 'Contact and website support', entries: [
    ['How can I contact IFTF?', 'Use the phone number or email address on the Contact page or in the footer.'],
    ['Where can I see which services are available?', 'Visit Website Status for reachability checks and planned features.'],
    ['Can the AI assistant answer questions now?', 'The assistant is a preview. The Help & FAQ page and the IFTF office are available for questions today.'],
  ] },
];

export default function HelpCenter() {
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const search = query.trim().toLowerCase();
  const results = groups.map(group => ({
    ...group, entries: group.entries.filter(entry => [group.title, ...entry].join(' ').toLowerCase().includes(search)),
  })).filter(group => group.entries.length);
  const count = results.reduce((total, group) => total + group.entries.length, 0);

  return <>
    <div className="faq-search">
      <label htmlFor="faq-search">Search frequently asked questions</label>
      <input id="faq-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Try eVerify or contact"/>
      <p role="status">{count === 0 ? 'No questions found. Try a different search.' : `${count} ${count === 1 ? 'question' : 'questions'}`}</p>
    </div>
    {results.map(group => (
      <section key={group.id} id={group.id} className="faq-group">
        <h2>{group.title}</h2>
        {group.entries.map(([question, answer]) => (
          <details key={question}><summary>{question}</summary><p>{answer}</p></details>
        ))}
      </section>
    ))}
    <button type="button" className="button help-launcher" onClick={() => dialog.current?.showModal()}>Ask IFTF AI</button>
    <dialog ref={dialog} aria-labelledby="assistant-heading" className="help-dialog" onClose={() => setSubmitted(false)}>
      <form method="dialog" className="assistant-close"><button className="text-link">Close</button></form>
      <h2 id="assistant-heading">Ask IFTF AI</h2>
      <p>Assistant preview. Try a sample question to see how the form will work.</p>
      <form onSubmit={event => { event.preventDefault(); setSubmitted(true); }}>
        <label htmlFor="assistant-question">Your sample question</label>
        <textarea id="assistant-question" required maxLength={500} rows={3} placeholder="How will eVerify work?"/>
        <button className="button" type="submit">Try the preview</button>
      </form>
      {submitted && <p role="status">This is a demo. Your question was not sent.</p>}
    </dialog>
  </>;
}
