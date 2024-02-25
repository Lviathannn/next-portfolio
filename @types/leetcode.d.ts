interface LeetCodeStat {
  allQuestionsCount: {
    difficulty: string;
    count: number;
  }[];
  matchedUser: {
    username: string;
    profile: {
      ranking: number;
    };
    submitStatsGlobal: {
      acSubmissionNum: Array<{
        difficulty: string;
        count: number;
        submissions: number;
      }>;
    };
    userCalendar: {
      submissionCalendar: string;
    };
  };
}
