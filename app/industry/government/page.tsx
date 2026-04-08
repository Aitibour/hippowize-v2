import SubpageLayout from "@/components/SubpageLayout";

const solutions = [
  { icon: "fa-building-columns", title: "Digital Government",      body: "Citizen-facing digital service delivery, back-office automation, and e-government platform modernization." },
  { icon: "fa-shield-halved",    title: "Sovereign Cybersecurity", body: "National cybersecurity frameworks, critical infrastructure protection, and government GRC programs." },
  { icon: "fa-cloud",            title: "Government Cloud",        body: "Sovereign cloud adoption strategies that meet data residency, classification, and compliance requirements." },
  { icon: "fa-diagram-project",  title: "Programme Management",    body: "Large-scale government programme delivery using structured frameworks and ministerial reporting standards." },
  { icon: "fa-robot",            title: "AI for Public Sector",    body: "Ethical AI governance, public-sector ML applications, and responsible automation for government agencies." },
  { icon: "fa-users",            title: "Change & Capability",     body: "Organizational change management and capability building to support digital transformation across agencies." },
];

const projects = [
  {
    metric: "ISO 27001",
    metricLabel: "certified in 12 months",
    title: "National Cybersecurity Framework — GCC Ministry",
    body: "Hippowize delivered a comprehensive GRC implementation and cybersecurity framework for a government ministry in the Gulf region, achieving ISO 27001 certification within 12 months.",
    tags: ["Cybersecurity", "GRC", "Government"],
  },
  {
    metric: "8",
    metricLabel: "agencies connected on one platform",
    title: "Digital Government Integration — West African Government",
    body: "Hippowize architected and delivered a cross-agency integration platform connecting 8 government departments onto a single digital service layer, halving citizen request resolution time.",
    tags: ["Digital Government", "Integration", "Africa"],
  },
  {
    metric: "40%",
    metricLabel: "reduction in manual processing",
    title: "PMO Modernization — Public Sector Organization",
    body: "A large public-sector body engaged Hippowize to rationalize their programme management office, introducing outcome-based governance and reducing manual reporting overhead by 40%.",
    tags: ["PMO", "Governance", "Automation"],
  },
];

export default function GovernmentPage() {
  return (
    <SubpageLayout
      eyebrow="Industries"
      title="Government & Public Sector"
      description="Sovereign cloud, cybersecurity, and digital service delivery for government organizations — with the governance rigour public accountability demands."
      breadcrumbs={[{ label: "Government & Public Sector", href: "/industry/government" }]}
      accent="#1E40AF"
    >
      <section className="sp-section">
        <div className="container">
          <div className="sp-intro-grid">
            <div>
              <p className="eyebrow">The Challenge</p>
              <h2>Governments must modernize at scale while maintaining public trust</h2>
              <p>Public sector organizations face unique pressures: limited budgets, complex procurement, diverse stakeholder accountability, and the highest data sensitivity requirements.</p>
              <p>Hippowize has delivered government transformation programmes across the GCC, Africa, and North America — combining technical depth with public-sector governance expertise.</p>
            </div>
            <div className="sp-highlight-box">
              <i className="fa-solid fa-building-columns sp-highlight-icon" />
              <h3>Our Government Expertise</h3>
              <ul className="sp-check-list">
                <li><i className="fa-solid fa-check" /> National cybersecurity frameworks</li>
                <li><i className="fa-solid fa-check" /> Sovereign cloud adoption</li>
                <li><i className="fa-solid fa-check" /> Digital citizen services</li>
                <li><i className="fa-solid fa-check" /> Programme governance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section sp-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="eyebrow">Solutions</p>
            <h2>What we deliver for government organizations</h2>
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
            <h2>Real impact for government organizations</h2>
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
