import React from "react";
import clsx from "clsx";

export function Card({ className, children, hover = false, ...props }) {
  return (
    <div
      className={clsx(
        "bg-surface-container-lowest rounded-xl overflow-hidden shadow-level-1 transition-all duration-300",
        hover && "hover:shadow-level-2 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
