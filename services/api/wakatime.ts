import { WakaLeaderBoard, WakaWeek } from "@/@types/wakatime";
import { wakaTimeUrl } from "@/constants/baseURL";
import axios from "axios";

export const getWakaTimeWeekStat = async (): Promise<WakaWeek> => {
  const res = (
    await axios.get(
      `${wakaTimeUrl}/api/v1/users/current/stats/last_7_days?including_today=true&api_key=${process.env.WAKATIME_API_KEY}`,
    )
  ).data;

  const stat = {
    totalSecond: res?.data.total_seconds_including_other_language,
    dailyAverage: res?.data.daily_average_including_other_language,
  };

  return stat;
};

const getWakaTimeGlobalLeaderBoard = async (): Promise<number | null> => {
  const res = (
    await axios.get(
      `${wakaTimeUrl}/api/v1/leaders?api_key=${process.env.WAKATIME_API_KEY}`,
    )
  ).data;

  return res.current_user.rank;
};

const getWakaTimeLocalLeaderBoard = async (): Promise<number | null> => {
  const res = (
    await axios.get(
      `${wakaTimeUrl}/api/v1/leaders?country_code=${process.env.WAKATIME_COUNTRY_CODE}&api_key=${process.env.WAKATIME_API_KEY}`,
    )
  ).data;

  return res.current_user.rank;
};

export const getWakaTimeLeaderBoard = async (): Promise<WakaLeaderBoard> => {
  const globalLeaderBoard = await getWakaTimeGlobalLeaderBoard();
  const localLeaderBoard = await getWakaTimeLocalLeaderBoard();

  const lead = { globalLeaderBoard, localLeaderBoard };

  return lead;
};
