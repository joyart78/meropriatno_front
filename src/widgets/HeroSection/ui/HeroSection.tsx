"use client";

import { COMPANY } from "../../../shared/config/constants";
import { FlowerSVG } from "../../../shared/ui/FlowerSVG";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const el = document.getElementById(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.decor1} />
      <div className={styles.decor2} />
      <div className={styles.decor3} />

      <div className={`${styles.flower} ${styles.flower1}`}>
        <FlowerSVG color="#ef88af" centerColor="#ffda8c" />
      </div>
      <div className={`${styles.flower} ${styles.flower2}`}>
        <FlowerSVG color="#8e6ca8" centerColor="#8e6ca8" />
      </div>
      <div className={`${styles.flower} ${styles.flower3}`}>
        <FlowerSVG color="#f36433" centerColor="#f36433" />
      </div>

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          {COMPANY.tagline}
        </div>
        <h1 className={styles.title}>
          Меро<span className={styles.titleAccent}>приятно</span>
        </h1>
        <p className={styles.subtitle}>
          Создаём незабываемые события, которые остаются в сердцах.
          <br />
          От камерных встреч до масштабных торжеств.
        </p>
        <div className={styles.actions}>
          <a
            href="#contact"
            className={styles.btnPrimary}
            onClick={(e) => handleScroll(e, "contact")}
          >
            Обсудить проект
          </a>
          <a
            href="#gallery"
            className={styles.btnOutline}
            onClick={(e) => handleScroll(e, "gallery")}
          >
            Смотреть работы
          </a>
        </div>
      </div>
    </section>
  );
}
