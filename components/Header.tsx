"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLang, LANGUAGES } from "@/lib/i18n";

export default function Header() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLang();
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen,   setLangOpen]   = useState(false);
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

          <Link href="/" className="nav-link" onClick={() => setMenuOpen(false)}>{t.nav.home}</Link>

          {/* Services trigger */}
          <button
            className={["nav-link nav-drop-trigger", openDrop === "services" ? "active" : ""].join(" ")}
            onClick={() => toggleDrop("services")}
            aria-expanded={openDrop === "services"}
          >
            {t.nav.services} <i className="fa-solid fa-chevron-down nav-chevron" />
          </button>

          {/* Industry trigger */}
          <button
            className={["nav-link nav-drop-trigger", openDrop === "industry" ? "active" : ""].join(" ")}
            onClick={() => toggleDrop("industry")}
            aria-expanded={openDrop === "industry"}
          >
            {t.nav.industry} <i className="fa-solid fa-chevron-down nav-chevron" />
          </button>

          <Link href="/stories"            className="nav-link" onClick={() => setMenuOpen(false)}>{t.nav.stories}</Link>
          <Link href={href("#why-us")}     className="nav-link" onClick={() => setMenuOpen(false)}>{t.nav.whyUs}</Link>
          <Link href={href("#contact")}    className="nav-link" onClick={() => setMenuOpen(false)}>{t.nav.contact}</Link>
          <Link href="/careers"            className="nav-link" onClick={() => setMenuOpen(false)}>{t.nav.careers}</Link>

          {/* Mobile-only mini-dropdowns */}
          {menuOpen && openDrop === "services" && (
            <div className="mobile-mega">
              {t.servicesMega.map(g => g.links.map(l => (
                <Link key={l.href} href={l.href} className="mobile-mega-link" onClick={() => { setOpenDrop(null); setMenuOpen(false); }}>{l.label}</Link>
              )))}
            </div>
          )}
          {menuOpen && openDrop === "industry" && (
            <div className="mobile-mega">
              {t.industryMega.map(g => g.links.map(l => (
                <Link key={l.href} href={l.href} className="mobile-mega-link" onClick={() => { setOpenDrop(null); setMenuOpen(false); }}>{l.label}</Link>
              )))}
            </div>
          )}
        </nav>

        {/* Tools */}
        <div className="header-tools">
          <a className="get-started-btn" href="https://calendly.com/hippowize" target="_blank" rel="noreferrer">
            {t.nav.letsGo}
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
                    aria-selected={lang === l.code}
                    className={lang === l.code ? "active" : undefined}
                    onClick={() => { setLang(l.code); setLangOpen(false); }}
                  >
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
            {(openDrop === "services" ? t.servicesMega : t.industryMega).map((group) => (
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
