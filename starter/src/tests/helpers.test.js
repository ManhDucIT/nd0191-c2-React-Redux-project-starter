import { getUnansweredQuestions, getAnsweredQuestions, isQuestionAnswered } from "../utils/helpers";
import { _getQuestions } from "../utils/_DATA";

describe("getUnansweredQuestions", () => {
    it("Should return count of unanswered questions", async () => {
        const questionItems = await _getQuestions();
        const questions = questionItems && Object.values(questionItems).sort((a, b) => b.timestamp - a.timestamp);

        const result = getUnansweredQuestions(questions, "zoshikanlu");

        expect(result.length).toEqual(5);
    });
});

describe("getAnsweredQuestions", () => {
    it("Should return count of answered questions", async () => {
        const questionItems = await _getQuestions();
        const questions = questionItems && Object.values(questionItems).sort((a, b) => b.timestamp - a.timestamp);

        const result = getAnsweredQuestions(questions, "zoshikanlu");

        expect(result.length).toEqual(1);
    });
});

describe("isQuestionAnswered", () => {
    it("Should return true if user has already answered the question", async () => {
        const result = await isQuestionAnswered({
            id: '8xf0y6ziyjabvozdd253nd',
            author: 'sarahedo',
            timestamp: 1467166872634,
            optionOne: {
              votes: ['sarahedo'],
              text: 'Build our new application with Javascript',
            },
            optionTwo: {
              votes: [],
              text: 'Build our new application with Typescript'
            }
          }, "sarahedo");

        expect(result).toEqual(true);
    });
});