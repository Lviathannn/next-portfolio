import { skillsLibrary } from "@/lib/dummy";
import Image from "next/image";
import React from "react";

type Props = {};

export default function SkillsLibrary({}: Props) {
  return (
    <div className="mx-auto grid w-full grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
      {skillsLibrary.map((skill) => (
        <div
          className="dark:bg-dark/20 z-10 flex flex-col items-center justify-center rounded-md px-5 py-10 backdrop-blur-sm sm:py-14 md:py-20"
          key={skill.title}
        >
          <Image
            src={`/${skill.logo}`}
            width={90}
            height={90}
            alt={skill.title}
            className="h-20 w-20"
          />
          <p className="mt-5 text-center font-medium text-white">
            {skill.title}
          </p>
        </div>
      ))}
    </div>
  );
}
