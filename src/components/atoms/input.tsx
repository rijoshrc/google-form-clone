import cn from "@/utils/cn";
import { cva } from "class-variance-authority";
import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "border" | "underline";
  forwardRef?: React.Ref<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  className,
  variant,
  forwardRef,
  ...props
}) => (
  <input
    ref={forwardRef}
    {...props}
    className={cn(inputVariants({ variant, className }))}
  />
);

const inputVariants = cva(
  "px-2 py-1 outline-none focus:border-accent text-sm min-h-[40px] w-full text-primary font-normal dark:bg-input-dark dark:text-input-dark",
  {
    variants: {
      variant: {
        border: "border border-input rounded-sm",
        underline: "border-b border-input",
      },
    },
    defaultVariants: {
      variant: "border",
    },
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
