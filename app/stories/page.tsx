import SubpageLayout from "@/components/SubpageLayout";

const stories = [
  {
    sector: "Financial Services",
    challenge: "Portfolio delivery stalled with no executive visibility into technology value",
    outcome: "40%",
    outcomeLabel: "faster portfolio delivery",
    title: "VMO Transformation — Major Canadian Bank",
    body: "A top-5 Canadian bank transitioned from a traditional PMO to a Value Management Office. Within 18 months, delivery velocity increased by 40% and executives gained real-time visibility into investment outcomes.",
    tags: ["Strategy Consulting", "VMO", "Financial Services"],
    accent: "#2563EB",
  },
  {
    sector: "Government",
    challenge: "Ministry lacked a formal cybersecurity posture and faced significant audit risk",
    outcome: "12mo",
    outcomeLabel: "to ISO 27001 certification",
    title: "National Cybersecurity Framework — GCC Ministry",
    body: "Hippowize delivered a comprehensive GRC implementation and cybersecurity framework for a Gulf government ministry. ISO 27001 certification achieved on time and under budget.",
    tags: ["Cybersecurity", "GRC", "Government"],
    accent: "#7C3AED",
  },
  {
    sector: "Healthcare",
    challenge: "12 hospital facilities with fragmented, high-volume IT support queues",
    outcome: "60%",
    outcomeLabel: "reduction in ticket resolution time",
    title: "ServiceNow ITSM — Brazilian Hospital Network",
    body: "A leading hospital network deployed ServiceNow ITSM across 12 facilities. Ticket resolution time dropped 60% in the first quarter, freeing clinical staff from IT friction.",
    tags: ["ServiceNow", "ITSM", "Healthcare"],
    accent: "#059669",
  },
  {
    sector: "Energy",
    challenge: "200+ aging workloads blocking a critical digital transformation agenda",
    outcome: "200+",
    outcomeLabel: "workloads migrated in 8 months",
    title: "Cloud Migration Factory — Canadian Utility",
    body: "Hippowize's Cloud Migration Factory moved 200+ workloads from on-premise to Azure in 8 months with zero critical incidents and full NERC-CIP compliance maintained.",
    tags: ["Cloud Migration", "Azure", "Energy"],
    accent: "#D97706",
  },
  {
    sector: "IT & Technology",
    challenge: "1,200-person firm unable to predict or sustain delivery across teams",
    outcome: "3×",
    outcomeLabel: "improvement in delivery predictability",
    title: "SAFe Transformation — UK Technology Firm",
    body: "Delivery predictability tripled within two program increments. Employee satisfaction scores rose significantly across delivery teams following the full SAFe adoption.",
    tags: ["SAFe", "Agile", "IT & Technology"],
    accent: "#0EA5E9",
  },
  {
    sector: "Financial Services",
    challenge: "Pan-African bank needed a unified digital platform across 6 markets simultaneously",
    outcome: "6",
    outcomeLabel: "countries launched in 18 months",
    title: "Digital Banking Platform — Pan-African Bank",
    body: "Hippowize managed technology delivery, change management, and regulatory alignment to launch a unified digital banking platform across six markets simultaneously.",
    tags: ["Digital Transformation", "Banking", "Financial Services"],
    accent: "#F59E0B",
  },
];

export default function StoriesPage() {
  return (
    <SubpageLayout
      eyebrow="Client Stories"
      title="Where Hippowize Made a Difference"
      description="Real engagements. Measurable outcomes. Every story below represents an organization that chose transformation — and won."
      breadcrumbs={[{ label: "Stories", href: "/stories" }]}
      accent="#2563EB"
      compact
    >
      <section className="sp-section">
        <div className="container">
          <div className="stories-grid-header">
            <p className="eyebrow">Impact Stories</p>
            <h2>Transformation is not a project. It&apos;s an outcome.</h2>
          </div>

          <div className="stories-card-grid">
            {stories.map((s, i) => (
              <article
                key={s.title}
                className="story-card"
                style={{ "--story-accent": s.accent } as React.CSSProperties}
              >
                <div className="story-card-top">
                  <span className="story-card-sector">{s.sector}</span>
                  <span className="story-card-num">0{i + 1}</span>
                </div>

                <div className="story-card-metric">
                  <span className="story-card-outcome">{s.outcome}</span>
                  <span className="story-card-outcome-label">{s.outcomeLabel}</span>
                </div>

                <div className="story-card-body">
                  <h3>{s.title}</h3>
                  <p className="story-card-challenge"><em>Challenge:</em> {s.challenge}</p>
                  <p>{s.body}</p>
                </div>

                <div className="story-card-tags">
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
