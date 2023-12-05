"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Link from "next/link";
import { AlignLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { menuItems } from "@/lib/dummy";
import { NavMenu } from "./NavMenu";

type Props = {};

export default function Navbar({}: Props) {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        `px-container fixed top-0 z-40 flex w-full  justify-between py-3 text-white transition-colors duration-700 ${
          isAtTop ? "bg-transparent" : "bg-primary/80 backdrop-blur-xl "
        }}`,
      )}
    >
      <Link href={"/"} className="relative flex items-center justify-center">
        <h2 className="text-xl font-semibold before:absolute before:-left-1 before:-z-30 before:h-3 before:w-3 before:rounded-full before:bg-secondary">
          Asrul
        </h2>
        <span className="font-bold text-secondary">.()</span>
      </Link>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignLeft />
          </SheetTrigger>
          <SheetContent>
            <ul className="flex flex-col gap-7">
              {menuItems.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-5 text-lg text-white`}
                  >
                    <div
                      className={cn(
                        `flex h-11 w-11 items-center justify-center rounded-full border-2 text-white`,
                      )}
                    >
                      <link.Icon size={18} className={cn("")} />
                    </div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden lg:block">
        <NavMenu />
      </div>
    </nav>
  );
}
