"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stats = [
  { value: 50,  suffix: "+", label: "Organizations Served" },
  { value: 15,  suffix: "+", label: "Countries" },
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 10,  suffix: "+", label: "Years Expertise" },
];

const pillars = [
  {
    num: "01",
    title: "Strategy Consulting",
    body: "Cybersecurity, GRC, and PMO-to-VMO transitions that align technology with your business goals.",
  },
  {
    num: "02",
    title: "Digital Transformation",
    body: "ServiceNow, AI, Data, Cloud, and Automation — end-to-end delivery by proven specialists.",
  },
  {
    num: "03",
    title: "Cyber Resilience",
    body: "Proactive threat assessment, GRC alignment, and continuous monitoring to keep you protected.",
  },
  {
    num: "04",
    title: "Training & Coaching",
    body: "Jira, Confluence, Agile, Scrum, and SAFe — building lasting capability inside your teams.",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        obs.disconnect();
        const duration = 1400;
        const steps = 50;
        const stepVal = value / steps;
        let cur = 0;
        const id = setInterval(() => {
          cur += stepVal;
          if (cur >= value) { setCount(value); clearInterval(id); }
          else setCount(Math.floor(cur));
        }, duration / steps);
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function About() {
  const hero  = useReveal(0.1);
  const cards = useReveal(0.08);

  return (
    <section className="section about-v2" id="about">
      {/* Left image panel */}
      <div
        ref={hero.ref}
        className={["about-hero-panel", hero.visible ? "revealed" : ""].join(" ")}
      >
        <Image
          src="https://wp.w3layouts.com/execution/wp-content/themes/execution/assets/images/about.jpg"
          alt="Consulting professionals"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="about-hero-overlay">
          <div className="about-hero-content">
            <p className="eyebrow-light">Who We Are</p>
            <h2>Trusted by Organizations Across Sectors</h2>
            <p className="about-hero-sub">
              Hippowize partners with organizations worldwide to turn strategy
              into measurable outcomes — from cybersecurity to AI-driven
              transformation.
            </p>
            <div className="stats-grid">
              {stats.map((s) => (
                <div className="stat-item" key={s.label}>
                  <strong><Counter value={s.value} suffix={s.suffix} /></strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right pillars panel */}
      <div
        ref={cards.ref}
        className={["about-cards-panel", cards.visible ? "revealed" : ""].join(" ")}
      >
        <p className="eyebrow" style={{ marginBottom: 6 }}>What We Do</p>
        <h3 className="about-cards-heading">Four pillars of<br /><em>transformation</em></h3>

        <div className="about-pillars">
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className={["about-pillar", cards.visible ? "pillar-in" : ""].join(" ")}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <span className="pillar-num">{p.num}</span>
              <div className="pillar-body">
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
