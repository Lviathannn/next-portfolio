import { useThemeStore } from "@/utils/store/ThemeStore";
import { Moon } from "lucide-react";
import { useShallow } from "zustand/react/shallow";
import { Switch } from "./switch";

type Props = {};

export default function ThemeButton({}: Props) {
  const { darkMode, toogleDarkMode } = useThemeStore(
    useShallow((state) => {
      return {
        darkMode: state.darkMode,
        toogleDarkMode: state.toogleDarkMode,
      };
    }),
  );

  return (
    <div className="absolute bottom-20 flex w-full flex-col gap-5 text-slate-500 dark:text-white">
      <div className="flex items-center text-lg">
        <h2 className="flex items-center gap-3">
          <Moon size={25} />
          DarkMode
        </h2>
        <div className="flex w-full justify-end pr-16">
          <Switch onClick={toogleDarkMode} defaultChecked={darkMode} />
        </div>
      </div>
    </div>
  );
}
