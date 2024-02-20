import {
  getWakaTimeLeaderBoard,
  getWakaTimeWeekStat,
} from "@/services/api/wakatime";
import { GridCard } from "./GridCard";

type Props = {};

export default async function WakatimeStat({}: Props) {
  const { dailyAverage, totalSecond } = await getWakaTimeWeekStat();
  const { globalLeaderBoard, localLeaderBoard } =
    await getWakaTimeLeaderBoard();

  const totalHour = Math.floor(totalSecond / 3600) || 0;
  const totalMinute = Math.floor((totalSecond % 3600) / 60) || 0;
  const dailyAverageHour = Math.floor(dailyAverage / 3600) || 0;
  const dailyAverageMinute = Math.floor((dailyAverage % 3600) / 60) || 0;

  return (
    <GridCard
      className="relative sm:col-start-4 sm:col-end-6 sm:row-start-2 sm:row-end-3"
      meteorNumber={20}
    >
      <article className="z-10 flex h-full w-full flex-col justify-between gap-5 px-5 py-8 text-white">
        <div className="text-teal-400">
          <h3 className="text-3xl font-semibold">Wakatime</h3>
          <p className="text-lg text-slate-300">Last week Activity</p>
        </div>
        <div className="grid w-full grid-cols-2 gap-x-5 gap-y-3">
          <div className="flex flex-col">
            {globalLeaderBoard ? (
              <strong className="flex gap-1 text-2xl">
                {globalLeaderBoard}
                <span className="inline-block text-base">th</span>
              </strong>
            ) : (
              <strong className="text-2xl">Unranked</strong>
            )}
            <p className="truncate text-sm text-slate-300">World Rank</p>
          </div>
          <div className="flex flex-col">
            {localLeaderBoard ? (
              <strong className="flex gap-1 text-2xl">
                {localLeaderBoard}
                <span className="inline-block text-base">th</span>
              </strong>
            ) : (
              <strong className="text-2xl">Unranked</strong>
            )}
            <p className="truncate text-sm text-slate-300">Indonesia Rank</p>
          </div>
          <div className="flex flex-col">
            <strong className="flex items-end gap-1 text-2xl">
              {totalHour}
              <span className="inline-block text-lg">H</span>
              {totalMinute}
              <span className="inline-block text-lg">M</span>
            </strong>
            <p className="truncate text-sm text-slate-300">Coding Time</p>
          </div>
          <div className="flex flex-col">
            <strong className="flex items-end gap-1 text-2xl">
              {dailyAverageHour}
              <span className="inline-block text-lg">H</span>
              {dailyAverageMinute}
              <span className="inline-block text-lg">M</span>
            </strong>
            <p className="truncate text-sm text-slate-300">Daily Average</p>
          </div>
        </div>
      </article>
    </GridCard>
  );
}
