type Props = {};

export default function TerminalHelp({}: Props) {
  return (
    <div className="flex flex-col">
      <span className="text-teal-400">asrul.tech</span>
      <span>- - - - - - - -</span>
      <span className="text-teal-400">version : 1.0.0</span>
      <span className="">
        Usage :<span className="text-teal-400"> next </span>
        [command]
      </span>
      <div className="">
        <span className="text-teal-400">all Comands:</span>
        <ul className="pl-4">
          <li>about</li>
          <li>skills</li>
          <li>projects</li>
          <li>contact</li>
        </ul>
      </div>
      <div className="mt-2">
        <span className="text-teal-400">other commands:</span>
        <ul className="pl-4">
          <li>clear</li>
          <li>help</li>
        </ul>
      </div>
    </div>
  );
}
