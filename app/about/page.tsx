import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SubpageLayout from "@/components/SubpageLayout";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Hippowize — a global consulting firm headquartered in Toronto, helping organizations across 15+ countries turn strategy into measurable outcomes.",
  alternates: { canonical: "https://hippowize-v2.netlify.app/about" },
  openGraph: { title: "About Hippowize", description: "A global consulting firm turning strategy into measurable outcomes across cybersecurity, digital transformation, and training." },
};

const values = [
  { icon: "fa-bullseye", title: "Outcome-Driven", body: "We measure success by your results, not by the hours we bill. Every engagement is anchored to a measurable business outcome." },
  { icon: "fa-earth-americas", title: "Globally Minded", body: "Our consultants have delivered in 15+ countries. We bring global best practices to every local challenge." },
  { icon: "fa-handshake", title: "Partnership First", body: "We embed in your teams, build internal capability, and ensure the transformation outlasts our engagement." },
  { icon: "fa-graduation-cap", title: "Expertise at Every Level", body: "From certified architects and GRC specialists to SAFe coaches — our team brings depth, not just breadth." },
];

const milestones = [
  { year: "2013", event: "Founded in Toronto by seasoned IT and management consultants." },
  { year: "2016", event: "First international engagement — GRC implementation for a Gulf government ministry." },
  { year: "2019", event: "Launched dedicated Cloud Migration Factory practice." },
  { year: "2021", event: "ServiceNow Elite Partner status achieved." },
  { year: "2023", event: "Expanded to 15+ countries with 200+ projects delivered." },
  { year: "2024", event: "Launched AI & Data practice to accelerate digital transformation." },
];

const stats = [
  { value: "50+", label: "Organizations Served" },
  { value: "15+", label: "Countries" },
  { value: "200+", label: "Projects Delivered" },
  { value: "10+", label: "Years of Expertise" },
];

export default function AboutPage() {
  return (
    <SubpageLayout
      eyebrow="Who We Are"
      title="Built on Expertise. Driven by Outcomes."
      description="Hippowize is a global consulting firm headquartered in Toronto, Canada — helping organizations across industries turn strategy into measurable business transformation."
      breadcrumbs={[{ label: "About", href: "/about" }]}
      accent="#2563EB"
      compact
      related={[
        { label: "Our Services", href: "/services/strategy-consulting", icon: "fa-chess" },
        { label: "Client Stories", href: "/stories", icon: "fa-star" },
        { label: "Careers", href: "/careers", icon: "fa-users" },
        { label: "Contact Us", href: "/contact", icon: "fa-envelope" },
      ]}
    >
      {/* Stats */}
      <section className="sp-section">
        <div className="container">
          <div className="about-page-stats">
            {stats.map((s) => (
              <div key={s.label} className="about-page-stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Image */}
      <section className="sp-section sp-alt">
        <div className="container">
          <div className="sp-intro-grid">
            <div>
              <p className="eyebrow">Our Mission</p>
              <h2>Transform Today, Thrive Tomorrow</h2>
              <p>Hippowize exists to close the gap between ambitious strategy and real-world execution. Too many transformation initiatives stall at the planning stage — we make sure yours doesn&apos;t.</p>
              <p style={{ marginTop: 16 }}>Our consultants are specialists, not generalists. We bring deep domain knowledge in cybersecurity, digital transformation, and organizational change — and we stay through delivery, not just advisory.</p>
              <Link href="/contact" className="btn-primary" style={{ marginTop: 28, display: "inline-flex" }}>
                <i className="fa-solid fa-envelope" style={{ marginRight: 8 }} />
                Start a Conversation
              </Link>
            </div>
            <div className="about-page-img-wrap" style={{ position: "relative", minHeight: 360 }}>
              <Image
                src="https://wp.w3layouts.com/execution/wp-content/themes/execution/assets/images/about.jpg"
                alt="Hippowize consulting team"
                fill
                style={{ objectFit: "cover", borderRadius: 12 }}
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="sp-section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="eyebrow">Our Values</p>
            <h2>What sets us apart</h2>
          </div>
          <div className="about-page-values">
            {values.map((v) => (
              <div key={v.title} className="about-page-value-card">
                <i className={`fa-solid ${v.icon} about-page-value-icon`} />
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="sp-section sp-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="eyebrow">Our Journey</p>
            <h2>A decade of transformation</h2>
          </div>
          <div className="about-timeline">
            {milestones.map((m, i) => (
              <div key={m.year} className={`about-timeline-item ${i % 2 === 0 ? "left" : "right"}`}>
                <div className="about-timeline-year">{m.year}</div>
                <div className="about-timeline-dot" />
                <div className="about-timeline-body">{m.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sp-section">
        <div className="container">
          <div className="sp-highlight-box" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
            <i className="fa-solid fa-rocket sp-highlight-icon" />
            <h3>Ready to transform your organization?</h3>
            <p>Book a free 30-minute discovery call with one of our consultants.</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 24, flexWrap: "wrap" }}>
              <a href="https://calendly.com/hippowize" target="_blank" rel="noreferrer" className="btn-primary">
                <i className="fa-solid fa-calendar-check" style={{ marginRight: 8 }} />
                Book a Call
              </a>
              <Link href="/contact" className="btn-outline">Send a Message</Link>
            </div>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
