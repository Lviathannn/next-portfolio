import GithubStat from "@/components/features/gridcard/GithubStat";
import LeetcodeStat from "@/components/features/gridcard/LeetcodeStat";
import SkillGridCard from "@/components/features/gridcard/SkillGridCard";
import WakatimeStat from "@/components/features/gridcard/WakatimeStat";

type Props = {};

export default function StatSection({}: Props) {
  return (
    <section className="flex flex-col items-center gap-5">
      <div className="mx-auto grid w-full auto-cols-auto auto-rows-auto grid-cols-1 gap-5 sm:grid-cols-bento-sm sm:grid-rows-2 md:grid-cols-bento-md lg:grid-cols-bento-lg xl:w-[80%]">
        <SkillGridCard />
        <GithubStat />
        <WakatimeStat />
      </div>
      <LeetcodeStat />
    </section>
  );
}
