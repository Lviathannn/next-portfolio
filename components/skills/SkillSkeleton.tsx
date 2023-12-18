import { Skeleton } from "../ui/skeleton";

type Props = {};

export default function SkillSkeleton({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden rounded-xl bg-dark/40 p-5 md:py-10">
      <Skeleton className="aspect-square w-full max-w-[100px] !bg-dark"></Skeleton>
      <Skeleton className="mt-5 h-5 w-[70%] !bg-dark"></Skeleton>
    </div>
  );
}
