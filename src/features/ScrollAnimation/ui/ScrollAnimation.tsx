"use client";

import { useRef, type ReactNode } from "react";
import { useIntersectionObserver } from "../model/useIntersectionObserver";
import { cn } from "../../../shared/lib/cn";
import styles from "./ScrollAnimation.module.css";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollAnimation({
  children,
  className,
  delay,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <div
      ref={ref}
      className={cn(styles.animate, isVisible && styles.visible, className)}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
