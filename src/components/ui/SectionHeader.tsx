import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  invert = false,
}: Props) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-12",
        align === "center"
          ? "text-center max-w-2xl mx-auto"
          : "flex flex-col md:flex-row md:items-end justify-between gap-4",
      )}
    >
      <div className={cn(align === "left" && "max-w-2xl")}>
        {eyebrow && (
          <p className={cn("eyebrow mb-3", invert && "eyebrow-invert")}>{eyebrow}</p>
        )}
        <h2
          className={cn(
            "type-h2",
            invert ? "text-white" : "text-text-primary",
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-3 leading-relaxed",
              invert ? "text-white/70" : "text-text-secondary",
            )}
          >
            {description}
          </p>
        )}
      </div>
      {action && align === "left" && <div className="shrink-0">{action}</div>}
    </div>
  );
}
