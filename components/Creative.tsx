import Image from "next/image";

export default function Creative() {
  return (
    <section className="section creative" id="why-us">
      <div className="container two-column reverse-mobile">
        <div className="media-panel">
          <Image
            src="https://wp.w3layouts.com/execution/wp-content/themes/execution/assets/images/img2.jpg"
            alt="Cybersecurity and innovation team"
            width={600}
            height={450}
          />
        </div>
        <div className="copy-panel">
          <p className="eyebrow">About the Company</p>
          <h2>Cyber Resilience &amp; Innovation</h2>
          <p>
            Hippowize&apos;s Cyber Resilience Suite combines proactive threat
            assessment, GRC alignment, and continuous monitoring to keep your
            organization protected and compliant — without slowing down your
            transformation agenda.
          </p>
          <p className="split-copy">
            Our AI and cloud capabilities are built for real-world delivery.
            Whether you&apos;re migrating infrastructure, automating workflows
            with ServiceNow, or scaling data platforms, our team operates as an
            extension of yours.
          </p>
          <a
            className="video-link"
            href="https://player.vimeo.com/video/86005700"
            target="_blank"
            rel="noreferrer"
          >
            <span className="fa-regular fa-circle-play" />
            <span>
              Watch Our
              <br />
              Story
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
