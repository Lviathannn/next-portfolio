import {
  CircleDot,
  FolderGit2,
  GitCommit,
  GitMerge,
  GitPullRequest,
  Star,
} from "lucide-react";
import { GridCard } from "./GridCard";

type Props = {};
export default async function GithubStat({}: Props) {
  return (
    <GridCard
      className="relative sm:col-start-4 sm:col-end-6 sm:row-start-1 sm:row-end-2"
      meteorNumber={20}
    >
      <article className="z-10 flex w-full flex-col gap-5 px-5 py-8 text-white">
        <div className="text-teal-400">
          <h3 className="text-3xl font-semibold">Github</h3>
          <p className="text-lg text-slate-300">My repository stats</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="flex gap-2">
            <span>
              <FolderGit2 size={20} />
            </span>
            31 Public Repositories
          </p>
          <p className="flex gap-2">
            <span>
              <Star size={20} />
            </span>
            25 Stars Earned
          </p>
          <p className="flex gap-2">
            <span>
              <GitCommit size={20} />
            </span>
            516 Commits (2024)
          </p>
          <p className="flex gap-2">
            <span>
              <GitPullRequest size={20} />
            </span>
            63 Pull Requests
          </p>
          <p className="flex gap-2">
            <span>
              <CircleDot size={20} />
            </span>
            3 Issues
          </p>
          <p className="flex gap-2">
            <span>
              <GitMerge size={20} />
            </span>
            6 Contributed to
          </p>
        </div>
      </article>
    </GridCard>
  );
}
