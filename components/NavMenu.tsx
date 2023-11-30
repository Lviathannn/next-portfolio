"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "About Me",
    href: "/about",
    description: "Everything about me",
  },
  {
    title: "Skills",
    href: "/skills",
    description: "Technologies I can use",
  },
  {
    title: "Projects",
    href: "/projects",
    description: "All projects I have worked on",
  },
];

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
          <NavigationMenuContent className="max-w-xs bg-primary">
            <ul className="flex max-w-xs flex-col gap-5 p-2">
              {components.map((component) => (
                <Link href={component.href} key={component.title}>
                  <li className="w-[200px] rounded-md bg-transparent p-2 hover:bg-slate-800">
                    <h3 className="text-sm font-semibold">{component.title}</h3>
                    <p className="line-clamp-2 max-w-xs text-xs">
                      {component.description}
                    </p>
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
