import { ProjectType } from "@/types/type";

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

export async function GET() {
  return Response.json({ message: "success", data: projects, status: 200 });
}
