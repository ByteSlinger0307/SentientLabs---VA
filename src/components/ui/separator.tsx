"use client";

import * as React from "react";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export const Separator = React.memo(({ 
  orientation = "horizontal",
  className = ""
}: SeparatorProps) => {
  return (
    <div
      className={`
        ${orientation === "horizontal" ? "h-px w-full" : "w-px h-full"}
        bg-border-soft
        ${className}
      `}
      role="separator"
      aria-orientation={orientation}
    />
  );
});

Separator.displayName = "Separator";