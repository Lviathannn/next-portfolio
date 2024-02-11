import { projectCardProps } from "@/types/type";
import { GithubIcon, Link2 } from "lucide-react";
import ServeImage from "../../ui/ServeImage";

export default function ProjectCard({
  title,
  image,
  github,
  visit,
  children,
}: projectCardProps) {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl bg-slate-200/50 pb-3 dark:bg-dark/40">
      <div className="relative aspect-video w-full">
        <ServeImage src={`${image}`} alt={title} />
      </div>
      <div className="px-4 py-2 text-slate-500 dark:text-white">
        <p className="text-lg font-semibold">{title}</p>
        <div className="my-2 flex flex-wrap gap-1">{children}</div>
        <div className="mt-3 flex gap-5">
          <a
            href={github}
            target="_blank"
            className="flex items-center gap-2 hover:text-teal-400"
          >
            <GithubIcon size={18} />
            Repository
          </a>
          <a
            href={visit}
            target="_blank"
            className="flex items-center gap-2 hover:text-teal-400"
          >
            <Link2 size={18} />
            Visit
          </a>
        </div>
      </div>
    </div>
  );
}
