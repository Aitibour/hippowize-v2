"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const BASE = "https://wp.w3layouts.com/execution/wp-content/themes/execution/assets/images";

const services = [
  {
    key: "strategy",
    icon: "fa-chess",
    tag: "Strategy",
    title: "Strategy Consulting",
    img: `${BASE}/s4.jpg`,
    summary:
      "We align your technology investments with lasting business value through pragmatic strategy and governance frameworks.",
    features: [
      "Cybersecurity & GRC frameworks",
      "PMO to VMO transition",
      "IT Governance & Risk",
      "Enterprise Architecture",
      "Executive advisory",
    ],
  },
  {
    key: "digital",
    icon: "fa-microchip",
    tag: "Digital",
    title: "Digital Transformation",
    img: `${BASE}/s5.jpg`,
    summary:
      "On-demand specialists who deliver end-to-end digital change — not just advice. From ServiceNow to AI-driven automation.",
    features: [
      "ServiceNow implementation",
      "AI & Data platforms",
      "Cloud migration factory",
      "Workflow automation",
      "Integration & APIs",
    ],
  },
  {
    key: "training",
    icon: "fa-users",
    tag: "Training",
    title: "Training & Coaching",
    img: `${BASE}/s2.jpg`,
    summary:
      "Building lasting agility inside your organization with certified coaching across Agile, Scrum, SAFe, and tooling.",
    features: [
      "Jira & Confluence",
      "Agile & Scrum",
      "SAFe transformation",
      "Leadership coaching",
      "Team onboarding programs",
    ],
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export default function Services() {
  const [active, setActive] = useState(0);
  const reveal = useReveal();
  const svc = services[active];

  return (
    <section className="section services-v2" id="services">
      {/* Background video */}
      <video className="services-bg-video" autoPlay muted loop playsInline>
        <source
          src="https://wp.w3layouts.com/execution/wp-content/themes/execution/assets/videos/video.mp4"
          type="video/mp4"
        />
      </video>
      <div className="services-bg-overlay" />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="section-heading-light">
          <div>
            <p className="eyebrow-light">Our Expertise</p>
            <h2 style={{ color: "#fff" }}>Our Best Services</h2>
          </div>
          <p className="heading-copy" style={{ color: "rgb(255 255 255 / 70%)" }}>
            End-to-end consulting and transformation tailored to your
            organization&apos;s unique challenges — from strategy to execution.
          </p>
        </div>

        <div
          ref={reveal.ref}
          className={["services-layout", reveal.visible ? "revealed" : ""].join(" ")}
        >
          {/* Tab list */}
          <nav className="service-tabs" aria-label="Service categories">
            {services.map((s, i) => (
              <button
                key={s.key}
                className={["service-tab", active === i ? "active" : ""].join(" ")}
                onClick={() => setActive(i)}
              >
                <span className="service-tab-icon">
                  <i className={`fa-solid ${s.icon}`} />
                </span>
                <span className="service-tab-label">
                  <small>{s.tag}</small>
                  {s.title}
                </span>
                <i className="fa-solid fa-chevron-right service-tab-arrow" />
              </button>
            ))}
          </nav>

          {/* Detail panel */}
          <div className="service-detail" key={svc.key}>
            <div className="service-detail-image">
              <Image
                src={svc.img}
                alt={svc.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 55vw"
              />
              <div className="service-detail-badge">
                <i className={`fa-solid ${svc.icon}`} />
                {svc.tag}
              </div>
            </div>
            <div className="service-detail-body">
              <h3>{svc.title}</h3>
              <p>{svc.summary}</p>
              <ul className="service-features-list">
                {svc.features.map((f, i) => (
                  <li key={f} style={{ animationDelay: `${i * 0.08}s` }}>
                    <i className="fa-solid fa-check" />
                    {f}
                  </li>
                ))}
              </ul>
              <a className="btn-primary" href="#contact" style={{ marginTop: 28 }}>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
