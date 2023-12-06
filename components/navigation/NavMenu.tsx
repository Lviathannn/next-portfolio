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
import { aboutLinks } from "@/lib/dummy";

export function NavMenu() {
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
        <NavigationMenuItem className="">
          <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
          <NavigationMenuContent className="max-w-xs dark:bg-primary">
            <ul className="flex max-w-xs flex-col gap-5 p-2">
              {aboutLinks.map((link) => (
                <Link href={link.href} key={link.title}>
                  <li className="hover:bg-dark flex w-[200px] items-center gap-3 rounded-md bg-transparent p-2">
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
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
