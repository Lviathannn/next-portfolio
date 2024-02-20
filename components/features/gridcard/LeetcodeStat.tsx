import { Progress } from "@/components/ui/progress";
import { GridCard } from "./GridCard";

type Props = {};

export default function LeetcodeStat({}: Props) {
  return (
    <GridCard className="relative w-full xl:w-[80%] " meteorNumber={50}>
      <article className="z-10 w-full px-5 py-8">
        <h1 className="text-2xl font-semibold text-teal-400">Leetcode</h1>
        <p className="flex items-center gap-2 text-slate-300">
          Rank
          <strong className="flex gap-1 text-lg text-white">
            2,443,9891 <span className="text-sm text-white">th</span>
          </strong>
        </p>
        <div className="mt-2 flex w-full justify-between text-slate-300">
          <p>
            <span className="font-semibold text-white">0</span> Submission (
            {new Date().getFullYear()})
          </p>
          <p>
            <span className="font-semibold text-white">0</span> Solved
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <div className="flex w-full justify-between">
              <p className="text-slate-300">Easy</p>
              <p className="text-slate-300">
                <span className="font-medium text-white">11</span> / 762
              </p>
            </div>
            <Progress
              value={10}
              max={100}
              className="bg-teal-700"
              childClassName="bg-teal-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex w-full justify-between">
              <p className="text-slate-300">Medium</p>
              <p className="text-slate-300">
                <span className="font-medium text-white">11</span> / 762
              </p>
            </div>
            <Progress
              value={10}
              max={100}
              className="bg-yellow-700"
              childClassName="bg-yellow-400"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex w-full justify-between">
              <p className="text-slate-300">Easy</p>
              <p className="text-slate-300">
                <span className="font-medium text-white">11</span> / 762
              </p>
            </div>
            <Progress
              value={10}
              max={100}
              className="bg-red-700"
              childClassName="bg-red-400"
            />
          </div>
        </div>
      </article>
    </GridCard>
  );
}
