import { projectCardProps } from "@/types/type";
import { GithubIcon, Link2 } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({
  title,
  image,
  github,
  visit,
  children,
}: projectCardProps) {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl bg-dark/30 pb-3">
      <div className="relative aspect-video w-full">
        <Image src={`/projects/${image}`} fill alt={`${title}`} />
      </div>
      <div className="px-4 py-2 text-white">
        <p className="text-lg font-semibold">{title}</p>
        <div className="my-2 flex flex-wrap gap-1">{children}</div>
        <div className="mt-3 flex gap-5">
          <a
            href={github}
            target="_blank"
            className="flex items-center gap-2 hover:text-secondary"
          >
            <GithubIcon size={18} />
            Repository
          </a>
          <a
            href={visit}
            target="_blank"
            className="flex items-center gap-2 hover:text-secondary"
          >
            <Link2 size={18} />
            Visit
          </a>
        </div>
      </div>
    </div>
  );
}
