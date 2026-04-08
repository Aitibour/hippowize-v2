"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

const LANGUAGES = [
  { code: "en", label: "English",  flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español",  flag: "🇪🇸" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
];

const SERVICES_MEGA = [
  {
    category: "Advisory",
    links: [
      { href: "/services/strategy-consulting",   label: "Strategy Consulting"    },
      { href: "/services/professional-services", label: "Professional Services"  },
    ],
  },
  {
    category: "Digital & Technology",
    links: [
      { href: "/services/digital-transformation", label: "Digital Transformation" },
      { href: "/services/cybersecurity-grc",       label: "Cybersecurity & GRC"   },
    ],
  },
  {
    category: "People & Capability",
    links: [
      { href: "/services/training-coaching", label: "Training & Coaching" },
    ],
  },
];

const INDUSTRY_MEGA = [
  {
    category: "Technology & Services",
    links: [
      { href: "/industry/it-technology", label: "IT & Technology" },
    ],
  },
  {
    category: "Regulated Industries",
    links: [
      { href: "/industry/healthcare",         label: "Healthcare"                 },
      { href: "/industry/financial-services", label: "Financial Services"         },
      { href: "/industry/government",         label: "Government & Public Sector" },
    ],
  },
  {
    category: "Energy & Industry",
    links: [
      { href: "/industry/energy-utilities", label: "Energy & Utilities"          },
      { href: "/industry/manufacturing",    label: "Manufacturing & Supply Chain" },
    ],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen,   setLangOpen]   = useState(false);
  const [activeLang, setActiveLang] = useState("en");
  const [openDrop,   setOpenDrop]   = useState<string | null>(null);

  const searchRef = useRef<HTMLInputElement>(null);
  const langRef   = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen && window.innerWidth <= 991);
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 991) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpenDrop(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => { setOpenDrop(null); setMenuOpen(false); }, [pathname]);

  function toggleDrop(name: string) {
    setOpenDrop(prev => prev === name ? null : name);
  }

  function href(path: string) {
    if (path.startsWith("#")) return isHome ? path : `/${path}`;
    return path;
  }

  const currentFlag = LANGUAGES.find(l => l.code === activeLang)?.flag ?? "🌐";
  const headerClass = ["site-header", scrolled || !isHome ? "scrolled" : ""].filter(Boolean).join(" ");
  const megaOpen = openDrop === "services" || openDrop === "industry";

  return (
    <header className={headerClass} id="site-header" ref={headerRef}>
      <div className="container header-inner">

        {/* Logo */}
        <Link className="brand" href="/">
          <Image src="/logo.svg" alt="Hippowize icon" width={32} height={35} className="brand-icon" />
          <span className="brand-text">hippowize</span>
        </Link>

        {/* Hamburger */}
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(o => !o)}
        >
          <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
        </button>

        {/* Nav */}
        <nav className="site-nav" id="site-nav" style={menuOpen ? { display: "flex" } : undefined}>

          <Link href="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>

          {/* Services trigger */}
          <button
            className={["nav-link nav-drop-trigger", openDrop === "services" ? "active" : ""].join(" ")}
            onClick={() => toggleDrop("services")}
            aria-expanded={openDrop === "services"}
          >
            Services <i className="fa-solid fa-chevron-down nav-chevron" />
          </button>

          {/* Industry trigger */}
          <button
            className={["nav-link nav-drop-trigger", openDrop === "industry" ? "active" : ""].join(" ")}
            onClick={() => toggleDrop("industry")}
            aria-expanded={openDrop === "industry"}
          >
            Industry <i className="fa-solid fa-chevron-down nav-chevron" />
          </button>

          <Link href="/stories"            className="nav-link" onClick={() => setMenuOpen(false)}>Stories</Link>
          <Link href={href("#why-us")}     className="nav-link" onClick={() => setMenuOpen(false)}>Why Us</Link>
          <Link href={href("#contact")}    className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/careers"            className="nav-link" onClick={() => setMenuOpen(false)}>Careers</Link>

          {/* Mobile-only mini-dropdowns */}
          {menuOpen && openDrop === "services" && (
            <div className="mobile-mega">
              {SERVICES_MEGA.map(g => g.links.map(l => (
                <Link key={l.href} href={l.href} className="mobile-mega-link" onClick={() => { setOpenDrop(null); setMenuOpen(false); }}>{l.label}</Link>
              )))}
            </div>
          )}
          {menuOpen && openDrop === "industry" && (
            <div className="mobile-mega">
              {INDUSTRY_MEGA.map(g => g.links.map(l => (
                <Link key={l.href} href={l.href} className="mobile-mega-link" onClick={() => { setOpenDrop(null); setMenuOpen(false); }}>{l.label}</Link>
              )))}
            </div>
          )}
        </nav>

        {/* Tools */}
        <div className="header-tools">
          <a className="get-started-btn" href="https://calendly.com/hippowize" target="_blank" rel="noreferrer">
            Let&apos;s Talk
          </a>

          <div className={["search-expand-wrap", searchOpen ? "open" : ""].filter(Boolean).join(" ")}>
            <button
              className="header-icon-btn"
              aria-label={searchOpen ? "Close search" : "Open search"}
              onClick={() => setSearchOpen(o => !o)}
            >
              <i className={searchOpen ? "fa-solid fa-xmark" : "fa-solid fa-magnifying-glass"} />
            </button>
            <input
              ref={searchRef}
              className="search-expand-input"
              type="search"
              placeholder="Search…"
              aria-label="Search"
              onBlur={() => setSearchOpen(false)}
            />
          </div>

          <span className="header-divider" />

          <div className="lang-wrap" ref={langRef}>
            <button
              className="header-icon-btn lang-trigger"
              aria-label="Select language"
              aria-expanded={langOpen}
              onClick={() => setLangOpen(o => !o)}
            >
              <i className="fa-solid fa-globe lang-globe" />
              <i className="fa-solid fa-chevron-down lang-chevron" style={{ transform: langOpen ? "rotate(180deg)" : undefined }} />
            </button>
            {langOpen && (
              <ul className="lang-dropdown" role="listbox">
                {LANGUAGES.map(l => (
                  <li
                    key={l.code}
                    role="option"
                    aria-selected={activeLang === l.code}
                    className={activeLang === l.code ? "active" : undefined}
                    onClick={() => { setActiveLang(l.code); setLangOpen(false); }}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* ── Mega panel (full-width, outside header-inner) ── */}
      {!menuOpen && megaOpen && (
        <div className="mega-panel" role="navigation">
          <div className="container mega-inner">
            {(openDrop === "services" ? SERVICES_MEGA : INDUSTRY_MEGA).map((group) => (
              <div key={group.category} className="mega-col">
                <p className="mega-category">{group.category}</p>
                <ul className="mega-links">
                  {group.links.map(l => (
                    <li key={l.href}>
                      <Link href={l.href} className="mega-link" onClick={() => setOpenDrop(null)}>
                        <i className="fa-solid fa-arrow-right mega-link-arrow" />
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      )}
    </header>
  );
}
