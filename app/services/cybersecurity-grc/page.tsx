import SubpageLayout from "@/components/SubpageLayout";

const solutions = [
  { icon: "fa-shield-halved",   title: "Cybersecurity Strategy",    body: "Risk-aligned cybersecurity roadmaps, security architecture reviews, and executive-level security programme design." },
  { icon: "fa-file-contract",   title: "GRC Implementation",        body: "Governance, Risk & Compliance frameworks built to ISO 27001, NIST, SOC 2, and sector-specific regulatory standards." },
  { icon: "fa-magnifying-glass-chart", title: "Threat & Risk Assessment", body: "Structured threat modelling, vulnerability assessments, and enterprise risk registers aligned to business outcomes." },
  { icon: "fa-lock",            title: "Zero Trust Architecture",   body: "Identity-first security models, micro-segmentation, and least-privilege access across cloud and hybrid environments." },
  { icon: "fa-triangle-exclamation", title: "Incident Response",   body: "Incident response planning, tabletop exercises, forensic readiness, and post-incident recovery programme management." },
  { icon: "fa-chart-bar",       title: "Security Operations",       body: "SOC design, SIEM implementation, threat intelligence integration, and continuous monitoring programme setup." },
];

const projects = [
  {
    metric: "ISO 27001",
    metricLabel: "certified in 12 months",
    title: "National Cybersecurity Framework — GCC Ministry",
    body: "Hippowize delivered a comprehensive GRC implementation and cybersecurity framework for a government ministry in the Gulf, achieving ISO 27001 certification within 12 months of engagement start.",
    tags: ["Cybersecurity", "GRC", "Government"],
  },
  {
    metric: "NERC-CIP",
    metricLabel: "compliant security framework deployed",
    title: "OT/IT Cybersecurity — North American Power Utility",
    body: "Hippowize designed and implemented a converged OT/IT cybersecurity framework for a large power utility, achieving full NERC-CIP compliance across operational and enterprise environments.",
    tags: ["OT/IT Security", "Compliance", "Energy"],
  },
  {
    metric: "72%",
    metricLabel: "reduction in critical vulnerabilities",
    title: "Enterprise GRC Programme — Pan-African Financial Institution",
    body: "Hippowize deployed an enterprise-wide GRC platform and risk register for a Pan-African bank, reducing critical vulnerability exposure by 72% within six months and achieving regulatory compliance across four jurisdictions.",
    tags: ["GRC", "Financial Services", "Compliance"],
  },
];

export default function CybersecurityGRCPage() {
  return (
    <SubpageLayout
      eyebrow="Services"
      title="Cybersecurity & GRC"
      description="Protect your organization with risk-aligned security programmes, compliance frameworks, and governance structures built for today's threat landscape."
      breadcrumbs={[{ label: "Cybersecurity & GRC", href: "/services/cybersecurity-grc" }]}
      accent="#7C3AED"
    >
      <section className="sp-section">
        <div className="container">
          <div className="sp-intro-grid">
            <div>
              <p className="eyebrow">The Challenge</p>
              <h2>Security is no longer just an IT problem</h2>
              <p>Organizations face a rapidly evolving threat landscape while navigating increasingly complex regulatory requirements — from ISO 27001 and SOC 2 to NERC-CIP and GDPR. Security and compliance must be embedded into strategy, not bolted on as afterthoughts.</p>
              <p>Hippowize brings deep GRC expertise and technical security capability to help organizations build resilient, audit-ready security programmes that protect operations and build stakeholder trust.</p>
            </div>
            <div className="sp-highlight-box">
              <i className="fa-solid fa-shield-halved sp-highlight-icon" />
              <h3>Our Security Expertise</h3>
              <ul className="sp-check-list">
                <li><i className="fa-solid fa-check" /> ISO 27001 &amp; NIST implementation</li>
                <li><i className="fa-solid fa-check" /> SOC 2 readiness &amp; certification</li>
                <li><i className="fa-solid fa-check" /> Zero Trust architecture</li>
                <li><i className="fa-solid fa-check" /> OT/IT converged security</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section sp-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="eyebrow">Capabilities</p>
            <h2>What we deliver in cybersecurity &amp; GRC</h2>
          </div>
          <div className="sp-grid-3">
            {solutions.map(s => (
              <div className="sp-capability-card" key={s.title}>
                <div className="sp-cap-icon"><i className={`fa-solid ${s.icon}`} /></div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <p className="eyebrow">Project Showcase</p>
            <h2>Real impact in security &amp; compliance</h2>
          </div>
          <div className="project-showcase-grid">
            {projects.map(p => (
              <div className="project-card" key={p.title}>
                <div className="project-metric">
                  <span className="project-metric-num">{p.metric}</span>
                  <span className="project-metric-label">{p.metricLabel}</span>
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-body">{p.body}</p>
                <div className="project-tags">
                  {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
