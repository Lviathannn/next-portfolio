import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  PhoneIcon,
} from "lucide-react";
import React from "react";

type Props = {};

export default function TerminalContact({}: Props) {
  return (
    <div className="mb-4">
      <h6 className="mb-2 text-teal-400">Contact :</h6>
      <ul>
        <li>
          <a
            href="https://wa.me/6281952801343"
            target="_blank"
            className="flex items-center gap-2 hover:text-teal-400"
          >
            <PhoneIcon size={15} />
            <p>Whatsapp</p>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/lviathann/"
            target="_blank"
            className="flex items-center gap-2 hover:text-teal-400"
          >
            <InstagramIcon size={15} />
            <p>Instagram</p>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/muhammadasrulrifaanwar/"
            target="_blank"
            className="flex items-center gap-2 hover:text-teal-400"
          >
            <LinkedinIcon size={15} />
            <p>LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Lviathannn"
            target="_blank"
            className="flex items-center gap-2 hover:text-teal-400"
          >
            <GithubIcon size={15} />
            <p>Github</p>
          </a>
        </li>
      </ul>
    </div>
  );
}
