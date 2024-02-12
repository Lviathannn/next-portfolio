import React from "react";
import { Meteors } from "../../ui/Meteors";

export function MeteorCard({
  className,
  meteorNumber,
  children,
}: {
  className?: string;
  meteorNumber: number;
  children?: React.ReactNode;
}) {
  return (
    <div className={className}>
      <div className="absolute inset-0 -z-10 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-emerald-400 blur-[100px]" />
      <div className="relative flex h-full flex-col items-start  justify-start overflow-hidden rounded-2xl bg-primary/80 px-5 py-8 shadow-xl">
        {children}
        <Meteors number={meteorNumber} />
      </div>
    </div>
  );
}