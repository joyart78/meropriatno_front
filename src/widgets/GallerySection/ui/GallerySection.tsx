"use client";

import { Container } from "../../../shared/ui/Container";
import { SectionTitle } from "../../../shared/ui/SectionTitle";
import { ScrollAnimation } from "../../../features/ScrollAnimation";
import { GALLERY_ITEMS } from "../../../shared/config/constants";
import { cn } from "../../../shared/lib/cn";
import styles from "./GallerySection.module.css";

export function GallerySection() {
  return (
    <section className={styles.gallery} id="gallery">
      <Container>
        <SectionTitle
          label="Портфолио"
          title="Наши работы"
          subtitle="Вдохновляйтесь примерами проведённых мероприятий"
          center
        />
        <ScrollAnimation>
          <div className={styles.grid}>
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={i}
                className={cn(styles.item, item.tall && styles["item--tall"])}
              >
                <div className={styles.itemInner}>
                  <span className={styles.itemTag}>{item.tag}</span>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </Container>
    </section>
  );
}
