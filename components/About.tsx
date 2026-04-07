import Image from "next/image";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container two-column">
        <div className="media-panel">
          <Image
            src="https://wp.w3layouts.com/execution/wp-content/themes/execution/assets/images/about.jpg"
            alt="Consulting professionals collaborating"
            width={600}
            height={450}
          />
        </div>
        <div className="copy-panel">
          <h2 className="section-title">Trusted by Organizations Across Sectors</h2>
          <p>
            Hippowize helps organizations turn strategy into measurable business
            outcomes. From cybersecurity and GRC to ServiceNow, cloud, and AI —
            we partner with you to navigate complexity and deliver lasting
            transformation.
          </p>
          <div className="feature-list">
            <article className="feature-item">
              <div className="feature-icon">
                <i className="fa-solid fa-chess" />
              </div>
              <div>
                <h3>Strategy Consulting</h3>
                <p>
                  Cybersecurity, GRC, and PMO-to-VMO transitions that align
                  technology with your business goals.
                </p>
              </div>
            </article>
            <article className="feature-item">
              <div className="feature-icon">
                <i className="fa-solid fa-microchip" />
              </div>
              <div>
                <h3>Digital Transformation</h3>
                <p>
                  ServiceNow, AI, Data, Cloud, and Automation — end-to-end
                  delivery by proven specialists.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
