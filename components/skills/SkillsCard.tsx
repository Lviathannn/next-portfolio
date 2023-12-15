import { SkillCardProps } from "@/types/type";
import Image from "next/image";

export default function SkillCard({ title, logo }: SkillCardProps) {
  return (
    <div className="backd flex flex-col items-center justify-center overflow-hidden rounded-xl bg-dark/40 p-5 md:py-10">
      <div className="relative aspect-square w-full max-w-[100px] md:max-w-[120px]">
        <Image
          src={`/skills/${logo}`}
          fill
          alt={`${title}`}
          className="object-contain"
        />
      </div>
      <p className="mt-5 font-semibold text-white">{title}</p>
    </div>
  );
}
