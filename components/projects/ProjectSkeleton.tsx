import { Skeleton } from "../ui/skeleton";

export default function ProjectSkeleton() {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl bg-dark/30 pb-3">
      <Skeleton className="aspect-video w-full !bg-dark" />
      <div className="px-4 py-2 ">
        <Skeleton className="h-5 w-32 !bg-dark" />
        <div className="my-2">
          <Skeleton className="h-5 w-full !bg-dark" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-5 w-24 !bg-dark" />
          <Skeleton className="h-5 w-24 !bg-dark" />
        </div>
      </div>
    </div>
  );
}
