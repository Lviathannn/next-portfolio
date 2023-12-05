import { LinksType } from "@/types/type";
import {
  Coffee,
  Github,
  Home,
  Instagram,
  Linkedin,
  Phone,
  Terminal,
  Youtube,
} from "lucide-react";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  const menuItems: LinksType = [
    {
      name: "Home",
      href: "/",
      Icon: Home,
    },
    {
      name: "About",
      href: "/about",
      Icon: Coffee,
    },
    {
      name: "Projects",
      href: "/projects",
      Icon: Terminal,
    },
    {
      name: "Contact",
      href: "/contact",
      Icon: Phone,
    },
  ];
  const socials: LinksType = [
    {
      name: "Github",
      href: "https://github.com/Lviathannn",
      Icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammadasrulrifaanwar/",
      Icon: Linkedin,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/lviathann/",
      Icon: Instagram,
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/@leviathanxid",
      Icon: Youtube,
    },
  ];

  return (
    <footer className="px-container relative z-10 flex flex-col gap-10 bg-primary/70 py-10 text-white  lg:py-14">
      <div className=" flex flex-col justify-between gap-10 md:flex-row">
        <div className="flex flex-col">
          <h2 className="text-primary-text text-xl font-semibold text-secondary">
            Muhammad Asrul Rifa Anwar
          </h2>
          <h3 className="text-primary-text text-medium font-light">
            Junior FrontEnd Developer
          </h3>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-primary-text text-xl">Navigations</h2>
          <div className="text-primary-text flex flex-col gap-3 font-light">
            {menuItems.map((item, index) => (
              <Link
                className="flex cursor-pointer items-center gap-2 font-normal hover:text-secondary"
                href={`/${item.href.toLowerCase()}`}
                key={index}
              >
                <item.Icon size={16} />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-primary-text text-xl">Social Media</h2>
          <div className="text-primary-text flex flex-col gap-3 font-light">
            {socials.map((item, index) => (
              <Link
                className="flex cursor-pointer items-center gap-2 font-normal hover:text-secondary"
                href={`${item.href.toLowerCase()}`}
                key={index}
                target="_blank"
              >
                <item.Icon size={16} />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-primary-text text-xl">Information</h2>
          <div className="text-primary-text flex flex-col gap-1 font-light">
            <span>Regol - Bandung</span>
            <span>Jawa Barat - Indonesia</span>
            <span>+6281952801343</span>
            <span>muhammad.asrul.rifa@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="">
        <p className="border-t-1 pt-10 text-center ">
          Built With ❤️ and 🧋 in 2023
        </p>
        <p className="mt-4 text-center text-sm">
          Inspired By{" "}
          <Link
            href="https://rezaa.me"
            className="text-secondary"
            target="_blank"
          >
            @Rezaa
          </Link>
        </p>
      </div>
    </footer>
  );
}
