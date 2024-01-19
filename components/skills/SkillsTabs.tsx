"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import dynamic from "next/dynamic";
import { skillsLanguage, skillsLibrary, skillsTools } from "@/lib/dummy";
import SkillSkeleton from "./SkillSkeleton";
const SkillsCard = dynamic(() => import("./SkillsCard"), {
  loading: () => <SkillSkeleton />,
});

type Props = {};

export default function SkillsTabs({}: Props) {
  const [active, setActive] = useState<"language" | "library" | "tools">(
    "language",
  );
  return (
    <div className="flex w-full flex-col items-center gap-10">
      <div className="flex w-full max-w-full items-center space-x-1 rounded-xl p-1 backdrop-blur-sm dark:bg-dark/20 lg:w-[50%]">
        <Button
          className={`w-full rounded-xl !bg-transparent py-6  text-sm font-medium text-slate-500 hover:!bg-secondary hover:text-white dark:text-white ${
            active === "language" && "!bg-secondary text-white"
          }`}
          onClick={() => setActive("language")}
        >
          Language
        </Button>
        <Button
          className={`w-full rounded-xl !bg-transparent py-6  text-sm font-medium text-slate-500 hover:!bg-secondary hover:text-white dark:text-white ${
            active === "library" && "!bg-secondary text-white"
          }`}
          onClick={() => setActive("library")}
        >
          Library
        </Button>
        <Button
          className={`w-full rounded-xl !bg-transparent py-6  text-sm font-medium text-slate-500 hover:!bg-secondary hover:text-white dark:text-white ${
            active === "tools" && "!bg-secondary text-white"
          }`}
          onClick={() => setActive("tools")}
        >
          Tools
        </Button>
      </div>
      <div className="grid w-full grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
        {active === "language"
          ? skillsLanguage?.map((skill: { title: string; logo: string }) => (
              <SkillsCard
                title={skill.title}
                key={skill.title}
                logo={skill.logo}
              />
            ))
          : active === "library"
            ? skillsLibrary?.map((skill: { title: string; logo: string }) => (
                <SkillsCard
                  title={skill.title}
                  key={skill.title}
                  logo={skill.logo}
                />
              ))
            : skillsTools?.map((skill: { title: string; logo: string }) => (
                <SkillsCard
                  title={skill.title}
                  key={skill.title}
                  logo={skill.logo}
                />
              ))}
      </div>
    </div>
  );
}
