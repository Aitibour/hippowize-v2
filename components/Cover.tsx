export default function Cover() {
  return (
    <section className="cover-v2" id="contact-cta">
      {/* SVG geometric background */}
      <svg
        className="cover-v2-bg"
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect width="1440" height="400" fill="#0F172A" />
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 130} y1="0" x2={i * 130} y2="400" stroke="#1E3A8A" strokeWidth="0.5" opacity="0.5" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 80} x2="1440" y2={i * 80} stroke="#1E3A8A" strokeWidth="0.5" opacity="0.5" />
        ))}
        <circle cx="200"  cy="200" r="260" fill="#2563EB" opacity="0.08" />
        <circle cx="1240" cy="180" r="220" fill="#7C3AED" opacity="0.07" />
        <circle cx="720"  cy="380" r="180" fill="#2563EB" opacity="0.06" />
        <polygon points="0,400 320,0 480,0 0,400" fill="#2563EB" opacity="0.05" />
        <polygon points="1440,0 1100,400 1440,400" fill="#7C3AED" opacity="0.05" />
        {[
          [120,80],[360,40],[600,120],[900,60],[1100,100],[1300,50],
          [80,300],[400,340],[700,280],[1000,320],[1380,260],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2" fill="#60A5FA" opacity="0.6" />
        ))}
      </svg>

      <div className="container cover-v2-inner">
        <div className="cover-v2-badge">
          <i className="fa-solid fa-calendar-check" />
          Free Consultation
        </div>
        <h2>Ready to Transform Your Organization?</h2>
        <p>
          Let&apos;s build a roadmap that turns your strategic vision into
          measurable outcomes. Our consultants are ready to help.
        </p>
        <div className="cover-v2-actions">
          <a
            className="cover-v2-btn-primary"
            href="https://calendly.com/hippowize"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-calendar-check" />
            Book a Consultation
          </a>
          <a className="cover-v2-btn-ghost" href="mailto:info@hippowize.com">
            <i className="fa-solid fa-envelope" />
            info@hippowize.com
          </a>
        </div>
      </div>
    </section>
  );
}
