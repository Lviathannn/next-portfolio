import { Progress } from "@/components/ui/progress";

type Props = {
  difficulty: string;
  solved: number;
  total: number;
};

export default function LeetCodeProgress({ difficulty, solved, total }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full justify-between">
        <p className="text-slate-300">{difficulty}</p>
        <p className="text-slate-300">
          <span className="font-medium text-white">{solved}</span> / {total}
        </p>
      </div>
      <Progress
        value={solved}
        max={total}
        className={`${
          difficulty === "Easy"
            ? "bg-teal-700"
            : difficulty === "Medium"
              ? "bg-yellow-700"
              : "bg-rose-700"
        }`}
        childClassName={`${
          difficulty === "Easy"
            ? "bg-teal-400"
            : difficulty === "Medium"
              ? "bg-yellow-400"
              : "bg-rose-400"
        }`}
      />
    </div>
  );
}
