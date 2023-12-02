"use client";

import TerminalAbout from "./TerminalAbout";
import TerminalHelp from "./TerminalHelp";
import TerminalSkills from "./TerminalSkills";
import TerminalHeader from "./TerminalHeader";
import { useState } from "react";

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
    const [command, ...args] = input.split(" ");

    let newOutput: OutputItem[] = [...output];

    switch (command.toLowerCase()) {
      case "help":
        newOutput.push({
          content: <TerminalHelp />,
          id: Date.now(),
        });
        break;
      case "about":
        newOutput.push({
          content: <TerminalAbout />,
          id: Date.now(),
        });
        break;
      case "skills":
        newOutput.push({
          content: <TerminalSkills />,
          id: Date.now(),
        });
        break;
      case "clear":
        newOutput = [];
        break;
      default:
        newOutput.push({
          content: `Command not found: ${command}`,
          id: Date.now(),
        });
        newOutput.push({
          content: 'Type "help" for a list of available commands',
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
            onKeyPress={handleEnter}
            className="w-full border-none bg-transparent text-white outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
