import SubpageLayout from "@/components/SubpageLayout";

const stories = [
  {
    sector: "Financial Services",
    challenge: "Portfolio delivery stalled; no executive visibility into technology value",
    outcome: "40% faster portfolio delivery",
    title: "VMO Transformation — Major Canadian Bank",
    body: "A top-5 Canadian bank engaged Hippowize to transition from a traditional PMO to a Value Management Office. Within 18 months, portfolio delivery velocity increased by 40% and executives gained real-time visibility into investment outcomes.",
    tags: ["Strategy Consulting", "VMO", "Financial Services"],
    accentColor: "#2563EB",
  },
  {
    sector: "Government",
    challenge: "Ministry lacked a formal cybersecurity posture and faced audit risk",
    outcome: "ISO 27001 certified in 12 months",
    title: "National Cybersecurity Framework — GCC Ministry",
    body: "Hippowize delivered a comprehensive GRC implementation and cybersecurity framework for a government ministry in the Gulf. ISO 27001 certification was achieved within 12 months of engagement start — on time and under budget.",
    tags: ["Cybersecurity", "GRC", "Government"],
    accentColor: "#7C3AED",
  },
  {
    sector: "Healthcare",
    challenge: "12 hospital facilities with fragmented, high-volume IT support queues",
    outcome: "60% reduction in ticket resolution time",
    title: "ServiceNow ITSM — Brazilian Hospital Network",
    body: "A leading hospital network deployed ServiceNow ITSM across 12 facilities with Hippowize embedded on-site. Ticket resolution time dropped by 60% within the first quarter post go-live, freeing clinical staff from IT friction.",
    tags: ["ServiceNow", "ITSM", "Healthcare"],
    accentColor: "#059669",
  },
  {
    sector: "Energy",
    challenge: "200+ aging workloads blocking digital transformation agenda",
    outcome: "200+ workloads migrated in 8 months",
    title: "Cloud Migration Factory — Canadian Utility",
    body: "Hippowize's Cloud Migration Factory methodology moved a major Canadian utility's 200+ workloads from on-premise to Azure in 8 months — with zero critical incidents and full NERC-CIP compliance maintained throughout.",
    tags: ["Cloud Migration", "Azure", "Energy"],
    accentColor: "#D97706",
  },
  {
    sector: "IT & Technology",
    challenge: "1,200-person firm unable to predict or sustain delivery across teams",
    outcome: "3× improvement in delivery predictability",
    title: "SAFe Transformation — UK Technology Firm",
    body: "A 1,200-person technology firm partnered with Hippowize for a full SAFe transformation. Delivery predictability tripled within two program increments, and employee satisfaction scores rose significantly across delivery teams.",
    tags: ["SAFe", "Agile", "IT & Technology"],
    accentColor: "#2563EB",
  },
  {
    sector: "Financial Services",
    challenge: "Pan-African bank needed a unified digital platform across 6 markets simultaneously",
    outcome: "Launched in 6 countries within 18 months",
    title: "Digital Banking Platform — Pan-African Bank",
    body: "Hippowize supported a Pan-African financial institution in launching a unified digital banking platform across six markets simultaneously — managing technology delivery, change management, and regulatory alignment across every country.",
    tags: ["Digital Transformation", "Banking", "Financial Services"],
    accentColor: "#F59E0B",
  },
];

export default function StoriesPage() {
  return (
    <SubpageLayout
      eyebrow="Client Stories"
      title="Where Hippowize Made a Difference"
      description="Real engagements. Real outcomes. These are the stories of organizations that chose to transform — and the measurable change that followed."
      breadcrumbs={[{ label: "Stories", href: "/stories" }]}
      accent="#2563EB"
      compact
    >
      <section className="sp-section">
        <div className="container">
          <div className="stories-intro">
            <p className="eyebrow">Impact Stories</p>
            <h2>Transformation is not a project.<br />It&apos;s an outcome.</h2>
            <p>
              From Canadian banks to Gulf ministries, healthcare networks to Pan-African digital banking —
              every engagement below represents a real organization that bet on transformation and won.
            </p>
          </div>

          <div className="stories-list">
            {stories.map((s, i) => (
              <article key={s.title} className="story-impact-card" style={{ "--story-accent": s.accentColor } as React.CSSProperties}>
                <div className="story-impact-meta">
                  <span className="story-sector-label">{s.sector}</span>
                  <span className="story-num">0{i + 1}</span>
                </div>

                <div className="story-impact-content">
                  <div className="story-challenge">
                    <span className="story-challenge-label">Challenge</span>
                    <p>{s.challenge}</p>
                  </div>

                  <div className="story-impact-divider" />

                  <div className="story-result">
                    <div className="story-outcome-badge">
                      <i className="fa-solid fa-arrow-trend-up" />
                      {s.outcome}
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </div>

                <div className="story-impact-tags">
                  {s.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
