import { cn } from "@/lib/utils";

interface LoadingCardProps {
  className?: string;
}

export function LoadingCard({ className }: LoadingCardProps) {
  return (
    <div
      className={cn(
        "w-full rounded-lg bg-gradient-to-r from-muted/60 to-muted",
        "animate-pulse relative overflow-hidden",
        className
      )}
    >
      <div
        className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite]"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
        }}
      />
    </div>
  );
} 