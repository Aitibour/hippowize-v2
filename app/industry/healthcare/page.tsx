import SubpageLayout from "@/components/SubpageLayout";

const solutions = [
  { icon: "fa-shield-halved",    title: "Health Data Security",    body: "HIPAA, PIPEDA, and GDPR-aligned security programs protecting patient data across clinical and administrative systems." },
  { icon: "fa-hospital",         title: "Digital Health Strategy", body: "Roadmaps for EHR modernization, patient portal transformation, and clinical workflow digitization." },
  { icon: "fa-ticket",           title: "ITSM for Healthcare",     body: "ServiceNow implementations tailored for healthcare operations — HR, IT, and facilities management on a single platform." },
  { icon: "fa-cloud",            title: "Cloud Migration",         body: "Secure migration of clinical and administrative workloads to compliant cloud environments." },
  { icon: "fa-robot",            title: "AI in Clinical Operations", body: "AI-assisted triage, predictive analytics, and operational AI that reduce administrative burden on clinical staff." },
  { icon: "fa-users",            title: "Change Management",       body: "Clinician and staff adoption programs that make digital change sustainable in complex healthcare environments." },
];

export default function HealthcarePage() {
  return (
    <SubpageLayout
      eyebrow="Industries"
      title="Healthcare"
      description="Hippowize helps healthcare organizations protect patient data, modernize clinical operations, and deliver digital transformation within complex regulatory environments."
      breadcrumbs={[{ label: "Industry", href: "/industry/healthcare" }, { label: "Healthcare", href: "/industry/healthcare" }]}
      accent="#059669"
    >
      <section className="sp-section">
        <div className="container">
          <div className="sp-intro-grid">
            <div>
              <p className="eyebrow">The Challenge</p>
              <h2>Transforming care delivery in a regulated world</h2>
              <p>Healthcare organizations face a unique transformation paradox: the urgency to digitize and modernize is constrained by patient safety requirements, strict data regulations, and legacy clinical systems that can&apos;t simply be switched off.</p>
              <p>Hippowize brings deep sector knowledge and a risk-aware delivery model that respects the criticality of healthcare operations while driving meaningful change.</p>
              <a href="https://calendly.com/hippowize" target="_blank" rel="noreferrer" className="btn-primary" style={{ marginTop: 28 }}>Talk to a Healthcare Specialist</a>
            </div>
            <div className="sp-highlight-box">
              <i className="fa-solid fa-hospital sp-highlight-icon" />
              <h3>Healthcare-First Approach</h3>
              <p>Every engagement is designed around patient safety, regulatory compliance, and clinical workflow continuity.</p>
              <ul className="sp-check-list">
                <li><i className="fa-solid fa-check" /> HIPAA & PIPEDA compliance</li>
                <li><i className="fa-solid fa-check" /> EHR integration expertise</li>
                <li><i className="fa-solid fa-check" /> Clinical change management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="sp-section sp-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="eyebrow">Solutions</p>
            <h2>What we deliver for healthcare</h2>
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
          <h2>Ready to transform your healthcare organization?</h2>
          <p>Our healthcare specialists are available across Canada, EMEA, and Africa.</p>
          <a href="https://calendly.com/hippowize" target="_blank" rel="noreferrer" className="btn-primary">Book a Free Consultation</a>
        </div>
      </section>
    </SubpageLayout>
  );
}
