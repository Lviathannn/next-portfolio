import { LinksType } from "@/types/type";
import {
  Code2,
  Coffee,
  Github,
  Home,
  Instagram,
  Linkedin,
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

export const skillsData = [
  { title: "HTML 5", logo: "html.webp" },
  { title: "CSS 3", logo: "css-3.webp" },
  { title: "SASS", logo: "sass.webp" },
  { title: "JavaScript", logo: "js.webp" },
  { title: "TypeScript", logo: "typescript.webp" },
  { title: "Tailwind CSS", logo: "tailwindcss.webp" },
  { title: "FlowBite", logo: "flowbite.svg" },
  { title: "Framer Motion", logo: "framermotion.svg" },
  { title: "React JS", logo: "react.svg" },
  { title: "Redux Toolkit", logo: "redux.svg" },
  { title: "Next JS", logo: "next.svg" },
  { title: "VS Code", logo: "vscode.webp" },
  { title: "Figma", logo: "figma.webp" },
  { title: "Vite JS", logo: "vite.svg" },
  { title: "Git", logo: "git.webp" },
  { title: "GitHub", logo: "github.webp" },
  { title: "Netlify", logo: "netlify-icon.svg" },
  { title: "NPM", logo: "npm.webp" },
];
