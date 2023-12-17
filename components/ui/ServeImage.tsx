import { getBase64 } from "@/lib/getBase64";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default async function ServeImage({ src, alt }: Props) {
  const blurData = await getBase64(`http://localhost:3000/${src}`);
  return (
    <Image
      src={`/${src}`}
      fill
      alt={alt}
      placeholder="blur"
      blurDataURL={blurData}
    />
  );
}
