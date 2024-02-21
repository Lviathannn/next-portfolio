import {
  CircleDot,
  FolderGit2,
  GitCommit,
  GitMerge,
  GitPullRequest,
  Star,
} from "lucide-react";
import { GridCard } from "./GridCard";
import { getClient } from "@/services/graphql/ApolloClient";
import { GET_GH_STATS } from "@/services/graphql/github-gql";

type Props = {};
export default async function GithubStat({}: Props) {
  const { data } = await getClient().query<GitHubStats>({
    query: GET_GH_STATS,
    variables: { login: process.env.GITHUB_USERNAME },
  });

  const stargazers = data?.user?.repositories?.nodes
    .filter((repo) => repo.stargazers.totalCount !== 0)
    .reduce((prev, curr) => prev + curr.stargazers.totalCount, 0);

  const currentYear = new Date().getFullYear();

  return (
    <GridCard className="relative sm:col-start-4 sm:col-end-6 sm:row-start-1 sm:row-end-2">
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
            {data?.user?.repositories?.totalCount} Public Repositories
          </p>
          <p className="flex gap-2">
            <span>
              <Star size={20} />
            </span>
            {stargazers} Stars Earned
          </p>
          <p className="flex gap-2">
            <span>
              <GitCommit size={20} />
            </span>
            {data?.user?.contributionsCollection?.totalCommitContributions}{" "}
            Commits ({currentYear})
          </p>
          <p className="flex gap-2">
            <span>
              <GitPullRequest size={20} />
            </span>
            {data?.user?.pullRequests?.totalCount} Pull Requests
          </p>
          <p className="flex gap-2">
            <span>
              <CircleDot size={20} />
            </span>
            {data?.user?.openIssues?.totalCount} Issues
          </p>
          <p className="flex gap-2">
            <span>
              <GitMerge size={20} />
            </span>
            {data?.user?.repositoriesContributedTo?.totalCount} Contributed to
          </p>
        </div>
      </article>
    </GridCard>
  );
}
