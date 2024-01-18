import { useThemeStore } from "@/store/ThemeStore";
import { Moon, Palette } from "lucide-react";

type Props = {};

export default function ThemeButton({}: Props) {
  const toogleDarkMode = useThemeStore((state) => state.toogleDarkMode);
  return (
    <div className="absolute bottom-20 flex w-full flex-col gap-5 text-slate-500 dark:text-white">
      <div className="flex items-center gap-3 text-lg">
        <Moon size={20} />
        <h2 className="">DarkMode</h2>
      </div>
      <div className="">
        <button
          className="rounded-md border-2 border-slate-400 px-2 py-[2px] dark:border-white "
          onClick={toogleDarkMode}
        >
          Dark
        </button>
      </div>
      <div className="flex items-center gap-3 text-lg ">
        <Palette size={20} />
        <h2 className="">Theme</h2>
      </div>
      <div className="flex gap-3">
        <button className="h-7 w-7 rounded-full bg-blue-500"></button>
        <button className="h-7 w-7 rounded-full bg-green-500"></button>
        <button className="h-7 w-7 rounded-full bg-red-500"></button>
        <button className="h-7 w-7 rounded-full bg-emerald-500"></button>
      </div>
    </div>
  );
}
