import Image from "next/image";

type Props = {
  imgUrl: string;
};

export default function SkillCard({ imgUrl }: Props) {
  return (
    <div className="flex aspect-square h-full w-full items-center justify-center rounded-xl bg-primary/20 p-5 xl:p-7 ">
      <Image alt="Skill Logo" src={`/${imgUrl}`} width={200} height={200} />
    </div>
  );
}
