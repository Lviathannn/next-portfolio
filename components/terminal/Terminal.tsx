"use client";

import TerminalAbout from "./TerminalAbout";
import TerminalHelp from "./TerminalHelp";
import TerminalSkills from "./TerminalSkills";
import TerminalHeader from "./TerminalHeader";
import { useState } from "react";
import TerminalProjects from "./TerminalProjects";
import TerminalContact from "./TerminalContact";

interface OutputItem {
  content: string | React.ReactNode;
  id: number;
}

const defaultValue = { content: <TerminalHelp />, id: Date.now() };

const Terminal: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<OutputItem[]>([defaultValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      processCommand();
    }
  };

  const processCommand = () => {
    let newOutput: OutputItem[] = [...output];

    switch (input.toLowerCase()) {
      case "help":
        newOutput.push({
          content: <TerminalHelp />,
          id: Date.now(),
        });
        break;
      case "next about":
        newOutput.push({
          content: <TerminalAbout />,
          id: Date.now(),
        });
        break;
      case "next skills":
        newOutput.push({
          content: <TerminalSkills />,
          id: Date.now(),
        });
        break;
      case "next projects":
        newOutput.push({
          content: <TerminalProjects />,
          id: Date.now(),
        });
        break;
      case "next contact":
        newOutput.push({
          content: <TerminalContact />,
          id: Date.now(),
        });
        break;
      case "clear":
        newOutput = [];
        break;
      default:
        newOutput.push({
          content: (
            <div className="">
              <p>Command not found: {input}</p>
              <p>Type {`"next help"`} for a list of available commands</p>
            </div>
          ),
          id: Date.now(),
        });
    }

    setOutput(newOutput);
    setInput("");
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl border-2 bg-primary/50 font-firacode backdrop-blur-lg">
      <div className="flex w-full gap-1 px-3 py-2">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
      <div
        className="h-96 w-full overflow-x-hidden overflow-y-scroll rounded-xl pb-10  "
        id="terminal"
      >
        <div className="">
          <TerminalHeader />
          {output.map((item) => (
            <div
              className="flex flex-col gap-1 text-sm text-white"
              key={item.id}
            >
              <div className="px-8">{item.content}</div>
              <TerminalHeader customStyles="my-2" />
            </div>
          ))}
        </div>
        <div className="input flex gap-2 px-4 text-sm text-white">
          <span className="text-accent_3">$</span>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleEnter}
            className="w-full border-none bg-transparent text-white outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
