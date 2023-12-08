import ProjectCard from "@/components/projects/ProjectCard";
import Blob from "@/components/ui/Blob";
import SectionTitle from "@/components/ui/SectionTitle";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="px-container py-container min-h-screen">
      <section className="flex flex-col items-center gap-16">
        <SectionTitle
          className="text-[40px] font-semibold text-white"
          title="My Projects"
          tagStyle="text-secondary font-bold"
        />
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ProjectCard
            title="My Portfolio"
            image="projects-1.png"
            tags={["Next js", "Tailwind CSS", "Shadcn UI", "Framer Motion"]}
            github="https://github.com"
            demo="https://asrul.tech"
          />
          <ProjectCard
            title="My Portfolio"
            image="projects-1.png"
            tags={["Next js", "Tailwind CSS", "Shadcn UI", "Framer Motion"]}
            github="https://github.com"
            demo="https://asrul.tech"
          />
          <ProjectCard
            title="My Portfolio"
            image="projects-1.png"
            tags={["Next js", "Tailwind CSS", "Shadcn UI", "Framer Motion"]}
            github="https://github.com"
            demo="https://asrul.tech"
          />
          <ProjectCard
            title="My Portfolio"
            image="projects-1.png"
            tags={["Next js", "Tailwind CSS", "Shadcn UI", "Framer Motion"]}
            github="https://github.com"
            demo="https://asrul.tech"
          />
          <ProjectCard
            title="My Portfolio"
            image="projects-1.png"
            tags={["Next js", "Tailwind CSS", "Shadcn UI", "Framer Motion"]}
            github="https://github.com"
            demo="https://asrul.tech"
          />
          <ProjectCard
            title="My Portfolio"
            image="projects-1.png"
            tags={["Next js", "Tailwind CSS", "Shadcn UI", "Framer Motion"]}
            github="https://github.com"
            demo="https://asrul.tech"
          />
        </div>
        <Blob className="fixed -left-20 -top-10 h-64 w-64 bg-secondary blur-[90px] lg:-left-44 lg:h-96 lg:w-96 lg:blur-[120px]" />
        <Blob className="fixed -right-20 bottom-0 h-64 w-64 bg-accent_1 blur-[90px] delay-1000 lg:-right-60 lg:h-96 lg:w-96 lg:blur-[120px]" />
      </section>
    </main>
  );
}
