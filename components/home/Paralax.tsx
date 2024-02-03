"use client";
import { projects } from "@/data/dummy";
import { HeroParallax } from "../ui/HeroParallax";

export function Paralax() {
  return <HeroParallax products={projects} />;
}
