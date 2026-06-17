import { Container } from "../../../shared/ui/Container";
import {
  NAV_LINKS,
  COMPANY,
  SOCIAL_LINKS,
} from "../../../shared/config/constants";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div>
            <div className={styles.brand}>
              {COMPANY.name}
              <span className={styles.brandDot}>.</span>
            </div>
            <p className={styles.desc}>
              Организация мероприятий любого масштаба. Превращаем ваши идеи в
              незабываемые события.
            </p>
          </div>
          <div>
            <h4 className={styles.heading}>Навигация</h4>
            <div className={styles.links}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  className={styles.link}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className={styles.heading}>Услуги</h4>
            <div className={styles.links}>
              <a href="#" className={styles.link}>
                Свадьбы
              </a>
              <a href="#" className={styles.link}>
                Корпоративы
              </a>
              <a href="#" className={styles.link}>
                Дни рождения
              </a>
              <a href="#" className={styles.link}>
                Конференции
              </a>
            </div>
          </div>
          <div>
            <h4 className={styles.heading}>Контакты</h4>
            <div className={styles.links}>
              <a
                href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`}
                className={styles.link}
              >
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className={styles.link}>
                {COMPANY.email}
              </a>
              <a href="#" className={styles.link}>
                {COMPANY.address}
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>{COMPANY.copyright}</span>
          <div className={styles.bottomSocials}>
            {SOCIAL_LINKS.filter((_, i) => i < 3).map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
