"use client";

import { Container } from "../../../shared/ui/Container";
import { SectionTitle } from "../../../shared/ui/SectionTitle";
import { ScrollAnimation } from "../../../features/ScrollAnimation";
import { STATS } from "../../../shared/config/constants";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  return (
    <section className={styles.about} id="about">
      <Container>
        <ScrollAnimation>
          <div className={styles.grid}>
            <div>
              <SectionTitle
                label="О нас"
                title="Превращаем идеи в реальность"
              />
              <p className={styles.text}>
                Мы - дуэт основателей Наш тандем сложился из двух
                противоположностей, которые идеально дополняют друг друга.
                Арсений— артист театра и кино. Он чувствует атмосферу
                мероприятия как режиссер: знает, где нужна яркая вспышка эмоций,
                а где — сдержанная элегантность. Мастер нестандартных идей и их
                виртуозного воплощения. Вика— менеджер, который видит процесс
                насквозь. Она выстраивает систему так, что все форс-мажоры
                остаются за кадром, и уже знает ответ на еще не заданный вопрос,
                а каждый этап подготовки проверен дважды.
              </p>
              <p className={styles.text}>
                От разработки концепции до реализации — мы сопровождаем вас на
                каждом этапе, чтобы ваше событие прошло идеально.
              </p>
              <div className={styles.stats}>
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.image}>
              <div className={styles.imageDecor} />
            </div>
          </div>
        </ScrollAnimation>
      </Container>
    </section>
  );
}
