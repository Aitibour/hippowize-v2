"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const TRANSITIONS = ["t-fade", "t-slide-l", "t-slide-r", "t-zoom", "t-blur"] as const;
type Transition = typeof TRANSITIONS[number];

const slides = [
  {
    src: "/media/2.mp4",
    eyebrow: "Strategy · Technology · People",
    headline: "The future belongs to organizations\nthat know how to transform",
    sub: "Empower your vision with Hippowize's transformative and innovative solutions — globally.",
    cta: "Explore Services",
    href: "#services",
  },
  {
    src: "/media/3.mp4",
    eyebrow: "Strategy Consulting",
    headline: "Strategy that turns\nambition into measurable outcomes",
    sub: "From PMO to VMO — we align your technology investments with lasting business value.",
    cta: "Our Approach",
    href: "#about",
  },
  {
    src: "/media/4.mp4",
    eyebrow: "Digital Transformation",
    headline: "Digital transformation\ndelivered end-to-end",
    sub: "ServiceNow, AI, Cloud, and Automation — by specialists who stay through execution.",
    cta: "Our Services",
    href: "#services",
  },
  {
    src: "/media/6.mp4",
    eyebrow: "Cyber Resilience",
    headline: "Building cyber-resilient\norganizations worldwide",
    sub: "Proactive threat assessment, GRC alignment, and continuous monitoring — without compromise.",
    cta: "Learn More",
    href: "#why-us",
  },
  {
    src: "/media/7.mp4",
    eyebrow: "15+ Countries · 200+ Projects",
    headline: "From vision to execution —\nacross every sector",
    sub: "Hippowize partners with leaders across NA, LATAM, EMEA, and Africa to drive real change.",
    cta: "Book a Call",
    href: "https://calendly.com/hippowize",
  },
];

const AUTOPLAY_MS = 6500;
const TRANSITION_MS = 900;

export default function Hero() {
  // Two video layers for seamless crossfade
  const [layerA, setLayerA] = useState(0);      // slide index on layer A
  const [layerB, setLayerB] = useState(1);      // slide index on layer B
  const [top, setTop]       = useState<"A"|"B">("A"); // which layer is currently on top
  const [transitioning, setTransitioning] = useState(false);
  const [incoming, setIncoming] = useState<Transition | null>(null);
  const [textKey, setTextKey] = useState(0);
  const lastT = useRef<Transition>("t-fade");

  const videoA = useRef<HTMLVideoElement>(null);
  const videoB = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Active slide is whichever is on top
  const activeSlide = slides[top === "A" ? layerA : layerB];

  function pickTransition(): Transition {
    const pool = TRANSITIONS.filter(t => t !== lastT.current);
    const t = pool[Math.floor(Math.random() * pool.length)];
    lastT.current = t;
    return t;
  }

  const goTo = useCallback((nextIdx: number) => {
    if (transitioning) return;
    const next = ((nextIdx % slides.length) + slides.length) % slides.length;
    const t = pickTransition();

    setTransitioning(true);
    setIncoming(t);

    // Load next slide on the BOTTOM (inactive) layer
    if (top === "A") {
      setLayerB(next);
      setTimeout(() => {
        if (videoB.current) {
          videoB.current.load();
          videoB.current.play().catch(() => {});
        }
      }, 30);
    } else {
      setLayerA(next);
      setTimeout(() => {
        if (videoA.current) {
          videoA.current.load();
          videoA.current.play().catch(() => {});
        }
      }, 30);
    }

    // Swap after transition duration
    setTimeout(() => {
      setTop(prev => prev === "A" ? "B" : "A");
      setIncoming(null);
      setTransitioning(false);
      setTextKey(k => k + 1);
    }, TRANSITION_MS);
  }, [transitioning, top]);

  // Autoplay
  useEffect(() => {
    const curIdx = top === "A" ? layerA : layerB;
    timerRef.current = setTimeout(() => goTo(curIdx + 1), AUTOPLAY_MS);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [layerA, layerB, top, goTo]);

  // Determine classes for each layer
  // "top" layer = z-index 2, "bottom" = z-index 1
  // When incoming != null, the NEW top-to-be layer is arriving with animation
  const layerAClass = ["hero-video-layer",
    top === "A" && !incoming ? "layer-top"    : "",
    top === "B" && incoming  ? `layer-top layer-enter ${incoming}` : "",
    top === "B" && !incoming ? "layer-bottom" : "",
    top === "A" && incoming  ? "layer-bottom" : "",
  ].filter(Boolean).join(" ");

  const layerBClass = ["hero-video-layer",
    top === "B" && !incoming ? "layer-top"    : "",
    top === "A" && incoming  ? `layer-top layer-enter ${incoming}` : "",
    top === "A" && !incoming ? "layer-bottom" : "",
    top === "B" && incoming  ? "layer-bottom" : "",
  ].filter(Boolean).join(" ");

  const currentIdx = top === "A" ? layerA : layerB;

  return (
    <section className="hero">
      {/* Layer A */}
      <video
        ref={videoA}
        className={layerAClass}
        src={slides[layerA].src}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Layer B */}
      <video
        ref={videoB}
        className={layerBClass}
        src={slides[layerB].src}
        muted
        loop
        playsInline
      />

      <div className="hero-overlay">
        <div className="container">
          <div className="hero-copy" key={textKey}>
            <p className="hero-eyebrow">{activeSlide.eyebrow}</p>
            <h1>
              {activeSlide.headline.split("\n").map((line, i) => (
                <span key={i}>{line}{i < activeSlide.headline.split("\n").length - 1 && <br />}</span>
              ))}
            </h1>
            <p>{activeSlide.sub}</p>
            <a className="btn-primary" href={activeSlide.href}>{activeSlide.cta}</a>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={["hero-dot", i === currentIdx ? "active" : ""].filter(Boolean).join(" ")}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button className="hero-arrow hero-arrow-prev" aria-label="Previous slide" onClick={() => goTo(currentIdx - 1)}>
        <i className="fa-solid fa-arrow-left" />
      </button>
      <button className="hero-arrow hero-arrow-next" aria-label="Next slide" onClick={() => goTo(currentIdx + 1)}>
        <i className="fa-solid fa-arrow-right" />
      </button>
    </section>
  );
}
