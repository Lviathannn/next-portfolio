import { gql } from "@apollo/client";

export const GET_LEETCODE_STAT = gql`
  query SolvedProblems($username: String!, $year: Int!) @api(name: leetCode) {
    allQuestionsCount {
      difficulty
      count
    }
    matchedUser(username: $username) {
      username
      profile {
        ranking
      }
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
      userCalendar(year: $year) {
        submissionCalendar
      }
    }
  }
`;
