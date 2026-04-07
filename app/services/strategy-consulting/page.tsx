import SubpageLayout from "@/components/SubpageLayout";

const outcomes = [
  { icon: "fa-chess-king",      title: "PMO to VMO",             body: "Transition from project-focused governance to value-driven operating models that align delivery with strategic outcomes." },
  { icon: "fa-shield-halved",   title: "Cybersecurity Strategy", body: "End-to-end cyber risk assessments, framework alignment (NIST, ISO 27001), and security roadmaps built for your sector." },
  { icon: "fa-scale-balanced",  title: "GRC Advisory",           body: "Governance, Risk & Compliance programs that satisfy regulatory obligations without slowing organizational agility." },
  { icon: "fa-sitemap",         title: "Enterprise Architecture", body: "Blueprints that connect business capability to technology investments — ensuring every initiative maps to value." },
  { icon: "fa-handshake",       title: "Executive Advisory",     body: "Trusted counsel for C-suite leaders navigating transformation — from board reporting to technology investment decisions." },
  { icon: "fa-chart-line",      title: "Performance Management", body: "KPI frameworks, OKR alignment, and measurement systems that make strategic progress visible and actionable." },
];

export default function StrategyConsultingPage() {
  return (
    <SubpageLayout
      eyebrow="Our Services"
      title="Strategy Consulting"
      description="We align your technology investments with lasting business value through pragmatic strategy, governance frameworks, and executive advisory."
      breadcrumbs={[{ label: "Services", href: "/#services" }, { label: "Strategy Consulting", href: "/services/strategy-consulting" }]}
      accent="#2563EB"
    >
      {/* What We Do */}
      <section className="sp-section">
        <div className="container">
          <div className="sp-intro-grid">
            <div>
              <p className="eyebrow">What We Do</p>
              <h2>Strategy that drives measurable outcomes</h2>
              <p>Hippowize&apos;s strategy consulting practice helps organizations cut through complexity — translating vision into executable roadmaps backed by governance, risk management, and enterprise architecture.</p>
              <p>Whether you&apos;re modernizing your PMO, building a cybersecurity posture, or aligning IT with corporate strategy, our advisors embed with your leadership to deliver results that last.</p>
              <a href="https://calendly.com/hippowize" target="_blank" rel="noreferrer" className="btn-primary" style={{ marginTop: 28 }}>Start a Conversation</a>
            </div>
            <div className="sp-highlight-box">
              <i className="fa-solid fa-chess sp-highlight-icon" />
              <h3>Why Strategy First?</h3>
              <p>Organizations that lead with strategy before technology deliver 2.5× more value from their transformation investments. We help you get the sequence right.</p>
              <ul className="sp-check-list">
                <li><i className="fa-solid fa-check" /> Reduced transformation failure rates</li>
                <li><i className="fa-solid fa-check" /> Faster executive alignment</li>
                <li><i className="fa-solid fa-check" /> Clear ROI from every initiative</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="sp-section sp-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="eyebrow">Capabilities</p>
            <h2>What we deliver</h2>
          </div>
          <div className="sp-grid-3">
            {outcomes.map((o) => (
              <div className="sp-capability-card" key={o.title}>
                <div className="sp-cap-icon"><i className={`fa-solid ${o.icon}`} /></div>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-cta-band">
        <div className="container">
          <h2>Ready to build your strategic roadmap?</h2>
          <p>Our strategy consultants are available globally across NA, LATAM, EMEA, and Africa.</p>
          <a href="https://calendly.com/hippowize" target="_blank" rel="noreferrer" className="btn-primary">Book a Free Consultation</a>
        </div>
      </section>
    </SubpageLayout>
  );
}
