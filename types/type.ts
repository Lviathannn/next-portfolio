import { LucideIcon } from "lucide-react";

export type LinksType = {
  name: string;
  href: string;
  Icon: LucideIcon;
}[];

export type ProjectType = {
  title: string;
  image: string;
  tags: string[];
  gitHub: string;
  demo: string;
}[];

export type SkillType = {
  title: string;
  logo: string;
}[];
