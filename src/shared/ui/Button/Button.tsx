"use client";

import { type ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/cn";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "purple";
  as?: "button" | "a";
  href?: string;
}

export function Button({
  className,
  variant = "primary",
  as = "button",
  href,
  children,
  ...rest
}: ButtonProps) {
  const cls = cn(styles.btn, styles[`btn--${variant}`], className);

  if (as === "a" && href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
