import { MeteorCard } from "./MeteorCard";

type Props = {};

export default function WakatimeStat({}: Props) {
  return (
    <MeteorCard
      className="relative sm:col-start-4 sm:col-end-6 sm:row-start-2 sm:row-end-3"
      meteorNumber={20}
    >
      <div className="flex h-full w-full flex-col justify-between gap-5 text-white">
        <div className="text-teal-400">
          <h3 className="text-3xl font-semibold">Wakatime</h3>
          <p className="text-lg text-slate-300">Last week Activity</p>
        </div>
        <div className="grid w-full grid-cols-2 gap-x-5 gap-y-3">
          <div className="flex flex-col">
            <strong className="flex gap-1 text-2xl">
              7085<span className="inline-block text-base">th</span>
            </strong>
            <p className="truncate text-sm text-slate-300">World Rank</p>
          </div>
          <div className="flex flex-col">
            <strong className="flex gap-1 text-2xl">
              337<span className="inline-block text-base">th</span>
            </strong>
            <p className="truncate text-sm text-slate-300">Indonesia Rank</p>
          </div>
          <div className="flex flex-col">
            <strong className="flex items-end gap-1 text-2xl">
              12<span className="inline-block text-base">H</span>39
              <span className="inline-block text-base">M</span>
            </strong>
            <p className="truncate text-sm text-slate-300">Coding Time</p>
          </div>
          <div className="flex flex-col">
            <strong className="flex items-end gap-1 text-2xl">
              12<span className="inline-block text-base">H</span>39
              <span className="inline-block text-base">M</span>
            </strong>
            <p className="truncate text-sm text-slate-300">Daily</p>
          </div>
        </div>
      </div>
    </MeteorCard>
  );
}
