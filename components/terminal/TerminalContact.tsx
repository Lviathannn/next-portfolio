import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  PhoneIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

export default function TerminalContact({}: Props) {
  return (
    <div className="mb-4">
      <h6 className="mb-2 text-secondary">Projects :</h6>
      <ul>
        <li>
          <Link
            href="https://wa.me/6281952801343"
            target="_blank"
            className="flex items-center gap-2 hover:text-secondary"
          >
            <p>Whatsapp</p>
            <PhoneIcon size={15} />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/lviathann/"
            target="_blank"
            className="flex items-center gap-2 hover:text-secondary"
          >
            <p>Instagram</p>
            <InstagramIcon size={15} />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/muhammadasrulrifaanwar/"
            target="_blank"
            className="flex items-center gap-2 hover:text-secondary"
          >
            <p>LinkedIn</p>
            <LinkedinIcon size={15} />
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/Lviathannn"
            target="_blank"
            className="flex items-center gap-2 hover:text-secondary"
          >
            <p>Github</p>
            <GithubIcon size={15} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
