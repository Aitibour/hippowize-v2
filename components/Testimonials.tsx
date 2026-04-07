"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

const BASE = "https://wp.w3layouts.com/execution/wp-content/themes/execution/assets/images";

const slides = [
  { region: "NA",    quote: "Strategy that delivered real outcomes",            body: "Hippowize helped us transition from a project-based PMO to a value-driven VMO. The impact on executive alignment and delivery speed was immediate.",                                   img: `${BASE}/testi1.jpg`, name: "Sarah Thompson",   location: "Toronto, Canada"         },
  { region: "NA",    quote: "Our ServiceNow rollout exceeded expectations",      body: "The Hippowize team embedded with us from day one. Their delivery expertise and practical approach made our ServiceNow implementation a success across three business units.",           img: `${BASE}/testi2.jpg`, name: "Marcus Osei",      location: "New York, USA"           },
  { region: "LATAM", quote: "Digital transformation done right",                body: "We engaged Hippowize for a cloud migration that had stalled internally for over a year. Their Cloud Migration Factory methodology had us live within 90 days.",                        img: `${BASE}/testi3.jpg`, name: "James Rodriguez",  location: "São Paulo, Brazil"       },
  { region: "LATAM", quote: "Agile coaching that stuck",                        body: "Unlike other training providers, Hippowize stayed with our teams through the transition. The SAFe rollout was adopted organization-wide within two quarters.",                         img: `${BASE}/testi1.jpg`, name: "Carlos Mendez",    location: "Mexico City, Mexico"     },
  { region: "EMEA",  quote: "Cybersecurity expertise we could trust",           body: "Hippowize's GRC alignment work gave our board the confidence that our security posture matched our regulatory obligations. A genuinely transformative engagement.",                    img: `${BASE}/testi2.jpg`, name: "Emma Clarke",      location: "London, United Kingdom"  },
  { region: "EMEA",  quote: "Best Agile coaching we have experienced",          body: "The training program was tailored to our team's maturity level. We now operate with genuine agility — not just the vocabulary.",                                                        img: `${BASE}/testi3.jpg`, name: "Nadia Al-Rashid",  location: "Dubai, UAE"              },
  { region: "EMEA",  quote: "From strategy to execution — seamlessly",          body: "Hippowize bridged the gap between our leadership's vision and our delivery teams. Their on-demand specialists integrated with us as true partners, not consultants.",                  img: `${BASE}/testi1.jpg`, name: "Amara Diallo",     location: "Johannesburg, South Africa" },
];

const REGIONS = ["All", "NA", "LATAM", "EMEA"];
const REGION_COLORS: Record<string, string> = { NA: "#2563EB", LATAM: "#059669", EMEA: "#7C3AED" };
const AUTOPLAY_MS = 5000;

export default function Testimonials() {
  const [filter,  setFilter]  = useState("All");
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [paused,  setPaused]  = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const filtered = filter === "All" ? slides : slides.filter((s) => s.region === filter);

  const goTo = useCallback((index: number) => {
    setCurrent((index + filtered.length) % filtered.length);
    setAnimKey((k) => k + 1);
  }, [filtered.length]);

  // Reset index when filter changes
  useEffect(() => { setCurrent(0); setAnimKey((k) => k + 1); }, [filter]);

  // Auto-play
  useEffect(() => {
    if (paused || filtered.length <= 1) return;
    timerRef.current = setTimeout(() => goTo(current + 1), AUTOPLAY_MS);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused, goTo, filtered.length]);

  const prev  = filtered[(current - 1 + filtered.length) % filtered.length];
  const mid   = filtered[current];
  const next  = filtered[(current + 1) % filtered.length];
  const cards = filtered.length >= 3 ? [prev, mid, next] : [mid];

  return (
    <section className="section testi-v2" id="testimonials">
      {/* Background hero image */}
      <Image
        src="https://wp.w3layouts.com/execution/wp-content/themes/execution/assets/images/bg3.jpg"
        alt=""
        fill
        style={{ objectFit: "cover" }}
        aria-hidden
      />
      <div className="testi-v2-overlay" />

      <div className="container testi-v2-inner" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        {/* Heading */}
        <div className="testi-v2-heading">
          <p className="eyebrow-light">Our Clients&apos; Testimonials</p>
          <h2 style={{ color: "#fff" }}>What People Say</h2>
          <p style={{ color: "rgb(255 255 255 / 70%)", maxWidth: 560, margin: "0 auto" }}>
            Voices from leaders across North America, Latin America, and EMEA —
            organizations that partnered with Hippowize to transform and thrive.
          </p>
        </div>

        {/* Region filter */}
        <div className="region-filter">
          {REGIONS.map((r) => (
            <button
              key={r}
              className={["region-filter-btn", filter === r ? "active" : ""].join(" ")}
              onClick={() => setFilter(r)}
              style={filter === r && r !== "All" ? { background: REGION_COLORS[r], borderColor: REGION_COLORS[r] } : undefined}
            >
              {r}
            </button>
          ))}
        </div>

        {/* 3-card carousel */}
        <div className="testi-cards-row">
          <button className="slider-arrow testi-arr" aria-label="Previous" onClick={() => goTo(current - 1)}>
            <i className="fa-solid fa-arrow-left" />
          </button>

          <div className="testi-cards-viewport">
            {cards.map((s, i) => {
              const isCenter = filtered.length < 3 || i === 1;
              return (
                <article
                  key={`${s.name}-${animKey}-${i}`}
                  className={["testi-v2-card", isCenter ? "testi-center" : "testi-side", "testi-fade-in"].join(" ")}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="testi-v2-quote">
                    <div className="testi-v2-top">
                      <i className="fa-solid fa-quote-left" />
                      <span
                        className="region-badge"
                        style={{ background: REGION_COLORS[s.region] }}
                      >
                        {s.region}
                      </span>
                    </div>
                    <h3>{s.quote}</h3>
                    <p>{s.body}</p>
                  </div>
                  <div className="testi-v2-person">
                    <Image
                      src={s.img}
                      alt={s.name}
                      width={56}
                      height={56}
                      style={{ borderRadius: "50%", objectFit: "cover", border: "2px solid rgb(255 255 255 / 30%)" }}
                    />
                    <div>
                      <strong>{s.name}</strong>
                      <span>{s.location}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <button className="slider-arrow testi-arr" aria-label="Next" onClick={() => goTo(current + 1)}>
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>

        {/* Progress + dots */}
        <div className="testi-progress-track" style={{ maxWidth: 300, margin: "28px auto 0" }}>
          <div className="testi-progress-bar" key={`bar-${animKey}`} style={paused ? { animationPlayState: "paused" } : undefined} />
        </div>
        <div className="slider-dots" style={{ marginTop: 16 }}>
          {filtered.map((s, i) => (
            <button
              key={s.name}
              className={i === current ? "active" : undefined}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
