"use client";

import { Container } from "@/shared/ui/Container";
import { SectionTitle } from "@/shared/ui/SectionTitle";
import { ScrollAnimation } from "@/features/ScrollAnimation";
import { Icon } from "@/shared/ui/Icon";
import { ContactForm } from "@/features/ContactForm";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/shared/config/constants";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  return (
    <section className={styles.contact} id="contact">
      <Container>
        <SectionTitle
          label="Контакты"
          title="Давайте обсудим ваше событие"
          subtitle="Оставьте заявку, и мы свяжемся с вами в ближайшее время"
          center
        />
        <ScrollAnimation>
          <div className={styles.grid}>
            <div>
              <div className={styles.infoList}>
                {CONTACT_INFO.map((item) => (
                  <div key={item.label} className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <Icon name={item.icon} size={20} />
                    </div>
                    <div>
                      <div className={styles.infoLabel}>{item.label}</div>
                      <div className={styles.infoValue}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.socials}>
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={styles.socialLink}
                    aria-label={link.label}
                    target="_blank"
                  >
                    <Icon
                      name={link.label === "Telegram" ? "telegram" : "vk"}
                      size={32}
                    />
                  </a>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </ScrollAnimation>
      </Container>
    </section>
  );
}
