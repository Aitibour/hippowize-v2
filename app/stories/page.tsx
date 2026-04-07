import SubpageLayout from "@/components/SubpageLayout";

const stories = [
  { region: "NA", sector: "Financial Services", title: "VMO Transformation for a Major Canadian Bank", outcome: "40% faster portfolio delivery", body: "A top-5 Canadian bank engaged Hippowize to transition their IT function from a traditional PMO to a Value Management Office. Within 18 months, portfolio delivery velocity increased by 40% and executive visibility into investment value improved dramatically.", tags: ["Strategy Consulting", "VMO", "Financial Services"] },
  { region: "EMEA", sector: "Government", title: "National Cybersecurity Framework for a GCC Ministry", outcome: "ISO 27001 certified in 12 months", body: "Hippowize delivered a comprehensive GRC implementation and cybersecurity framework for a government ministry in the Gulf region, achieving ISO 27001 certification within 12 months of engagement start.", tags: ["Cybersecurity", "GRC", "Government"] },
  { region: "LATAM", sector: "Healthcare", title: "ServiceNow ITSM for a Brazilian Hospital Network", outcome: "60% reduction in ticket resolution time", body: "A leading hospital network in Brazil deployed ServiceNow ITSM across 12 facilities with Hippowize's delivery team embedded on-site. Ticket resolution time dropped by 60% within the first quarter post-go-live.", tags: ["ServiceNow", "ITSM", "Healthcare"] },
  { region: "NA", sector: "Energy", title: "Cloud Migration Factory — Canadian Utility", outcome: "Migrated 200+ workloads in 8 months", body: "Hippowize's Cloud Migration Factory methodology helped a major Canadian utility move 200+ workloads from on-premise data centres to Azure with zero critical incidents and full NERC-CIP compliance maintained throughout.", tags: ["Cloud Migration", "Azure", "Energy"] },
  { region: "EMEA", sector: "IT & Technology", title: "SAFe Transformation for a UK Technology Firm", outcome: "3× improvement in delivery predictability", body: "A 1,200-person technology firm in the UK partnered with Hippowize for a full SAFe transformation. Delivery predictability tripled within two program increments, and employee satisfaction scores increased significantly.", tags: ["SAFe", "Agile", "IT & Technology"] },
  { region: "Africa", sector: "Financial Services", title: "Digital Banking Platform Launch — Pan-African Bank", outcome: "Launched in 6 countries within 18 months", body: "Hippowize supported a Pan-African financial institution in launching a unified digital banking platform across six markets — managing technology delivery, change management, and regulatory alignment simultaneously.", tags: ["Digital Transformation", "Banking", "Financial Services"] },
];

const REGION_COLORS: Record<string, string> = { NA: "#2563EB", LATAM: "#059669", EMEA: "#7C3AED", Africa: "#F59E0B" };

export default function StoriesPage() {
  return (
    <SubpageLayout
      eyebrow="Client Stories"
      title="Stories of Transformation"
      description="Real outcomes from real organizations. Here's how Hippowize has helped clients across sectors and geographies turn strategy into measurable results."
      breadcrumbs={[{ label: "Stories", href: "/stories" }]}
      accent="#2563EB"
    >
      <section className="sp-section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p className="eyebrow">Case Studies</p>
            <h2>What transformation looks like in practice</h2>
            <p style={{ maxWidth: 600, margin: "16px auto 0", lineHeight: 1.75 }}>
              From Canadian banks to Gulf ministries, healthcare networks to Pan-African digital banking — these are the stories that define Hippowize&apos;s impact.
            </p>
          </div>

          <div className="stories-grid">
            {stories.map((s) => (
              <article className="story-card" key={s.title}>
                <div className="story-card-top">
                  <span className="region-badge" style={{ background: REGION_COLORS[s.region] ?? "#2563EB" }}>{s.region}</span>
                  <span className="story-sector">{s.sector}</span>
                </div>
                <div className="story-outcome">
                  <i className="fa-solid fa-arrow-trend-up" />
                  {s.outcome}
                </div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <div className="story-tags">
                  {s.tags.map((t) => <span key={t} className="story-tag">{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-cta-band">
        <div className="container">
          <h2>Ready to write your transformation story?</h2>
          <p>Let&apos;s start with a conversation about your goals.</p>
          <a href="https://calendly.com/hippowize" target="_blank" rel="noreferrer" className="btn-primary">Book a Free Consultation</a>
        </div>
      </section>
    </SubpageLayout>
  );
}
