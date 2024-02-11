import { Skeleton } from "../../ui/skeleton";

export default function ProjectSkeleton() {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl bg-slate-200 bg-slate-200/40 pb-3 dark:bg-dark/40">
      <Skeleton className="aspect-video w-full bg-slate-300 dark:!bg-dark" />
      <div className="px-4 py-2 ">
        <Skeleton className="h-5 w-32 bg-slate-300 dark:!bg-dark" />
        <div className="my-2">
          <Skeleton className="h-5 w-full bg-slate-300 dark:!bg-dark" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-5 w-24 bg-slate-300 dark:!bg-dark" />
          <Skeleton className="h-5 w-24 bg-slate-300 dark:!bg-dark" />
        </div>
      </div>
    </div>
  );
}
