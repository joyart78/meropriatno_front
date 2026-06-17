"use client";

import { Container } from "@/shared/ui/Container";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import { ScrollAnimation } from "@/features/ScrollAnimation";
import { Icon } from "@/shared/ui/Icon";
import { SERVICES } from "@/shared/config/constants";
import styles from "./ServicesSection.module.css";

export function ServicesSection() {
  return (
    <section className={styles.services} id="services">
      <Container>
        <SectionTitle
          label="Наши услуги"
          title="Что мы предлагаем"
          subtitle="Полный цикл организации мероприятий любого формата"
          center
        />
        <div className={styles.grid}>
          {SERVICES.map((service, i) => (
            <ScrollAnimation key={service.title} delay={i * 0.1}>
              <div className={styles.card}>
                <div
                  className={`${styles.icon} ${styles[`icon--${service.iconColor}`]}`}
                >
                  <Icon name={service.icon} size={32} />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardText}>{service.text}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </Container>
    </section>
  );
}
