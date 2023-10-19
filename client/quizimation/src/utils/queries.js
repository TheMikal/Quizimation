import { gql } from "@apollo/client";

export const QUERY_QUIZ = gql`
    query Quiz {
    getQuiz {
        _id
        title
        mainText
        options {
        text
        }
        answer
        creator
    }
    }
`;