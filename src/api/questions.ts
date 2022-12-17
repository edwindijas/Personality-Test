import { Question, QuestionWithoutId } from "models/types"
const QUESTION_URL = '/api/questions.json'

export const get = async (): Promise<QuestionWithoutId[]> => {
    return fetch(QUESTION_URL).then(response => (
        response.json() as unknown
    )).then(response => {
        return response as QuestionWithoutId[]
    })
}

export const Questions = {
    get
}