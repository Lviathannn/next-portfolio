import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { aboutLinks } from "@/constants/dummy";
import { Button } from "../ui/button";
import { MoonIcon } from "lucide-react";
import { useThemeStore } from "@/utils/store/ThemeStore";

export function NavMenu() {
  const toogle = useThemeStore((state) => state.toogleDarkMode);
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
          <NavigationMenuContent className="max-w-xs text-slate-500 hover:cursor-pointer dark:bg-primary dark:text-white">
            <ul className="flex max-w-xs flex-col gap-5 p-2">
              {aboutLinks.map((link) => (
                <Link href={link.href} key={link.title} legacyBehavior passHref>
                  <li className="flex w-[200px] items-center gap-3 rounded-md bg-transparent p-2 hover:bg-slate-100 dark:hover:bg-dark">
                    <link.Icon size={25} />
                    <div className="">
                      <h3 className="text-sm font-semibold">{link.title}</h3>
                      <p className="line-clamp-2 max-w-xs text-xs">
                        {link.description}
                      </p>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <Button
        size="icon"
        className="ml-1 h-7 w-7 bg-slate-500 hover:bg-slate-500/70 dark:bg-teal-400 dark:text-white dark:hover:bg-teal-400/70"
        onClick={toogle}
      >
        <MoonIcon size={18} />
      </Button>
    </NavigationMenu>
  );
}
