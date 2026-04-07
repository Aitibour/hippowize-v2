import SubpageLayout from "@/components/SubpageLayout";

const solutions = [
  { icon: "fa-shield-halved",   title: "Cybersecurity Posture",    body: "Security architecture reviews, penetration testing strategy, and GRC alignment for technology organizations." },
  { icon: "fa-cloud",           title: "Cloud-Native Transition",  body: "Moving from on-premise to cloud-first infrastructure using AWS, Azure, or GCP with zero downtime strategies." },
  { icon: "fa-code-branch",     title: "DevOps & Engineering",     body: "CI/CD pipeline design, platform engineering, and DevSecOps practices for high-velocity software teams." },
  { icon: "fa-ticket",          title: "ITSM Modernization",       body: "ServiceNow ITSM implementation and optimization — reducing ticket volume, SLA breaches, and manual overhead." },
  { icon: "fa-robot",           title: "AI & MLOps",              body: "Production AI systems, ML model lifecycle management, and responsible AI governance frameworks." },
  { icon: "fa-diagram-project", title: "Technology PMO",           body: "Portfolio and program governance that ensures technology investments deliver on their business case." },
];

export default function ITTechnologyPage() {
  return (
    <SubpageLayout
      eyebrow="Industries"
      title="IT & Technology"
      description="Helping technology organizations accelerate delivery, modernize infrastructure, and build the security posture their business demands."
      breadcrumbs={[{ label: "Industry", href: "/industry/it-technology" }, { label: "IT & Technology", href: "/industry/it-technology" }]}
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
              <a href="https://calendly.com/hippowize" target="_blank" rel="noreferrer" className="btn-primary" style={{ marginTop: 28 }}>Talk to a Specialist</a>
            </div>
            <div className="sp-highlight-box">
              <i className="fa-solid fa-laptop-code sp-highlight-icon" />
              <h3>Our IT Expertise</h3>
              <p>From startups to enterprise technology firms, we&apos;ve helped organizations across the full technology stack.</p>
              <ul className="sp-check-list">
                <li><i className="fa-solid fa-check" /> Cloud architecture & migration</li>
                <li><i className="fa-solid fa-check" /> Security & compliance</li>
                <li><i className="fa-solid fa-check" /> DevOps & platform engineering</li>
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
            {solutions.map((s) => (
              <div className="sp-capability-card" key={s.title}>
                <div className="sp-cap-icon"><i className={`fa-solid ${s.icon}`} /></div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sp-cta-band">
        <div className="container">
          <h2>Let&apos;s accelerate your technology agenda</h2>
          <p>Book a discovery session with one of our technology specialists.</p>
          <a href="https://calendly.com/hippowize" target="_blank" rel="noreferrer" className="btn-primary">Book a Free Consultation</a>
        </div>
      </section>
    </SubpageLayout>
  );
}
