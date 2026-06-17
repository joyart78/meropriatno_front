"use client";

import { NAV_LINKS, COMPANY } from "../../../shared/config/constants";
import { useBurgerMenu } from "../../../features/BurgerMenu";
import { useHeaderScroll } from "../../../features/HeaderScroll";
import { cn } from "../../../shared/lib/cn";
import styles from "./Header.module.css";

export function Header() {
  const { isOpen, close, toggle } = useBurgerMenu();
  const scrolled = useHeaderScroll();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    close();
    const el = document.getElementById(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={cn(styles.header, scrolled && styles.scrolled)}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          {COMPANY.name}
          <span className={styles.logoDot} />
        </a>
        <nav className={cn(styles.nav, isOpen && styles.active)}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className={styles.cta}
          onClick={(e) => handleNavClick(e, "contact")}
        >
          Связаться
        </a>
        <button
          className={cn(styles.burger, isOpen && styles.active)}
          onClick={toggle}
          aria-label="Меню"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
