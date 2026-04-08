"use client";

import { useEffect, useRef } from "react";

const partners = [
  { name: "AWS",        icon: "fa-brands fa-aws",        color: "#FF9900" },
  { name: "Microsoft",  icon: "fa-brands fa-microsoft",  color: "#0078D4" },
  { name: "Google",     icon: "fa-brands fa-google",     color: "#4285F4" },
  { name: "Atlassian",  icon: "fa-brands fa-atlassian",  color: "#0052CC" },
  { name: "Salesforce", icon: "fa-brands fa-salesforce", color: "#00A1E0" },
  { name: "GitHub",     icon: "fa-brands fa-github",     color: "#24292F" },
  { name: "Docker",     icon: "fa-brands fa-docker",     color: "#2496ED" },
  { name: "Slack",      icon: "fa-brands fa-slack",      color: "#611f69" },
];

export default function Partners() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>(".partner-card");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = Number(el.dataset.delay ?? 0);
            setTimeout(() => el.classList.add("partner-card--visible"), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card, i) => {
      card.dataset.delay = String(i * 75);
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="partners-v2">
      <div className="container">
        <div className="partners-heading">
          <span className="partners-heading-line" />
          <h2 className="partners-heading-txt">Trusted Technology Partners</h2>
          <span className="partners-heading-line" />
        </div>
        <p className="partners-sub">We deliver transformation through the world&apos;s leading technology platforms.</p>

        <div className="partners-grid" ref={gridRef}>
          {partners.map((p) => (
            <div className="partner-card" key={p.name}>
              <i className={`${p.icon} partner-logo-icon`} style={{ color: p.color }} />
              <span className="partner-name">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
