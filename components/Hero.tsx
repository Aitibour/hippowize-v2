export default function Hero() {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source
          src="https://wp.w3layouts.com/execution/wp-content/themes/execution/assets/videos/video.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-copy">
            <h1>The future belongs to organizations that know how to transform</h1>
            <p>
              Empower your vision of tomorrow with Hippowize&apos;s transformative
              and innovative solutions.
            </p>
            <a className="btn-primary" href="#services">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
