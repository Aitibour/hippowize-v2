"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useLang } from "@/lib/i18n";

const TRANSITIONS = ["t-fade", "t-slide-l", "t-slide-r", "t-zoom", "t-blur"] as const;
type Transition = typeof TRANSITIONS[number];

const AUTOPLAY_MS = 6500;
const TRANSITION_MS = 900;

// Respect user's reduced-motion preference — show first slide only, no autoplay
const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Hero() {
  const { t } = useLang();
  const slides = t.hero;

  // Two video layers for seamless crossfade
  const [layerA, setLayerA] = useState(0);
  const [layerB, setLayerB] = useState(1);
  const [top, setTop]       = useState<"A"|"B">("A");
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
    const t2 = pool[Math.floor(Math.random() * pool.length)];
    lastT.current = t2;
    return t2;
  }

  const goTo = useCallback((nextIdx: number) => {
    if (transitioning) return;
    const next = ((nextIdx % slides.length) + slides.length) % slides.length;
    const t2 = pickTransition();

    setTransitioning(true);
    setIncoming(t2);

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

    // Swap after transition duration — pause the outgoing layer to release decoder memory
    setTimeout(() => {
      const outgoing = top === "A" ? videoA : videoB;
      if (outgoing.current) outgoing.current.pause();
      setTop(prev => prev === "A" ? "B" : "A");
      setIncoming(null);
      setTransitioning(false);
      setTextKey(k => k + 1);
    }, TRANSITION_MS);
  }, [transitioning, top, slides.length]);

  // Autoplay — disabled if user prefers reduced motion
  useEffect(() => {
    if (prefersReducedMotion) return;
    const curIdx = top === "A" ? layerA : layerB;
    timerRef.current = setTimeout(() => goTo(curIdx + 1), AUTOPLAY_MS);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [layerA, layerB, top, goTo]);

  // Determine classes for each layer
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
      {/* Layer A — active layer, preload metadata only */}
      <video
        ref={videoA}
        className={layerAClass}
        src={slides[layerA].src}
        poster="/media/hero-poster.jpg"
        preload="metadata"
        autoPlay={!prefersReducedMotion}
        muted
        loop
        playsInline
      />

      {/* Layer B — inactive layer, load on demand only */}
      <video
        ref={videoB}
        className={layerBClass}
        src={slides[layerB].src}
        poster="/media/hero-poster.jpg"
        preload="none"
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

    </section>
  );
}
