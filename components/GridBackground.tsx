import { cn } from "@/lib/utils";
import React from "react";

interface GridBackgroundProps {
  children: React.ReactNode;
  background?: string;
}

export function GridBackground({ children, background }: GridBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex h-[531px] w-full items-center justify-center bg-grid-white/[0.2]",
        background,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]",
          background,
        )}
      ></div>
      {children}
    </div>
  );
}
