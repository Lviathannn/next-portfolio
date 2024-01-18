import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeStore = {
  theme: string;
  darkMode: boolean;
  setTheme: (theme: string) => void;
  toogleDarkMode: () => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "light",
      darkMode: true,
      setTheme: (theme: string) => set({ theme }),
      toogleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    }),

    { name: "theme-app" },
  ),
);
