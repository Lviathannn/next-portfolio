"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/utils/utils";

const Progress = React.forwardRef(
  ({ className, value, childClassName, ...props }: any, ref) => {
    return (
      <ProgressPrimitive.Root
        ref={ref}
        aria-label="Progress bar"
        className={cn(
          "relative h-2 w-full overflow-hidden rounded-full bg-slate-100 ",
          className,
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn(
            `${childClassName} h-full w-full flex-1 transition-all`,
          )}
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
    );
  },
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
