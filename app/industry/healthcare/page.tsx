import Image from "next/image";
import SubpageLayout from "@/components/SubpageLayout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare",
  description: "Clinical IT modernization, data platforms, and compliance solutions for healthcare providers and life sciences organizations.",
  alternates: { canonical: "https://hippowize-v2.netlify.app/industry/healthcare" },
  openGraph: { title: "Healthcare", description: "Clinical IT modernization, data platforms, and compliance solutions for healthcare providers and life sciences organizations." },
  twitter:  { title: "Healthcare", description: "Clinical IT modernization, data platforms, and compliance solutions for healthcare providers and life sciences organizations." },
};


const solutions = [
  { icon: "fa-hospital",        title: "Clinical IT Modernization",  body: "EHR integrations, clinical workflow automation, and patient data platform modernization for healthcare providers." },
  { icon: "fa-shield-halved",   title: "Healthcare Cybersecurity",   body: "HIPAA-aligned security posture assessments, GRC frameworks, and continuous monitoring for healthcare organizations." },
  { icon: "fa-clipboard-list",  title: "Regulatory Compliance",      body: "Comprehensive compliance programs covering HIPAA, HITECH, and regional health data regulations." },
  { icon: "fa-cloud",           title: "Cloud for Healthcare",       body: "Secure cloud migration strategies that maintain HIPAA compliance and support clinical data workloads." },
  { icon: "fa-robot",           title: "AI-Assisted Care",           body: "AI governance, ML model deployment, and predictive analytics for patient outcomes and operational efficiency." },
  { icon: "fa-diagram-project", title: "Healthcare PMO",             body: "Programme governance and delivery management for complex, multi-site healthcare technology transformations." },
];

const projects = [
  {
    metric: "60%",
    metricLabel: "reduction in ticket resolution time",
    title: "ServiceNow ITSM — Brazilian Hospital Network",
    body: "A leading hospital network in Brazil deployed ServiceNow ITSM across 12 facilities with Hippowize's delivery team embedded on-site. Ticket resolution time dropped 60% in the first quarter.",
    tags: ["ServiceNow", "ITSM", "Healthcare"],
  },
  {
    metric: "HIPAA",
    metricLabel: "compliant cloud migration completed",
    title: "Cloud Migration — North American Health System",
    body: "Hippowize led a multi-phase cloud migration for a regional health system, moving clinical workloads to Azure while maintaining full HIPAA compliance throughout every phase.",
    tags: ["Azure", "Cloud", "Compliance"],
  },
  {
    metric: "12 mo",
    metricLabel: "to full security framework deployment",
    title: "GRC & Cybersecurity Framework — Healthcare Provider",
    body: "Hippowize designed and implemented a comprehensive GRC framework and cybersecurity posture review for a large healthcare provider, achieving audit readiness within 12 months.",
    tags: ["GRC", "Cybersecurity", "Compliance"],
  },
];

export default function HealthcarePage() {
  return (
    <SubpageLayout
      related={[{"label": "Digital Transformation", "href": "/services/digital-transformation", "icon": "fa-microchip"}, {"label": "Professional Services", "href": "/services/professional-services", "icon": "fa-briefcase"}, {"label": "Manufacturing", "href": "/industry/manufacturing", "icon": "fa-industry"}, {"label": "Client Stories", "href": "/stories", "icon": "fa-star"}]}
      eyebrow="Industries"
      title="Healthcare"
      description="Modernizing healthcare IT, securing patient data, and enabling digital care delivery — with deep respect for regulatory complexity."
      breadcrumbs={[{ label: "Healthcare", href: "/industry/healthcare" }]}
      accent="#059669"
    >
      <section className="sp-section sp-section--has-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=75')" }}>
        <div className="sp-section-bg-overlay" />
        <div className="container">
          <div className="sp-intro-grid">
            <div>
              <p className="eyebrow">The Challenge</p>
              <h2>Healthcare IT must be secure, compliant, and fast to evolve</h2>
              <p>Healthcare organizations face mounting pressure to modernize while maintaining strict regulatory compliance. Legacy infrastructure, siloed data, and complex procurement cycles create barriers to transformation.</p>
              <p>Hippowize brings healthcare-specific expertise in clinical IT, cybersecurity, and compliance — delivering transformation that patient safety demands.</p>
            </div>
            <div className="sp-highlight-box">
              <i className="fa-solid fa-hospital sp-highlight-icon" />
              <h3>Our Healthcare Expertise</h3>
              <ul className="sp-check-list">
                <li><i className="fa-solid fa-check" /> HIPAA &amp; HITECH compliance</li>
                <li><i className="fa-solid fa-check" /> Clinical workflow automation</li>
                <li><i className="fa-solid fa-check" /> Healthcare cloud security</li>
                <li><i className="fa-solid fa-check" /> AI &amp; data governance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section sp-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="eyebrow">Solutions</p>
            <h2>What we deliver for healthcare organizations</h2>
          </div>
          <div className="sp-grid-3">
            {solutions.map(s => (
              <div className="sp-capability-card" key={s.title}>
                <div className="sp-cap-icon"><i className={`fa-solid ${s.icon}`} /></div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-section">
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <p className="eyebrow">Project Showcase</p>
            <h2>Real impact for healthcare organizations</h2>
          </div>
          <div className="project-showcase-grid">
            {projects.map(p => (
              <div className="project-card" key={p.title}>
                <div className="project-metric">
                  <span className="project-metric-num">{p.metric}</span>
                  <span className="project-metric-label">{p.metricLabel}</span>
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-body">{p.body}</p>
                <div className="project-tags">
                  {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
