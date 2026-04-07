"use client";

import { useRef, useState, useEffect } from "react";

const capabilities = [
  { text: "Proactive threat assessment & continuous monitoring" },
  { text: "GRC alignment & regulatory compliance" },
  { text: "AI-powered threat detection & response" },
  { text: "Cloud-native security architecture" },
  { text: "Incident response & business continuity" },
  { text: "Security posture reporting for the board" },
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
      {/* Video panel */}
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

      {/* Content panel */}
      <div
        ref={rightReveal.ref}
        className={["creative-content-panel", rightReveal.visible ? "revealed" : ""].join(" ")}
      >
        <p className="eyebrow">About the Company</p>

        <div className="creative-heading-block">
          <h2 className="creative-title-main">Cyber Resilience</h2>
          <h2 className="creative-title-accent">&amp; Innovation</h2>
        </div>

        <div className="creative-divider" />

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
              <span className="cap-index">{String(i + 1).padStart(2, "0")}</span>
              <span className="cap-bar" />
              <span className="cap-text">{c.text}</span>
            </li>
          ))}
        </ul>

        <div className="creative-cta-row">
          <a className="btn-primary" href="#contact">
            Book an Assessment
          </a>
          <a className="creative-learn-link" href="#services">
            <i className="fa-solid fa-arrow-right" /> Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
