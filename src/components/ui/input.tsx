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
          "text-big-caps flex h-[100px] w-full rounded-[10px] border border-black bg-transparent px-3 py-2 text-center normal-case outline-0 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:uppercase placeholder:text-black disabled:cursor-not-allowed disabled:opacity-50",
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
