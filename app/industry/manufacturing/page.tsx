import Image from "next/image";
import SubpageLayout from "@/components/SubpageLayout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing  Supply Chain",
  description: "Smart manufacturing, ERP optimization, and supply chain resilience programs for industrial organizations.",
  openGraph: { title: "Manufacturing  Supply Chain", description: "Smart manufacturing, ERP optimization, and supply chain resilience programs for industrial organizations." },
  twitter:  { title: "Manufacturing  Supply Chain", description: "Smart manufacturing, ERP optimization, and supply chain resilience programs for industrial organizations." },
};


const solutions = [
  { icon: "fa-industry",         title: "Smart Manufacturing",       body: "Industry 4.0 adoption, IoT integration, and digital factory programmes that connect the shop floor to enterprise systems." },
  { icon: "fa-diagram-project",  title: "Supply Chain Optimization", body: "End-to-end supply chain visibility, demand planning platforms, and supplier network digitization for resilient operations." },
  { icon: "fa-robot",            title: "AI & Predictive Analytics", body: "Machine learning for demand forecasting, predictive maintenance, quality control, and yield optimization." },
  { icon: "fa-shield-halved",    title: "OT Security & Compliance",  body: "Operational technology security assessments, compliance programmes, and converged OT/IT security architecture." },
  { icon: "fa-cloud",            title: "Cloud for Manufacturing",   body: "Hybrid and multi-cloud strategies that modernize manufacturing IT while maintaining operational continuity." },
  { icon: "fa-leaf",             title: "Sustainability & ESG",      body: "Carbon tracking platforms, energy efficiency programmes, and ESG reporting frameworks for manufacturing organizations." },
];

const projects = [
  {
    metric: "35%",
    metricLabel: "reduction in unplanned downtime",
    title: "Predictive Maintenance Platform — European Industrial Group",
    body: "Hippowize built and deployed a predictive maintenance platform for a major European industrial manufacturer, integrating ML models with existing SCADA infrastructure to reduce unplanned downtime by 35% in the first year.",
    tags: ["AI", "Predictive Maintenance", "Manufacturing"],
  },
  {
    metric: "22%",
    metricLabel: "improvement in on-time delivery",
    title: "Supply Chain Digitization — North American Manufacturer",
    body: "Hippowize modernized the supply chain operations of a North American manufacturer, deploying real-time supplier visibility and demand-sensing tools that improved on-time delivery rates by 22% within two quarters.",
    tags: ["Supply Chain", "Digital Transformation", "Manufacturing"],
  },
  {
    metric: "6",
    metricLabel: "facilities connected on one platform",
    title: "Smart Factory Programme — EMEA Consumer Goods Company",
    body: "Hippowize led a smart factory transformation across six production facilities for a consumer goods company, connecting shop-floor systems to a unified cloud data platform and enabling real-time production analytics.",
    tags: ["Smart Factory", "Cloud", "Industry 4.0"],
  },
];

export default function ManufacturingPage() {
  return (
    <SubpageLayout
      eyebrow="Industries"
      title="Manufacturing & Supply Chain"
      description="Smart factory programmes, supply chain digitization, and AI-driven operations for manufacturers competing in a data-driven world."
      breadcrumbs={[{ label: "Manufacturing & Supply Chain", href: "/industry/manufacturing" }]}
      accent="#0891B2"
    >
      <section className="sp-section sp-section--has-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80')" }}>
        <div className="sp-section-bg-overlay" />
        <div className="container">
          <div className="sp-intro-grid">
            <div>
              <p className="eyebrow">The Challenge</p>
              <h2>Manufacturers must digitize operations without disrupting production</h2>
              <p>The manufacturing sector faces mounting pressure to adopt Industry 4.0 technologies — AI, IoT, cloud — while managing complex supply chains, aging OT infrastructure, and tightening ESG requirements.</p>
              <p>Hippowize brings deep operational technology expertise and digital delivery capability to help manufacturers modernize safely, connecting the shop floor to enterprise strategy.</p>
            </div>
            <div className="sp-highlight-box">
              <i className="fa-solid fa-industry sp-highlight-icon" />
              <h3>Our Manufacturing Expertise</h3>
              <ul className="sp-check-list">
                <li><i className="fa-solid fa-check" /> Industry 4.0 &amp; smart factory</li>
                <li><i className="fa-solid fa-check" /> Supply chain digitization</li>
                <li><i className="fa-solid fa-check" /> OT/IT security &amp; compliance</li>
                <li><i className="fa-solid fa-check" /> AI &amp; predictive analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section sp-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="eyebrow">Solutions</p>
            <h2>What we deliver for manufacturers</h2>
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
            <h2>Real impact for manufacturers</h2>
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
