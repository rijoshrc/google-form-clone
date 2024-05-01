import cn from "@/utils/cn";
import * as React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  forwardRef?: React.Ref<HTMLTextAreaElement>;
}

const Textarea: React.FC<TextareaProps> = ({
  className,
  forwardRef,
  ...props
}) => {
  return (
    <textarea
      className={cn(
        "px-2 py-1 outline-none focus:border-accent text-sm min-h-[50px] w-full text-primary font-normal dark:bg-input-dark dark:text-input-dark border border-input rounded-sm",
        className
      )}
      ref={forwardRef}
      {...props}
    />
  );
};
Textarea.displayName = "Textarea";

export { Textarea };
