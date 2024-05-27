import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "text-big-caps normal-case flex h-[100px] w-full text-center outline-0 rounded-[10px] border border-black bg-transparent px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-black placeholder:uppercase disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
