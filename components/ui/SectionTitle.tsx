import { cn } from "@/utils/utils";

type Props = {
  title: string;
  className?: string;
  tagStyle?: string;
};

export default function SectionTitle({ title, className, tagStyle }: Props) {
  return (
    <h1 className={cn(className)}>
      <span className={cn(tagStyle)}>{"[..."}</span> {title}{" "}
      <span className={cn(tagStyle)}>{"]"}</span>
    </h1>
  );
}
