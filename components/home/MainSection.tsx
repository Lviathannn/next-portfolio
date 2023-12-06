import Terminal from "@/components/home/terminal/Terminal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Blob from "../ui/Blob";

type Props = {};

export default function MainSection({}: Props) {
  return (
    <section className="relative w-full">
      <div className="relative z-10 flex w-full flex-col items-center justify-between gap-20 lg:flex-row">
        {/* Hero Title */}
        <div className="w-full ">
          <h1 className="text-[55px] font-extrabold leading-none text-white sm:text-[60px] md:text-[64px] lg:text-[80px]">
            Hello,
            <br />
            I’m Asrul{" "}
            <span className="wave inline-block text-[50px] md:text-[60px]">
              👋
            </span>
          </h1>
          <h2 className="my-2 text-xl font-semibold text-slate-200 lg:text-2xl">
            Junior FrontEnd Developer
          </h2>
          <p className="mt-2 text-slate-300 lg:text-xl">
            Transforming Pixels into Poetry, Conjuring Captivating Web Journeys
            as a Front-End Wizard
          </p>
          <Button className="mt-5 bg-secondary text-black shadow-2xl hover:bg-accent_1 dark:bg-secondary dark:hover:bg-accent_1">
            Explore
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
          className="aspect-video w-[100px] object-contain opacity-30 sm:w-[120px] md:w-[150px]"
        />
        <Image
          src={"/tailwind.svg"}
          alt="Tailwind CSS Logo"
          width={180}
          height={180}
          className="aspect-video w-[120px] object-contain opacity-30  sm:w-[150px] md:w-[175px] lg:w-[200px]"
        />
        <Image
          src={"/shadcn.svg"}
          alt="Shadcn UI Logo"
          width={180}
          height={180}
          className="aspect-video w-[120px] object-contain opacity-30  sm:w-[150px] md:w-[175px] lg:w-[200px] "
        />
        <Image
          src={"/framer.svg"}
          alt="Framer Motion Logo"
          width={180}
          height={180}
          className="aspect-video w-[120px] object-contain opacity-30  sm:w-[150px] md:w-[175px] lg:w-[200px]"
        />
      </div>
      {/* Blob */}
      <Blob className="-left-20 -top-10 h-64 w-64 bg-secondary blur-[90px] lg:-left-44 lg:h-96 lg:w-96 lg:blur-[120px]" />
      <Blob className="-right-20 bottom-64 h-64 w-64 bg-accent_1 blur-[90px] delay-1000 lg:-right-60 lg:bottom-40 lg:h-96 lg:w-96 lg:blur-[120px]" />
    </section>
  );
}
