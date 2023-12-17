import Image from "next/image";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";
type Props = {
  src: string;
  alt: string;
};

export default async function ServeImage({ src, alt }: Props) {
  const buffer = await fs.readFile(`./public/${src}`);
  const { base64 } = await getPlaiceholder(buffer);
  return (
    <Image
      src={`/${src}`}
      fill
      alt={alt}
      placeholder="blur"
      blurDataURL={base64}
    />
  );
}
