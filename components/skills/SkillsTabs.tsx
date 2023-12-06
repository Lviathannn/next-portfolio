"use client";
import { useState } from "react";
import SkillsLanguage from "./SkillsLanguage";
import SkillsLibrary from "./SkillsLibrary";
import SkillsTools from "./SkillsTools";
import { Button } from "../ui/button";

type Props = {};

export default function SkillsTabs({}: Props) {
  const [active, setActive] = useState<"language" | "library" | "tools">(
    "language",
  );
  return (
    <div className="flex w-full flex-col items-center gap-10">
      <div className="dark:bg-dark/20 flex w-full max-w-full items-center space-x-1 rounded-xl p-1 backdrop-blur-sm lg:w-[50%]">
        <Button
          className={`w-full rounded-xl !bg-transparent py-6  text-sm font-medium !text-white ${
            active === "language" && "!bg-secondary/70"
          }`}
          onClick={() => setActive("language")}
        >
          Language
        </Button>
        <Button
          className={`w-full rounded-xl !bg-transparent py-6  text-sm font-medium !text-white ${
            active === "library" && "!bg-secondary/70"
          }`}
          onClick={() => setActive("library")}
        >
          Library
        </Button>
        <Button
          className={`w-full rounded-xl !bg-transparent py-6  text-sm font-medium !text-white ${
            active === "tools" && "!bg-secondary/70"
          }`}
          onClick={() => setActive("tools")}
        >
          Tools
        </Button>
      </div>
      {active === "language" ? (
        <SkillsLanguage />
      ) : active === "library" ? (
        <SkillsLibrary />
      ) : (
        <SkillsTools />
      )}
    </div>
  );
}
