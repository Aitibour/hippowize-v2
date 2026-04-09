import Image from "next/image";
import SubpageLayout from "@/components/SubpageLayout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Transformation",
  description: "ServiceNow, AI, cloud, and automation delivered end-to-end by specialists who stay through execution.",
  openGraph: { title: "Digital Transformation", description: "ServiceNow, AI, cloud, and automation delivered end-to-end by specialists who stay through execution." },
  twitter:  { title: "Digital Transformation", description: "ServiceNow, AI, cloud, and automation delivered end-to-end by specialists who stay through execution." },
};


const capabilities = [
  { icon: "fa-ticket",       title: "ServiceNow",          body: "Full-lifecycle ServiceNow delivery — ITSM, HRSD, CSM, SPM, and custom applications built by certified specialists." },
  { icon: "fa-robot",        title: "AI & Data Platforms", body: "AI strategy, data engineering, and ML model deployment that turn your data into competitive advantage." },
  { icon: "fa-cloud-arrow-up", title: "Cloud Migration",   body: "Our Cloud Migration Factory moves workloads to AWS, Azure, or GCP — safely, on schedule, and within budget." },
  { icon: "fa-gears",        title: "Workflow Automation",  body: "End-to-end process automation using RPA, ServiceNow, and low-code platforms that eliminate manual overhead." },
  { icon: "fa-plug",         title: "Integration & APIs",  body: "Enterprise integration architecture connecting legacy and modern systems through scalable, secure API layers." },
  { icon: "fa-chart-bar",    title: "Analytics & BI",      body: "Data visualization, dashboards, and self-service analytics that give your leadership real-time decision power." },
];

export default function DigitalTransformationPage() {
  return (
    <SubpageLayout
      eyebrow="Our Services"
      title="Digital Transformation"
      description="On-demand specialists who deliver end-to-end digital change — ServiceNow, AI, Cloud, and Automation. Not just advice. Real delivery."
      breadcrumbs={[{ label: "Services", href: "/#services" }, { label: "Digital Transformation", href: "/services/digital-transformation" }]}
      accent="#7C3AED"
    >
      <section className="sp-section sp-section--has-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80')" }}>
        <div className="sp-section-bg-overlay" />
        <div className="container">
          <div className="sp-intro-grid">
            <div>
              <p className="eyebrow">What We Do</p>
              <h2>Transformation delivered, not just designed</h2>
              <p>Hippowize&apos;s digital transformation practice embeds certified specialists directly into your teams — delivering ServiceNow implementations, AI platforms, cloud migrations, and automation programs from start to finish.</p>
              <p>We don&apos;t hand over a deck and leave. We stay until the system is live, the team is trained, and the business value is realized.</p>
              <a href="https://calendly.com/hippowize" target="_blank" rel="noreferrer" className="btn-primary" style={{ marginTop: 28 }}>Talk to a Specialist</a>
            </div>
            <div className="sp-highlight-box">
              <i className="fa-solid fa-microchip sp-highlight-icon" />
              <h3>Delivery-First Model</h3>
              <p>Our on-demand specialist model means you get the right expert for each phase — without long-term overhead or consulting bloat.</p>
              <ul className="sp-check-list">
                <li><i className="fa-solid fa-check" /> Certified ServiceNow implementers</li>
                <li><i className="fa-solid fa-check" /> Cloud-native engineers</li>
                <li><i className="fa-solid fa-check" /> AI/ML practitioners</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-section sp-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="eyebrow">Capabilities</p>
            <h2>Our digital practice areas</h2>
          </div>
          <div className="sp-grid-3">
            {capabilities.map((c) => (
              <div className="sp-capability-card" key={c.title}>
                <div className="sp-cap-icon"><i className={`fa-solid ${c.icon}`} /></div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-cta-band">
        <div className="container">
          <h2>Ready to accelerate your digital agenda?</h2>
          <p>From a single ServiceNow module to a full enterprise transformation — we scope to your needs.</p>
          <a href="https://calendly.com/hippowize" target="_blank" rel="noreferrer" className="btn-primary">Book a Free Consultation</a>
        </div>
      </section>
    </SubpageLayout>
  );
}
