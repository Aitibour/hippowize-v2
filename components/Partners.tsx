"use client";

import { useEffect, useRef } from "react";

const partners = [
  { name: "ServiceNow", icon: "fa-solid fa-gears",        color: "#62D84E", glow: "rgba(98,216,78,0.28)"   },
  { name: "AWS",        icon: "fa-brands fa-aws",          color: "#FF9900", glow: "rgba(255,153,0,0.28)"   },
  { name: "Microsoft",  icon: "fa-brands fa-microsoft",    color: "#60A5FA", glow: "rgba(96,165,250,0.28)"  },
  { name: "Google",     icon: "fa-brands fa-google",       color: "#EA4335", glow: "rgba(234,67,53,0.28)"   },
  { name: "Salesforce", icon: "fa-brands fa-salesforce",   color: "#00A1E0", glow: "rgba(0,161,224,0.28)"   },
  { name: "SAP",        icon: "fa-solid fa-chart-column",  color: "#0FAAFF", glow: "rgba(15,170,255,0.28)"  },
  { name: "IBM",        icon: "fa-solid fa-server",        color: "#4DA3FF", glow: "rgba(77,163,255,0.28)"  },
  { name: "Atlassian",  icon: "fa-brands fa-atlassian",    color: "#2684FF", glow: "rgba(38,132,255,0.28)"  },
  { name: "Jira",       icon: "fa-brands fa-jira",         color: "#85B8FF", glow: "rgba(133,184,255,0.28)" },
  { name: "GitHub",     icon: "fa-brands fa-github",       color: "#E6EDF3", glow: "rgba(230,237,243,0.2)"  },
  { name: "Docker",     icon: "fa-brands fa-docker",       color: "#2496ED", glow: "rgba(36,150,237,0.28)"  },
  { name: "Slack",      icon: "fa-brands fa-slack",        color: "#E01E5A", glow: "rgba(224,30,90,0.28)"   },
  { name: "Kubernetes", icon: "fa-solid fa-dharmachakra",  color: "#5B8EF0", glow: "rgba(91,142,240,0.28)"  },
  { name: "Oracle",     icon: "fa-solid fa-database",      color: "#FF6B6B", glow: "rgba(255,107,107,0.28)" },
];

export default function Partners() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>(".partner-logo-card");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = Number(el.dataset.delay ?? 0);
            setTimeout(() => el.classList.add("p-visible"), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08 }
    );

    cards.forEach((card, i) => {
      card.dataset.delay = String(i * 45);
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="partners-v2">
      {/* Ambient background glows */}
      <div className="partners-bg-glow partners-bg-glow--1" aria-hidden />
      <div className="partners-bg-glow partners-bg-glow--2" aria-hidden />

      <div className="container">
        <div className="partners-header">
          <span className="partners-pill">
            <i className="fa-solid fa-circle-nodes" />
            Technology Partners
          </span>
          <h2>Powered by the World&apos;s Leading Platforms</h2>
          <p>We implement, optimize, and integrate the technologies that drive enterprise transformation.</p>
        </div>

        <div className="partners-logo-grid" ref={gridRef}>
          {partners.map((p) => (
            <div
              key={p.name}
              className="partner-logo-card"
              style={{ "--partner-glow": p.glow } as React.CSSProperties}
            >
              <i className={`${p.icon} partner-logo-icon-lg`} style={{ color: p.color }} />
              <span className="partner-logo-name-lg">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
