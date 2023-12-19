import { LinksType, ProjectType, SkillType } from "@/types/type";
import {
  Code2,
  Coffee,
  Github,
  Home,
  Instagram,
  Linkedin,
  LucideIcon,
  Terminal,
  Youtube,
} from "lucide-react";

export const menuItems: LinksType = [
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
    name: "Skills",
    href: "/skills",
    Icon: Code2,
  },
  {
    name: "Projects",
    href: "/projects",
    Icon: Terminal,
  },
];
export const socials: LinksType = [
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

export const skillsTools: SkillType = [
  { title: "VS Code", logo: "skills/vscode.png" },
  { title: "Figma", logo: "skills/figma.png" },
  { title: "Git", logo: "skills/git.png" },
  { title: "GitHub", logo: "skills/github.png" },
  { title: "NPM", logo: "skills/npm.png" },
];

export const skillsLanguage: SkillType = [
  { title: "HTML 5", logo: "skills/html.png" },
  { title: "CSS 3", logo: "skills/css.png" },
  { title: "SASS", logo: "skills/sass.png" },
  { title: "JavaScript", logo: "skills/javascript.png" },
  { title: "TypeScript", logo: "skills/typescript.png" },
];

export const skillsLibrary: SkillType = [
  { title: "Tailwind CSS", logo: "skills/tailwindcss.png" },
  { title: "Framer Motion", logo: "skills/framer.png" },
  { title: "React JS", logo: "skills/react.png" },
  { title: "Redux Toolkit", logo: "skills/redux.png" },
  { title: "Next JS", logo: "skills/nextjs.png" },
];

export const aboutLinks: {
  title: string;
  href: string;
  description: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "About Me",
    href: "/about",
    description: "Everything about me",
    Icon: Coffee,
  },
  {
    title: "Skills",
    href: "/skills",
    description: "Technologies I can use",
    Icon: Code2,
  },
  {
    title: "Projects",
    href: "/projects",
    description: "All projects I have worked on",
    Icon: Terminal,
  },
];

export const projects: ProjectType = [
  {
    title: "My Portfolio",
    image: "projects/portfolio.png",
    tags: [
      "Next JS",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
    ],
    gitHub: "https://github.com/Lviathannn/next-portfolio",
    demo: "https://asrul.tech",
  },
  {
    title: "Old Portfolio",
    image: "projects/old-portfolio.png",
    tags: ["React JS", "Tailwind CSS", "Framer Motion", "Vite"],
    gitHub: "https://github.com/Lviathannn/my-portfolio",
    demo: "https://muhammadasrul-v1.vercel.app",
  },
  {
    title: "My Qur'an",
    image: "projects/my-quran.png",
    tags: ["React JS", "Tailwind CSS", "Flowbite", "Vite"],
    gitHub: "https://github.com/Lviathannn/my-quran",
    demo: "https://my-alquran-id.vercel.app/",
  },
  {
    title: "PMII Website",
    image: "projects/pmii.png",
    tags: ["React JS", "Tailwind CSS", "Flowbite", "Vite"],
    gitHub: "https://github.com/Lviathannn/pmii-website",
    demo: "https://www.mediapergerakandarussalamciamis.or.id/",
  },
  {
    title: "Azizah Mukarromah Website",
    image: "projects/web-caleg.png",
    tags: ["Next JS", "Tailwind CSS", "Next UI", "Framer Motion"],
    gitHub: "https://github.com/Lviathannn/web-caleg",
    demo: "https://www.azizahmukarromah.online/",
  },
  {
    title: "Sabreena Contruction",
    image: "projects/sabreena-construction.png",
    tags: [
      "Next JS",
      "Tailwind CSS",
      "Contentful",
      "Flowbite",
      "typescript",
      "Framer Motion",
    ],
    gitHub: "https://github.com/Lviathannn/sabreena-landingpages",
    demo: "https://sabreena-landingpages.vercel.app/",
  },
  {
    title: "Hash Table Implementation",
    image: "projects/hashtable.png",
    tags: ["Next JS", "Tailwind CSS", "Typescript", "Shader UI"],
    gitHub: "https://github.com/Lviathannn/hashtable-implementation",
    demo: "https://hashtable-implementation.vercel.app/",
  },
  {
    title: "Pokedex",
    image: "projects/pokedex.png",
    tags: ["HTML", "Tailwind CSS", "Javascript", "Pokemon API"],
    gitHub: "https://github.com/Lviathannn/pokedex",
    demo: "https://lviathannn.github.io/pokedex/",
  },
];
