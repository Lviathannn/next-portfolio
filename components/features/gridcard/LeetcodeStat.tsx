import { Progress } from "@/components/ui/progress";
import { GridCard } from "./GridCard";
import { getClient } from "@/services/graphql/ApolloClient";
import { GET_LEETCODE_STAT } from "@/services/graphql/leetcode-gql";
import LeetCodeProgress from "../LeetcodeProgress/LeetCodeProgress";

type Props = {};

export default async function LeetcodeStat({}: Props) {
  const { data } = await getClient().query<LeetCodeStat>({
    query: GET_LEETCODE_STAT,
    variables: {
      username: process.env.LEETCODE_USERNAME,
      year: new Date().getFullYear(),
    },
  });

  const totalSubmissions =
    data?.matchedUser.submitStatsGlobal.acSubmissionNum.reduce((acc, curr) => {
      return acc + curr.submissions;
    }, 0);
  const totalSolved =
    data?.matchedUser.submitStatsGlobal.acSubmissionNum.reduce((acc, curr) => {
      return acc + curr.count;
    }, 0);

  return (
    <GridCard className="relative w-full xl:w-[80%] ">
      <article className="z-10 w-full px-5 py-8">
        <h1 className="text-2xl font-semibold text-teal-400">Leetcode</h1>
        <p className="flex items-center gap-2 text-slate-300">
          Rank
          <strong className="flex gap-1 text-lg text-white">
            {data?.matchedUser.profile.ranking}{" "}
            <span className="text-sm text-white">th</span>
          </strong>
        </p>
        <div className="mt-2 flex w-full justify-between text-slate-300">
          <p>
            <span className="font-semibold text-white">{totalSubmissions}</span>{" "}
            Submission ({new Date().getFullYear()})
          </p>
          <p>
            <span className="font-semibold text-white">{totalSolved}</span>{" "}
            Solved
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {data?.allQuestionsCount.map((question) => {
            if (question.difficulty !== "All") {
              return (
                <LeetCodeProgress
                  key={question.difficulty}
                  difficulty={question.difficulty}
                  solved={
                    data.matchedUser.submitStatsGlobal.acSubmissionNum.find(
                      (submission) =>
                        submission.difficulty === question.difficulty,
                    )?.count || 0
                  }
                  total={question.count}
                />
              );
            }
          })}
        </div>
      </article>
    </GridCard>
  );
}
