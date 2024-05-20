import Image from "next/image";
import Nextjs from "/public/nextjs.svg";
import TailwindCSS from "/public/tailwindcss.svg";
import Hygraph from "/public/hygraph.svg";
import Apollo from "/public/apollo.svg";
type Props = {};

export default function Brand({}: Props) {
  return (
    <div className="my-20 flex w-full flex-wrap justify-evenly gap-10 opacity-30 grayscale dark:opacity-40 dark:invert xl:justify-evenly">
      <Image alt="Next js" src={Nextjs} />
      <Image alt="Tailwind CSS" src={TailwindCSS} />
      <Image alt="Apollo Client" src={Apollo} className="scale-95" />
      <Image alt="Hygraph CMS" src={Hygraph} />
    </div>
  );
}
