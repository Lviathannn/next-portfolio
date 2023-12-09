import { LinksType, ProjectType, SkillType } from "@/types/type";
import {
  Code2,
  Coffee,
  Github,
  Home,
  Instagram,
  Linkedin,
  LucideIcon,
  Phone,
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
  {
    name: "Contact",
    href: "/contact",
    Icon: Phone,
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
  { title: "VS Code", logo: "vscode.webp" },
  { title: "Figma", logo: "figma.webp" },
  { title: "Vite JS", logo: "vite.svg" },
  { title: "Git", logo: "git.webp" },
  { title: "GitHub", logo: "github.webp" },
  { title: "Netlify", logo: "netlify-icon.svg" },
  { title: "NPM", logo: "npm.webp" },
];

export const skillsLanguage: SkillType = [
  { title: "HTML 5", logo: "html.webp" },
  { title: "CSS 3", logo: "css-3.webp" },
  { title: "SASS", logo: "sass.webp" },
  { title: "JavaScript", logo: "js.webp" },
  { title: "TypeScript", logo: "typescript.webp" },
];

export const skillsLibrary: SkillType = [
  { title: "Tailwind CSS", logo: "tailwindcss.webp" },
  { title: "FlowBite", logo: "flowbite.svg" },
  { title: "Framer Motion", logo: "framermotion.svg" },
  { title: "React JS", logo: "react.svg" },
  { title: "Redux Toolkit", logo: "redux.svg" },
  { title: "Next JS", logo: "next.svg" },
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
    image: "portfolio.png",
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
    image: "old-portfolio.png",
    tags: ["React JS", "Tailwind CSS", "Framer Motion", "Vite"],
    gitHub: "https://github.com/Lviathannn/my-portfolio",
    demo: "https://muhammadasrul-v1.vercel.app",
  },
  {
    title: "My Qur'an",
    image: "my-quran.png",
    tags: ["React JS", "Tailwind CSS", "Flowbite", "Vite"],
    gitHub: "https://github.com/Lviathannn/my-quran",
    demo: "https://my-alquran-id.vercel.app/",
  },
  {
    title: "PMII Website",
    image: "pmii.png",
    tags: ["React JS", "Tailwind CSS", "Flowbite", "Vite"],
    gitHub: "https://github.com/Lviathannn/pmii-website",
    demo: "https://www.mediapergerakandarussalamciamis.or.id/",
  },
  {
    title: "Azizah Mukarromah Website",
    image: "web-caleg.png",
    tags: ["Next JS", "Tailwind CSS", "Next UI", "Framer Motion"],
    gitHub: "https://github.com/Lviathannn/pmii-website",
    demo: "https://www.mediapergerakandarussalamciamis.or.id/",
  },
  {
    title: "Sabreena Contruction",
    image: "sabreena-construction.png",
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
    title: "Pokedex",
    image: "pokedex.png",
    tags: ["HTML", "Tailwind CSS", "Javascript", "Pokemon API"],
    gitHub: "https://github.com/Lviathannn/pokedex",
    demo: "https://lviathannn.github.io/pokedex/",
  },
];
