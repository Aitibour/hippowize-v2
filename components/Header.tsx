"use client";

import { useEffect, useState, useRef } from "react";

const LANGUAGES = [
  { code: "en", label: "English",    flag: "🇬🇧" },
  { code: "fr", label: "Français",   flag: "🇫🇷" },
  { code: "es", label: "Español",    flag: "🇪🇸" },
  { code: "ar", label: "العربية",    flag: "🇸🇦" },
];

export default function Header() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [searchOpen,   setSearchOpen]   = useState(false);
  const [langOpen,     setLangOpen]     = useState(false);
  const [activeLang,   setActiveLang]   = useState("en");

  const searchInputRef = useRef<HTMLInputElement>(null);
  const langWrapRef    = useRef<HTMLDivElement>(null);

  // Scroll → sticky header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu → body scroll lock
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen && window.innerWidth <= 991);
  }, [menuOpen]);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 991) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Focus search input when expanded
  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  // Close lang dropdown on outside click
  useEffect(() => {
    if (!langOpen) return;
    const handler = (e: MouseEvent) => {
      if (langWrapRef.current && !langWrapRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [langOpen]);

  function pickLang(code: string) {
    setActiveLang(code);
    setLangOpen(false);
  }

  const currentFlag = LANGUAGES.find((l) => l.code === activeLang)?.flag ?? "🌐";

  return (
    <header className={["site-header", scrolled ? "scrolled" : ""].filter(Boolean).join(" ")} id="site-header">
      <div className="container header-inner">

        {/* Logo */}
        <a className="brand" href="#top">
          <span className="brand-mark">H</span>
          <span className="brand-text">ippowize</span>
        </a>

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
          {[
            { href: "#top",      label: "Home"     },
            { href: "#about",    label: "About"    },
            { href: "#services", label: "Services" },
            { href: "#why-us",   label: "Why Us"   },
            { href: "#contact",  label: "Contact"  },
          ].map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Tools */}
        <div className="header-tools">

          {/* CTA */}
          <a className="get-started-btn" href="https://calendly.com/hippowize" target="_blank" rel="noreferrer">
            Get Started
          </a>

          {/* Search */}
          <div className={["search-expand-wrap", searchOpen ? "open" : ""].filter(Boolean).join(" ")}>
            <button
              className="header-icon-btn"
              aria-label={searchOpen ? "Close search" : "Open search"}
              onClick={() => setSearchOpen((o) => !o)}
            >
              <i className={searchOpen ? "fa-solid fa-xmark" : "fa-solid fa-magnifying-glass"} />
            </button>
            <input
              ref={searchInputRef}
              className="search-expand-input"
              type="search"
              placeholder="Search…"
              aria-label="Search"
              onBlur={() => setSearchOpen(false)}
            />
          </div>

          <span className="header-divider" />

          {/* Language */}
          <div className="lang-wrap" ref={langWrapRef}>
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
              <ul className="lang-dropdown" role="listbox" aria-label="Language options">
                {LANGUAGES.map((l) => (
                  <li
                    key={l.code}
                    role="option"
                    aria-selected={activeLang === l.code}
                    className={activeLang === l.code ? "active" : undefined}
                    onClick={() => pickLang(l.code)}
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
