"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

const BASE = "https://wp.w3layouts.com/execution/wp-content/themes/execution/assets/images";

const slides = [
  {
    quote: "Strategy that delivered real outcomes",
    body: "Hippowize helped us transition from a project-based PMO to a value-driven VMO. The impact on executive alignment and delivery speed was immediate.",
    img: `${BASE}/testi1.jpg`,
    name: "Sarah Thompson",
    title: "VP of IT",
    location: "Toronto, Canada",
  },
  {
    quote: "Our ServiceNow rollout exceeded expectations",
    body: "The Hippowize team embedded with us from day one. Their delivery expertise and practical approach made our ServiceNow implementation a success.",
    img: `${BASE}/testi2.jpg`,
    name: "Marcus Osei",
    title: "CTO",
    location: "New York, USA",
  },
  {
    quote: "Digital transformation done right",
    body: "We engaged Hippowize for a cloud migration that had stalled internally for over a year. Their Cloud Migration Factory had us live within 90 days.",
    img: `${BASE}/testi3.jpg`,
    name: "James Rodriguez",
    title: "Director of Engineering",
    location: "São Paulo, Brazil",
  },
  {
    quote: "Cybersecurity expertise we could trust",
    body: "Hippowize's GRC alignment gave our board confidence that our security posture matched our regulatory obligations. A genuinely transformative engagement.",
    img: `${BASE}/testi1.jpg`,
    name: "Emma Clarke",
    title: "CISO",
    location: "London, UK",
  },
  {
    quote: "Best Agile coaching we have experienced",
    body: "The training was tailored to our team's maturity level. We now operate with genuine agility — not just the vocabulary.",
    img: `${BASE}/testi2.jpg`,
    name: "Nadia Al-Rashid",
    title: "Head of Delivery",
    location: "Dubai, UAE",
  },
  {
    quote: "From strategy to execution — seamlessly",
    body: "Hippowize bridged the gap between our leadership's vision and our delivery teams. Their specialists integrated with us as true partners, not consultants.",
    img: `${BASE}/testi3.jpg`,
    name: "Amara Diallo",
    title: "COO",
    location: "Johannesburg, South Africa",
  },
  {
    quote: "SAFe rollout adopted organization-wide",
    body: "Unlike other training providers, Hippowize stayed through the transition. The SAFe rollout was adopted organization-wide within two quarters.",
    img: `${BASE}/testi1.jpg`,
    name: "Carlos Mendez",
    title: "Agile Practice Lead",
    location: "Mexico City, Mexico",
  },
];

const AUTOPLAY_MS = 5000;
const VISIBLE = 3; // cards shown at once on desktop

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [paused,  setPaused]  = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
    setAnimKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => goTo(current + 1), AUTOPLAY_MS);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused, goTo]);

  // Build visible cards: center ± 1
  const indices = [
    (current - 1 + slides.length) % slides.length,
    current,
    (current + 1) % slides.length,
  ];

  return (
    <section className="section testi-clean" id="testimonials">
      <div className="container">
        {/* Heading */}
        <div className="testi-clean-heading">
          <p className="eyebrow">What People Say</p>
          <h2>Trusted by leaders worldwide</h2>
          <p className="testi-clean-sub">
            From Toronto to Dubai — organizations across sectors share their
            experience working with Hippowize.
          </p>
        </div>

        {/* Cards */}
        <div
          className="testi-clean-wrap"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button className="testi-arrow" aria-label="Previous" onClick={() => goTo(current - 1)}>
            <i className="fa-solid fa-arrow-left" />
          </button>

          <div className="testi-clean-cards">
            {indices.map((idx, pos) => {
              const s = slides[idx];
              const isCenter = pos === 1;
              return (
                <article
                  key={`${idx}-${animKey}`}
                  className={["testi-clean-card", isCenter ? "testi-clean-center" : "testi-clean-side", "testi-fade-in"].join(" ")}
                  style={{ animationDelay: `${pos * 0.07}s` }}
                >
                  <i className="fa-solid fa-quote-left testi-quote-icon" />
                  <p className="testi-body">{s.body}</p>
                  <div className="testi-author">
                    <Image
                      src={s.img}
                      alt={s.name}
                      width={44}
                      height={44}
                      className="testi-avatar"
                    />
                    <div>
                      <strong>{s.name}</strong>
                      <span>{s.title} · {s.location}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <button className="testi-arrow" aria-label="Next" onClick={() => goTo(current + 1)}>
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>

        {/* Dots + progress */}
        <div className="testi-clean-footer">
          <div className="testi-progress-track" style={{ width: 180 }}>
            <div
              className="testi-progress-bar"
              key={`bar-${animKey}`}
              style={paused ? { animationPlayState: "paused" } : undefined}
            />
          </div>
          <div className="slider-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={i === current ? "active" : undefined}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
