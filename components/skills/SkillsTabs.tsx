import { skillsData } from "@/lib/dummy";
import Image from "next/image";

type Props = {};

export default function SkillsTabs({}: Props) {
  return (
    <div className="mx-auto grid w-full grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 xl:grid-cols-4">
      {skillsData.map((skill) => (
        <div
          className=" z-10 flex flex-col items-center justify-center rounded-md bg-primary px-5 py-10 backdrop-blur-xl dark:bg-gray-900/10 sm:py-14 md:py-20"
          key={skill.title}
        >
          <Image
            src={`/${skill.logo}`}
            width={90}
            height={90}
            alt={skill.title}
            className="h-20 w-20"
          />
          <h3 className="mt-5 text-center text-xl font-semibold text-white">
            {skill.title}
          </h3>
        </div>
      ))}
    </div>
  );
}
