import { Skeleton } from "./skeleton";

type Props = {};

export default function CardSkeleton({}: Props) {
  return (
    <div className="flex aspect-square h-full w-full items-center justify-center rounded-xl bg-primary/20 p-5 xl:p-7 ">
      <Skeleton
        className="h-full w-full bg-primary
      "
      />
    </div>
  );
}
