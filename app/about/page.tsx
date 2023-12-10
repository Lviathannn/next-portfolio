import ProjectCard from "@/components/projects/ProjectCard";
import Blob from "@/components/ui/Blob";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { projects, socials } from "@/lib/dummy";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="px-container py-container min-h-screen">
      <section className="flex flex-col items-center gap-16">
        <SectionTitle
          className="text-[40px] font-semibold text-white"
          title="About Me"
          tagStyle="text-secondary font-bold"
        />
        <div className="flex w-full flex-col-reverse items-center justify-evenly gap-14 lg:flex-row">
          <div className="max-w-xl">
            <h1 className="max-w-lg text-[48px] font-semibold leading-none text-white">
              Muhammad Asrul Rifa Anwar
            </h1>
            <p className="mt-5 text-slate-300">
              I am a junior frontend developer with a primary focus on React.js,
              Next.js, Tailwind CSS, and Framer Motion technologies. I am an
              individual who is diligent and passionate about the learning
              process, with the ultimate goal of realizing my aspirations as a
              professional frontend developer.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <Button className="flex items-center gap-2 bg-secondary !text-dark shadow-2xl hover:bg-accent_1 dark:bg-secondary dark:hover:bg-accent_1">
                Download CV
                <Download size={18} />
              </Button>
              {socials.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  size="icon"
                  className="border-none !bg-transparent text-white hover:!text-secondary"
                >
                  <Link href={social.href} target="_blank">
                    <social.Icon size={18} />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl object-contain">
            <Image src="/aboutme.jpg" alt="My Image" fill />
          </div>
        </div>
        <Blob className="fixed -left-20 -top-10 h-64 w-64 bg-secondary blur-[90px] lg:-left-44 lg:h-96 lg:w-96 lg:blur-[120px]" />
        <Blob className="fixed -right-20 bottom-0 h-64 w-64 bg-accent_1 blur-[90px] delay-1000 lg:-right-60 lg:h-96 lg:w-96 lg:blur-[120px]" />
      </section>
    </main>
  );
}
