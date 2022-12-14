import produce from "immer";
import { v4 as uuid } from "uuid";

import { AnswerWithoudId, QuestionWithoutId, Question, Answer} from "./types"

const addId = (questions: QuestionWithoutId[]): Question[] => {
    return produce(questions as Question[], (draft) => {
        draft.map((question) => {
            question.id = uuid();
            question.answers.map(
                answer => addIdToAnswer(answer)
            )
            return question;
        })

        return draft
    })
}

const addIdToAnswer = (answer: AnswerWithoudId): Answer => {
    return produce(answer as Answer, (draft) => {
        draft.id = uuid();
        return draft;
    })
}

export const get = () => {
    return fetch('/api/questions.json').then(
        response => response.json()
    ).then(response => addId(response))
}

export const Questions = {
    get,
    addId,
    addIdToAnswer
}