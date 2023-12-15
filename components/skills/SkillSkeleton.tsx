import { Skeleton } from "../ui/skeleton";

type Props = {};

export default function SkillSkeleton({}: Props) {
  return (
    <div className="z-10 flex flex-col items-center justify-center rounded-md p-5 backdrop-blur-sm dark:bg-dark/20 md:py-10">
      <Skeleton className="aspect-square w-full max-w-[100px] !bg-dark md:max-w-[120px]"></Skeleton>
      <Skeleton className="mt-5 h-5 w-[70%] !bg-dark"></Skeleton>
    </div>
  );
}
