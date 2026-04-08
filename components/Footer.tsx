import Image from "next/image";
import Link from "next/link";

const services = [
  { href: "/services/strategy-consulting",    label: "Strategy Consulting"    },
  { href: "/services/digital-transformation", label: "Digital Transformation" },
  { href: "/services/professional-services",  label: "Professional Services"  },
  { href: "/services/training-coaching",      label: "Training & Coaching"    },
  { href: "/services/cybersecurity-grc",      label: "Cybersecurity & GRC"   },
];

const company = [
  { href: "/stories",  label: "Stories"  },
  { href: "/careers",  label: "Careers"  },
  { href: "/#why-us",  label: "Why Us"   },
  { href: "/#contact", label: "Contact"  },
];

export default function Footer() {
  return (
    <footer className="footer-v2" id="contact">
      <div className="container">
        {/* Top row */}
        <div className="footer-v2-top">
          {/* Brand */}
          <div className="footer-brand-col">
            <Link href="/" className="footer-brand">
              <Image src="/logo.svg" alt="Hippowize" width={26} height={29} className="footer-brand-icon" />
              <span>hippowize</span>
            </Link>
            <p>
              Transforming organizations through strategy, technology, and
              people — built in Canada, serving the world.
            </p>
            <div className="footer-socials">
              {[
                { icon: "fa-linkedin-in",  label: "LinkedIn"  },
                { icon: "fa-twitter",      label: "Twitter"   },
                { icon: "fa-facebook-f",   label: "Facebook"  },
                { icon: "fa-instagram",    label: "Instagram" },
              ].map((s) => (
                <a key={s.label} href="#" aria-label={s.label} className="footer-social-btn">
                  <i className={`fa-brands ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="footer-link-col">
            <h4>Services</h4>
            {services.map((s) => (
              <Link key={s.href} href={s.href}>{s.label}</Link>
            ))}
          </div>

          {/* Company */}
          <div className="footer-link-col">
            <h4>Company</h4>
            {company.map((c) => (
              <Link key={c.href} href={c.href}>{c.label}</Link>
            ))}
          </div>

          {/* Contact */}
          <div className="footer-contact-col">
            <h4>Get in Touch</h4>
            <a href="mailto:info@hippowize.com" className="footer-contact-item">
              <i className="fa-solid fa-envelope" />
              info@hippowize.com
            </a>
            <a href="mailto:sales@hippowize.com" className="footer-contact-item">
              <i className="fa-solid fa-envelope" />
              sales@hippowize.com
            </a>
            <a
              href="https://calendly.com/hippowize"
              target="_blank"
              rel="noreferrer"
              className="footer-cta-btn"
            >
              <i className="fa-solid fa-calendar-check" />
              Book a Call
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-v2-bottom">
          <span>&copy; {new Date().getFullYear()} Hippowize Inc. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
          <div className="footer-regions">
            <i className="fa-solid fa-location-dot" />
            Toronto, Canada
          </div>
        </div>
      </div>
    </footer>
  );
}
