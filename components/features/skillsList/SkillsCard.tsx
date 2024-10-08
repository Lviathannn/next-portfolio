import { SkillCardProps } from "@/@types/type";
import Image from "next/image";

export default function SkillsCard({ title, logo }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden rounded-xl bg-slate-200/40  p-5 dark:bg-dark/40 md:py-10">
      <div className="relative aspect-square w-full max-w-[100px]">
        <Image
          src={logo}
          fill
          sizes="100vw"
          alt={`${title}`}
          className="object-contain"
        />
      </div>
      <p className="mt-5 font-medium text-slate-500 dark:text-white">{title}</p>
    </div>
  );
}
