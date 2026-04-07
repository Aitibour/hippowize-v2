"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

const BASE =
  "https://wp.w3layouts.com/execution/wp-content/themes/execution/assets/images";

const slides = [
  {
    region: "NA",
    quote: "Strategy that delivered real outcomes",
    body: "Hippowize helped us transition from a project-based PMO to a value-driven VMO. The impact on executive alignment and delivery speed was immediate.",
    img: `${BASE}/testi1.jpg`,
    name: "Sarah Thompson",
    location: "Toronto, Canada",
  },
  {
    region: "NA",
    quote: "Our ServiceNow rollout exceeded expectations",
    body: "The Hippowize team embedded with us from day one. Their delivery expertise and practical approach made our ServiceNow implementation a success across three business units.",
    img: `${BASE}/testi2.jpg`,
    name: "Marcus Osei",
    location: "New York, USA",
  },
  {
    region: "LATAM",
    quote: "Digital transformation done right",
    body: "We engaged Hippowize for a cloud migration that had stalled internally for over a year. Their Cloud Migration Factory methodology had us live within 90 days.",
    img: `${BASE}/testi3.jpg`,
    name: "James Rodriguez",
    location: "São Paulo, Brazil",
  },
  {
    region: "LATAM",
    quote: "Agile coaching that stuck",
    body: "Unlike other training providers, Hippowize stayed with our teams through the transition. The SAFe rollout was adopted organization-wide within two quarters.",
    img: `${BASE}/testi1.jpg`,
    name: "Carlos Mendez",
    location: "Mexico City, Mexico",
  },
  {
    region: "EMEA",
    quote: "Cybersecurity expertise we could trust",
    body: "Hippowize's GRC alignment work gave our board the confidence that our security posture matched our regulatory obligations. A genuinely transformative engagement.",
    img: `${BASE}/testi2.jpg`,
    name: "Emma Clarke",
    location: "London, United Kingdom",
  },
  {
    region: "EMEA",
    quote: "Best Agile coaching we have experienced",
    body: "The training program was tailored to our team's maturity level. We now operate with genuine agility — not just the vocabulary.",
    img: `${BASE}/testi3.jpg`,
    name: "Nadia Al-Rashid",
    location: "Dubai, UAE",
  },
  {
    region: "EMEA",
    quote: "From strategy to execution — seamlessly",
    body: "Hippowize bridged the gap between our leadership's vision and our delivery teams. Their on-demand specialists integrated with us as true partners, not consultants.",
    img: `${BASE}/testi1.jpg`,
    name: "Amara Diallo",
    location: "Johannesburg, South Africa",
  },
];

const AUTOPLAY_MS = 5000;

const REGION_COLORS: Record<string, string> = {
  NA: "#2563EB",
  LATAM: "#059669",
  EMEA: "#7C3AED",
};

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
    setAnimKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => goTo(current + 1), AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, paused, goTo]);

  const slide = slides[current];

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Our Clients&apos; Testimonials</p>
            <h2>What People Say</h2>
          </div>
          <p className="heading-copy">
            Voices from leaders across North America, Latin America, and EMEA —
            organizations that partnered with Hippowize to transform and thrive.
          </p>
        </div>

        <div
          className="testimonial-shell"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            className="slider-arrow"
            aria-label="Previous testimonial"
            onClick={() => goTo(current - 1)}
          >
            <i className="fa-solid fa-arrow-left" />
          </button>

          <div className="testimonial-viewport">
            {/* Progress bar */}
            <div className="testi-progress-track">
              <div
                className="testi-progress-bar"
                key={`bar-${animKey}`}
                style={
                  paused
                    ? { animationPlayState: "paused" }
                    : undefined
                }
              />
            </div>

            {/* Animated card */}
            <article
              className="testimonial-card testi-fade-in"
              key={`card-${animKey}`}
            >
              <div className="quote-box">
                <div className="testi-header">
                  <i className="fa-solid fa-quote-left" />
                  <span
                    className="region-badge"
                    style={{ background: REGION_COLORS[slide.region] }}
                  >
                    {slide.region}
                  </span>
                </div>
                <h3>{slide.quote}</h3>
                <p>{slide.body}</p>
              </div>
              <div className="person">
                <Image
                  src={slide.img}
                  alt={slide.name}
                  width={70}
                  height={70}
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
                <div>
                  <strong>{slide.name}</strong>
                  <span>{slide.location}</span>
                </div>
              </div>
            </article>
          </div>

          <button
            className="slider-arrow"
            aria-label="Next testimonial"
            onClick={() => goTo(current + 1)}
          >
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>

        {/* Dots */}
        <div className="slider-dots" aria-label="Testimonial navigation">
          {slides.map((s, i) => (
            <button
              key={s.name}
              className={i === current ? "active" : undefined}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        {/* Region legend */}
        <div className="region-legend">
          {Object.entries(REGION_COLORS).map(([r, c]) => (
            <span key={r} className="region-legend-item">
              <span className="region-dot" style={{ background: c }} />
              {r}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
