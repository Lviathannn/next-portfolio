import React, { Suspense } from "react";
import { skillLogo } from "@/constants/dummy";
import dynamic from "next/dynamic";
import CardSkeleton from "@/components/ui/CardSkeleton";
import { GridCard } from "./GridCard";
const SkillCard = dynamic(() => import("../../ui/SkillCard"), {
  loading: () => <CardSkeleton />,
});

type Props = {};

export default function SkillGridCard({}: Props) {
  return (
    <GridCard
      className="relative max-h-full sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-3"
      meteorNumber={50}
    >
      <div className="z-10 flex w-full flex-col gap-5 py-8 text-white">
        <div className="px-5 text-teal-400 ">
          <h3 className="text-3xl font-semibold">Skill</h3>
          <p className="text-lg text-slate-300">My TechStack</p>
        </div>
        <div
          className="grid max-h-96 w-full grid-cols-3 gap-5 overflow-auto px-5 sm:max-h-[500px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          id="skill"
        >
          {skillLogo.map((imgUrl, index) => (
            <Suspense key={index} fallback={<CardSkeleton />}>
              <SkillCard imgUrl={imgUrl} />
            </Suspense>
          ))}
        </div>
      </div>
    </GridCard>
  );
}
