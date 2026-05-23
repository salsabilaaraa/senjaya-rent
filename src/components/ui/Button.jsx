import React from "react";
import clsx from "clsx";

export const Button = React.forwardRef(
  ({ className, variant = "primary", size = "default", asChild = false, children, ...props }, ref) => {
    const Component = asChild ? "a" : "button";
    
    const variants = {
      primary: "bg-primary text-on-primary hover:bg-opacity-90",
      secondary: "bg-secondary-container text-on-secondary-container hover:opacity-90 font-bold",
      outline: "border-2 border-primary text-primary hover:bg-primary hover:text-on-primary",
      ghost: "bg-transparent text-primary hover:bg-surface-variant",
      accent: "bg-[#FFD600] text-primary hover:opacity-90 font-bold", // For WhatsApp
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
          "inline-flex items-center justify-center rounded-lg transition-all duration-300",
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
