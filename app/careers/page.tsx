import type { Metadata } from "next";
import Image from "next/image";
import SubpageLayout from "@/components/SubpageLayout";
import CareersOpenings from "@/components/CareersOpenings";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Hippowize team. We hire consultants, strategists, and technologists passionate about delivering real outcomes for organizations worldwide.",
  alternates: { canonical: "https://hippowize-v2.netlify.app/careers" },
  openGraph: { title: "Careers", description: "Join a team of consultants delivering real outcomes across cybersecurity, digital transformation, and strategy." },
};

const values = [
  {
    icon: "fa-earth-americas",
    title: "Global Impact",
    body: "Work on meaningful transformation projects with clients across industries and borders.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: "fa-rocket",
    title: "Grow Fast",
    body: "Accelerate your career with direct client exposure, certifications, and mentorship.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: "fa-people-group",
    title: "Diverse Teams",
    body: "Join a team that reflects the global diversity of the clients and communities we serve.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: "fa-laptop-house",
    title: "Flexible Work",
    body: "Remote-first culture with options to work from client sites and our Toronto office.",
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=600&q=80",
  },
];

export default function CareersPage() {
  return (
    <SubpageLayout
      eyebrow="Join Our Team"
      title="Careers at Hippowize"
      description="We're building a team of consultants, technologists, and coaches passionate about transforming organizations. Come build something meaningful."
      breadcrumbs={[{ label: "Careers", href: "/careers" }]}
      accent="#2563EB"
      compact
    >
      {/* Hidden form for Netlify post-processing detection (required for JS-rendered forms) */}
      <form name="job-application" data-netlify="true" encType="multipart/form-data" hidden>
        <input type="hidden" name="form-name" value="job-application" />
        <input name="position" type="hidden" />
        <input name="full-name" type="text" />
        <input name="email" type="email" />
        <input name="phone" type="tel" />
        <input name="country" type="text" />
        <input name="linkedin" type="url" />
        <input name="cv" type="file" />
      </form>

      {/* Values */}
      <section className="sp-section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="eyebrow">Why Hippowize</p>
            <h2>Why join our team?</h2>
          </div>
          <div className="careers-values-grid">
            {values.map((v) => (
              <div className="careers-value-card" key={v.title}>
                <div className="careers-value-img-wrap">
                  <Image
                    src={v.img}
                    alt={v.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="careers-value-img-overlay" />
                  <div className="careers-value-icon-badge">
                    <i className={`fa-solid ${v.icon}`} />
                  </div>
                </div>
                <div className="careers-value-body">
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="sp-section sp-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p className="eyebrow">Open Roles</p>
            <h2>Current opportunities</h2>
          </div>
          <CareersOpenings />
        </div>
      </section>

      {/* Spontaneous application */}
      <section className="sp-section">
        <div className="container">
          <div className="sp-intro-grid">
            <div>
              <p className="eyebrow">Don&apos;t See Your Role?</p>
              <h2>Send us a spontaneous application</h2>
              <p>We&apos;re always looking for exceptional consultants, architects, and coaches. If you don&apos;t see the right role listed, send us your profile and tell us how you can contribute.</p>
              <CareersOpenings spontaneous />
            </div>
            <div className="sp-highlight-box">
              <i className="fa-solid fa-globe sp-highlight-icon" />
              <h3>We Hire Globally</h3>
              <p>Hippowize is headquartered in Toronto, Canada. Our consultants are deployed on client engagements worldwide, bringing world-class expertise wherever it&apos;s needed.</p>
              <ul className="sp-check-list">
                <li><i className="fa-solid fa-check" /> Competitive compensation</li>
                <li><i className="fa-solid fa-check" /> Certification support</li>
                <li><i className="fa-solid fa-check" /> Global exposure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
