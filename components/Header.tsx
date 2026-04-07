"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Sync with theme set before hydration (or from a previous visit)
    setIsDark(
      document.documentElement.getAttribute("data-theme") === "dark"
    );

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen && window.innerWidth <= 991) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 991) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("hippowize-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("hippowize-theme", "light");
    }
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  const headerClass = ["site-header", scrolled ? "scrolled" : ""].join(" ").trim();

  return (
    <header className={headerClass} id="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top">
          <span className="brand-mark">H</span>
          <span className="brand-text">ippowize</span>
        </a>

        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
        </button>

        <nav
          className="site-nav"
          id="site-nav"
          style={menuOpen ? { display: "flex" } : undefined}
        >
          {[
            { href: "#top", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#services", label: "Services" },
            { href: "#why-us", label: "Why Us" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-tools">
          <a className="lets-talk-btn" href="#contact">
            Let&apos;s talk
          </a>
          <button className="header-icon-btn" aria-label="Search">
            <i className="fa-solid fa-magnifying-glass" />
          </button>
          <span className="header-divider" />
          <button
            className="header-icon-btn"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            <i className="fa-solid fa-globe" />
          </button>
        </div>
      </div>
    </header>
  );
}
