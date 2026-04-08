"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const BASE = "https://wp.w3layouts.com/execution/wp-content/themes/execution/assets/images";

const services = [
  {
    key: "strategy",
    num: "01",
    tag: "Advisory",
    title: "Strategy Consulting",
    tagline: "Align technology with lasting business value",
    img: `${BASE}/s4.jpg`,
    features: [
      "Cybersecurity & GRC frameworks",
      "PMO to VMO transition",
      "IT Governance & Risk",
      "Enterprise Architecture",
    ],
    href: "/services/strategy-consulting",
  },
  {
    key: "digital",
    num: "02",
    tag: "Digital",
    title: "Digital Transformation",
    tagline: "End-to-end delivery by proven specialists",
    img: `${BASE}/s5.jpg`,
    features: [
      "ServiceNow implementation",
      "AI & Data platforms",
      "Cloud migration factory",
      "Workflow automation",
    ],
    href: "/services/digital-transformation",
  },
  {
    key: "training",
    num: "03",
    tag: "People",
    title: "Training & Coaching",
    tagline: "Build lasting agility inside your teams",
    img: `${BASE}/s2.jpg`,
    features: [
      "Agile & SAFe transformation",
      "Jira & Confluence",
      "Leadership coaching",
      "Team onboarding programs",
    ],
    href: "/services/training-coaching",
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export default function Services() {
  const reveal = useReveal();

  return (
    <section className="section svc-cards-section" id="services">
      <div className="container">
        <div className="section-heading-split">
          <div>
            <p className="eyebrow">Our Expertise</p>
            <h2>Our Best Services</h2>
          </div>
          <p className="heading-copy-dark">
            End-to-end consulting tailored to your organization&apos;s unique
            challenges — from strategy to execution.
          </p>
        </div>

        <div
          ref={reveal.ref}
          className={["svc-cards-grid", reveal.visible ? "revealed" : ""].join(" ")}
        >
          {services.map((s, i) => (
            <a
              key={s.key}
              href={s.href}
              className="svc-card"
              style={{ animationDelay: reveal.visible ? `${i * 0.12}s` : "0s" }}
            >
              {/* Background image */}
              <div className="svc-card-img">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Overlay */}
              <div className="svc-card-overlay" />

              {/* Content */}
              <div className="svc-card-body">
                <div className="svc-card-top">
                  <span className="svc-card-num">{s.num}</span>
                  <span className="svc-card-tag">{s.tag}</span>
                </div>
                <h3 className="svc-card-title">{s.title}</h3>
                <p className="svc-card-tagline">{s.tagline}</p>

                <ul className="svc-card-features">
                  {s.features.map(f => (
                    <li key={f}>
                      <i className="fa-solid fa-check" />
                      {f}
                    </li>
                  ))}
                </ul>

                <span className="svc-card-cta">
                  Explore <i className="fa-solid fa-arrow-right" />
                </span>
              </div>

              {/* Bottom accent line */}
              <div className="svc-card-accent" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
