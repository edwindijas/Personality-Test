import produce from "immer";
import { v4 as uuid } from "uuid";

import { AnswerWithoudId, QuestionWithoutId, Question, Answer} from "./types"

const QUESTION_URL = '/api/questions.json'

export const get = async (): Promise<QuestionWithoutId[]> => {
    return fetch(QUESTION_URL).then(response => (
        response.json() as unknown
    )).then(response => {
        return response as { data: QuestionWithoutId[] }
    }).then(data => {
        return data.data
    })
}


const addId = (questions: QuestionWithoutId[]): Question[] => {
    return produce(questions as Question[], (draft) => {
        draft.map((question) => {
            question.id = uuid();
            question.answers = question.answers.map(
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

export const Questions = {
    get,
    addId,
    addIdToAnswer
}