export interface WakaWeek {
  totalSecond: number;
  dailyAverage: number;
}

export interface WakaLeaderBoard {
  globalLeaderBoard: number | null;
  localLeaderBoard: number | null;
}
