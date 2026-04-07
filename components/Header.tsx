"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

const LANGUAGES = [
  { code: "en", label: "English",  flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español",  flag: "🇪🇸" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
];

const SERVICES = [
  { href: "/services/strategy-consulting",    label: "Strategy Consulting",    icon: "fa-chess"        },
  { href: "/services/digital-transformation", label: "Digital Transformation", icon: "fa-microchip"    },
  { href: "/services/professional-services",  label: "Professional Services",  icon: "fa-briefcase"    },
  { href: "/services/training-coaching",      label: "Training & Coaching",    icon: "fa-users"        },
];

const INDUSTRIES = [
  { href: "/industry/it-technology",          label: "IT & Technology",              icon: "fa-laptop-code"   },
  { href: "/industry/healthcare",             label: "Healthcare",                   icon: "fa-hospital"      },
  { href: "/industry/financial-services",     label: "Financial Services",           icon: "fa-landmark"      },
  { href: "/industry/government",             label: "Government & Public Sector",   icon: "fa-building-columns" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen,   setLangOpen]   = useState(false);
  const [activeLang, setActiveLang] = useState("en");
  const [openDrop,   setOpenDrop]   = useState<string | null>(null);

  const searchRef  = useRef<HTMLInputElement>(null);
  const langRef    = useRef<HTMLDivElement>(null);
  const headerRef  = useRef<HTMLElement>(null);

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

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpenDrop(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close dropdown on route change
  useEffect(() => { setOpenDrop(null); setMenuOpen(false); }, [pathname]);

  function toggleDrop(name: string) {
    setOpenDrop((prev) => (prev === name ? null : name));
  }

  function href(path: string) {
    if (path.startsWith("#")) return isHome ? path : `/${path}`;
    return path;
  }

  const currentFlag = LANGUAGES.find((l) => l.code === activeLang)?.flag ?? "🌐";
  const headerClass = ["site-header", scrolled || !isHome ? "scrolled" : ""].filter(Boolean).join(" ");

  return (
    <header className={headerClass} id="site-header" ref={headerRef}>
      <div className="container header-inner">

        {/* Logo */}
        <Link className="brand" href="/">
          <span className="brand-mark">H</span>
          <span className="brand-text">ippowize</span>
        </Link>

        {/* Hamburger */}
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
        </button>

        {/* Nav */}
        <nav className="site-nav" id="site-nav" style={menuOpen ? { display: "flex" } : undefined}>

          <Link href="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>

          {/* Services dropdown */}
          <div className="nav-dropdown-wrap">
            <button
              className={["nav-link nav-drop-trigger", openDrop === "services" ? "active" : ""].join(" ")}
              onClick={() => toggleDrop("services")}
              aria-expanded={openDrop === "services"}
            >
              Services <i className="fa-solid fa-chevron-down nav-chevron" />
            </button>
            {openDrop === "services" && (
              <ul className="nav-dropdown">
                {SERVICES.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} onClick={() => { setOpenDrop(null); setMenuOpen(false); }}>
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Industry dropdown */}
          <div className="nav-dropdown-wrap">
            <button
              className={["nav-link nav-drop-trigger", openDrop === "industry" ? "active" : ""].join(" ")}
              onClick={() => toggleDrop("industry")}
              aria-expanded={openDrop === "industry"}
            >
              Industry <i className="fa-solid fa-chevron-down nav-chevron" />
            </button>
            {openDrop === "industry" && (
              <ul className="nav-dropdown">
                {INDUSTRIES.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} onClick={() => { setOpenDrop(null); setMenuOpen(false); }}>
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link href="/stories" className="nav-link" onClick={() => setMenuOpen(false)}>Stories</Link>
          <Link href={href("#why-us")} className="nav-link" onClick={() => setMenuOpen(false)}>Why Us</Link>
          <Link href={href("#contact")} className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/careers" className="nav-link" onClick={() => setMenuOpen(false)}>Careers</Link>

        </nav>

        {/* Tools */}
        <div className="header-tools">
          <a className="get-started-btn" href="https://calendly.com/hippowize" target="_blank" rel="noreferrer">
            Get Started
          </a>

          <div className={["search-expand-wrap", searchOpen ? "open" : ""].filter(Boolean).join(" ")}>
            <button
              className="header-icon-btn"
              aria-label={searchOpen ? "Close search" : "Open search"}
              onClick={() => setSearchOpen((o) => !o)}
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
              onClick={() => setLangOpen((o) => !o)}
            >
              <span className="lang-flag">{currentFlag}</span>
              <i className="fa-solid fa-chevron-down lang-chevron" style={{ transform: langOpen ? "rotate(180deg)" : undefined }} />
            </button>
            {langOpen && (
              <ul className="lang-dropdown" role="listbox">
                {LANGUAGES.map((l) => (
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
    </header>
  );
}
