import SubpageLayout from "@/components/SubpageLayout";

const solutions = [
  { icon: "fa-landmark",        title: "Regulatory Compliance",   body: "SOX, Basel III, MiFID II, and AML compliance programs built around your regulatory obligations and audit timeline." },
  { icon: "fa-shield-halved",   title: "Financial Cybersecurity", body: "Threat-led assessments, GRC alignment, and security monitoring designed for the financial sector's risk environment." },
  { icon: "fa-chart-line",      title: "Digital Banking",         body: "Core banking modernization, digital channel delivery, and open banking integration with phased migration strategies." },
  { icon: "fa-diagram-project", title: "PMO to VMO Transition",   body: "Evolving your financial IT function from project delivery to value-stream management and outcome-driven investment." },
  { icon: "fa-robot",           title: "AI in Finance",           body: "AI governance frameworks, fraud detection models, and responsible AI deployment for regulated financial entities." },
  { icon: "fa-cloud",           title: "Cloud for Finance",       body: "Compliant cloud adoption strategies for financial institutions — maintaining data residency and regulatory obligations." },
];

const projects = [
  {
    metric: "40%",
    metricLabel: "faster portfolio delivery",
    title: "VMO Transformation — Major Canadian Bank",
    body: "A top-5 Canadian bank transitioned their IT function from a traditional PMO to a Value Management Office. Within 18 months, portfolio delivery velocity increased by 40% and executive visibility improved dramatically.",
    tags: ["VMO", "Strategy", "Banking"],
  },
  {
    metric: "6",
    metricLabel: "markets launched in 18 months",
    title: "Digital Banking Platform — Pan-African Bank",
    body: "Hippowize supported a Pan-African financial institution in launching a unified digital banking platform across six markets — managing technology delivery, change management, and regulatory alignment.",
    tags: ["Digital Transformation", "Banking", "Africa"],
  },
  {
    metric: "ISO 27001",
    metricLabel: "certified in 12 months",
    title: "Cybersecurity Framework — GCC Financial Institution",
    body: "Hippowize delivered a comprehensive GRC and cybersecurity program for a financial institution in the Gulf region, achieving ISO 27001 certification within 12 months of engagement start.",
    tags: ["Cybersecurity", "GRC", "Compliance"],
  },
];

export default function FinancialServicesPage() {
  return (
    <SubpageLayout
      eyebrow="Industries"
      title="Financial Services"
      description="Compliance-first transformation for banks, insurers, and capital markets firms — delivered at the pace the market demands."
      breadcrumbs={[{ label: "Financial Services", href: "/industry/financial-services" }]}
      accent="#7C3AED"
      showCTA={false}
    >
      <section className="sp-section">
        <div className="container">
          <div className="sp-intro-grid">
            <div>
              <p className="eyebrow">The Challenge</p>
              <h2>Financial institutions must transform without compromising compliance</h2>
              <p>Financial services firms operate in one of the most regulated environments on earth. Every technology decision carries compliance, audit, and reputational risk. Yet the competitive pressure to digitize has never been greater.</p>
              <p>Hippowize bridges this gap — bringing regulatory expertise and delivery capability to financial transformations that cannot afford to fail.</p>
            </div>
            <div className="sp-highlight-box">
              <i className="fa-solid fa-landmark sp-highlight-icon" />
              <h3>Our Financial Expertise</h3>
              <ul className="sp-check-list">
                <li><i className="fa-solid fa-check" /> SOX, Basel III, MiFID II</li>
                <li><i className="fa-solid fa-check" /> Digital banking delivery</li>
                <li><i className="fa-solid fa-check" /> PMO to VMO transition</li>
                <li><i className="fa-solid fa-check" /> AI &amp; fraud detection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section sp-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="eyebrow">Solutions</p>
            <h2>What we deliver for financial organizations</h2>
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
            <h2>Real impact for financial organizations</h2>
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
