import dynamic from "next/dynamic";
import ProjectSkeleton from "./ProjectSkeleton";
import { projects } from "@/data/dummy";
const DynamicProjectCard = dynamic(() => import("./ProjectCard"), {
  loading: () => <ProjectSkeleton />,
});

type Props = {};

export default function ProjectsList({}: Props) {
  return (
    <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
      {projects?.map((project: any) => (
        <DynamicProjectCard
          title={project.title}
          image={project.image}
          tags={project.tags}
          github={project.gitHub}
          visit={project.demo}
          key={project.title}
        >
          {project.tags.map((tag: string, index: number) => {
            if (index <= 2) {
              return (
                <span
                  key={tag}
                  className="rounded-lg bg-teal-400 px-2 py-1 text-xs font-medium text-white"
                >
                  {tag}
                </span>
              );
            } else if (index === 3) {
              return (
                <span
                  key={tag}
                  className="rounded-lg bg-teal-400 px-2 py-1 text-xs font-medium text-white"
                >
                  {project.tags.length - 3} + more
                </span>
              );
            }
          })}
        </DynamicProjectCard>
      ))}
    </div>
  );
}
