import Image from "next/image";
import SubpageLayout from "@/components/SubpageLayout";

const programs = [
  { icon: "fa-jira",          title: "Jira & Confluence",     body: "Hands-on training for Atlassian tools — from basic navigation to advanced workflow configuration and reporting." },
  { icon: "fa-arrows-spin",   title: "Agile & Scrum",         body: "Certified Scrum training and coaching that builds genuine agility — not just the ceremonies and vocabulary." },
  { icon: "fa-expand",        title: "SAFe Transformation",   body: "Scaled Agile Framework implementation and coaching for enterprise-level program delivery and PI Planning." },
  { icon: "fa-person-chalkboard", title: "Leadership Coaching", body: "Executive and management coaching for leaders navigating organizational change and digital transformation." },
  { icon: "fa-rocket",        title: "DevOps & CI/CD",        body: "Practical DevOps training covering pipelines, infrastructure-as-code, and continuous delivery practices." },
  { icon: "fa-layer-group",   title: "Change Management",     body: "PROSCI and Kotter-based change management programs that drive adoption and minimize transformation resistance." },
];

export default function TrainingCoachingPage() {
  return (
    <SubpageLayout
      eyebrow="Our Services"
      title="Training & Coaching"
      description="Building lasting capability inside your teams — Agile, SAFe, Jira, DevOps, and change management programs delivered by certified practitioners."
      breadcrumbs={[{ label: "Services", href: "/#services" }, { label: "Training & Coaching", href: "/services/training-coaching" }]}
      accent="#F59E0B"
    >
      <section className="sp-section sp-section--has-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1400&q=80')" }}>
        <div className="sp-section-bg-overlay" />
        <div className="container">
          <div className="sp-intro-grid">
            <div>
              <p className="eyebrow">What We Do</p>
              <h2>Capability that outlasts the engagement</h2>
              <p>Hippowize&apos;s training and coaching programs are designed to build lasting organizational capability — not dependency on external consultants. We embed with your teams, tailor programs to your maturity level, and stay until the skills stick.</p>
              <p>Every program is delivered by certified practitioners with real-world delivery experience — not just trainers reading from slides.</p>
              <a href="https://calendly.com/hippowize" target="_blank" rel="noreferrer" className="btn-primary" style={{ marginTop: 28 }}>Explore Programs</a>
            </div>
            <div className="sp-highlight-box">
              <i className="fa-solid fa-users sp-highlight-icon" />
              <h3>Our Approach</h3>
              <p>We tailor every program to your team&apos;s current maturity, culture, and transformation context — no off-the-shelf slideshows.</p>
              <ul className="sp-check-list">
                <li><i className="fa-solid fa-check" /> Certified coaches & trainers</li>
                <li><i className="fa-solid fa-check" /> Real-world case studies</li>
                <li><i className="fa-solid fa-check" /> Ongoing post-training support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section sp-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="eyebrow">Our Programs</p>
            <h2>What we teach and coach</h2>
          </div>
          <div className="sp-grid-3">
            {programs.map((p) => (
              <div className="sp-capability-card" key={p.title}>
                <div className="sp-cap-icon"><i className={`fa-brands ${p.icon}`} aria-hidden /></div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-cta-band">
        <div className="container">
          <h2>Ready to build your team&apos;s capability?</h2>
          <p>We design bespoke programs for teams of 5 to 500 — in-person, virtual, or hybrid.</p>
          <a href="https://calendly.com/hippowize" target="_blank" rel="noreferrer" className="btn-primary">Book a Free Consultation</a>
        </div>
      </section>
    </SubpageLayout>
  );
}
