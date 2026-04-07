"use client";

import { useRef, useState, useEffect } from "react";

const capabilities = [
  { icon: "fa-shield-halved",  text: "Proactive threat assessment & continuous monitoring" },
  { icon: "fa-scale-balanced", text: "GRC alignment & regulatory compliance" },
  { icon: "fa-robot",          text: "AI-powered threat detection & response" },
  { icon: "fa-cloud",          text: "Cloud-native security architecture" },
  { icon: "fa-rotate",        text: "Incident response & business continuity" },
  { icon: "fa-chart-line",     text: "Security posture reporting for the board" },
];

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

export default function Creative() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const leftReveal  = useReveal(0.1);
  const rightReveal = useReveal(0.1);

  function togglePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else          { v.pause(); setPlaying(false); }
  }

  return (
    <section className="section creative-v2" id="why-us">
      {/* ── Video panel ── */}
      <div
        ref={leftReveal.ref}
        className={["creative-video-panel", leftReveal.visible ? "revealed" : ""].join(" ")}
      >
        <video
          ref={videoRef}
          className="creative-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://wp.w3layouts.com/execution/wp-content/themes/execution/assets/videos/video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="creative-video-overlay">
          <button
            className="creative-play-btn"
            onClick={togglePlay}
            aria-label={playing ? "Pause video" : "Play video"}
          >
            <i className={`fa-solid ${playing ? "fa-pause" : "fa-play"}`} />
          </button>
          <div className="creative-video-label">
            <span>Cyber Resilience</span>
            <strong>Suite Demo</strong>
          </div>
        </div>
      </div>

      {/* ── Content panel ── */}
      <div
        ref={rightReveal.ref}
        className={["creative-content-panel", rightReveal.visible ? "revealed" : ""].join(" ")}
      >
        <p className="eyebrow">About the Company</p>
        <h2>Cyber Resilience<br />&amp; Innovation</h2>
        <p className="creative-intro">
          Hippowize&apos;s Cyber Resilience Suite combines proactive threat
          assessment, GRC alignment, and continuous monitoring — keeping your
          organization protected without slowing your transformation agenda.
        </p>

        <ul className="capabilities-list">
          {capabilities.map((c, i) => (
            <li
              key={c.text}
              className={rightReveal.visible ? "cap-visible" : ""}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="cap-icon">
                <i className={`fa-solid ${c.icon}`} />
              </span>
              <span>{c.text}</span>
            </li>
          ))}
        </ul>

        <div className="creative-cta-row">
          <a className="btn-primary" href="#contact">
            Book a Assessment
          </a>
          <a className="creative-learn-link" href="#services">
            <i className="fa-solid fa-arrow-right" /> Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
