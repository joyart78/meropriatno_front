import { cn } from "../../lib/cn";
import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
  className?: string;
}

export function SectionTitle({
  label,
  title,
  subtitle,
  light,
  center,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn(center && styles.center, className)}>
      {label && (
        <p className={cn(styles.label, light && styles["label--light"])}>
          {label}
        </p>
      )}
      <h2 className={cn(styles.title, light && styles["title--light"])}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(styles.subtitle, light && styles["subtitle--light"])}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
