type Props = {};

export default function TerminalHelp({}: Props) {
  return (
    <div className="flex flex-col">
      <span className="text-secondary">asrul.tech</span>
      <span>- - - - - - - -</span>
      <span className="text-secondary">version : 1.0.0</span>
      <span className="">
        Usage :<span className="text-secondary"> next </span>
        [command]
      </span>
      <div className="">
        <span className="text-secondary">all Comands:</span>
        <ul className="pl-4">
          <li>about</li>
          <li>skills</li>
          <li>projects</li>
          <li>contact</li>
        </ul>
      </div>
      <div className="mt-2">
        <span className="text-secondary">other commands:</span>
        <ul className="pl-4">
          <li>clear</li>
          <li>help</li>
        </ul>
      </div>
    </div>
  );
}
