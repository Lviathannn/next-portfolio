import { Skeleton } from "../ui/skeleton";

type Props = {};

export default function SkillSkeleton({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden rounded-xl bg-slate-200/40 p-5 dark:bg-dark/40 md:py-10">
      <Skeleton className="aspect-square w-full max-w-[100px] bg-slate-300 dark:!bg-dark"></Skeleton>
      <Skeleton className="mt-5 h-5 w-[70%] bg-slate-300 dark:!bg-dark"></Skeleton>
    </div>
  );
}
