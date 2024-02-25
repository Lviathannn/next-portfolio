import React from "react";

type Props = {};

export default function TerminalSkills({}: Props) {
  return (
    <div>
      <div className="mb-4">
        <h6 className="text-accent_primary mb-2">Language :</h6>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>TypeScript</li>
        </ul>
      </div>
      <div className="">
        <h6 className="text-accent_primary mb-2">Library :</h6>
        <ul>
          <li>Tailwind CSS</li>
          <li>Shadcn UI</li>
          <li>Framer Motion</li>
          <li>React JS</li>
          <li>Next JS</li>
        </ul>
      </div>
    </div>
  );
}
