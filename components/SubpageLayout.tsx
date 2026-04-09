import Link from "next/link";
import Footer from "@/components/Footer";

const BASE_URL = "https://hippowize-v2.netlify.app";

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
  compact?: boolean;
  children: React.ReactNode;
}

export default function SubpageLayout({
  eyebrow,
  title,
  description,
  breadcrumbs,
  accent = "#2563EB",
  compact = false,
  children,
}: SubpageLayoutProps) {
  // BreadcrumbList schema — static props only, no user input
  const breadcrumbSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      ...breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: b.label,
        item: `${BASE_URL}${b.href}`,
      })),
    ],
  });

  return (
    <>
      {/* BreadcrumbList structured data — static content, no user input */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />

      {/* Hero */}
      <div
        className={["subpage-hero", compact ? "subpage-hero--compact" : ""].filter(Boolean).join(" ")}
        style={{ "--sp-accent": accent } as React.CSSProperties}
      >
        {/* Geometric SVG backdrop */}
        <svg
          className="subpage-hero-svg"
          viewBox="0 0 1440 480"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <linearGradient id="spGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>
          </defs>
          <rect width="1440" height="480" fill="url(#spGrad)" />

          {/* Grid */}
          {Array.from({ length: 16 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 96} y1="0" x2={i * 96} y2="480" stroke="rgb(255 255 255 / 4%)" strokeWidth="1" />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 68} x2="1440" y2={i * 68} stroke="rgb(255 255 255 / 4%)" strokeWidth="1" />
          ))}

          {/* Diagonal accent lines */}
          <line x1="0" y1="480" x2="480" y2="0" stroke="rgb(37 99 235 / 20%)" strokeWidth="1.5" />
          <line x1="200" y1="480" x2="680" y2="0" stroke="rgb(37 99 235 / 12%)" strokeWidth="1" />
          <line x1="1440" y1="0" x2="960" y2="480" stroke="rgb(124 58 237 / 15%)" strokeWidth="1.5" />

          {/* Glow circles */}
          <circle cx="0"    cy="240" r="320" fill="rgb(37 99 235 / 12%)" />
          <circle cx="1440" cy="120" r="260" fill="rgb(124 58 237 / 8%)" />
          <circle cx="720"  cy="480" r="200" fill="rgb(37 99 235 / 6%)" />

          {/* Accent dots */}
          {[
            [80, 60], [240, 30], [520, 90], [800, 40], [1080, 70], [1360, 30],
            [140, 380], [460, 420], [760, 360], [1100, 400], [1400, 340],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="2.5" fill="rgb(96 165 250 / 70%)" />
          ))}

          {/* Corner brackets */}
          <polyline points="60,60 60,20 100,20" stroke="rgb(37 99 235 / 60%)" strokeWidth="2" fill="none" />
          <polyline points="1380,420 1380,460 1340,460" stroke="rgb(124 58 237 / 50%)" strokeWidth="2" fill="none" />
        </svg>

        {/* Floating content */}
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

          <div className="subpage-hero-content">
            <span className="subpage-hero-eyebrow">{eyebrow}</span>
            <h1 className="subpage-hero-title">{title}</h1>
            <p className="subpage-hero-desc">{description}</p>
          </div>
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
