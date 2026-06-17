"use client";

import styles from "./BurgerButton.module.css";
import { cn } from "../../../shared/lib/cn";

interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function BurgerButton({ isOpen, onClick }: BurgerButtonProps) {
  return (
    <button
      className={cn(styles.burger, isOpen && styles.active)}
      onClick={onClick}
      aria-label="Меню"
    >
      <span />
      <span />
      <span />
    </button>
  );
}
