import Terminal from "@/components/home/terminal/Terminal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Blob from "../ui/Blob";
import { Download } from "lucide-react";

type Props = {};

export default function MainSection({}: Props) {
  return (
    <section className="relative w-full">
      <div className="relative z-10 flex w-full flex-col items-center justify-between gap-20 lg:flex-row">
        {/* Hero Title */}
        <div className="w-full ">
          <h1 className="text-[45px] font-extrabold leading-none text-slate-700 dark:text-white sm:text-[60px] md:text-[64px] lg:text-[80px]">
            Hello,
            <br />
            I’m Asrul{" "}
            <span className="wave inline-block text-[50px] md:text-[60px]">
              👋
            </span>
          </h1>
          <h2 className="my-2 text-2xl font-semibold text-slate-500 dark:text-slate-300 lg:text-3xl">
            Junior FrontEnd Developer
          </h2>
          <p className="mt-2 max-w-lg text-slate-400 lg:text-xl">
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
      <div className="z-10 mt-28 flex flex-wrap justify-evenly gap-x-10">
        <Image
          src={"/nextjs.svg"}
          alt="Next JS Logo"
          width={120}
          height={120}
          className="aspect-video w-[80px] object-contain opacity-30  invert dark:invert-0 sm:w-[120px] md:w-[150px]"
        />
        <Image
          src={"/tailwind.svg"}
          alt="Tailwind CSS Logo"
          width={180}
          height={180}
          className="aspect-video w-[150px] object-contain opacity-30  invert dark:invert-0 sm:w-[220px]"
        />
        <Image
          src={"/shadcn.svg"}
          alt="Shadcn UI Logo"
          width={180}
          height={180}
          className="aspect-video w-[130px] object-contain opacity-30 invert dark:invert-0  sm:w-[220px]  "
        />
        <Image
          src={"/framer.svg"}
          alt="Framer Motion Logo"
          width={180}
          height={180}
          className="aspect-video w-[130px] object-contain opacity-30 invert dark:invert-0  sm:w-[220px] "
        />
      </div>
      {/* Blob */}
      <Blob className="-left-20 -top-10 h-72 w-72 bg-secondary blur-[90px] lg:-left-44 lg:h-96 lg:w-96 lg:blur-[120px]" />
      <Blob className="-right-20 bottom-64 h-64 w-64 bg-accent_1 blur-[90px] delay-1000 lg:-right-60 lg:bottom-40 lg:h-96 lg:w-96 lg:blur-[120px]" />
    </section>
  );
}
