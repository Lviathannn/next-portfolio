"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Props = {
  filter: "language" | "library" | "tools";
};

export default function FilterButton({ filter }: Props) {
  const router = useRouter();
  const handleClick = (filter: "language" | "library" | "tools") => {
    router.push(`/skills?filter=${filter}`, {
      scroll: false,
    });
  };

  return (
    <div className="flex w-full max-w-full items-center space-x-1 rounded-xl p-1 backdrop-blur-sm dark:bg-dark/20 lg:w-[50%]">
      <Button
        className={`w-full rounded-xl !bg-transparent  py-6 text-sm font-medium text-slate-500 hover:!bg-accent_hover hover:text-white dark:text-white ${
          filter === "language" && "!bg-accent_primary !text-dark"
        }`}
        onClick={() => {
          handleClick("language");
        }}
      >
        Language
      </Button>
      <Button
        className={`w-full rounded-xl !bg-transparent  py-6 text-sm font-medium text-slate-500 hover:!bg-accent_hover hover:text-white dark:text-white ${
          filter === "library" && "!bg-accent_primary !text-dark"
        }`}
        onClick={() => handleClick("library")}
      >
        Library
      </Button>
      <Button
        className={`w-full rounded-xl !bg-transparent  py-6 text-sm font-medium text-slate-500 hover:!bg-accent_hover hover:text-white dark:text-white ${
          filter === "tools" && "!bg-accent_primary !text-dark"
        }`}
        onClick={() => handleClick("tools")}
      >
        Tools
      </Button>
    </div>
  );
}
