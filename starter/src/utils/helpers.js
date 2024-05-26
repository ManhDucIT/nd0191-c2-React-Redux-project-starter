export function getUnansweredQuestions(questions, userId){
    if (!questions)
        return [];

    return questions.filter(question => 
        !question.optionOne.votes.includes(userId)
        &&
        !question.optionTwo.votes.includes(userId)
    );
};

export function getAnsweredQuestions(questions, userId){
    if (!questions)
        return [];

    return questions.filter(question => 
        question.optionOne.votes.includes(userId)
        ||
        question.optionTwo.votes.includes(userId)
    );
};

export function isQuestionAnswered(question, userId){
    return question.optionOne.votes.includes(userId)
        ||
        question.optionTwo.votes.includes(userId);
}

export function getQuestionsCountByUsers(users, questions){
    if (!users || !questions)
        return [];

    const questionsArray = Object.values(questions);

    return Object.keys(users).map(userId => {
        let askedQuestionsCount = 0;
        let answeredQuestionsCount = 0;

        questionsArray.forEach(question => {
            if (question.author === userId) {
                askedQuestionsCount++;
            }

            if (question.optionOne.votes.includes(userId) || question.optionTwo.votes.includes(userId)) {
                answeredQuestionsCount++;
            }
        });

        return {
            user: users[userId],
            askedQuestionsCount,
            answeredQuestionsCount
        };
    }).sort((a, b) => (b.askedQuestionsCount + b.answeredQuestionsCount) - (a.askedQuestionsCount + a.answeredQuestionsCount));
}

export async function delay (ms) {
    return new Promise((resolve) => 
        setTimeout(resolve, ms));
};