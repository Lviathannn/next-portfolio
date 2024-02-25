import React from "react";

export function GridCard({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={className}>
      <div className="to-accent_secondary absolute inset-0 -z-10 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 blur-[100px]" />
      <div className="relative flex h-full w-full flex-col  items-start justify-start overflow-hidden rounded-2xl bg-primary/80 shadow-xl">
        {children}
      </div>
    </div>
  );
}
