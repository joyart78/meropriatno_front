"use client";

import { Container } from "../../../shared/ui/Container";
import { SectionTitle } from "../../../shared/ui/SectionTitle";
import { ScrollAnimation } from "../../../features/ScrollAnimation";
import { REVIEWS } from "../../../shared/config/constants";
import styles from "./ReviewsSection.module.css";

export function ReviewsSection() {
  return (
    <section className={styles.reviews} id="reviews">
      <Container>
        <SectionTitle
          label="Отзывы"
          title="Наши клиенты о нас"
          subtitle="Более 500 проведённых мероприятий и тысячи благодарных слов"
          light
          center
        />
        <ScrollAnimation>
          <div className={styles.slider}>
            {REVIEWS.map((review) => (
              <div key={review.author} className={styles.card}>
                <div className={styles.stars}>{"★".repeat(review.stars)}</div>
                <p className={styles.text}>{review.text}</p>
                <div className={styles.author}>
                  <div className={styles.avatar}>{review.initials}</div>
                  <div>
                    <div className={styles.name}>{review.author}</div>
                    <div className={styles.event}>{review.event}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </Container>
    </section>
  );
}
