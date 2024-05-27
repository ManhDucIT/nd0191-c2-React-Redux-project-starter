import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

describe("_saveQuestion", () => {
    it("Should return the saved question with correct fields if valid data is passed", async () => {
        const result = await _saveQuestion({
            optionOneText: "Option 1",
            optionTwoText: "Option 2",
            author: "test"
        });

        expect(result).not.toEqual(null);
        expect(result.optionOne.text).toEqual("Option 1");
        expect(result.optionTwo.text).toEqual("Option 2");
        expect(result.author).toEqual("test");
    });

    it("Should return error message if optionTwoText is not defined", async () => {
        const question = {
            optionOneText: "Option 1",
            author: "test"
        };

        await expect(_saveQuestion(question)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    });
});

describe("_saveQuestionAnswer", () => {
    it("Should return true if successfully saving question answer", async () => {
        const result = await _saveQuestionAnswer({
            authedUser: "sarahedo",
            qid: "vthrdm985a262al8qx3do",
            answer: "optionOne"
        });

        expect(result).toEqual(true);
    });

    it("Should return error message if authedUser is not defined", async () => {
        const questionAnswer = {
            qid: "vthrdm985a262al8qx3do",
            answer: "optionOne"
        };

        await expect(_saveQuestionAnswer(questionAnswer)).rejects.toEqual("Please provide authedUser, qid, and answer");
    });
});