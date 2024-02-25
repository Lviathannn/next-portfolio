import Link from "next/link";

type Props = {};

export default function TerminalProjects({}: Props) {
  return (
    <div className="mb-4">
      <h6 className="text-accent_primary mb-2">Projects :</h6>
      <ul>
        <li>
          <Link
            href="https://muhammadasrul-v1.vercel.app/"
            target="_blank"
            className="hover:text-accent_primary"
          >
            Old Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="https://my-alquran-id.vercel.app/"
            target="_blank"
            className="hover:text-accent_primary"
          >
            My Qur{"'"}an
          </Link>
        </li>
        <li>
          <Link
            href="https://lviathannn.github.io/pokedex/"
            target="_blank"
            className="hover:text-accent_primary"
          >
            Pokedex
          </Link>
        </li>
        <li>
          <Link
            href="https://sabreena-landingpages.vercel.app/"
            target="_blank"
            className="hover:text-accent_primary"
          >
            Sabreena Landing Pages
          </Link>
        </li>
        <li>
          <Link
            href="https://www.mediapergerakandarussalamciamis.or.id/"
            target="_blank"
            className="hover:text-accent_primary"
          >
            PMII Website
          </Link>
        </li>
        <li>
          <Link
            href="https://www.azizahmukarromah.online/"
            target="_blank"
            className="hover:text-accent_primary"
          >
            Legislative Candidate Website
          </Link>
        </li>
      </ul>
    </div>
  );
}
