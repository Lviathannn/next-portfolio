import Terminal from "@/components/home/terminal/Terminal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Blob from "../ui/Blob";
import { Download } from "lucide-react";
import Marquee from "react-fast-marquee";
import { Paralax } from "./Paralax";
type Props = {};

export default function MainSection({}: Props) {
  return (
    <section className="relative w-full">
      <div className="relative z-10 flex w-full flex-col items-center justify-between gap-20 lg:flex-row">
        {/* Hero Title */}
        <div className="w-full ">
          <h1 className="text-[45px] font-extrabold leading-none text-slate-700 drop-shadow-[0_0_15px_rgba(200,218,189,0.5)] dark:text-white dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] sm:text-[60px] md:text-[64px] lg:text-[80px]">
            Hello,
            <br />
            I’m Asrul{" "}
            <span className="wave inline-block text-[50px] md:text-[60px]">
              👋
            </span>
          </h1>
          <h2 className="my-2 text-2xl font-semibold text-slate-600 drop-shadow-[0_0_15px_rgba(200,218,189,0.5)] dark:text-slate-300 lg:text-3xl">
            Junior FrontEnd Developer
          </h2>
          <p className="mt-2 max-w-lg text-slate-500 dark:text-slate-300 lg:text-xl">
            Transforming Pixels into Poetry, Conjuring Captivating Web Journeys
            as a Front-End Wizard
          </p>
          <Button className="!dark:text-dark mt-5 flex items-center gap-2 bg-secondary shadow-2xl hover:bg-accent_1 dark:bg-secondary dark:hover:bg-accent_1">
            <a href="/myCV.pdf" download="myCV.pdf" className="flex gap-3">
              Download CV
              <Download size={18} />
            </a>
          </Button>
        </div>
        {/* Terminal */}
        <Terminal />
      </div>
      {/* Built With */}
      <Marquee className="z-10 mt-28" autoFill>
        <Image
          src={"/nextjs.svg"}
          alt="Next JS Logo"
          width={180}
          height={180}
          className="mx-10 opacity-30 invert dark:invert-0"
        />
        <Image
          src={"/tailwind.svg"}
          alt="Tailwind CSS Logo"
          width={250}
          height={250}
          className="mx-10 opacity-30 invert dark:invert-0"
        />
        <Image
          src={"/shadcn.svg"}
          alt="Shadcn UI Logo"
          width={250}
          height={250}
          className="mx-10 opacity-30 invert dark:invert-0"
        />
        <Image
          src={"/framer.svg"}
          alt="Framer Motion Logo"
          width={250}
          height={250}
          className="mx-10 opacity-30 invert dark:invert-0"
        />
      </Marquee>
      {/* Blob */}
      <Blob className="-left-20 -top-10 h-72 w-72 bg-secondary blur-[90px] lg:-left-44 lg:h-96 lg:w-96 lg:blur-[120px]" />
      <Blob className="-right-20 bottom-64 h-64 w-64 bg-accent_1 blur-[90px]   lg:-right-60 lg:bottom-40 lg:h-96 lg:w-96 lg:blur-[120px]" />
      <Paralax />
    </section>
  );
}
