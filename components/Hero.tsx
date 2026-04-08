"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const TRANSITIONS = ["t-iris", "t-slash", "t-curtain", "t-ripple", "t-morph"] as const;
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
    eyebrow: "200+ Projects · Every Sector",
    headline: "From vision to execution —\nacross every sector",
    sub: "Hippowize partners with industry leaders in Canada and globally to drive real, lasting change.",
    cta: "Book a Call",
    href: "https://calendly.com/hippowize",
  },
];

const AUTOPLAY_MS = 6500;
const TRANSITION_MS = 1300;

export default function Hero() {
  const [layerA, setLayerA] = useState(0);
  const [layerB, setLayerB] = useState(1);
  const [top, setTop]       = useState<"A" | "B">("A");
  const [transitioning, setTransitioning] = useState(false);
  const [incoming, setIncoming] = useState<Transition | null>(null);
  const [textKey, setTextKey] = useState(0);
  const lastT = useRef<Transition>("t-iris");

  const videoA = useRef<HTMLVideoElement>(null);
  const videoB = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

    if (top === "A") {
      setLayerB(next);
      setTimeout(() => {
        if (videoB.current) { videoB.current.load(); videoB.current.play().catch(() => {}); }
      }, 30);
    } else {
      setLayerA(next);
      setTimeout(() => {
        if (videoA.current) { videoA.current.load(); videoA.current.play().catch(() => {}); }
      }, 30);
    }

    setTimeout(() => {
      setTop(prev => prev === "A" ? "B" : "A");
      setIncoming(null);
      setTransitioning(false);
      setTextKey(k => k + 1);
    }, TRANSITION_MS);
  }, [transitioning, top]);

  useEffect(() => {
    const curIdx = top === "A" ? layerA : layerB;
    timerRef.current = setTimeout(() => goTo(curIdx + 1), AUTOPLAY_MS);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [layerA, layerB, top, goTo]);

  // Which layer is currently on top (about to exit) vs bottom (about to enter)
  const isATop = top === "A";

  const layerAClass = [
    "hero-video-layer",
    !incoming &&  isATop ? "layer-top"                           : "",
    !incoming && !isATop ? "layer-bottom"                        : "",
    incoming  &&  isATop ? `layer-bottom layer-exit ${incoming}` : "", // A exits
    incoming  && !isATop ? `layer-top layer-enter ${incoming}`   : "", // A enters
  ].filter(Boolean).join(" ");

  const layerBClass = [
    "hero-video-layer",
    !incoming && !isATop ? "layer-top"                           : "",
    !incoming &&  isATop ? "layer-bottom"                        : "",
    incoming  && !isATop ? `layer-bottom layer-exit ${incoming}` : "", // B exits
    incoming  &&  isATop ? `layer-top layer-enter ${incoming}`   : "", // B enters
  ].filter(Boolean).join(" ");

  const currentIdx = top === "A" ? layerA : layerB;

  return (
    <section className="hero">
      <video ref={videoA} className={layerAClass} src={slides[layerA].src} autoPlay muted loop playsInline />
      <video ref={videoB} className={layerBClass} src={slides[layerB].src} muted loop playsInline />

      {/* Cinematic FX overlay — sits above videos, below text */}
      <div className={`hero-fx${incoming ? ` fx-on ${incoming}` : ""}`} aria-hidden />

      <div className="hero-overlay">
        <div className="container">
          <div className="hero-copy" key={textKey}>
            <p className="hero-eyebrow">{activeSlide.eyebrow}</p>
            <h1>
              {activeSlide.headline.split("\n").map((line, i) => (
                <span key={i}>{line}{i < activeSlide.headline.split("\n").length - 1 && <br />}</span>
              ))}
            </h1>
            <p className="hero-sub">{activeSlide.sub}</p>
            <a className="btn-primary hero-cta" href={activeSlide.href}>{activeSlide.cta}</a>
          </div>
        </div>
      </div>

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
    </section>
  );
}
