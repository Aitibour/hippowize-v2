export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-top">
        <div className="footer-column about-footer">
          <h3>About</h3>
          <p>
            Hippowize helps organizations turn strategy into business outcomes —
            across cybersecurity, digital transformation, professional services,
            and training.
          </p>
          <div className="social-row">
            <a href="#" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fa-brands fa-twitter" />
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram" />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <a href="#services">Strategy Consulting</a>
          <a href="#services">Digital Transformation</a>
          <a href="#services">Professional Services</a>
          <a href="#services">Training &amp; Coaching</a>
        </div>
        <div className="footer-column">
          <h3>Regions</h3>
          <a href="#">Toronto</a>
          <a href="#">Quebec</a>
          <a href="#">Western Canada</a>
          <a href="#">Africa</a>
          <a href="#">Middle East</a>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <a href="mailto:info@hippowize.com">info@hippowize.com</a>
          <a href="mailto:sales@hippowize.com">sales@hippowize.com</a>
          <a href="mailto:mena@hippowize.com">mena@hippowize.com</a>
        </div>
      </div>

      <div className="container footer-contact-grid">
        <article className="footer-contact-card">
          <i className="fa-solid fa-envelope-open" />
          <div>
            <a href="mailto:info@hippowize.com">info@hippowize.com</a>
            <p>Drop Us a Line</p>
          </div>
        </article>
        <article className="footer-contact-card active">
          <i className="fa-solid fa-phone" />
          <div>
            <a href="https://calendly.com/hippowize" target="_blank" rel="noreferrer">
              Book a Consultation
            </a>
            <p>Schedule via Calendly</p>
          </div>
        </article>
        <article className="footer-contact-card">
          <i className="fa-solid fa-location-dot" />
          <div>
            <strong>Toronto, Canada</strong>
            <p>Hippowize Inc.</p>
          </div>
        </article>
      </div>

      <div className="copyright">
        <div className="container">
          <p>&copy; 2026 Hippowize Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
