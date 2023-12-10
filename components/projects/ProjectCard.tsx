import Image from "next/image";
import { Badge } from "../ui/badge";
import { Github, Link2 } from "lucide-react";
import Link from "next/link";
import { projectCardProps } from "@/types/type";
import { Card, CardContent, CardHeader } from "../ui/card";

export default function ProjectCard({
  title,
  image,
  tags,
  github,
  demo,
}: projectCardProps) {
  return (
    <Card className="flex w-full flex-col gap-4 overflow-hidden rounded-xl border-none !bg-dark/25 !pb-0 backdrop-blur-xl">
      <CardHeader className="relative aspect-video w-full">
        <Image
          src={`/projects/${image}`}
          alt="Project 1"
          fill={true}
          className="object-cover"
        />
      </CardHeader>
      <CardContent className="flex flex-col  gap-2 px-5 text-white">
        <h2 className="font-semibold">{title}</h2>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, index) => {
            if (index <= 2) {
              return (
                <div
                  className="rounded-xl bg-secondary/50 px-2 py-1 text-xs font-normal backdrop-blur-sm"
                  key={tag}
                >
                  {tag}
                </div>
              );
            } else if (index == 3 && tags.length > 3) {
              return (
                <div
                  className="rounded-xl bg-secondary/50 px-2 py-1 text-xs font-normal backdrop-blur-sm"
                  key={tag}
                >
                  {tags.length - 3} + more
                </div>
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
      </CardContent>
    </Card>
  );
}
