import { useEffect, useRef, useState, type ComponentPropsWithoutRef, type ElementType } from "react";
import { cn } from "@/lib/utils";

const directionClass = {
  up: "slide-in-from-bottom-6",
  left: "slide-in-from-left-8",
  right: "slide-in-from-right-8",
  none: "",
} as const;

type RevealProps<T extends ElementType> = {
  as?: T;
  delay?: number;
  direction?: keyof typeof directionClass;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "delay" | "direction">;

export function Reveal<T extends ElementType = "div">({
  as,
  delay = 0,
  direction = "up",
  className,
  style,
  children,
  ...props
}: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ ...style, animationDelay: visible ? `${delay}ms` : undefined }}
      className={cn(
        "duration-700 ease-out",
        visible ? cn("animate-in fade-in-0", directionClass[direction]) : "opacity-0",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
