import React from "react";
import clsx from "clsx";

export const Button = React.forwardRef(
  ({ className, variant = "primary", size = "default", asChild = false, children, ...props }, ref) => {
    const Component = asChild ? "a" : "button";
    
    const variants = {
      primary: "bg-primary text-on-primary hover:bg-primary/95 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
      secondary: "bg-secondary-container text-on-secondary-container hover:bg-secondary-container/90 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] font-bold",
      outline: "border-2 border-primary text-primary hover:bg-primary hover:text-on-primary hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
      ghost: "bg-transparent text-primary hover:bg-surface-variant hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
      accent: "bg-[#FFD600] text-primary hover:bg-[#FFE033] hover:shadow-lg hover:shadow-[#FFD600]/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] font-bold", // For WhatsApp
    };

    const sizes = {
      default: "px-6 py-3 font-label-md text-label-md",
      sm: "px-4 py-2 font-label-sm text-label-sm",
      lg: "px-8 py-4 font-label-md text-label-md",
      icon: "p-4",
    };

    return (
      <Component
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center rounded-lg transition-all duration-300 cursor-pointer select-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = "Button";
