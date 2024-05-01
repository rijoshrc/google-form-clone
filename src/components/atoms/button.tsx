import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import cn from "@/utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  forwardRef?: React.Ref<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  asChild = false,
  forwardRef,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={forwardRef}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

Button.displayName = "Button";

export { Button, buttonVariants };

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-btn text-primary-btn hover:bg-primary-btn/50 dark:bg-primary-btn-dark dark:hover:dark:bg-primary-btn-dark/50",
        destructive:
          "bg-destructive-btn text-destructive-btn hover:bg-destructive-btn/50",
        outline:
          "border border-outline-btn hover:border-outline-btn/50 text-outline-btn dark:text-outline-btn-dark dark:border-outline-btn-dark hover:dark:text-outline-btn-dark/50 hover:dark:border-outline-btn-dark/50",
        secondary:
          "bg-secondary-btn text-secondary-btn hover:bg-secondary-btn/50",
        ghost:
          "hover:text-ghost-btn dark:text-ghost-btn-dark hover:bg-ghost-btn hover:dark:bg-ghost-btn-dark",
        link: "text-link-btn underline-offset-4 hover:underline dark:text-link-btn-dark",
      },
      size: {
        sm: "h-9 rounded-md px-3",
        md: "h-10 px-4 py-2",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 px-3 flex gap-1",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);
