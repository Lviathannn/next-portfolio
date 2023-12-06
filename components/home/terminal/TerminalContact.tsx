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
      <h6 className="mb-2 text-secondary">Contact :</h6>
      <ul>
        <li>
          <Link
            href="https://wa.me/6281952801343"
            target="_blank"
            className="flex items-center gap-2 hover:text-secondary"
          >
            <PhoneIcon size={15} />
            <p>Whatsapp</p>
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/lviathann/"
            target="_blank"
            className="flex items-center gap-2 hover:text-secondary"
          >
            <InstagramIcon size={15} />
            <p>Instagram</p>
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/muhammadasrulrifaanwar/"
            target="_blank"
            className="flex items-center gap-2 hover:text-secondary"
          >
            <LinkedinIcon size={15} />
            <p>LinkedIn</p>
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/Lviathannn"
            target="_blank"
            className="flex items-center gap-2 hover:text-secondary"
          >
            <GithubIcon size={15} />
            <p>Github</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
