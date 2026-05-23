import React from "react";
import clsx from "clsx";

export function SectionHeader({ title, subtitle, className, align = "center" }) {
  return (
    <div className={clsx("mb-12", align === "center" && "text-center", align === "left" && "text-left", className)}>
      <h2 className="font-headline-md text-headline-md text-primary mb-4">{title}</h2>
      {subtitle && (
        <p className={clsx("font-body-md text-body-md text-on-surface-variant", align === "center" && "max-w-2xl mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
