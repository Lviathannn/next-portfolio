import { menuItems, socials } from "@/constants/dummy";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="px-container relative z-20 flex flex-col gap-10 bg-slate-100/50 py-10 text-white dark:bg-primary/70 lg:py-14">
      <div className=" flex flex-col justify-between gap-10 lg:flex-row">
        <div className="flex flex-col">
          <h2 className="text-primary-text text-xl font-semibold text-teal-400">
            Muhammad Asrul Rifa Anwar
          </h2>
          <h3 className="text-primary-text text-medium text-slate-500 dark:text-white">
            Junior FrontEnd Developer
          </h3>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-primary-text text-xl text-slate-500 dark:text-white">
            Navigations
          </h2>
          <div className="text-primary-text flex flex-col gap-3 text-slate-500 dark:text-white">
            {menuItems.map((item, index) => (
              <Link
                className="flex cursor-pointer items-center gap-2 font-normal hover:text-teal-400"
                href={`${item.href}`}
                key={index}
              >
                <item.Icon size={16} />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-primary-text text-xl text-slate-500 dark:text-white">
            Social Media
          </h2>
          <div className="text-primary-text flex flex-col gap-3 text-slate-500 dark:text-white">
            {socials.map((item, index) => (
              <Link
                className="flex cursor-pointer items-center gap-2 font-normal hover:text-teal-400"
                href={`${item.href}`}
                key={index}
                target="_blank"
              >
                <item.Icon size={16} />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 text-slate-500 dark:text-white">
          <h2 className="text-primary-text text-xl">Information</h2>
          <div className="text-primary-text flex flex-col gap-1 font-light">
            <span>Regol - Bandung</span>
            <span>Jawa Barat - Indonesia</span>
            <span>+6281952801343</span>
            <span>muhammad.asrul.rifa@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="text-slate-500 dark:text-white">
        <p className="border-t-1 pt-10 text-center ">
          Built With ❤️ and 🧋 in 2023
        </p>
        <p className="mt-4 text-center text-sm">
          Inspired By{" "}
          <Link
            href="https://rezaa.me"
            className="text-teal-600"
            target="_blank"
          >
            @Rezaa
          </Link>
        </p>
      </div>
    </footer>
  );
}
