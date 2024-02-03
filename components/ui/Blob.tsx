import { cn } from "@/utils/utils";

type Props = {
  className: string;
};

export default function Blob({ className }: Props) {
  return (
    <div
      className={cn(`absolute -z-30 animate-scale rounded-full ${className}`)}
    />
  );
}
