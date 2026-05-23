import React from "react";
import clsx from "clsx";

export function Badge({ className, children, variant = "default", icon, ...props }) {
  const variants = {
    default: "bg-[#F0F4F8] text-primary",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    primary: "bg-primary-container text-on-primary-container",
  };

  return (
    <span
      className={clsx(
        "px-3 py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1 w-fit",
        variants[variant],
        className
      )}
      {...props}
    >
      {icon && <span className="material-symbols-outlined text-[16px]">{icon}</span>}
      {children}
    </span>
  );
}
