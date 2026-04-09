"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useLang } from "@/lib/i18n";

const serviceLinks = [
  { href: "/services/strategy-consulting",    key: "Strategy Consulting"    },
  { href: "/services/digital-transformation", key: "Digital Transformation" },
  { href: "/services/professional-services",  key: "Professional Services"  },
  { href: "/services/training-coaching",      key: "Training & Coaching"    },
  { href: "/services/cybersecurity-grc",      key: "Cybersecurity & GRC"   },
];

const companyLinks = [
  { href: "/stories",  key: "Stories"  },
  { href: "/careers",  key: "Careers"  },
  { href: "/#why-us",  key: "Why Us"   },
  { href: "/#contact", key: "Contact"  },
];

export default function Footer() {
  const { t } = useLang();

  // Build translated service/company links from mega menus
  const allServiceLinks = useMemo(() => t.servicesMega.flatMap(g => g.links), [t.servicesMega]);
  const allCompanyLinks = useMemo(() => [
    { href: "/about",    label: "About"         },
    { href: "/stories",  label: t.nav.stories   },
    { href: "/careers",  label: t.nav.careers   },
    { href: "/contact",  label: "Contact"       },
    { href: "/#why-us",  label: t.nav.whyUs     },
  ], [t.nav]);

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
            <p>{t.footer.tagline}</p>
            <div className="footer-socials">
              {[
                { icon: "fa-linkedin-in", label: "LinkedIn",  href: "https://www.linkedin.com/company/hippowize" },
                { icon: "fa-twitter",     label: "Twitter",   href: "https://twitter.com/hippowize"              },
                { icon: "fa-facebook-f",  label: "Facebook",  href: "https://www.facebook.com/hippowize"         },
                { icon: "fa-instagram",   label: "Instagram", href: "https://www.instagram.com/hippowize"        },
              ].map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="footer-social-btn"
                   target="_blank" rel="noopener noreferrer">
                  <i className={`fa-brands ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="footer-link-col">
            <h4>{t.footer.servicesTitle}</h4>
            {allServiceLinks.map((s) => (
              <Link key={s.href} href={s.href}>{s.label}</Link>
            ))}
          </div>

          {/* Company */}
          <div className="footer-link-col">
            <h4>{t.footer.companyTitle}</h4>
            {allCompanyLinks.map((c) => (
              <Link key={c.href} href={c.href}>{c.label}</Link>
            ))}
          </div>

          {/* Contact */}
          <div className="footer-contact-col">
            <h4>{t.footer.contactTitle}</h4>
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
              {t.footer.bookCall}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-v2-bottom">
          <span>{t.footer.copyright}</span>
          <div className="footer-bottom-links">
            <Link href="/privacy-policy">{t.footer.privacy}</Link>
            <Link href="/terms-of-use">{t.footer.terms}</Link>
          </div>
          <div className="footer-regions">
            <i className="fa-solid fa-location-dot" />
            {t.footer.location}
          </div>
        </div>
      </div>
    </footer>
  );
}
