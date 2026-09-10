import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  /** Stagger in seconds. Kept small — anything past ~0.25s reads as lag. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
};

/**
 * Server component. Renders its children at their resting state and marks the
 * wrapper for the reveal animation. If JavaScript never runs, the content is
 * still there and still visible — the animation is the enhancement, not the
 * gate. See the [data-reveal] rules in globals.css.
 */
export function Reveal({ children, delay = 0, className, as: Tag = "div" }: Props) {
  return (
    <Tag
      data-reveal=""
      style={delay ? ({ "--reveal-delay": `${Math.round(delay * 1000)}ms` } as React.CSSProperties) : undefined}
      className={cn(className)}
    >
      {children}
    </Tag>
  );
}
