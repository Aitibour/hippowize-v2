"use client";

import { useLang } from "@/lib/i18n";

export default function TermsOfUsePage() {
  const { t } = useLang();
  const { title, updated, sections } = t.legal.terms;

  return (
    <main className="legal-page">
      <div className="container">
        <div className="legal-header">
          <h1>{title}</h1>
          <p className="legal-updated">{updated}</p>
        </div>
        <div className="legal-body">
          {sections.map((s, i) => (
            <section key={i} className="legal-section">
              <h2>{s.heading}</h2>
              <p>{s.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
