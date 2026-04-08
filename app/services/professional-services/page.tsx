import Image from "next/image";
import SubpageLayout from "@/components/SubpageLayout";

const offerings = [
  { icon: "fa-user-tie",      title: "On-Demand Specialists",   body: "Access certified consultants, architects, and engineers for specific project phases — without long-term commitments." },
  { icon: "fa-people-group",  title: "Delivery Support",        body: "Augment your internal teams with seasoned delivery professionals who integrate seamlessly and hit the ground running." },
  { icon: "fa-clipboard-check", title: "Project Assurance",     body: "Independent health checks, delivery reviews, and remediation plans for programmes that need a fresh perspective." },
  { icon: "fa-diagram-project", title: "PMO-as-a-Service",      body: "A fully managed project management office — governance, reporting, risk tracking, and portfolio oversight on demand." },
  { icon: "fa-handshake-angle", title: "Managed Outcomes",      body: "Fixed-price, outcome-based engagements where we take accountability for delivering defined results." },
  { icon: "fa-headset",       title: "Post-Go-Live Support",    body: "Hypercare, stabilization, and steady-state support after major implementations go live." },
];

export default function ProfessionalServicesPage() {
  return (
    <SubpageLayout
      eyebrow="Our Services"
      title="Professional Services"
      description="On-demand specialists, delivery support, and managed outcomes — the right expertise at the right moment in your transformation journey."
      breadcrumbs={[{ label: "Services", href: "/#services" }, { label: "Professional Services", href: "/services/professional-services" }]}
      accent="#059669"
    >
      <section className="sp-section">
        <div className="container">
          <div className="sp-intro-grid">
            <div>
              <p className="eyebrow">What We Do</p>
              <h2>The right expertise, exactly when you need it</h2>
              <p>Hippowize&apos;s professional services model is built for flexibility. Whether you need a single specialist for three months or a full delivery team for two years, we match supply to demand without overhead.</p>
              <p>Our consultants come pre-vetted, certified, and experienced in your domain — ready to contribute from week one.</p>
              <a href="https://calendly.com/hippowize" target="_blank" rel="noreferrer" className="btn-primary" style={{ marginTop: 28 }}>Discuss Your Needs</a>
            </div>
            <div className="sp-highlight-box">
              <i className="fa-solid fa-briefcase sp-highlight-icon" />
              <h3>Why Hippowize?</h3>
              <p>Unlike staffing firms, we deliver outcomes. We don&apos;t just fill seats — we own accountability for the work.</p>
              <ul className="sp-check-list">
                <li><i className="fa-solid fa-check" /> Vetted, certified professionals</li>
                <li><i className="fa-solid fa-check" /> Flexible engagement models</li>
                <li><i className="fa-solid fa-check" /> Global talent pool</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section sp-alt" style={{ paddingTop: 0 }}>
        <div className="sp-section-banner">
          <Image
            src="https://images.unsplash.com/photo-1461685265823-f8d6d117a1e4?auto=format&fit=crop&w=1400&q=80"
            alt="Professional services team"
            width={1400}
            height={320}
            style={{ width: "100%", height: "320px", objectFit: "cover" }}
          />
          <div className="sp-section-banner-overlay" />
        </div>
        <div className="container" style={{ paddingTop: 56 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="eyebrow">What We Offer</p>
            <h2>Our service delivery models</h2>
          </div>
          <div className="sp-grid-3">
            {offerings.map((o) => (
              <div className="sp-capability-card" key={o.title}>
                <div className="sp-cap-icon"><i className={`fa-solid ${o.icon}`} /></div>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-cta-band">
        <div className="container">
          <h2>Let&apos;s build your delivery team</h2>
          <p>Tell us what you need — we&apos;ll match you with the right professionals within 48 hours.</p>
          <a href="https://calendly.com/hippowize" target="_blank" rel="noreferrer" className="btn-primary">Book a Free Consultation</a>
        </div>
      </section>
    </SubpageLayout>
  );
}
