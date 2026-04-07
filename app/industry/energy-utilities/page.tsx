import SubpageLayout from "@/components/SubpageLayout";

const solutions = [
  { icon: "fa-shield-halved",   title: "OT/IT Security",           body: "Securing operational technology and industrial control systems against cyber threats targeting critical infrastructure." },
  { icon: "fa-bolt",            title: "Grid Modernization",       body: "Digital strategy and technology roadmaps for utilities transitioning to smart grid and distributed energy models." },
  { icon: "fa-ticket",          title: "Asset Management",         body: "ServiceNow SPM and FSM implementations for managing physical assets, field operations, and maintenance workflows." },
  { icon: "fa-leaf",            title: "ESG & Sustainability",     body: "Data platforms and reporting frameworks for carbon accounting, ESG disclosure, and sustainability program governance." },
  { icon: "fa-cloud",           title: "Cloud Transformation",     body: "Migrating energy sector workloads to compliant cloud environments with NERC-CIP and sector-specific controls." },
  { icon: "fa-robot",           title: "Predictive Maintenance",   body: "AI-powered predictive maintenance models that reduce unplanned downtime and optimize asset lifecycle costs." },
];

export default function EnergyUtilitiesPage() {
  return (
    <SubpageLayout
      eyebrow="Industries"
      title="Energy & Utilities"
      description="Hippowize helps energy and utility organizations modernize operations, secure critical infrastructure, and accelerate the transition to sustainable energy delivery."
      breadcrumbs={[{ label: "Industry", href: "/industry/energy-utilities" }, { label: "Energy & Utilities", href: "/industry/energy-utilities" }]}
      accent="#F59E0B"
    >
      <section className="sp-section">
        <div className="container">
          <div className="sp-intro-grid">
            <div>
              <p className="eyebrow">The Challenge</p>
              <h2>Securing and modernizing critical energy infrastructure</h2>
              <p>Energy and utility organizations face a convergence of pressures: aging infrastructure, rising cyber threats to operational technology, decarbonization mandates, and the complexity of integrating renewable energy sources into legacy grid architectures.</p>
              <p>Hippowize brings sector-specific expertise in OT/IT security, asset management, and digital operations to help energy organizations navigate this complexity safely.</p>
              <a href="https://calendly.com/hippowize" target="_blank" rel="noreferrer" className="btn-primary" style={{ marginTop: 28 }}>Talk to an Energy Specialist</a>
            </div>
            <div className="sp-highlight-box">
              <i className="fa-solid fa-bolt sp-highlight-icon" />
              <h3>Energy Sector Expertise</h3>
              <p>We understand the unique requirements of critical infrastructure — from NERC-CIP compliance to field operations management.</p>
              <ul className="sp-check-list">
                <li><i className="fa-solid fa-check" /> OT/IT security specialists</li>
                <li><i className="fa-solid fa-check" /> NERC-CIP compliance experience</li>
                <li><i className="fa-solid fa-check" /> Smart grid & IoT expertise</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="sp-section sp-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="eyebrow">Solutions</p>
            <h2>What we deliver for energy & utilities</h2>
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
          <h2>Ready to modernize your energy operations?</h2>
          <p>Our energy specialists serve utilities, oil & gas, and renewable energy organizations globally.</p>
          <a href="https://calendly.com/hippowize" target="_blank" rel="noreferrer" className="btn-primary">Book a Free Consultation</a>
        </div>
      </section>
    </SubpageLayout>
  );
}
