import SubpageLayout from "@/components/SubpageLayout";

const solutions = [
  { icon: "fa-shield-halved",     title: "Cyber Defence",           body: "NIST, ISO 27001, and government-specific security frameworks protecting critical public infrastructure." },
  { icon: "fa-ticket",            title: "ServiceNow for Gov",      body: "Citizen services, HR, IT, and facilities management on a unified platform configured for public sector requirements." },
  { icon: "fa-chess-king",        title: "VMO Transformation",      body: "Transitioning government IT portfolios from project-based to value-driven operating models." },
  { icon: "fa-cloud",             title: "Government Cloud",        body: "Sovereign cloud strategies and secure migration paths compliant with national data residency requirements." },
  { icon: "fa-people-group",      title: "Change & Adoption",       body: "Citizen and employee adoption programs for large-scale digital government initiatives." },
  { icon: "fa-chart-bar",         title: "Data & Analytics",        body: "Open data strategies, analytics platforms, and evidence-based policy reporting for government agencies." },
];

export default function GovernmentPage() {
  return (
    <SubpageLayout
      eyebrow="Industries"
      title="Government & Public Sector"
      description="Hippowize helps government agencies and public sector organizations modernize service delivery, strengthen cyber posture, and build citizen-centric digital capabilities."
      breadcrumbs={[{ label: "Industry", href: "/industry/government" }, { label: "Government & Public Sector", href: "/industry/government" }]}
      accent="#0F172A"
    >
      <section className="sp-section">
        <div className="container">
          <div className="sp-intro-grid">
            <div>
              <p className="eyebrow">The Challenge</p>
              <h2>Modernizing public services in complex environments</h2>
              <p>Government organizations face unique transformation pressures: rising citizen expectations, aging infrastructure, procurement constraints, and public accountability requirements that make change slower and more complex than the private sector.</p>
              <p>Hippowize brings public sector experience and a delivery model adapted to government procurement, security clearance requirements, and change management at scale.</p>
              <a href="https://calendly.com/hippowize" target="_blank" rel="noreferrer" className="btn-primary" style={{ marginTop: 28 }}>Talk to a Public Sector Specialist</a>
            </div>
            <div className="sp-highlight-box">
              <i className="fa-solid fa-building-columns sp-highlight-icon" />
              <h3>Public Sector Experience</h3>
              <p>We&apos;ve delivered transformation programs for federal, provincial, and municipal government clients across Canada and internationally.</p>
              <ul className="sp-check-list">
                <li><i className="fa-solid fa-check" /> Government procurement experience</li>
                <li><i className="fa-solid fa-check" /> Security clearance eligible</li>
                <li><i className="fa-solid fa-check" /> Citizen service expertise</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="sp-section sp-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="eyebrow">Solutions</p>
            <h2>What we deliver for government</h2>
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
          <h2>Ready to modernize your public services?</h2>
          <p>Our public sector specialists serve federal, provincial, and municipal clients globally.</p>
          <a href="https://calendly.com/hippowize" target="_blank" rel="noreferrer" className="btn-primary">Book a Free Consultation</a>
        </div>
      </section>
    </SubpageLayout>
  );
}
