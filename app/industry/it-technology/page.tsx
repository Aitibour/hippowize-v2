import Image from "next/image";
import SubpageLayout from "@/components/SubpageLayout";

const solutions = [
  { icon: "fa-shield-halved",   title: "Cybersecurity Posture",   body: "Security architecture reviews, penetration testing strategy, and GRC alignment for technology organizations." },
  { icon: "fa-cloud",           title: "Cloud-Native Transition",  body: "Moving from on-premise to cloud-first infrastructure using AWS, Azure, or GCP with zero downtime strategies." },
  { icon: "fa-code-branch",     title: "DevOps & Engineering",     body: "CI/CD pipeline design, platform engineering, and DevSecOps practices for high-velocity software teams." },
  { icon: "fa-ticket",          title: "ITSM Modernization",       body: "ServiceNow ITSM implementation and optimization — reducing ticket volume, SLA breaches, and manual overhead." },
  { icon: "fa-robot",           title: "AI & MLOps",               body: "Production AI systems, ML model lifecycle management, and responsible AI governance frameworks." },
  { icon: "fa-diagram-project", title: "Technology PMO",           body: "Portfolio and program governance that ensures technology investments deliver on their business case." },
];

const projects = [
  {
    metric: "3×",
    metricLabel: "delivery velocity increase",
    title: "SAFe Transformation — UK Technology Firm",
    sector: "IT & Technology",
    body: "A 1,200-person technology firm partnered with Hippowize for a full SAFe rollout. Delivery predictability tripled within two program increments and team satisfaction scores rose significantly.",
    tags: ["SAFe", "Agile", "Delivery"],
  },
  {
    metric: "60%",
    metricLabel: "reduction in ticket resolution time",
    title: "ServiceNow ITSM — Global SaaS Company",
    sector: "IT & Technology",
    body: "Hippowize embedded with the client's ITSM team to modernize ticket workflows and implement ServiceNow. Resolution time dropped by 60% within the first quarter post go-live.",
    tags: ["ServiceNow", "ITSM", "Automation"],
  },
  {
    metric: "200+",
    metricLabel: "workloads migrated in 8 months",
    title: "Cloud Migration Factory — Tech Enterprise",
    sector: "IT & Technology",
    body: "Using Hippowize's Cloud Migration Factory methodology, a large technology firm migrated 200+ workloads to Azure with zero critical incidents and full compliance maintained throughout.",
    tags: ["Azure", "Cloud Migration", "DevOps"],
  },
];

export default function ITTechnologyPage() {
  return (
    <SubpageLayout
      eyebrow="Industries"
      title="IT & Technology"
      description="Helping technology organizations accelerate delivery, modernize infrastructure, and build the security posture their business demands."
      breadcrumbs={[{ label: "IT & Technology", href: "/industry/it-technology" }]}
      accent="#2563EB"
    >
      <section className="sp-section">
        <div className="container">
          <div className="sp-intro-grid">
            <div>
              <p className="eyebrow">The Challenge</p>
              <h2>Technology organizations need to move faster — safely</h2>
              <p>IT and technology companies face a paradox: the pressure to ship faster conflicts with rising security, compliance, and operational complexity. Legacy architecture, talent gaps, and governance debt slow down even the most talented teams.</p>
              <p>Hippowize helps technology leaders cut through this complexity — modernizing delivery, strengthening security posture, and building the operating model for sustained velocity.</p>
            </div>
            <div className="sp-highlight-box">
              <i className="fa-solid fa-laptop-code sp-highlight-icon" />
              <h3>Our IT Expertise</h3>
              <ul className="sp-check-list">
                <li><i className="fa-solid fa-check" /> Cloud architecture &amp; migration</li>
                <li><i className="fa-solid fa-check" /> Security &amp; compliance</li>
                <li><i className="fa-solid fa-check" /> DevOps &amp; platform engineering</li>
                <li><i className="fa-solid fa-check" /> ITSM &amp; ServiceNow delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section sp-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="eyebrow">Solutions</p>
            <h2>What we deliver for IT organizations</h2>
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

      {/* Project showcase */}
      <section className="sp-section">
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <p className="eyebrow">Project Showcase</p>
            <h2>Real impact for IT organizations</h2>
            <p style={{ maxWidth: 560, marginTop: 12, lineHeight: 1.75 }}>How Hippowize has driven measurable outcomes for technology-sector clients.</p>
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
