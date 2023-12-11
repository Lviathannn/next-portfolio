import { LucideIcon } from "lucide-react";

export type LinksType = {
  name: string;
  href: string;
  Icon: LucideIcon;
}[];

export type ProjectType = {
  title: string;
  image: string;
  gitHub: string;
  demo: string;
  tags: string[];
}[];

export type SkillType = {
  title: string;
  logo: string;
}[];
export type projectCardProps = {
  title: string;
  image: string;
  github: string;
  visit: string;
  tags?: string[];
  children?: React.ReactNode;
};
