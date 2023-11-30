import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="px-container py-container">
      {/* Home Section */}
      <section className="w-full pt-20">
        <div className="relative z-10 flex w-full flex-col items-center justify-between gap-20 lg:flex-row">
          {/* Hero Title */}
          <div className="w-full ">
            <h1 className="text-[60px] font-extrabold leading-none text-white md:text-[64px] lg:text-[80px]">
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
            <Button className="mt-5 bg-secondary text-primary hover:bg-accent_1 dark:bg-secondary dark:hover:bg-accent_1">
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
              <p className=" text-sm font-light text-secondary">
                nextjs 14.0.3
              </p>
            </div>
          </div>
        </div>
        {/* Blob */}
        <div className="absolute -left-10 top-0 h-52 w-52 animate-scale rounded-full bg-secondary blur-[90px]" />
      </section>
    </main>
  );
}
