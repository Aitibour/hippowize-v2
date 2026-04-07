import Link from "next/link";
import Footer from "@/components/Footer";

interface Breadcrumb {
  label: string;
  href: string;
}

interface SubpageLayoutProps {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: Breadcrumb[];
  accent?: string;
  children: React.ReactNode;
}

export default function SubpageLayout({
  eyebrow,
  title,
  description,
  breadcrumbs,
  accent = "#2563EB",
  children,
}: SubpageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <div className="subpage-hero" style={{ "--sp-accent": accent } as React.CSSProperties}>
        <div className="subpage-hero-overlay" />
        <div className="container subpage-hero-inner">
          <nav className="subpage-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {breadcrumbs.map((b, i) => (
              <span key={b.href}>
                <i className="fa-solid fa-chevron-right" />
                {i === breadcrumbs.length - 1
                  ? <span>{b.label}</span>
                  : <Link href={b.href}>{b.label}</Link>
                }
              </span>
            ))}
          </nav>
          <p className="eyebrow-light">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="subpage-hero-desc">{description}</p>
          <a href="https://calendly.com/hippowize" target="_blank" rel="noreferrer" className="btn-primary">
            Book a Consultation
          </a>
        </div>
      </div>

      {/* Content */}
      <main className="subpage-main">
        {children}
      </main>

      <Footer />
    </>
  );
}
