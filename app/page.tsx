import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-container py-container">
      {/* Home Section */}
      <section className="w-full pt-20">
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
              Transforming Pixels into Poetry, Conjuring Captivating Web
              Journeys as a Front-End Wizard
            </p>
            <Button className="mt-5 bg-secondary text-black shadow-2xl hover:bg-accent_1 dark:bg-secondary dark:hover:bg-accent_1">
              Explore
            </Button>
          </div>
          {/* Terminal */}
          <div className="terminal">
            <div className="absolute left-2 top-2 flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <div className="absolute left-0 top-6 flex h-5 w-full justify-between px-3">
              <p className="flex items-center gap-1 text-sm font-light text-secondary">
                <ArrowRight size={12} className="text-accent_3 " />
                asrul ~
              </p>
              <p className=" flex items-center gap-2 text-sm font-light text-secondary">
                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-secondary text-xs">
                  N
                </span>{" "}
                14.0.3
              </p>
            </div>
          </div>
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
        <div className="absolute -left-10 top-0 -z-30 h-52 w-52 animate-scale rounded-full bg-secondary blur-[90px] " />
        <div className="absolute bottom-10 right-60 -z-30 h-44 w-44 animate-scale rounded-full bg-secondary blur-[60px] md:-bottom-44 md:right-96 md:h-64 md:w-64 lg:bottom-40" />
        <div className="absolute -bottom-20 right-10 -z-30 h-44 w-44 animate-scale rounded-full bg-accent_1 blur-[60px] delay-1000 md:bottom-0 md:right-44 md:h-64 md:w-64 lg:bottom-72" />
      </section>
    </main>
  );
}
