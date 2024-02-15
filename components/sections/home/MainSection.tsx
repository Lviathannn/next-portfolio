import Terminal from "@/components/features/terminal/Terminal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Blob from "../../ui/Blob";
import { Download } from "lucide-react";
type Props = {};

export default function MainSection({}: Props) {
  return (
    <section className="relative w-full">
      <article className="relative z-10 flex w-full flex-col items-center justify-between gap-20 lg:flex-row">
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
          <Button className="!dark:text-dark mt-5 flex items-center gap-2 bg-teal-400 shadow-2xl hover:bg-teal-400 dark:bg-teal-400 dark:hover:bg-teal-400">
            <a href="/myCV.pdf" download="myCV.pdf" className="flex gap-3">
              Download CV
              <Download size={18} />
            </a>
          </Button>
        </div>
        {/* Terminal */}
        <Terminal />
      </article>
      {/* Built With */}
      <Blob className="-left-20 -top-10 h-72 w-72 bg-teal-400 blur-[90px] lg:-left-44 lg:h-96 lg:w-96 lg:blur-[120px]" />
      <Blob className="-right-20 top-44 h-64 w-64 bg-emerald-400 blur-[90px]   lg:-right-60 lg:bottom-40 lg:h-96 lg:w-96 lg:blur-[120px]" />
      <div className="mt-10 flex w-full flex-wrap justify-center gap-10 opacity-40 md:my-20">
        <Image
          alt="Next js"
          src="/nextjs.svg"
          width={180}
          height={100}
          className=" w-[95px] scale-90 dark:invert sm:w-[180px]"
        />
        <Image
          alt="Tailwind CSS"
          src="/tailwindcss.svg"
          width={300}
          height={100}
          className="w-[160px] scale-90 dark:invert sm:w-[300px]"
        />
        <Image
          alt="React Query"
          src="/reactquery.svg"
          width={270}
          height={100}
          className="w-[140px] scale-90 dark:invert sm:w-[270px]"
        />
        <Image
          alt="Contentful"
          src="/contentful.svg"
          width={250}
          height={100}
          className="w-[130px] scale-90 dark:invert sm:w-[250px]"
        />
      </div>
    </section>
  );
}
