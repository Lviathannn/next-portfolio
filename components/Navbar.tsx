import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import {
  AlignLeft,
  Home,
  LucideIcon,
  Coffee,
  Code2,
  Terminal,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {};

type LinksType = {
  name: string;
  href: string;
  Icon: LucideIcon;
  isActive?: boolean;
}[];

const links: LinksType = [
  {
    name: "Home",
    href: "/",
    Icon: Home,
    isActive: true,
  },
  {
    name: "About",
    href: "/about",
    Icon: Coffee,
    isActive: false,
  },
  {
    name: "Skill",
    href: "/skill",
    Icon: Code2,
    isActive: false,
  },
  {
    name: "Projects",
    href: "/projects",
    Icon: Terminal,
    isActive: false,
  },
  {
    name: "Contact",
    href: "/contact",
    Icon: Phone,
    isActive: false,
  },
];

export default function Navbar({}: Props) {
  return (
    <nav className="px-container fixed top-0 z-20 flex w-full justify-between bg-primary/50 py-5 text-white backdrop-blur-xl">
      <div className="">Navbar</div>
      <Sheet>
        <SheetTrigger>
          <AlignLeft />
        </SheetTrigger>
        <SheetContent>
          <ul className="flex flex-col gap-7">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-5 text-lg text-white`}
                >
                  <div
                    className={cn(
                      `flex h-11 w-11 items-center justify-center rounded-full border-2 text-white ${
                        link.isActive
                          ? " bg-white text-primary"
                          : " bg-primary "
                      }}`,
                    )}
                  >
                    <link.Icon
                      size={18}
                      className={cn(
                        `${link.isActive ? "text-primary" : "text-white"}`,
                      )}
                    />
                  </div>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
