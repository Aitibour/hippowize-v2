import SubpageLayout from "@/components/SubpageLayout";

const solutions = [
  { icon: "fa-bolt",            title: "Grid Modernization",        body: "Smart grid architecture, SCADA system integration, and operational technology (OT) platform modernization." },
  { icon: "fa-shield-halved",   title: "OT/IT Cybersecurity",       body: "Converged OT/IT security frameworks, NERC-CIP compliance, and critical infrastructure protection programs." },
  { icon: "fa-cloud",           title: "Cloud for Energy",          body: "Cloud migration strategies for energy workloads, maintaining NERC-CIP compliance and operational continuity." },
  { icon: "fa-leaf",            title: "Sustainability Reporting",  body: "ESG data platforms, carbon tracking, and regulatory sustainability reporting for energy organizations." },
  { icon: "fa-robot",           title: "AI for Energy Operations",  body: "Predictive maintenance, demand forecasting, and AI-driven asset management for utility companies." },
  { icon: "fa-diagram-project", title: "Capital Programme Delivery",body: "Complex capital project governance, earned value management, and delivery assurance for infrastructure programmes." },
];

const projects = [
  {
    metric: "200+",
    metricLabel: "workloads migrated in 8 months",
    title: "Cloud Migration Factory — Canadian Utility",
    body: "Hippowize's Cloud Migration Factory methodology helped a major Canadian utility move 200+ workloads from on-premise data centres to Azure with zero critical incidents and full NERC-CIP compliance maintained.",
    tags: ["Cloud Migration", "Azure", "Energy"],
  },
  {
    metric: "NERC-CIP",
    metricLabel: "compliant security framework deployed",
    title: "OT/IT Cybersecurity — North American Power Utility",
    body: "Hippowize designed and implemented a converged OT/IT cybersecurity framework for a large power utility, achieving full NERC-CIP compliance across operational and enterprise environments.",
    tags: ["Cybersecurity", "OT/IT", "Compliance"],
  },
  {
    metric: "30%",
    metricLabel: "reduction in unplanned downtime",
    title: "Predictive Maintenance AI — Energy Infrastructure Operator",
    body: "Hippowize built and deployed a predictive maintenance platform for a major energy infrastructure operator, using ML models on sensor data to reduce unplanned downtime by 30% within one year.",
    tags: ["AI", "Predictive Maintenance", "Energy"],
  },
];

export default function EnergyUtilitiesPage() {
  return (
    <SubpageLayout
      eyebrow="Industries"
      title="Energy & Utilities"
      description="Grid modernization, OT/IT cybersecurity, and cloud-enabled operations for energy and utility organizations worldwide."
      breadcrumbs={[{ label: "Energy & Utilities", href: "/industry/energy-utilities" }]}
      accent="#D97706"
    >
      <section className="sp-section">
        <div className="container">
          <div className="sp-intro-grid">
            <div>
              <p className="eyebrow">The Challenge</p>
              <h2>Energy organizations must digitize critical infrastructure — safely</h2>
              <p>The energy sector faces a dual transformation: decarbonization and digitization. Grid modernization, renewable integration, and cloud adoption must happen at scale — without compromising the operational reliability that society depends on.</p>
              <p>Hippowize brings deep OT/IT expertise, NERC-CIP knowledge, and cloud delivery capability to help energy organizations lead this transition.</p>
            </div>
            <div className="sp-highlight-box">
              <i className="fa-solid fa-bolt sp-highlight-icon" />
              <h3>Our Energy Expertise</h3>
              <ul className="sp-check-list">
                <li><i className="fa-solid fa-check" /> NERC-CIP &amp; OT/IT security</li>
                <li><i className="fa-solid fa-check" /> Cloud migration (energy workloads)</li>
                <li><i className="fa-solid fa-check" /> Grid modernization</li>
                <li><i className="fa-solid fa-check" /> AI &amp; predictive maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section sp-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="eyebrow">Solutions</p>
            <h2>What we deliver for energy organizations</h2>
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
            <h2>Real impact for energy organizations</h2>
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
