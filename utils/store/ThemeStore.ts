import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeStore = {
  darkMode: boolean;
  toogleDarkMode: () => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      darkMode: true,
      toogleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    }),

    { name: "theme-app" },
  ),
);
