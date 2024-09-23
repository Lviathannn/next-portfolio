import FilterButton from "./FilterButton";
import LanguageSkills from "@/components/sections/skills/LanguageSkills";
import LibrarySkills from "@/components/sections/skills/LibrarySkills";
import ToolsSkills from "@/components/sections/skills/ToolsSkill";

type Props = {
  filter: "language" | "library" | "tools";
};

export default async function SkillsTabs({ filter }: Props) {
  return (
    <div className="flex w-full flex-col items-center gap-10">
      <FilterButton filter={filter} />
      <div className="grid w-full grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
        {filter === "language" ? (
          <LanguageSkills />
        ) : filter === "library" ? (
          <LibrarySkills />
        ) : (
          <ToolsSkills />
        )}
      </div>
    </div>
  );
}
