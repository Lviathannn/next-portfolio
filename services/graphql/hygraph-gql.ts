import { gql } from "@apollo/client";

export const GET_LANGUAGE_SKILL = gql`
  query LanguageSkills @api(name: hygraph) {
    skills(where: { category: Language }) {
      id
      title
      category
      image {
        url
      }
    }
  }
`;

export const GET_LIBRARY_SKILL = gql`
  query LanguageSkills @api(name: hygraph) {
    skills(where: { category: Library }) {
      id
      title
      category
      image {
        url
      }
    }
  }
`;

export const GET_TOOLS_SKILL = gql`
  query LanguageSkills @api(name: hygraph) {
    skills(where: { category: Tools }) {
      id
      title
      category
      image {
        url
      }
    }
  }
`;
