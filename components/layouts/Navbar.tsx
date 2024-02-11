"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { AlignLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { menuItems } from "@/data/dummy";
import { NavMenu } from "./NavMenu";
import { usePathname } from "next/navigation";
import useViewportWidth from "@/hooks/useViewportWidth";
import ThemeButton from "../ui/ThemeButton";
import { useThemeStore } from "@/utils/store/ThemeStore";
import { useTheme } from "next-themes";
import { cn } from "@/utils/utils";

type Props = {};

export default function Navbar({}: Props) {
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const screenWidth = useViewportWidth();
  const pathname = usePathname();
  const darkMode = useThemeStore((state) => state.darkMode);
  const { setTheme } = useTheme();

  useEffect(() => {
    setIsAtTop(window.scrollY === 0);
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    document.addEventListener("scroll", handleScroll);
    setOpen(false);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);
  useEffect(() => {
    if (darkMode) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [darkMode, setTheme]);

  return (
    <nav
      className={cn(
        `px-container fixed top-0 z-40 flex w-full  justify-between py-3 text-white transition-colors duration-700 ${
          isAtTop
            ? "bg-transparent"
            : "bg-slate-200/50 backdrop-blur-xl dark:bg-primary/80"
        }`,
      )}
    >
      <Link href={"/"} className="relative flex items-center justify-center">
        <h2 className="text-xl font-semibold text-slate-500 before:absolute before:-left-1 before:-z-30 before:h-3 before:w-3 before:rounded-full before:bg-teal-400 dark:text-white">
          Asrul
        </h2>
        <span className="font-bold text-teal-400">.()</span>
      </Link>
      {/* Mobile */}
      {screenWidth < 1024 ? (
        <div className="">
          <Sheet open={open}>
            <SheetTrigger
              onClick={() => {
                setOpen(true);
              }}
              aria-label="Open Menu"
              className={`${
                open ? "hidden" : "block"
              } text-slate-500 dark:text-white`}
            >
              <AlignLeft />
            </SheetTrigger>
            <SheetContent className="lg:hidden" setOpen={setOpen}>
              <ul className="flex flex-col gap-7">
                {menuItems.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`flex items-center gap-5 text-lg text-slate-500 dark:text-white `}
                    >
                      <div
                        className={cn(
                          `flex h-11 w-11 items-center justify-center rounded-full border-2 border-slate-400 dark:border-white dark:text-white
                          ${
                            pathname === link.href
                              ? "bg-white dark:text-primary"
                              : ""
                          }
                          `,
                        )}
                      >
                        <link.Icon size={18} className={cn("")} />
                      </div>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ThemeButton />
            </SheetContent>
          </Sheet>
        </div>
      ) : (
        <div className="hidden lg:block">
          <NavMenu />
        </div>
      )}
    </nav>
  );
}
