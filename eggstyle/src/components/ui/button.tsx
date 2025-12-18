import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium font-body ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-egg shadow-yolk hover:shadow-lg hover:-translate-y-0.5",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-lg",
        outline: "border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background rounded-egg",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-egg",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-egg",
        link: "text-primary underline-offset-4 hover:underline",
        // EggStyle custom variants
        hero: "bg-primary text-primary-foreground border-2 border-foreground rounded-egg font-bold uppercase tracking-wider shadow-yolk hover:shadow-lg hover:-translate-y-1 hover:scale-105",
        streetwear: "bg-foreground text-background border-3 border-foreground rounded-egg font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground hover:border-primary",
        yolk: "bg-gradient-to-br from-primary to-accent-foreground text-primary-foreground rounded-egg font-bold shadow-yolk hover:shadow-lg hover:-translate-y-0.5",
        pill: "bg-background text-foreground border-2 border-foreground rounded-full hover:bg-foreground hover:text-background",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-10 text-base",
        xl: "h-16 px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
