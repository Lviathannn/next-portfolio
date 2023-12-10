import Image from "next/image";
import { Badge } from "../ui/badge";
import { Github, Link2 } from "lucide-react";
import Link from "next/link";
import { projectCardProps } from "@/types/type";

export default function ProjectCard({
  title,
  image,
  tags,
  github,
  demo,
}: projectCardProps) {
  return (
    <div className="flex w-full flex-col gap-4 overflow-hidden rounded-xl bg-dark/25 pb-5 backdrop-blur-xl">
      <div className="relative aspect-video w-full">
        <Image
          src={`/projects/${image}`}
          alt="Project 1"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col  gap-2 px-5 text-white">
        <h2 className="font-semibold">{title}</h2>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => {
            if (index <= 2) {
              return (
                <Badge
                  variant="outline"
                  className="bg-secondary/50 font-normal backdrop-blur-sm"
                  key={tag}
                >
                  {tag}
                </Badge>
              );
            } else if (index == 3 && tags.length > 3) {
              return (
                <Badge
                  variant="outline"
                  className="bg-secondary/50 font-normal backdrop-blur-sm"
                  key={tag}
                >
                  {tags.length - 3} + more
                </Badge>
              );
            }
          })}
        </div>
        <div className="flex gap-5">
          <Link
            href={github}
            target="_blank"
            className="mt-2 flex items-center gap-1 text-sm text-white hover:text-secondary"
          >
            <Github size={18} />
            Repository
          </Link>
          <Link
            href={demo}
            target="_blank"
            className="mt-2 flex items-center gap-1 text-sm text-white hover:text-secondary"
          >
            <Link2 size={18} />
            Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
