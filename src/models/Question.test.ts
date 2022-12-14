import { MockQuestions } from "mock/Questions.mock";
import { Questions } from "./Question";

it ('Question addIdToAnswer to returns answer with valid id', () => {
    const answer = Questions.addIdToAnswer(MockQuestions[0].answers[0]);
    expect(answer.id).not.toBeNull()
})

it ('Question addId to returns question with id and answers with id', () => {
    const question = Questions.addId(MockQuestions);
    expect(question[0].id).not.toBeNull()
    expect(question[0].answers[0].id).not.toBeNull()
})